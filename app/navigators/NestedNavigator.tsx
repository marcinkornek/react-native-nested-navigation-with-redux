import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is the nested home screen!</Text>
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Open Nested Modal"
      />
      <Button
        onPress={() => navigation.navigate('Details')}
        title="Open Nested Details"
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Text>Nested Details</Text>
    </View>
  );
}

function ModalScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a nested modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const RootStack = createNativeStackNavigator();

export function NestedNavigator() {
  return (
    <NavigationContainer independent>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Group>
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Details" component={DetailsScreen} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{presentation: 'modal', headerShown: true}}>
          <RootStack.Screen name="MyModal" component={ModalScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
