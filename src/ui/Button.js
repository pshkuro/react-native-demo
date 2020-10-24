import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import {TypographyBold} from '../ui/TypographyBold';
import {THEME} from '../theme';

export const DefaultButton = ({children, onPress, bgColor = '#fff', color = THEME.pallete.main}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{...styles.button, backgroundColor: bgColor, borderColor: color}}>
                <TypographyBold style={{color: color}}>{children}</TypographyBold>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
    }
  });