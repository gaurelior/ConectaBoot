<template>
  <div class="container">
    <label class="label">Insira:</label>
    <form @submit.prevent="handleSubmit" class="form">
      <textarea v-model="prompt" placeholder="Digite seu texto aqui" class="textarea"></textarea>
      <button type="submit" class="button">Enviar</button>
    </form>
    <div class="response-container">
      <label class="label">Resposta:</label>
      <textarea v-model="response" readonly class="textarea response-textarea"></textarea>
    </div>
  </div>
</template>

  <script>
  import { GoogleGenerativeAI } from "@google/generative-ai";
  
  
  export default {
  data() {
    return {
      prompt: "",
      response: "",
      genAI: null,
      model: null,
    };
  },
  created() {
    const API_KEY = "AIzaSyCNLusWlSnMjFFzHNrbAf9aQ9zO-AyfM4s"; // Substitua pelo seu API_KEY
    this.genAI = new GoogleGenerativeAI(API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  },
  methods: {
    async handleSubmit() {
      try {
        const result = await this.model.generateContent(this.prompt);
        const text = await result.response.text();
        this.response = text;
      } catch (error) {
        console.error("Erro ao gerar conteúdo:", error);
      }
    },
  },
};

  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .label {
    font-size: 1.2em;
    margin-bottom: 10px;
    display: block;
    color: #333;
  }
  
  .form {
    display: flex;
    flex-direction: column;
  }
  
  .textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
    resize: none;
  }
  
  .textarea:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s;
  }
  
  .button:hover {
    background-color: #0056b3;
  }
  
  .response-container {
    margin-top: 20px;
  }
  
  .response-textarea {
    height: 150px;
    background-color: #eef;
    cursor: not-allowed;
  }
  </style>
  