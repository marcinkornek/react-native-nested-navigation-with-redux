import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NestedNavigator} from './NestedNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {incrementParent, setSharedData} from '../reducers/parentSlice';
import {ParentRootState} from '../store/parentStore';

function HomeScreen({navigation}) {
  const parentCount = useSelector(
    (state: ParentRootState) => state.parent.value,
  );
  const shared = useSelector(
    (state: ParentRootState) => state.parent.sharedData,
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    setInterval(() => {
      console.log('increment');
      dispatch(incrementParent());
    }, 3000);
    setInterval(() => {
      console.log('shared');
      dispatch(setSharedData(Math.random()));
    }, 10000);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>parentCount: {parentCount}</Text>
      <Text>shared: {shared}</Text>
      <Button title="increment" onPress={() => dispatch(incrementParent())} />
      <Button
        title="navigate to nested"
        onPress={() => navigation.navigate('Nested')}
      />
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Open Modal"
      />
      <Button
        onPress={() => navigation.navigate('Details')}
        title="Open Details"
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

function ModalScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const RootStack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Details" component={DetailsScreen} />
          <RootStack.Screen name="Nested" component={NestedNavigator} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{presentation: 'modal'}}>
          <RootStack.Screen name="MyModal" component={ModalScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
