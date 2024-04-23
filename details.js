import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Details( {route, navigation} ) {
    const {title, author, description, isbn} = route.params;
    console.log(route.params);

    return (
        <View style={styles.container}>
            <Text style={styles.item}>Title: {title}</Text>
            <Text style={styles.item}>Author: {author}</Text>    
            <Text style={styles.item}>Description: {description}</Text>
            <Text style={styles.item}>ISBN: {isbn}</Text>
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