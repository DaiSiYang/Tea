import {ref} from "vue";
import {defineStore} from "pinia";

export const useUserStore = defineStore('userStore', () => {
    const id = ref(0)
    const updateId = (newId) => {
        id.value = newId
    }

    return {
        id,
        updateId
    }
}, {
    persist: true
});
