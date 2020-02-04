import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SingIn from '~/screens/SingIn/SingIn';

import Perfil from '~/screens/Perfil/Perfil';
import EditarEndereco from '~/screens/Perfil/EditarEndereco';

import Queue from '~/screens/Queue/Queue';
import DetalhesPedido from '~/screens/Queue/DetalhesPedido';

import Categorias from '~/screens/Cardapio/Categorias';
import Items from '~/screens/Cardapio/Items';
import Adicionais from '~/screens/Carrinho/EditarItem';


import TabBarIcon from '~/components/TabBarIcon';
import commonStyles from './assets/styles/commonStyles';

const PerfilStack = createStackNavigator({
    Perfil: Perfil,
    EditarEndereco: EditarEndereco,
});

PerfilStack.navigationOptions = {
    // tabBarLabel: 'Meu Perfil',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            icon={'account'}
            focused={focused}
        />
    ),
};

const QueueStack = createStackNavigator({
    Queue: Queue,
    DetalhesPedido: DetalhesPedido,
});

QueueStack.navigationOptions = {
    // tabBarLabel: 'Pedidos na Fila',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            icon={'food'}
            focused={focused}
        />
    ),
};

const CardapioStack = createStackNavigator({
    Categorias: Categorias,
    Items: Items,
    Adicionais: Adicionais,
});

CardapioStack.navigationOptions = {
    // tabBarLabel: 'Cardápio',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            icon={'book-open-page-variant'}
            focused={focused}
        />
    ),
};

export default createAppContainer(
    createSwitchNavigator({
        Sign: createSwitchNavigator({
            SingIn: SingIn,
        }),
        App: createBottomTabNavigator({
            Perfil: PerfilStack,
            Queue: QueueStack,
            Cardapio: CardapioStack,
        }, {
            tabBarOptions: {
                showIcon: true,
                showLabel: false,
                activeTintColor: commonStyles.colors.black,
                inactiveTintColor: commonStyles.colors.black,
                activeBackgroundColor: commonStyles.colors.red,
                inactiveBackgroundColor: commonStyles.colors.gold
            },
            resetOnBlur: true,
            swipeEnabled: true,
            animationEnabled: true,
            initialRouteName: 'Queue',
        })
    },{
        initialRouteName: 'App',
    })
);