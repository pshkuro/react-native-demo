import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {THEME} from '../theme';

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
        backgroundColor: THEME.pallete.main,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 15,
    },
  });