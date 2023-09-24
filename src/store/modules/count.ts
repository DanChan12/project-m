import { defineStore } from 'pinia'
const useCounterStore = defineStore('counter', {
  persist: true,
  state: () => {
    return {
      count: 0,
    }
  },
  getters: {
    double():Number {
      return (this.count) * 2
    },
  },
  actions: {
    increment() {
      this.count++
    },
    incrementAsync() {
      setTimeout(() => {
        this.count++
      }, 1000)
    },
  },
})

export default useCounterStore