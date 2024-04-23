import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Details( navigation, route ) {
    const {title, author, description, primary_isbn13} = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.item}>{title}</Text>
            <Text style={styles.item}>{author}</Text>    
            <Text style={styles.item}>{description}</Text>
            <Text style={styles.item}>{primary_isbn13}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
     paddingTop: 50
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 40,
    },
    border: {
      borderWidth: 1,
      borderColor: "gray",
    }
  });  