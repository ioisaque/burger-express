import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Perfil from '~/screens/Perfil/';
import DadosPessoais from '~/screens/Perfil/DadosPessoais';
import EditarEndereco from '~/screens/Perfil/EditarEndereco';

import Fila from '~/screens/Home/Fila';
import DetalhesPedido from '~/screens/Home/Fila/DetalhesPedido';

import Carrinho from '~/screens/Home/Carrinho';
import EditarItem from '~/screens/Home/Carrinho/EditarItem';
import SelecionarEndereco from '~/screens/Home/Carrinho/SelecionarEndereco';
import SelecionarPagamento from '~/screens/Home/Carrinho/SelecionarPagamento';

import Cardapio from '~/screens/Cardapio/';
import Produtos from '~/screens/Cardapio/Produtos';

import AppHeader from '~/components/AppHeader';
import TabBarIcon from '~/components/TabBarIcon';
import layoutStyles from '~/assets/styles/layoutStyles';
import commonStyles from '~/assets/styles/commonStyles';

const PerfilStack = createStackNavigator();

const PerfilStackSC = () => {
  return (
    <PerfilStack.Navigator
      initial="Perfil"
      screenOptions={({route, navigation}) => ({
        header: () => (
          <AppHeader
            route={route}
            initialRoute="Perfil"
            navigation={navigation}
          />
        ),
      })}>
      <PerfilStack.Screen name="Perfil" component={Perfil} />
      <PerfilStack.Screen name="DadosPessoais" component={DadosPessoais} />
      <PerfilStack.Screen name="EditarEndereco" component={EditarEndereco} />
    </PerfilStack.Navigator>
  );
};

const FilaStack = createStackNavigator();

const FilaStackSC = () => {
  return (
    <FilaStack.Navigator
      initial="Pedido na Fila"
      screenOptions={({route, navigation}) => ({
        header: () => (
          <AppHeader
            route={route}
            initialRoute="Pedido na Fila"
            navigation={navigation}
          />
        ),
      })}>
      <FilaStack.Screen name="Pedido na Fila" component={Fila} />
      <FilaStack.Screen name="Detalhes do Pedido" component={DetalhesPedido} />
    </FilaStack.Navigator>
  );
};

const CartStack = createStackNavigator();

const CartStackSC = () => {
  return (
    <CartStack.Navigator
      initial="Carrinho"
      screenOptions={({route, navigation}) => ({
        header: () => (
          <AppHeader
            route={route}
            initialRoute="Carrinho"
            navigation={navigation}
          />
        ),
      })}>
      <CartStack.Screen name="Carrinho" component={Carrinho} />
      <CartStack.Screen name="Editar Item" component={EditarItem} />
      <CartStack.Screen
        name="SelecionarEndereco"
        component={SelecionarEndereco}
      />
      <CartStack.Screen
        name="SelecionarPagamento"
        component={SelecionarPagamento}
      />
    </CartStack.Navigator>
  );
};

const MenuStack = createStackNavigator();

const MenuStackSC = () => {
  return (
    <MenuStack.Navigator
      initial="Cardápio"
      screenOptions={({route, navigation}) => ({
        header: () => (
          <AppHeader
            route={route}
            initialRoute="Cardápio"
            navigation={navigation}
          />
        ),
        ...TransitionPresets.DefaultTransition,
      })}>
      <MenuStack.Screen name="Cardápio" component={Cardapio} />
      <MenuStack.Screen name="Produtos" component={Produtos} />
    </MenuStack.Navigator>
  );
};

import {useAuth} from '~/contexts/auth';

const AppTab = createBottomTabNavigator();

const AppRoutes = () => {
  const {signed} = useAuth();
  return (
    <AppTab.Navigator
      resetOnBlur={true}
      swipeEnabled={true}
      animationEnabled={true}
      initialRouteName="Categorias"
      tabBarOptions={{
        style: layoutStyles.tabBarContainer,
        showIcon: true,
        showLabel: false,
        tabStyle: {padding: 5},
        // Fix for bottom white space on iPhone X or superior
        safeAreaInset: {bottom: 'never', top: 'never'},
        // activeTintColor: commonStyles.colors.white,
        // inactiveTintColor: commonStyles.colors.black,
        // activeBackgroundColor: commonStyles.colors.white,
        // inactiveBackgroundColor: commonStyles.colors.white,
      }}>
      <AppTab.Screen
        name="Cardápio"
        component={MenuStackSC}
        options={{
          tabBarLabel: 'Cardápio',
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              iconOn={'home'}
              iconOff={'home-outline'}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Fila"
        component={FilaStackSC}
        options={{
          tabBarLabel: 'Pedidos na Fila',
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              iconOn={'timeline-clock'}
              iconOff={'timeline-clock-outline'}
            />
            //timeline-clock
          ),
        }}
      />
      {signed && (
        <AppTab.Screen
          name="Carrinho"
          component={CartStackSC}
          options={{
            tabBarLabel: 'Carrinho',
            tabBarIcon: ({focused}) => (
              <TabBarIcon
                focused={focused}
                iconOn={'cart'}
                iconOff={'cart-outline'}
                colorOff={commonStyles.colors.red}
              />
              //timeline-clock
            ),
          }}
        />
      )}
      <AppTab.Screen
        name="Perfil"
        component={PerfilStackSC}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              iconOn={'account-box'}
              iconOff={'account-box-outline'}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default AppRoutes;
