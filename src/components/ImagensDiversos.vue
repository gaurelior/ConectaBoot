<template>
   <div class="containerImagem">
    <img style=" width: 100%;" src="@/assets/dezembro.jpg" alt="imagem 1">
    </div>
    <div class="divImagemMeiaTela">
        <img v-if="isLoaded" v-lazy="imageSrc1" alt="Descrição da Imagem" @load="isLoaded = true" />
        <img v-if="isLoaded" v-lazy="imageSrc2" alt="Descrição da Imagem" @load="isLoaded = true" />
        <img v-if="isLoaded" v-lazy="imageSrc3" alt="Descrição da Imagem" @load="isLoaded = true" />
        <!-- <img v-lazy="imageSrc1" alt="imagem 1" /> -->
        <!-- <img src="@/assets/mapa.png" alt="imagem 2">
        <img src="@/assets/cafethe.jpg" alt="imagem 3">   -->
      </div>
     
    </template>
    
    <script>
    export default {
        name: 'ImagensDiversos',
        props: {
            msg: String 
        },
        data() {
          return {
            imageSrc1: '@/assets/dezembro.jpg',
            imageSrc2: '@/assets/mapa.png',
            imageSrc3: '@/assets/cafethe.jpg',
          };
        },

    }
    </script>
    
    <!--Add "scoped" atribute to limite css to this component only-->
    <style scoped></style>

    <!-- <template>
        <img v-lazy="imageSrc1" alt="imagem 1" />
        <img v-lazy="imageSrc2" alt="imagem 2" />
        <img v-lazy="imageSrc3" alt="imagem 3" />
      </template>
      
      <script>
      export default {
        data() {
          return {
            imageSrc1: '@/assets/dezembro.jpg',
            imageSrc2: '@/assets/mapa.png',
            imageSrc3: '@/assets/cafethe.jpg',
          };
        },
      };
      </script>
      
    
     -->
    
    
    
    