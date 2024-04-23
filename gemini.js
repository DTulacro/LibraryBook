import{useState} from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Button, TextInput } from 'react-native';
export default function Gemini({navigation}) {
    
//const { GoogleGenerativeAI } = require("@google/generative-ai");
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
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
          style={{ height: 200, width: 300, borderColor: 'gray', borderWidth: 1 }}
          multiline={true}
          numberOfLines={10}
          placeholder="Enter a prompt here"
          value={prompt}
          onChangeText={(text) => setPrompt(text)}
      />
      <Button
          title="Submit"
          onPress={handleSubmit}
      />
      <Text style={{ marginTop: 20 }}>{response}</Text>
  </View>
);

}