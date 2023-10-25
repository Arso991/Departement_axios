<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import BeninIcon from '@/components/BeninIcon.vue'
import { RouterLink } from 'vue-router';


let allDepartement = ref([]);


async function getDepartement(){
  try {
    /* const response = await useAxios().get("/departements"); */
    const response = await axios.get("http://localhost:8000/departements", {
      auth: {
        username:"Arso", 
        password:"Ecole"
      }
    });
    allDepartement.value = response.data;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

/* async function login(){
  try {
    const user = await useAxios().post("/users", data.value, {auth:{username:"Arso", password:"Ecole"}})
    console.log(user);
    
  } catch (error) {
    console.error(error);
    
  }
} */

//login()

getDepartement();
</script>

<template>
  <div class="wrapper">
    <!-- <header>
      <div class="header__left__logo">
          <img src="../../public/logob.png" alt="">
      </div>
      <div class="header__right">
        <input type="text" placeholder="Rechercher">
        <button>Ajouter un département</button>
      </div>
    </header> -->
    <main>
      <div class="banner">
      </div>
      <div class="main__button">
        <RouterLink to="/addDepartment"><button>Ajouter un département</button></RouterLink>
      </div>
      
      <div class="main__content">
        <div>
          <h1>Liste des départements du Bénin</h1>
          <ul v-for="element in allDepartement">
            <li>{{ element.name }}</li>
          </ul>
        </div>
        <BeninIcon/>
      </div>
    </main> 
  </div>
</template>

<style scoped>
.wrapper{
  padding: 10px;
}
  img{
    height: 100%;
    width: 100%;
  }
  ul li{
    list-style: none;
  }
  .main__content{
    display: flex;
    justify-content: center;
    gap: 5rem;
    align-items: center;
  }
  .main__button{
    display: flex;
    justify-content: center;
  }
  main button{
    padding: 1rem 1.5rem;
    color: white;
    background: green;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
  }
</style>
