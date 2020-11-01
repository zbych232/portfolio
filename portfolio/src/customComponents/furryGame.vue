<template>
  <div>
    <div class="row" id="board">
      <div
        class="cell col-1"
        v-for="(element, index) in this.numberOfCells"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script>
var $ = require("jquery");
export default {
  name: "furryGame",
  props: {},
  data() {
    return {
      numberOfCells: 144,
    };
  },
  mounted() {
    this.insertFurry();
    this.insertCoin();
  },
  methods: {
    insertFurry() {
      $("#board")
        .find("div")[0]
        .classList.add("furry");
    },
    insertCoin() {
      $("#board")
        .find("div")
        [
          this.divIndex(this.coinPositionX(), this.coinPositionY())
        ].classList.add("coin");
    },
    coinPositionX() {
      return Math.floor(Math.random() * 10);
    },
    coinPositionY() {
      return Math.floor(Math.random() * 10);
    },
    divIndex(x, y) {
      return x + y * 10;
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
#board {
  border: 1px solid black;
}
.cell {
  border: 1px solid black;
}
.col-1 {
  padding: 0;
}
.furry {
  background-image: url("../assets/img/furryGame/furry.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.coin {
  background-image: url("../assets/img/furryGame/coin.png");
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (max-width: 768px) {
  .cell {
    height: 30px;
  }
}
@media screen and (min-width: 768px) {
  .cell {
    height: 64px;
  }
}
</style>
