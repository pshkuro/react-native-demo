import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import {TypographyBold} from '../ui/TypographyBold';
import {THEME} from '../theme';

export const Navbar = () => {
    return (
        <View style={{...styles.navbar, ...Platform.select({
            ios: styles.navBarIos,
            android: styles.navBarAndroind,
        })}}>
            <TypographyBold style={styles.text}>Navbar</TypographyBold>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navBarAndroind: {
        backgroundColor: THEME.pallete.main,
    },
    navBarIos: {
        borderBottomColor: THEME.pallete.main,
        borderBottomWidth: 1,

    },
    text: {
        color: Platform.OS === 'ios' ? THEME.pallete.main : '#fff',
        fontSize: 20,
    },
  });