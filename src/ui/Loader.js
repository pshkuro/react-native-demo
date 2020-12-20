import React from 'react';
import { View, StyleSheet, ActivityIndicator} from 'react-native';

import { THEME } from '../theme';

export const DefaultLoader = () => (
    <View style={styles.loader}>
        <ActivityIndicator size="large" color={THEME.pallete.main}/>
    </View>
);

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
  });