<template>
    <v-list>
        <!-- Ссылки меню -->
        <v-list dense>
            <v-list-item link>
                <v-list-item-title>Главная</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-title>Обмен</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-title>О нас</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-title>Контакты</v-list-item-title>
            </v-list-item>
            <!-- Добавьте дополнительные ссылки аналогично -->
        </v-list>

        <v-divider></v-divider>

        <!-- Иконки социальных сетей -->
        <v-list-item class="social-icons">
            <v-btn icon variant="text" size="small" class="ml-4 mr-1">
                <v-icon :color="'teal-darken-3'">mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon variant="text" size="small" outlined class="mr-1">
                <v-icon :color="'teal-darken-3'">mdi-send</v-icon>
            </v-btn>
            <v-btn icon variant="text" size="small" class="">
                <v-icon :color="'teal-darken-3'">mdi-twitter</v-icon>
            </v-btn>
            <v-list-item-subtitle>Мы в социальных сетях</v-list-item-subtitle>
            <!-- Добавьте дополнительные иконки аналогично -->
        </v-list-item>

        <!-- Контактная информация -->
        <v-list-item class="social-icons mt-2">
            <v-list-item-content>
                <v-list-item-title>support@true.money</v-list-item-title>
                <v-list-item-subtitle class="mt-2">По всем вопросам</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>
<script setup>
</script>
<style scoped>
.social-icons {
    display: flex;
    justify-content: center;
    padding: 10px;
}
</style>