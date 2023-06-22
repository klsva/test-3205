<template>
  <div class="user">
    <div> {{ user.email }}</div>
    <div> {{ user.number }} </div>
  </div>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
.user {
  padding: 15px;
  border-bottom: 1px solid #FFCCBC;
  margin-top: 15px;
  display: flex;
  width: 320px;
  align-items: center;
  justify-content: space-between;
}
</style>