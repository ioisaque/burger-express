import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Perfil from '~/screens/Perfil/';
import EditarEndereco from '~/screens/Perfil/EditarEndereco';

import Fila from '~/screens/Home/Fila';
import DetalhesPedido from '~/screens/Home/Fila/DetalhesPedido';

import Carrinho from '~/screens/Home/Carrinho';
import SelecionarEndereco from '~/screens/Home/Carrinho/SelecionarEndereco';
import SelecionarPagamento from '~/screens/Home/Carrinho/SelecionarPagamento';

import Categorias from '~/screens/Cardapio/Categorias';
import Produtos from '~/screens/Cardapio/Produtos';
import Adicionais from '~/screens/Home/Carrinho/EditarItem';

import TabBarIcon from '~/components/TabBarIcon';
import commonStyles from '~/assets/styles/commonStyles';

const PerfilStack = createStackNavigator();

const PerfilStackSC = () => {
  return (
    <PerfilStack.Navigator headerMode="none">
      <PerfilStack.Screen name="Perfil" component={Perfil} />
      <PerfilStack.Screen name="EditarEndereco" component={EditarEndereco} />
    </PerfilStack.Navigator>
  );
};

const HomeStack = createStackNavigator();

const HomeStackSC = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Fila" component={Fila} />
      <HomeStack.Screen name="DetalhesPedido" component={DetalhesPedido} />
      <HomeStack.Screen name="Carrinho" component={Carrinho} />
      <HomeStack.Screen
        name="SelecionarEndereco"
        component={SelecionarEndereco}
      />
      <HomeStack.Screen
        name="SelecionarPagamento"
        component={SelecionarPagamento}
      />
    </HomeStack.Navigator>
  );
};

const MenuStack = createStackNavigator();

const MenuStackSC = () => {
  return (
    <MenuStack.Navigator headerMode="none">
      <MenuStack.Screen name="Categorias" component={Categorias} />
      <MenuStack.Screen name="Produtos" component={Produtos} />
      <MenuStack.Screen name="Adicionais" component={Adicionais} />
    </MenuStack.Navigator>
  );
};

const AppTab = createBottomTabNavigator();

const AppRoutes = () => (
  <AppTab.Navigator
    resetOnBlur={true}
    swipeEnabled={true}
    animationEnabled={true}
    initialRouteName="Fila"
    tabBarOptions={{
      showIcon: true,
      showLabel: false,
      labelStyle: {
        fontWeight: 'bold',
      },
      tabStyle: {
        padding: 5,
      },
      // Fix for bottom white space on iPhone X or superior
      safeAreaInset: {bottom: 'never', top: 'never'},
      activeTintColor: commonStyles.colors.white,
      inactiveTintColor: commonStyles.colors.black,
      activeBackgroundColor: commonStyles.colors.red,
      inactiveBackgroundColor: commonStyles.colors.gold,
    }}>
    <AppTab.Screen
      name="Perfil"
      component={PerfilStackSC}
      options={{
        tabBarLabel: 'Meu Perfil',
        tabBarIcon: ({focused}) => (
          <TabBarIcon icon={'account'} focused={focused} />
        ),
      }}
    />
    <AppTab.Screen
      name="Fila"
      component={HomeStackSC}
      options={{
        tabBarLabel: 'Pedidos',
        tabBarIcon: ({focused}) => (
          <TabBarIcon icon={'food'} focused={focused} />
        ),
      }}
    />
    <AppTab.Screen
      name="Categorias"
      component={MenuStackSC}
      options={{
        tabBarLabel: 'Cardápio',
        tabBarIcon: ({focused}) => (
          <TabBarIcon icon={'book-open-page-variant'} focused={focused} />
        ),
      }}
    />
  </AppTab.Navigator>
);

export default AppRoutes;
