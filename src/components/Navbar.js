import React from 'react';
import { View, StyleSheet } from 'react-native';

import {TypographyBold} from '../ui/TypographyBold';
import {THEME} from '../theme';

export const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <TypographyBold style={styles.text}>Navbar</TypographyBold>
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