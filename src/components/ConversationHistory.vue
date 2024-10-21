<template>
    <div>
      <h2>Histórico de Conversas</h2>
      <ul v-if="conversations.length">
        <li v-for="(conversation, index) in conversations" :key="index">
          <p><strong>ID do Usuário:</strong> {{ conversation.userId }}</p>
          <p><strong>Mensagens:</strong></p>
          <ul>
            <li v-for="(message, idx) in conversation.messages" :key="idx">{{ message }}</li>
          </ul>
          <p><strong>Data:</strong> {{ new Date(conversation.timestamp).toLocaleString() }}</p>
        </li>
      </ul>
      <p v-else>Nenhuma conversa encontrada.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        conversations: []
      };
    },
    async created() {
      await this.fetchConversations();
    },
    methods: {
      async fetchConversations() {
        try {
          const response = await axios.get('http://localhost:5000/api/conversations');
          this.conversations = response.data;
        } catch (error) {
          console.error('Erro ao buscar conversas:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Adicione estilos conforme necessário */
  </style>
  