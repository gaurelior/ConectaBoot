<template>
    <div class="chatbot">
      <div class="chat-window">
        <div class="messages">
          <div v-for="(message, index) in messages" :key="index" class="message">
            <strong>{{ message.sender }}:</strong> {{ message.text }}
          </div>
        </div>
        <input
          v-model="userInput"
          @keyup.enter="sendMessage"
          placeholder="Digite sua mensagem..."
        />
        <button @click="sendMessage">Enviar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userInput: '',
        messages: [],
      };
    },
    methods: {
      sendMessage() {
        if (this.userInput.trim() === '') return;
  
        // Adiciona a mensagem do usuário
        this.messages.push({ sender: 'Você', text: this.userInput });
  
        // Simula uma resposta do chatbot
        this.getBotResponse(this.userInput);
  
        // Limpa o input
        this.userInput = '';
      },
      getBotResponse(input) {
        // Simulando uma resposta simples
        const response = `Você disse: "${input}"`;
        this.messages.push({ sender: 'Bot', text: response });
      },
    },
  };
  </script>
  
  <style scoped>
  .chatbot {
    max-width: 400px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
  }
  .chat-window {
    display: flex;
    flex-direction: column;
  }
  .messages {
    flex-grow: 1;
    overflow-y: auto;
    max-height: 300px;
    margin-bottom: 10px;
  }
  .message {
    margin: 5px 0;
  }
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    flex-grow: 1;
  }
  button {
    margin-left: 5px;
  }
  </style>
  