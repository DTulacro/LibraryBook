import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function Details( {route, navigation} ) {
    const {title, author, description, isbn, book_image, buy_links} = route.params;
    console.log(route.params);

    const cover = {
      uri: {book_image},
      width: 64,
      height: 64
    };

    return (
        <View style={styles.container}>
            <Text style={styles.item}>Title: {title}</Text>
            <Text style={styles.item}>Author: {author}</Text>    
            <Text style={styles.item}>Description: {description}</Text>
            <Text style={styles.item}>ISBN: {isbn}</Text>
            <Button onPress={()=>{Linking.openURL({buy_links})}}> Purchase on Amazon.com </Button>
            <Image source={cover} />
        </View>
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
      padding: 10,
      fontSize: 18,
    },
    border: {
      borderWidth: 1,
      borderColor: "gray",
    }
  });  