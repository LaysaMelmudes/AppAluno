import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Modal, Text, TextInput, View, FlatList, ScrollView } from "react-native";

import Formulario from "./src/pages/Formulario/Formulario";
import Info from "./src/pages/Info/Info";
import Inicial from './src/pages/inicial/index';

const Stack = createNativeStackNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Info"
          component={Info}
          options={{
            title: "Informações",
            headerShown: false,
          }}
        />
      <Stack.Screen
          name="Formulario"
          component={Formulario}
          options={{
            title: "Formulario",
            headerShown: false,
          }}
        />
      
      
      <Stack.Screen  name="Inicial" component={Inicial}
          options={{
            headerShown: false,
          }}
        />
       
        
        
        </Stack.Navigator>

        
    </NavigationContainer>
  );
}

