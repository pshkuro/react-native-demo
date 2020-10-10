import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {THEME} from '../theme';

export const TodoScreen = ({goBack, todo}) => {
    return (
       <View>
           <Text>
               {todo.title}
           </Text>
           <View style={styles.btn_group}>
            <View style={styles.btn}>
                <Button title="Назад" onPress={goBack} color={THEME.pallete.grey}/>
           </View>
           <View style={styles.btn}>
                <Button title="Удалить" onPress={() => {}} color={THEME.pallete.danger}/>
           </View>
           </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    btn_group: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    btn: {
        width: "45%",
        borderColor: THEME.pallete.main,
        borderWidth: 1,
        borderStyle: 'solid',
    }
  });