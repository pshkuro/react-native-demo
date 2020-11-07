import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import { MainLayout } from './src/MainLayout';
import { TodoState } from './src/context/todo/TodoState';


async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
};

export default function App() {
  const [isReady, setIsReady] = useState(false); 

  // Пока все асинхронные вещи не загрузятся дальше приложение не отрисуется
  if (!isReady) {
    return <AppLoading
      // Функция, которая выполняет в фоне различную загрузку
      startAsync={loadApplication}
      onFinish={() => setIsReady(true)}
      onError={err => console.log(err)}
    />
  }


  return (
    <TodoState>
      <MainLayout />
    </TodoState>
  );
}


