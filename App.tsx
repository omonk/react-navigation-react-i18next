/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {StrictMode, Suspense, useEffect} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {enableScreens} from 'react-native-screens';
import './i18n';

enableScreens();

const MainNavigator = createStackNavigator();

const Fallback = () => {
  console.log('------------------------');
  console.log('------------------------');
  console.log('------------------------');
  console.log('fallback');
  return (
    <View>
      <Text>FALLBACK</Text>
    </View>
  );
};

const I18n = () => {
  const {t, i18n} = useTranslation();

  return (
    <View key={key}>
      <Text>{'About'}</Text>
      <Text>{t('app.company.name')}</Text>
    </View>
  );
};

const Main = () => {
  return (
    <MainNavigator.Navigator>
      <MainNavigator.Screen name="I18n" component={I18n} />
    </MainNavigator.Navigator>
  );
};

function App(): JSX.Element {
  return (
    <StrictMode>
      <Suspense fallback={<Fallback />}>
        <View style={{flex: 1}}>
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </View>
      </Suspense>
    </StrictMode>
  );
}
export default App;
