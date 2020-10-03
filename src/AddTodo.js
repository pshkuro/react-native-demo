import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export const AddTodo = () => {
    return (
        <View style={styles.block}>
            <TextInput style={styles.inpit}/>
            <Button title="Добавить"></Button>
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