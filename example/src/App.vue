<template>
  <div id="app">
    <div class="image">
        <div class="file">
            <div class="file-cover">
                {{msg}}
            </div>
            <input type="file" class="file-input">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your sVue.js App',
    }
  },
  methods: {
    fileDone() {
      console.log('================')
    },
  },
}
</script>

<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
}
.file {
  position: relative;
  width: 120px;
  height: 30px;
  border: 1px solid darkcyan;
  &-cover {
  }
  &-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 120px;
    height: 120px;
    // opacity: 0;
  }
}
</style>
