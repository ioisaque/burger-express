import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SingIn from '~/screens/Login/SingIn';

import Perfil from '~/screens/Perfil/';
import EditarEndereco from '~/screens/Perfil/EditarEndereco';

import Fila from '~/screens/Home/Fila';
import DetalhesPedido from '~/screens/Home/Fila/DetalhesPedido';

import Carrinho from '~/screens/Home/Carrinho';
import SelecionarEndereco from '~/screens/Home/Carrinho/SelecionarEndereco';
import SelecionarPagamento from '~/screens/Home/Carrinho/SelecionarPagamento';


import Categorias from '~/screens/Cardapio/Categorias';
import Items from '~/screens/Cardapio/Items';
import Adicionais from '~/screens/Home/Carrinho/EditarItem';


import TabBarIcon from '~/components/TabBarIcon';
import commonStyles from './assets/styles/commonStyles';

const PerfilStack = createStackNavigator({
    Perfil: Perfil,
    EditarEndereco: EditarEndereco,
});

PerfilStack.navigationOptions = {
    tabBarLabel: 'Meu Perfil',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            icon={'account'}
            focused={focused}
        />
    ),
};

const HomeStack = createStackNavigator({
    Fila: Fila,
    DetalhesPedido: DetalhesPedido,
    Carrinho: Carrinho,
    SelecionarEndereco: SelecionarEndereco,
    SelecionarPagamento: SelecionarPagamento,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Pedidos',
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
    tabBarLabel: 'Cardápio',
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
            Home: HomeStack,
            Cardapio: CardapioStack,
        }, {
            tabBarOptions: {
                showIcon: true,
                showLabel: true,
                labelStyle: {
                    fontWeight: 'bold',
                },
                activeTintColor: commonStyles.colors.white,
                inactiveTintColor: commonStyles.colors.black,
                activeBackgroundColor: commonStyles.colors.red,
                inactiveBackgroundColor: commonStyles.colors.gold
            },
            resetOnBlur: true,
            swipeEnabled: true,
            animationEnabled: true,
            initialRouteName: 'Home',
        })
    },{
        initialRouteName: 'App',
    })
);