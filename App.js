import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './pages/SignIn/Index';
import CreateAccount from './pages/CreateAccount';
import Home from "./pages/Home/index";
import Book from './pages/Book/index';
import { Text } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import BookSubjects from './pages/BookSubjects';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Book" component={Book} options={{ headerShown: false }} />
          <Stack.Screen name="BookSubjects" component={BookSubjects} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

