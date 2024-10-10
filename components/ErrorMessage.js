import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ErrorMessage({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffcccc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
    color: '#cc0000',
    fontSize: 16,
  },
});