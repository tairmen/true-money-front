<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title>Конвертер валют</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field density="compact" variant="outlined" label="Сумма" v-model="amount" type="number"></v-text-field>
              <v-select density="compact" variant="outlined" label="Из валюты" :items="currencies" v-model="fromCurrency" item-value="code"
                item-title="name"></v-select>
              <v-select density="compact" variant="outlined" label="В валюту" :items="currencies" v-model="toCurrency" item-value="code"
                item-title="name"></v-select>
              <v-btn @click="convert">Конвертировать</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-alert v-if="conversionResult" type="info">Результат: {{ conversionResult }}</v-alert>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAppStore } from '@/store/app';

const currencyStore = useAppStore();
const amount = ref(0);
const fromCurrency = ref('USD');
const toCurrency = ref('USD');
const conversionResult = ref(null);

// Пример массива валют
const currencies = computed(() => [
  { name: 'Доллар США', code: 'USD' },
  { name: 'Евро', code: 'EUR' },
  { name: 'Российский рубль', code: 'RUB' },
  { name: 'Украинская гривна', code: 'UAH' }
]);

const convert = () => {
  // Здесь должна быть логика конвертации валют
  // Пока что просто покажем результат в виде строки
  let rate = currencyStore.rates[fromCurrency.value][toCurrency.value]
  rate = rate ? rate : 1
  const resAmount = rate * amount.value
  conversionResult.value = `${amount.value} ${fromCurrency.value} будет примерно ${resAmount.toFixed(2)} ${toCurrency.value}`;
};
</script>
