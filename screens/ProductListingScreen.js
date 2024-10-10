import React, { useContext, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProductContext } from '../context/ProductContext';
import { AuthContext } from '../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';

export default function ProductListingScreen() {
  const navigation = useNavigation();
  const { products } = useContext(ProductContext);
  const { logout } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [isGridView, setIsGridView] = useState(true);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={isGridView ? styles.gridItem : styles.listItem}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image source={{ uri: item.image }} style={isGridView ? styles.gridImage : styles.listImage} />
      <View style={isGridView ? styles.gridInfo : styles.listInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productBrand}>{item.brand}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity onPress={() => setIsGridView(!isGridView)} style={styles.viewToggle}>
          <Ionicons name={isGridView ? 'list' : 'grid'} size={24} color="#8B5B29" />
        </TouchableOpacity>
        <TouchableOpacity onPress={logout} style={styles.logoutButton}>
          <Ionicons name="log-out" size={24} color="#8B5B29" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={isGridView ? 2 : 1}
        key={isGridView ? 'grid' : 'list'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    marginTop:20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  searchBar: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#B0A99F',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    backgroundColor: '#ffffff',
  },
  viewToggle: {
    padding: 5,
  },
  logoutButton: {
    padding: 5,
    marginLeft: 10,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    backgroundColor: '#FAF3E0',
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  listItem: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#FAF3E0',
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  gridImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 5,
  },
  listImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  gridInfo: {
    alignItems: 'center',
  },
  listInfo: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4E3B31',
  },
  productBrand: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5B29',
    marginTop: 5,
  },
});
