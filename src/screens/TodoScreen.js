import React, {useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {THEME} from '../theme';
import {Card} from '../ui/Card';
import {EditModal} from '../components/EditModal';

export const TodoScreen = ({goBack, todo, removeTodo}) => {
    const [modal, setModal] = useState(false);

    const changeModalVisible = () => {
        setModal(prevState => [...prevState, {modal: !prevState}]);
    }

    return (
        <View>
           <EditModal visible={modal} onClose={changeModalVisible}/>
           <Card style={styles.card}>
                <Text style={styles.title}>
                    {todo.title}
                </Text>
                <Button title="Редактировать" onPress={changeModalVisible}/>
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