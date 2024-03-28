import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function IconButton({ icon, label, onPress}) {
    return (
     <Pressable style={Styles.IconButton} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color='fff' />
        <Text style={Styles.iconButtonLabel}>{label}</Text>
    </Pressable>
);

}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    iconButtonLabel: {
        color: 'fff',
        margintop: 12,
    }
});
