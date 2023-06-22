import axios from "axios";
import { ref } from "vue";

export function useUserData(){
  const users = ref([])
  const isUsersDataLoading = ref(true)
  const fetching = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/data', data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      users.value = response.data
      isUsersDataLoading.value = false                
    } catch (err) {
      alert('Error!')
    } 
  }
  return {
    users, isUsersDataLoading, fetching
  }
}