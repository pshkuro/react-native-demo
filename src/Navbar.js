import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Navbar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        paddingTop: 30,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 15,
    },
  });