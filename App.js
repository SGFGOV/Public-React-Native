import AsyncStorage from "@react-native-async-storage/async-storage";
import { StripeProvider } from "@stripe/stripe-react-native";
import axios from "axios";
import { useEffect } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Router, Scene, Stack } from "react-native-router-flux";

import { publishable_key } from "./constants/stripe";
import baseURL from "./constants/url";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import ProductInfo from "./screens/ProductInfo";
import Products from "./screens/Products";

export default function App() {
    const getCartId = () => {
        axios.post(`${baseURL}/store/carts`).then((res) => {
            AsyncStorage.setItem("cart_id", res.data.cart.id);
        });
    };
    // Check cart_id
    const checkCartId = async () => {
        const cartId = await AsyncStorage.getItem("cart_id");
        if (!cartId) {
            getCartId();
        }
    };

    useEffect(() => {
        checkCartId();
    }, []);

    return (
        <StripeProvider publishableKey={publishable_key}>
            <PaperProvider>
                <Router>
                    <Stack key="root">
                        <Scene key="products" component={Products} hideNavBar />
                        <Scene
                            key="ProductInfo"
                            component={ProductInfo}
                            hideNavBar
                        />
                        <Scene key="cart" component={Cart} hideNavBar />
                        <Scene key="checkout" component={Checkout} hideNavBar />
                    </Stack>
                </Router>
            </PaperProvider>
        </StripeProvider>
    );
}
