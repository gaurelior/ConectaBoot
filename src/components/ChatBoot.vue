<template>
  <div class="container">
    <header class="header">
      <h1>Conecta Bot</h1>
    </header>
    <label class="label">Insira sua pergunta:</label>
    <form @submit.prevent="handleSubmit" class="form">
  <textarea
    v-model="prompt"
    placeholder="Digite seu texto aqui"
    class="textarea"
  ></textarea>
  <button type="submit" class="button">Enviar</button>
</form>

    <div class="response-container">
      <label class="label">Resposta:</label>
      <textarea cols="40"
        v-model="response"
        readonly
        class="textarea response-textarea"
      ></textarea>
    </div>

    <div class="contact-info">
      <h2>Contato</h2>
      <p>
        WhatsApp:
        <a :href="`https://wa.me/${whatsapp}`" class="contact-link">{{ whatsapp }}</a>
      </p>
      <p>
        Instagram:
        <a :href="instagram" class="contact-link">{{ instagram }}</a>
      </p>
    </div>

    <footer class="footer">
      <p>© 2024, Gabrielle Aurelio. Todos os direitos reservados.</p>
    </footer>
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
      whatsapp: "5544997546368", // Substitua pelo seu número de WhatsApp
      instagram: "https://instagram.com/gabrielle.aurelio", // Substitua pelo seu link do Instagram
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
        const { response } = await this.model.generateContent(this.prompt);
        this.response = await response.text();
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
  margin: auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
}

.label {
  font-size: 1.2rem;
  margin-bottom: 10px;
  display: block;
  color: #34495e;
}

.form {
  display: flex;
  flex-direction: column;
}

.textarea {
  width: 100%;
  height: 100px;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
  resize: none;
}

.textarea:focus {
  border-color: #1abc9c;
  outline: none;
}

.button {
  background-color: #1abc9c;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #16a085;
}

.response-container {
  margin-top: 20px;
}

.response-textarea {
  height: 150px;
  background-color: #eef;
  cursor: not-allowed;
}

.contact-info {
  margin-top: 20px;
}

.contact-link {
  color: #1abc9c;
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
}

.footer {
  margin-top: 20px;
  text-align: center;
  color: #7f8c8d;
}
</style>







