const rapidapi = async (pdf,question,aiGeneratedMessages) => {
    const axios = require('axios');
    const precursor = "The text above is extracted from a PDF document. Please only provide responses with only reference to the text provided below";

    const quest = "the messages above are the responses you have already provided in this chat message. Reply with context to those messages and focus mainly on the current question = ";

    const prompt = `${pdf}\n${[precursor]}\n${aiGeneratedMessages}\n${quest}\n${question}`;
    //const prompt = `${pdf}`;
    const rapidapi_key=process.env.REACT_APP_RAPID_API_KEY; 
    

    const options = {
      method: 'POST',
      url: 'https://chatgpt-api8.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': rapidapi_key,
        'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
      },
      data: [
        {
          content: prompt,
          role: 'user'
        }
      ]
    };
    
    try {
        const response = await axios.request(options);
        //const response = { data: 'Your default dummy response goes here' };
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
  };
  
  export default rapidapi;