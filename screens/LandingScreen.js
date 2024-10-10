import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

export default function LandingScreen() {
  const navigation = useNavigation();
  const { isLoggedIn } = useContext(AuthContext);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace(isLoggedIn ? 'ProductListing' : 'Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.content, opacity: fadeAnim }}>
        <Text style={styles.title}>Zyra</Text>
        <Image
          source={require('../assets/fashan.webp')}
          style={styles.backgroundImage}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backgroundImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
