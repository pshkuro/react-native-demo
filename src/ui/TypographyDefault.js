import React from 'react';
import { Text, StyleSheet} from 'react-native';

export const TypographyDefault = props =>
    <Text 
    // Передаем стили через пропсы сверху
        style={{...styles.default, ...props.style}}>
        {props.children}
    </Text>;

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-regular',
    }
  });