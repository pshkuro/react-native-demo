import React, {useState} from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import {FontAwesome, AntDesign} from '@expo/vector-icons';

import {THEME} from '../theme';
import {Card} from '../ui/Card';
import {TypographyBold} from '../ui/TypographyBold';
import {EditModal} from '../components/EditModal';
import {DefaultButton} from '../ui/Button';

export const TodoScreen = ({goBack, todo, removeTodo, onSave}) => {
    const [modal, setModal] = useState(false);

    const saveHandler = (title) => {
        onSave(todo.id, title);
        setModal(false);
    }

    return (
        <View>
           <EditModal value={todo.title} visible={modal} onClose={() => setModal(false)} onSave={saveHandler}/>
           <Card style={styles.card}>
                <TypographyBold style={styles.title}>
                    {todo.title}
                </TypographyBold>
                <DefaultButton onPress={() => setModal(true)}>
                    <FontAwesome name="edit" size={20}/>
                </DefaultButton>
            </Card>
           <View style={styles.btn_group}>
            <View style={styles.btn}>
                <DefaultButton 
                title="Назад" 
                onPress={goBack}
                color={THEME.pallete.grey}>
                    <AntDesign name="back" size={20}/>
                </DefaultButton>
           </View>
           <View style={styles.btn}>
                <DefaultButton 
                    onPress={removeTodo.bind(null, todo.id)}
                    color={THEME.pallete.danger}>
                    <FontAwesome name="remove" size={20} />
                </DefaultButton>
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
        width: Dimensions.get('window').width / 2.5,
        // Можно так проверять
        // width: Dimensions.get('window').width > 400 ? 150 : 100,
    },
    title: {
        fontSize: 20,
    },
    card: {
        marginBottom: 20,
        height: 100,
    },
  });