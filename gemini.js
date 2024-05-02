import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Button, TextInput, ScrollView } from 'react-native';

export default function Gemini({ navigation }) {

  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const [response, setResponse] = useState("");


  // Access your API key as an environment variable (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI("AIzaSyA7Lw_EALK1lGcik29lxylHLp7MKwFOHAE");

  const handleSubmit = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const geminiResponse = await result.response;
    setResponse(geminiResponse.text());
  };

  const [prompt, setPrompt] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <ScrollView>
        <TextInput
          style={{ height: 200, width: 300, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', marginBottom: 5, borderRadius: 20 }}
          multiline={true}
          numberOfLines={10}
          placeholder=" Enter a prompt here (max 250 characters)"
          value={prompt}
          onChangeText={(text) => setPrompt(text)}
          maxLength={250}
        />
        <Text style={{ fontSize:12, marginBottom: 30 }}>Character count: {prompt.length}/250</Text>
        <TouchableOpacity onPress={handleSubmit} style={{ borderRadius: 5, backgroundColor: '#147EFB' }}>
          <View style={{ alignItems: 'center', padding: 10 }}>
            <Text style={{ color: 'white' }}>
              Submit
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{ marginTop: 20, width: 300, height: 500, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, borderRadius: 20 }}>{response}</Text>
      </ScrollView>
    </View>
  );

}