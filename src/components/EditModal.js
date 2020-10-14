import React from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';
import {THEME} from '../theme';

export const EditModal = ({visible, onClose}) => {
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.modal}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Введите новое название" 
                    autoCapitalize="none" 
                    autoCorrect={false}
                    maxLength={40}/>
                <View style={styles.btn_group}>
                    <Button title="Отменить" onPress={onClose} color={THEME.pallete.danger}/>
                    <Button title="Сохранить"/>
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