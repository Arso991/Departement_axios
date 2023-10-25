<template>
    <div class="wrapper">
        <form action="" @submit.prevent="addDepartement">
          <h1 class="text-3xl font-bold underline">Ici vous pouvez ajouter un département</h1>
            <input type="text" v-model="name">
            <div class="form__button">
              <button type="submit">Ajouter</button>
            </div>
        </form>
        <LoaderIcon v-if="Loading"/>
    </div>
</template>

<script setup lang="ts">
import LoaderIcon from "@/components/LoaderIcon.vue";
import clientHttp from "../libs/clientHttp"
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const name = ref()
let Loading = ref<boolean>()
    Loading = false   
async function addDepartement(){
    Loading = true
  try {
    console.log(name.value);
    const dep = await clientHttp.post("/departements", 
    {name : name.value})

    name.value = ''

    Loading = false

    router.push("/");
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 9px 24px -7px rgba(204,176,176,0.69); ;
}
form input{
  width: 30rem;
  height: 2rem;
  padding: 0 1rem;
  outline: none;
}
.form__button{
  width: 100%;
  display: flex;
  justify-content: center;
}
form button{
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  background: green;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>