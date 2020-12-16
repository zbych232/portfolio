<template>
  <div class="wrapper">
    <div class="section">
      <div class="fancyShape"></div>
      <div class="container">
        <div class="headerContainer">
          <h1>Hi there!</h1>
          <h1>I'm Zbigniew</h1>
          <h2>Frontend Developer</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },
  props: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.headerContainer {
  margin-left: auto;
  text-align: right;
  margin-top: 100px;
  height: 100vh;
  h1 {
    font-weight: 900;
    font-size: 4em;
    color: black;
    @media only screen and (min-width: 600px) {
      font-size: 7em;
    }
  }
  h2 {
    font-weight: 900;
    font-size: 2em;
    color: black;
    @media only screen and (min-width: 600px) {
      font-size: 4em;
    }
  }
}
.fancyShape {
  position: absolute;
  top: calc(50vh - 200px);
  left: calc(50vw - 200px);
  width: 400px;
  height: 400px;
  background-color: #1870f2;
  border-radius: 58% 42% 36% 64% / 60% 64% 36% 40%;
  animation-name: example;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes example {
  0% {
  }
  100% {
    border-radius: 58% 42% 51% 49% / 51% 52% 48% 49%;
  }
}
</style>
