import React, {useState} from 'react';
import { StyleSheet, View, Button} from 'react-native';
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
                    Редактировать
                </DefaultButton>
            </Card>
           <View style={styles.btn_group}>
            <View style={styles.btn}>
                <DefaultButton 
                title="Назад" 
                onPress={goBack}
                color={THEME.pallete.grey}>
                    Назад
                </DefaultButton>
           </View>
           <View style={styles.btn}>
                <DefaultButton 
                    onPress={removeTodo.bind(null, todo.id)}
                    color={THEME.pallete.danger}>
                    Удалить
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
        width: "45%",
    },
    title: {
        fontSize: 20,
    },
    card: {
        marginBottom: 20,
        height: 100,
    },
  });