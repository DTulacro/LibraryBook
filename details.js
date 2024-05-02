import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking, Image, ScrollView } from 'react-native';

export default function Details({ route, navigation }) {
  const { title, author, description, isbn, book_image, buy_links } = route.params;

  const cover = {
    uri: book_image,
    width: 300,
    height: 500
  };


  console.log(route.params)

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={cover} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.item}>Author: {author}</Text>
        <Text style={styles.item}>Description: {description}</Text>
        <Text style={styles.item}>ISBN: {isbn}</Text>
        <Button title="Purchase on Amazon.com" onPress={() => { Linking.openURL(buy_links).catch((err) => console.error('An error occurred', err)); }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'left',
    marginHorizontal: 20,
  },
  item: {
    padding: 8,
    fontSize: 18,
    fontFamily:'Times New Roman'
  },
  title:{
    padding: 8,
    fontSize: 24,
    fontFamily:'Times New Roman',
    alignItems:'center',
    justifyContent:'center'
  },
  border: {
    borderWidth: 1,
    borderColor: "gray",
  },
  
});  