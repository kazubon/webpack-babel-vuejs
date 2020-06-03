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
function makePromise(num) {
  return new Promise((resolve, reject) => {
    if(num % 2 == 0)
      resolve('OK');
    else
      reject('NG');
  });
}

export default {
  data() {
    return {
      message: 'hello'
    };
  },
  methods: {
    reset() {
      (async (a, b) => {
        let x = await makePromise(a);
        let y = await makePromise(b);
        console.log(`async function finished: ${x} ${y}`);
      })(2, 1).catch(e => {
        console.log(`rejected ${e}`);
      });
      this.message = 'hello';
    }
  }
}
</script>