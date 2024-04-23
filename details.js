import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Details( navigation, route ) {
    const {title, releaseYear} = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.item}>{title}</Text>    
            <Text style={styles.item}>{releaseYear}</Text>
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