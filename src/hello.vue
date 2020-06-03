<template>
  <div>
    <h1>{{message}}</h1>
    <p>
      <input v-model="message">
      <input type="button" value="reset" @click="reset">
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello'
    };
  },
  methods: {
    reset() {
      this.message = 'hello';
    }
  }
}
</script>