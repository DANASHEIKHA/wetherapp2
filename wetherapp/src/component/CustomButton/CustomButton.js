import { Text, StyleSheet , Pressable } from 'react-native';

const CustomButton = ({onPress , text}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container ]}>
            <Text style={[styles.text ]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '50%',
        paddingHorizontal: 30,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'rgb(0,128,128)',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default CustomButton;
