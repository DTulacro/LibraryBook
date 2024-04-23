import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Button, View, FlatList, Text } from 'react-native';

export default function Library( navigation ) {

    const startingData = [];

    const [books, setBooks] = useState(startingData);

    function getBooks() {
        let tempList = [];
        fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=F93caSWCo07hIFLfgYl0BTojagbBVQRR')
        .then((response) => response.json())
        .then((json) => {  
          /* view the JSON that's returned in the server log */ 
            console.log(json);
            for(i = 0; i < 15; i++) {
                let temp = {key: i, 
                            title: json.results.books[i].title,
                            author: json.results.books[i].author, 
                            description: json.results.books[i].description, 
                            isbn: json.results.books[i].primary_isbn13};
                tempList.push(temp);
            }

            setBooks(books.concat(tempList));
        })
        .catch((error) => {
        console.error(error);
        });
        
    }

    return (
        <View>
        <FlatList data={books} extraData={books}
        renderItem={({item}) => 
          <View>
            <TouchableOpacity onPress={ () => navigation.navigate('Information', {title: item.title}) }>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          </View>
        } 
        />
        <Button title="Add Books" onPress={ getBooks }/>
        </View>
    );

}