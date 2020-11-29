import React, {useContext} from 'react';
import { StyleSheet, View } from 'react-native';

import { THEME } from './theme';
import {Navbar} from './components/Navbar';
import {MainScreen} from './screens/MainScreen';
import {TodoScreen} from './screens/TodoScreen';
import { ScreenContext } from './context/screen/screenContext';


export const MainLayout = () => {
    // Получили контекст который ранее создали
    const {todoId} = useContext(ScreenContext);
         
    return (
    <View>
        <Navbar/>
        <View style={styles.container}>
            {todoId ? <TodoScreen /> : <MainScreen />}
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingVertical: THEME.padding.default,
      paddingHorizontal: THEME.padding.horizontal,
    },
 });