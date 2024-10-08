import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Picker, ScrollView, Image} from 'react-native';

export default function App() {
  // State for form inputs
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('starters');
  
  // Preloaded menu items
  const initialMenuItems = [
    { id: '1', name: 'Chicken Tenders', course: 'starters', description: 'Crispy chicken strips', price: '5.99' },
    { id: '2', name: 'Mozzarella Sticks', course: 'starters', description: 'Cheese-filled sticks', price: '4.99' },
    { id: '3', name: 'Onion Rings', course: 'starters', description: 'Crispy fried onions', price: '3.99' },
    { id: '4', name: 'Fish Sticks', course: 'starters', description: 'Breaded fish fingers', price: '6.99' },
    { id: '5', name: 'Nachos', course: 'starters', description: 'Tortilla chips with cheese', price: '7.99' },
    { id: '6', name: 'Chicken Foldovers', course: 'mains', description: 'Grilled chicken wrap', price: '8.99' },
    { id: '7', name: 'Beef Burger Meal', course: 'mains', description: 'Beef burger with fries', price: '9.99' },
    { id: '8', name: 'Chicken Alfredo', course: 'mains', description: 'Pasta with creamy sauce', price: '10.99' },
    { id: '9', name: 'Pasta', course: 'mains', description: 'Classic pasta dish', price: '7.99' },
    { id: '10', name: 'Chicken Burger Meal', course: 'mains', description: 'Chicken burger with fries', price: '9.49' },
    { id: '11', name: 'Banana Cake', course: 'desserts', description: 'Moist banana cake', price: '4.99' },
    { id: '12', name: 'Chocolate Mousse', course: 'desserts', description: 'Rich chocolate mousse', price: '5.49' },
    { id: '13', name: 'Carrot Cake', course: 'desserts', description: 'Spiced carrot cake', price: '5.99' },
    { id: '14', name: 'Apple Crumble', course: 'desserts', description: 'Warm apple crumble', price: '6.99' },
    { id: '15', name: 'Tiramisu', course: 'desserts', description: 'Italian dessert', price: '7.49' },
  ];

  // State to store menu items (preloaded + new ones)
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  // Add item to menu
  const addMenuItem = () => {
    if (dishName && description && price) {
      const newItem = {
        id: Math.random().toString(),
        name: dishName,
        description: description,
        price: price,
        course: course
      };
      setMenuItems([...menuItems, newItem]); // Add new item to menu
      setDishName('');  // Clear input fields
      setDescription('');
      setPrice('');
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Cristoffel's Digital Menu</Text>
      <Image
        source={require('./img/the_bear_logo.jpeg')}
        style={styles.image}
        />


      {/* Form for adding menu item */}
      <Text style={styles.headingText}>Dish Name:</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter dish name'
        value={dishName}
        onChangeText={setDishName}
      />

      <Text style={styles.headingText}>Description:</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter description'
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.headingText}>Price:</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter price'
        value={price}
        onChangeText={setPrice}
        keyboardType='numeric'
      />

      <Text style={styles.headingText}>Select Course:</Text>
      <Picker
        selectedValue={course}
        style={styles.picker}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Starters" value="starters" />
        <Picker.Item label="Mains" value="mains" />
        <Picker.Item label="Desserts" value="desserts" />
      </Picker>

      <Button title="Add Dish" onPress={addMenuItem} />

      {/* Display Menu Items */}
      <Text style={styles.menuHeading}>Menu Items ({menuItems.length})</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>{item.name} - ${item.price}</Text>
            <Text>{item.description}</Text>
            <Text>Course: {item.course}</Text>
          </View>
        )}
      />

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 150,  
    height: 150, 
    alignSelf: 'center',   
    resizeMode: 'cover',  
    marginVertical: 20,  
    
  },
  welcomeText: {
    paddingTop: 40,
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
  headingText: {
    marginTop: 20,
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    marginTop: 10,
  },
  menuHeading: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
  },
  menuItem: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
