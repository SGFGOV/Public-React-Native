import React from "react";
import {
    View,
    Text,
    StyleSheet,
    GestureResponderEvent,
    TextStyle,
    StyleProp
} from "react-native";

import { widthToDp } from "../lib/rn-responsive-screen";

export default function Button({
    title,
    onPress,
    style,
    textSize,
    large
}: {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    style: StyleProp<TextStyle>;
    textSize: number;
    large: boolean;
}) {
    return (
        <View style={[styles.container, style, large && styles.large]}>
            <Text
                style={[
                    styles.text,
                    { fontSize: textSize ? textSize : widthToDp(3.5) },
                    ,
                ]}
                onPress={onPress}
            >
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#C37AFF",
        padding: 5,
        width: widthToDp(20),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 59
    },
    large: {
        width: "100%",
        marginTop: 10,
        height: widthToDp(12)
    },
    text: {
        color: "#fff",
        fontWeight: "bold"
    }
});
