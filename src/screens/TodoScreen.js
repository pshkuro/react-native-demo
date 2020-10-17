import React, {useState} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import {THEME} from '../theme';
import {Card} from '../ui/Card';
import {TypographyBold} from '../ui/TypographyBold';
import {EditModal} from '../components/EditModal';

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
                <Button title="Редактировать" onPress={() => setModal(true)}/>
            </Card>
           <View style={styles.btn_group}>
            <View style={styles.btn}>
                <Button 
                title="Назад" 
                onPress={goBack} color={THEME.pallete.grey}/>
           </View>
           <View style={styles.btn}>
                <Button 
                title="Удалить" 
                onPress={() => {}} 
                color={THEME.pallete.danger} 
                onPress={removeTodo.bind(null, todo.id)}/>
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
    },
    title: {
        fontSize: 20,
    },
    card: {
        marginBottom: 20,
        height: 100,
    }
  });