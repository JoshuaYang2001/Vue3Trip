import { getCityAll } from '@/services'
import { defineStore } from 'pinia'
const useCityStore = defineStore('city', {
  state: () => ({
    allCities: {}
  }),
  actions: {
    async fetchAllcitiesData() {
      const res = await getCityAll()
      this.allCities = res.data
      console.log(this.allCities)
    }
  }
})

export default useCityStore
