// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'

const API_KEY = '64074212828fb9.48328100'
const LOOT_COEF = 0.04

function genUrl(rates) {
  let keys = Object.keys(rates);
  let first = `${keys[0]}${keys[1]}.FOREX`
  let str_pairs = '';
  for (let i = 2; i < keys.length; i++) {
    str_pairs += `${keys[0]}${keys[i]}.FOREX,`
  }
  return `https://eodhistoricaldata.com/api/real-time/${first}?fmt=json&api_token=${API_KEY}&s=${str_pairs}`
}

function generateRates(rates) {
  const baseCurrencies = Object.keys(rates);
  for (const base of baseCurrencies) {
    for (const target of baseCurrencies) {
      if (base !== target) {
        if (!rates[base][target]) {
          // Если оба курса относительно USD известны
          if (rates['USD'][base] && rates['USD'][target]) {
            // Расчет курса через USD
            rates[base][target] = rates['USD'][target] / rates['USD'][base];
          }
        }
        if (base === 'USD' && rates[target]['USD']) {
          // Обратный курс к USD
          rates[base][target] = 1 / rates[target]['USD'];
        }
      }
    }
  }
  return rates;
}


function generateLootForRates(rates) {
  for (let base in rates) {
    for (let target in rates[base]) {
      rates[base][target] = rates[base][target] + rates[base][target] * LOOT_COEF
    }
  }
  return rates;
}

export const useAppStore = defineStore('app', {
  state: () => ({
    rates: {
      'USD': {},
      'EUR': {},
      'RUB': {},
      'UAH': {}
    } // Сюда будут загружаться курсы валют
  }),
  actions: {
    async fetchRates() {
      try {
        const url = genUrl(this.rates)
        const response = await axios.get(url)
          if (response.data) {
            response.data.forEach(el => {
              if (el.close && el.code) {
                let splited_exchange = el.code.split('.')
                if (splited_exchange[0] && splited_exchange[0].length == 6) {
                  let first = splited_exchange[0].slice(0, 3)
                  let second = splited_exchange[0].slice(3)
                  this.rates[first][second] = el.close
                }
              }
            })
            this.rates = generateRates(this.rates)
            this.rates = generateLootForRates(this.rates)
            // console.log(this.rates)
          }
      } catch (error) {
        console.error('Ошибка при получении курсов валют:', error);
      }
    },
  }
})

