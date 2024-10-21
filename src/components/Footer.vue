<!-- src/components/Footer.vue -->
<template>
    <footer class="footer">
      <p>© 2024 Meu App. Todos os direitos reservados.</p>
      <p>
        <a href="/sobre">Sobre</a> | 
        <a href="/contato">Contato</a>
      </p>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f1f1f1;
    text-align: center;
    padding: 10px 0;
    position: relative;
    bottom: 0;
    width: 100%;
    margin-top: auto; /* Garante que o footer fique na parte inferior */
  }
  </style>
  