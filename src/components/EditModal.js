import React from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';
import {THEME} from '../theme';

export const EditModal = ({visible, onClose}) => {
    return (
        <Modal visible={visible}>
            <View style={styles.modal}>
                <TextInput />
                <Button title="Отменить" onPress={onClose}/>
                <Button title="Сохранить"/>
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
  });