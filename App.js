import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';
import { Provider } from 'react-redux'
import { store } from './store';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resturant" component={ResturantScreen} />
        <Stack.Screen name="Basket" component={BasketScreen} 
          options={{ presentation: 'modal', headerShown: false }}
        />
        <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} 
        options={{ presentation: 'modal', headerShown: false }}
        />
        <Stack.Screen name="Delivery" component={DeliveryScreen} 
        options={{ presentation: 'modal', headerShown: false }}
        />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
