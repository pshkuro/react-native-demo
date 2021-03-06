import React, {useState, useContext, useEffect, useCallback} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';

import {AddTodo} from '../components/AddTodo';
import {Todo} from '../components/Todo';
import { THEME } from '../theme';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';
import { DefaultLoader } from '../ui/Loader';
import { TypographyDefault } from '../ui/TypographyDefault';

export const MainScreen = () => {
    const {todos, addTodo, removeTodo, fetchTodos, loading, error} = useContext(TodoContext);
    const {changeScreen} = useContext(ScreenContext);
 
    const defaultWidth = Dimensions.get('window').width - THEME.padding.horizontal * 2;
    const [deviceWidth, setDeviceWidth] = useState(defaultWidth);

    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

    useEffect(() => {
        loadTodos();
    }, [])

    // Без второго параметра запустится только один раз === ComponentDidMount
    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - THEME.padding.horizontal * 2;
            setDeviceWidth(width)
        }
        Dimensions.addEventListener('change', update);

        return () => {
            Dimensions.removeEventListener('change', update);
        }
    })

    if (loading) {
        return <DefaultLoader />
    }

    if (error) {
        return <View style={styles.center}><TypographyDefault style={styles.error}></TypographyDefault></View>
    }

    let content = (
        <Todo todos={todos} onRemove={removeTodo} onOpen={changeScreen}/>
    );

    if (todos.length === 0) {
        content = <View style={styles.image_wrap}>
            <Image 
                style={styles.image} 
                source={require('../../assets/no-items.png')}
            />
        </View>
    }


    return (
       <View style={{ width: deviceWidth}}>
        <AddTodo onSubmit={addTodo}/>
        {content}
       </View>
    );
}

const styles = StyleSheet.create({
    image_wrap: {
        alignItems: 'center',
        padding: 10,
        justifyContent:"center",
        height: 600,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    error: {
        fontSize: 20,
        color: THEME.pallete.danger,
    }
  });