/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WithoutState from './src/WithoutState';
import WithStateFunctional from './src/WithStateFunctional';
import PropsExampleCustomComponent from './src/PropsExampleCustomComponent';
import PropsExampleExistingComponent from './src/PropsExampleExistingComponent';
import SimpleComponent from './src/simpleComponent';
import PureComponentExample from './src/pureComponent';
import PureComponentWithObject from './src/pureComponentWithObject';
import AsynchronousState from './src/asynchronousState';
import WithUseEffectCleanup from './src/WithUseEffectCleanup';
import WithoutUseMemo from './src/WithoutUseMemo';
import VariableWithState from './src/variableWithState';
import WithUseMemo from './src/WithUseMemo';
import WithoutUseRef from './src/WithoutUseRef';
import DOMUseRef from './src/DOMUseRef';
import PersistValueUseRef from './src/PersistValueUseRef';
import WithComponentDidMount from './src/WithComponentDidMount';
import WithUseCallback from './src/WithUseCallback';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AsynchronousState"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SimpleComponent" component={SimpleComponent} />
        <Stack.Screen
          name="PureComponentExample"
          component={PureComponentExample}
        />
        <Stack.Screen
          name="PureComponentWithObject"
          component={PureComponentWithObject}
        />
        <Stack.Screen name="AsynchronousState" component={AsynchronousState} />
        <Stack.Screen
          name="WithComponentDidMount"
          component={WithComponentDidMount}
        />
        <Stack.Screen name="WithoutState" component={WithoutState} />
        <Stack.Screen
          name="WithStateFunctional"
          component={WithStateFunctional}
        />
        <Stack.Screen name="VariableWithState" component={VariableWithState} />
        <Stack.Screen name="DOMUseRef" component={DOMUseRef} />
        <Stack.Screen
          name="PersistValueUseRef"
          component={PersistValueUseRef}
        />
        <Stack.Screen name="WithoutUseMemo" component={WithoutUseMemo} />
        <Stack.Screen name="WithUseMemo" component={WithUseMemo} />
        <Stack.Screen name="WithUseCallback" component={WithUseCallback} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   {/* <SimpleComponent /> */}
    //   {/* <PureComponentExample /> */}
    //   {/* <PureComponentWithObject /> */}
    //   {/* <AsynchronousState /> */}

    //   {/* <WithComponentDidMount /> */}
    //   {/* <WithoutState /> */}
    //   {/* <WithStateFunctional /> */}
    //   {/* <VariableWithState /> */}
    //   {/* <DOMUseRef /> */}

    //   {/* <PersistValueUseRef /> */}
    //   {/* <WithoutUseMemo /> */}
    //   {/* <WithUseMemo /> */}
    //   <WithUseCallback />
    //   {/* <UseMemovsUseEffect /> */}

    //   {/* <PropsExampleCustomComponent message="message" status="success" /> */}
    //   {/* <PropsExampleExistingComponent /> */}
    //   {/* <WithUseEffectCleanup /> */}
    //   {/* <WithoutUseRef /> */}
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
