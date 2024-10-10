// App.js (updated with error boundary)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import ProductListingScreen from './screens/ProductListingScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ErrorBoundary from './components/ErrorBoundary';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ProductProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Landing" component={LandingScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="ProductListing" component={ProductListingScreen} />
              <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </ProductProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}