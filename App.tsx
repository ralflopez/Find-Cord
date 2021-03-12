import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Platform, Text } from 'react-native';
import * as colors from './styles/colors';
import Home from './components/Home';
import Constants from 'expo-constants';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Header from './components/Header';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <StatusBar style="light"/>
          <SafeAreaView style={styles.container}>
            <Header />
              <Tab.Navigator
                initialRouteName="Home"
                barStyle={[styles.bottombar]}
              >
                <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                  tabBarIcon: () => (
                    <View>
                      <Ionicons name="ios-home-outline" size={24} color="white" />
                    </View>
                  ),
                  tabBarColor: colors.PRIMARY,
                }}
                />
              </Tab.Navigator>
          </SafeAreaView>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    backgroundColor: colors.BG
  },
  bottombar: {
    backgroundColor: colors.PRIMARY
  }
});
