import { StyleSheet, Image } from "react-native";

export default function ImageViewer ({placeholderImageSource}) {
    return (
        <Image source = {placeholderImageSource} style = {style.image}/>
    );   
}

const styles = StyleSheet.create ({
    Image: {
        width: 328,
        height: 440,
        borderRadius: 18,
    },
});