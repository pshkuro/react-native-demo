import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handlButtonPress = (text) => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Введите название!')
        }
    }
    return (
        <View style={styles.block}>
            <TextInput style={styles.inpit} onChangeText={setValue} value={value} autoCorrect={false}/>
            <Button title="Добавить" onPress={handlButtonPress}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inpit: {
        width: '70%',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        padding: 10,
    },
    button: {

    },
  });