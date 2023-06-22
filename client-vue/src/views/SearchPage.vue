<template>
  <div class="">
    <search-form 
      @get-data="getUsers"
    />
    <user-list
      :users="users"      
      v-if="!isUsersDataLoading"
      class="results"
    />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import UserList from '../components/UserList';
import SearchForm from '../components/SearchForm';

export default {
  name: 'SearchFormView',
  components: {
    SearchForm,
    UserList,
  },
  data() {
    return {
      users: [],
    }
  },
  methods: {
    getUsers(users){
      this.users = users
    }
  }
}
</script>

<style>
.results {
  padding-top: 30px;
}
</style>

