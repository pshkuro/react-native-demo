import React from 'react';
import { View, StyleSheet } from 'react-native';
import {THEME} from '../theme';

export const Card = ({children, style}) => {
    return (
        <View style={ {...styles.container, ...style} }>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,  
        shadowColor: THEME.pallete.main,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowRadius: 2, // for ios
        elevation: 8, // for android
        backgroundColor: "#fff",
        borderRadius: 10,
    },
  });