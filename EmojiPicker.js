import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function EmojiPicker([isVisible, children, onClose]) {
    return (
        <Modal animationType='slide' transparent={true} visible={isVisible}>
            <View>
                <View>
                    <Text>Escolha um emoji</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcon name="close" color='#fff' size={22} />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        height: '25%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
    }, 
    title: {}
})