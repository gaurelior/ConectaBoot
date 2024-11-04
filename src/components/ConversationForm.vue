<template>
    <div>
      <h2>Salvar Conversa</h2>
      <form @submit.prevent="saveConversation">
        <div>
          <label for="userId">ID do Usuário:</label>
          <input v-model="conversation.userId" id="userId" type="text" required />
        </div>
        <div>
          <label for="messages">Mensagens:</label>
          <textarea v-model="conversation.messages" id="messages" required></textarea>
        </div>
        <button type="submit">Salvar Conversa</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        conversation: {
          userId: '',
          messages: ''
        }
      };
    },
    methods: {
      async saveConversation() {
        try {
          const response = await axios.post('https://end-point-wx8r.onrender.com/api/conversations', {
            userId: this.conversation.userId,
            messages: this.conversation.messages.split('\n')
          });
          console.log('Conversa salva:', response.data);
          this.resetForm();
        } catch (error) {
          console.error('Erro ao salvar conversa:', error);
        }
      },
      resetForm() {
        this.conversation.userId = '';
        this.conversation.messages = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Adicione estilos conforme necessário */
  </style>
  