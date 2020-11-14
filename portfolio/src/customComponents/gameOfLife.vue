<template>
  <div class="main main-raised">
    <div class="section">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
          >
            <div class="board">
              <div
                class="board__cell "
                v-for="(element, index) in boardSize"
                :key="index"
                @click="(e) => addAliveClass(e)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectHeader",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg"),
    },
  },
  data: function() {
    return {
      boardSize: 2500,
    };
  },
  methods: {
    addAliveClass(e) {
      e.target.classList.toggle("aliveClass");
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.board {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  &__cell {
    height: 14px;
    border: 1px solid black;
    width: 2%;
    @media screen and (max-width: 768px) {
      height: 7px;
    }
  }
}
.aliveClass {
  background-color: red;
}
</style>
