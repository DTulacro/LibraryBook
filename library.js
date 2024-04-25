import React, { useState } from 'react';
import { TouchableOpacity, Button, View, FlatList, Text } from 'react-native';


export default function Library( {navigation} ) {

  const startingData = [];

  const [books, setBooks] = useState(startingData);
  const [button, setButton] = useState(false);

  function getBooks() {
    let tempList = [];
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=F93caSWCo07hIFLfgYl0BTojagbBVQRR')
      .then((response) => response.json())
      .then((json) => {
        /* view the JSON that's returned in the server log */
        console.log(json.results.books[0]);
        for (i = 0; i < 15; i++) {
          let temp = {
            key: i,
            title: json.results.books[i].title,
            author: json.results.books[i].author,
            description: json.results.books[i].description,
            isbn: json.results.books[i].primary_isbn13,
            book_image: json.results.books[i].book_image,
            buy_links: json.results.books[i].buy_links[0].url,
          };
          tempList.push(temp);
        }

        setBooks(books.concat(tempList));
      })
      .catch((error) => {
        console.error(error);
      });
      setButton(true);

  }

  return (
    <View>
      <Button title="Ask Gemini" onPress={()=>navigation.navigate('Gemini')}/>
      <FlatList data={books} extraData={books}
        renderItem={({ item }) =>
          <View style={{alignItems:'center', padding:12}}>
            <TouchableOpacity style={{borderRadius:5, backgroundColor: '#147EFB', height: 30, width: 300, alignItems:'center', padding:8}} onPress={ () => navigation.navigate( 'Information', { title: item.title, author: item.author, description: item.description, isbn: item.isbn, book_image: item.book_image, buy_links: item.buy_links} ) }>
              <Text style={{color:'white'}}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        }
      />
      <Button title="Add Books" disabled = {button} onPress={getBooks} />
    </View>
  );
}