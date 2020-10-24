import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Keyboard, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import {THEME} from '../theme';

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handlButtonPress = (text) => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
            Keyboard.dismiss();
        } else {
            Alert.alert('Введите название!')
        }
    }
    return (
        <View style={styles.block}>
            <TextInput 
            style={styles.inpit}
            onChangeText={setValue}
            value={value}
            autoCorrect={false}
            placeholder="Введите название дела"/>
            <AntDesign.Button name="plus" size={24} color="black" onPress={handlButtonPress} style={styles.button}>Добавить</AntDesign.Button>
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
        width: '60%',
        borderBottomColor: THEME.pallete.main,
        borderBottomWidth: 2,
        borderStyle: 'solid',
        padding: 10,
    },
    button: {
        padding: 10,
        backgroundColor: '#fff',
        borderColor: THEME.pallete.main,
        borderStyle: "solid",
        borderWidth: 1,
    },
  });