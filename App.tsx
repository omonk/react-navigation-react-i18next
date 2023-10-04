/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {i18nextState} from './i18n';
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
  const {t, i18n} = useTranslation('special');
  console.log({i18n});

  const a = i18n.getDataByLanguage('en');
  console.log(JSON.stringify({a}, null, 2));

  return (
    <View>
      <Text>{'About'}</Text>
      <Text>{t('common:app.company.name')}</Text>
      <Text>{t('special:nav.home')}</Text>
    </View>
  );
};

const Main = () => {
  return (
    <Suspense>
      <MainNavigator.Navigator>
        <MainNavigator.Screen name="I18n" component={I18n} i18nIsDynamicList />
      </MainNavigator.Navigator>
    </Suspense>
  );
};

function App(): JSX.Element {
  const i18nextHasLoaded = i18nextState(state => state.hasLoaded);

  if (i18nextHasLoaded) {
    return (
      <StrictMode>
        <View style={{flex: 1}}>
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </View>
      </StrictMode>
    );
  }

  return <Fallback />;
}
export default App;
