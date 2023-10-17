<script setup lang="ts">
import { ref } from 'vue';
import { useAxios } from '@/composable/useAxios';


let allDepartement = ref();

async function getDepartement(){
  try {
    const response = await useAxios().get("/departements");
    allDepartement.value = response.data;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

//getDepartement();

async function addDepartement(){
  try {
    await useAxios().post("/departements", {id:1, name:"Borgou"})
  } catch (error) {
    console.error(error);
  }
}

addDepartement();
</script>

<template>
  <div class="wrapper">
    <header>
      <div class="header__left"></div>
      <div class="header__right"></div>
    </header>
    <main>
      <h1>Liste des départements du Bénin</h1>
      <ul v-for="element in allDepartement">
        <li>{{ element.name }}</li>
      </ul>
    </main>
    
  </div>
</template>
