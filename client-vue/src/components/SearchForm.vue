<template>
  <div class="form">
    <form 
      name="search-form" 
      class="form__body"
      @submit.prevent="submit"
    >
      <h1 class="form__title">Поиск пользователя по данным</h1>
      <div class="form__item">
        <label for="formEmail" class="form__label">E-mail*</label>
        <input 
          v-model="payload.email"
          type="email" 
          name="email" 
          class="form__input _req _email"
        >
      </div>
      <div class="form__item">
        <label for="formNumber" class="form__label">Числа</label>
        <input 
          v-model="payload.number"
          v-maska data-maska="##-##-##"
          type="text" 
          name="number" 
          class="form__input"
        >
      </div>
      <button
        type="submit"
        class="form__button"
      >
        найти
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useUserData } from '../hooks/useUserData.js'
import { vMaska } from "maska"


  export default {
    name: 'SearchForm',
    directives: { maska: vMaska },
    setup(props, { emit }){
      const initialPayload = {
        email: undefined,
        number: undefined,
      }
      const payload = reactive({
        ...initialPayload
      });   
      function resetForm() {
        Object.assign(payload, initialPayload);
      } 
      const { users, isUsersDataLoading, fetching, response } = useUserData();
      const submit = async () => {   
        const data = {...payload};
        resetForm(); 
        await fetching(data);             
        emit('getData', users);
      };
      return {
        payload,
        users, 
        isUsersDataLoading, 
        submit,
        response,
      }
    }  
  }
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  margin: 0 auto;
  padding: 30px 20px;
  outline: none;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  box-shadow: 5px 5px 14px 2px #E0E0E0;
  // .form__body
  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  // .form__title
  &__title {
    font-size: 26px;
    font-weight: 700;
    margin: 0 0 30px 0;
    color: #FF5722;
  }
  // .form__item
  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    margin: 0 0 20px 0;
  }
  // .form__label
  &__label {
    font-size: 18px;
    margin: 0 0 10px 0;
  }
  // .form__input
  &__input {
    width: 98%;
    height: 40px;
    border-radius: 5px;
    border:1px solid #E0E0E0;
    font-size: 18px;
    &:focus{
      outline: none !important;
      border:1px solid #E0E0E0;
      box-shadow: 0 0 5px #E64A19;
    }
    &._error {
        box-shadow: 0 0 5px #D32F2F; 
    }
  }
  // .form__button
  &__button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    background-color: #FF5722;
    border: 1px solid #D84315;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 1px 0 #D84315;
    transition: background-color 0.5s ease 0s;
    position: relative;
    top: 0;
    &:hover{
        background-color: #E64A19;
    }
    &:active{
        top: 3px;
        box-shadow: 0 2px 0 #D84315;
    }
  }
}
</style>