import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native';

import {DefaultButton} from '../ui/Button';
import {THEME} from '../theme';

export const EditModal = ({visible, onClose, value, onSave}) => {
    const [inputValue, setValue] = useState(value);

    const saveHandler = () => {
        if (inputValue.trim().length < 3) {
            Alert.alert('Ошибка', `Минимальная длина 3 символа. Сейчас ${inputValue.trim().length}`);
        } else {
            onSave(inputValue);
        }
    }

    const handleCloseBtn = () => {
        setValue(value);
        onClose();
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.modal}>
                <TextInput 
                    value={inputValue}
                    onChangeText={setValue}
                    style={styles.input} 
                    placeholder="Введите новое название" 
                    autoCapitalize="none" 
                    autoCorrect={false}
                    maxLength={40}
                    />
                <View style={styles.btn_group}>
                    <DefaultButton onPress={handleCloseBtn} color={THEME.pallete.danger}>Отменить</DefaultButton>
                    <DefaultButton onPress={saveHandler}>Сохранить</DefaultButton>
               </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        borderBottomColor: THEME.pallete.main,
        borderBottomWidth: 1,
        width: '80%',
        padding: 10,
    },
    btn_group: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
  });