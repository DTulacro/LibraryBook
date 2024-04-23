import{useState} from "react";

export default function Gemini({navigation}) {
    
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const [response, setResponse] = useState("");


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyA7Lw_EALK1lGcik29lxylHLp7MKwFOHAE");

async function handleSubmit(e) {
  // Prevent the browser from reloading the page
  e.preventDefault();

  // Read the form data
  const form = e.target;
  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());

  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const result = await model.generateContent(formJson.prompt);
  const gemini_response = await result.response;
  setResponse(gemini_response.text());
}

return(
  <div>
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop:"30px"
    }}
>
      <form method="post" onSubmit={handleSubmit}>
      <label>
      <p>Chat with Gemini:</p>
      <textarea
        name="prompt"
        placeholder="Enter a prompt here"
        rows={10}
        cols={50}
      />
    </label>
      <p><button type="submit">Submit form</button></p> 
        </form>
        </div>
        <p style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "40px",
        }}>{response}</p>
    </div>

);

}