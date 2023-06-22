<template>
  <div 
    class="data"
    v-if="users.length > 0">
    <h3>Результаты поиска</h3>
    <div class="data__header"><strong>Email</strong> <strong>Number</strong> </div>
    <user-item 
      v-for="(user, index) in users" 
      :user="user"
      :key="index"
    />    
  </div>
  <h2 v-else >Нет такого пользователя. Проверьте введенные данные.</h2>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  name: 'UserList',
  components: {
    UserItem
  },
  props: {
    users: {
      type: Array,
      require: true,
    }
  }
}
</script>

<style scoped>
.data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  margin: 0 auto;  
}
  .data__header {
    padding: 15px;
    border-bottom: 1px solid #FFCCBC;
    margin-top: 15px;
    display: flex;
    width: 320px;
    align-items: center;
    justify-content: space-between;
  }
</style>