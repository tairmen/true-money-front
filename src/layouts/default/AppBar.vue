<template>
  <v-app-bar flat>
    <!-- Кнопка для открытия бокового меню -->
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <!-- Логотип и название -->
    <v-toolbar-title>
      <div class="d-flex align-center">
        <img src="/logo.png" alt="Логотип" height="40" /> <!-- Логотип -->
        <span class="text-h5 font-weight-bold ml-3">Обмен Валют Украина Крым</span> <!-- Надпись -->
      </div>
    </v-toolbar-title>

    <!-- Спейсер для выравнивания элементов навигации и действий справа -->
    <v-spacer></v-spacer>

    <!-- Элементы навигации -->
    <v-btn text>Главная</v-btn>
    <v-btn text>Обмен</v-btn>
    <v-btn text>О нас</v-btn>
    <v-btn text>Контакты</v-btn>
  </v-app-bar>

  <!-- Боковое меню -->
  <v-navigation-drawer v-model="drawer" temporary app>
    <SidebarMenu />
    <!-- Содержимое бокового меню -->
    
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import SidebarMenu from'@/layouts/SidebarMenu.vue'

const drawer = ref(false);
</script>

<style scoped>
/* Стилизация, если необходимо */
</style>
