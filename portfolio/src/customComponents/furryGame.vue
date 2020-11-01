<template>
  <div>
    <div class="row" id="board">
      <div
        class="cell col-1"
        v-for="(element, index) in this.numberOfCells"
        :key="index"
      ></div>
    </div>
    <div class="text-center score">
      <h1>Wynik: {{ this.score }}</h1>
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
      coinPosition: {
        x: 0,
        y: 0,
      },
      furryPosition: {
        x: 0,
        y: 0,
        direction: "right",
      },
      score: 0,
    };
  },
  mounted() {
    window.addEventListener("keydown", (e) => {
      this.changeDirection(e.keyCode);
    });
    this.insertFurry();
    this.insertCoin();
    this.moveFurry();
  },
  methods: {
    insertFurry() {
      $("#board")
        .find("div")
        [
          this.divIndex(this.furryPosition.x, this.furryPosition.y)
        ].classList.add("furry");
    },
    insertCoin() {
      $("#board")
        .find("div")
        [
          this.divIndex(this.coinPositionX(), this.coinPositionY())
        ].classList.add("coin");
    },
    coinPositionX() {
      this.coinPosition.x = Math.floor(Math.random() * 10);
      return this.coinPosition.x;
    },
    coinPositionY() {
      this.coinPosition.y = Math.floor(Math.random() * 10);
      return this.coinPosition.y;
    },
    divIndex(x, y) {
      return x + y * 12;
    },
    moveFurry() {
      this.intervalFun = setInterval(() => {
        $("#board")
          .find("div")
          [
            this.divIndex(this.furryPosition.x, this.furryPosition.y)
          ].classList.remove("furry");
        switch (this.furryPosition.direction) {
          case "right":
            this.furryPosition.x = this.furryPosition.x + 1;
            break;
          case "left":
            this.furryPosition.x = this.furryPosition.x - 1;
            break;
          case "up":
            this.furryPosition.y = this.furryPosition.y - 1;
            break;
          case "down":
            this.furryPosition.y = this.furryPosition.y + 1;
            break;
        }
        this.checkCoinCollision();
        this.checkWallCollision();
        this.insertFurry();
      }, 250);
    },
    checkWallCollision() {
      console.log("y: ", this.furryPosition.y, "x: ", this.furryPosition.x);
      if (
        this.furryPosition.x > 11 ||
        this.furryPosition.x < 0 ||
        this.furryPosition.y > 11 ||
        this.furryPosition.y < 0
      ) {
        alert("game over");
        clearInterval(this.intervalFun);
      }
    },
    checkCoinCollision() {
      if (
        this.furryPosition.x === this.coinPosition.x &&
        this.furryPosition.y === this.coinPosition.y
      ) {
        $("#board")
          .find("div")
          [
            this.divIndex(this.coinPosition.x, this.coinPosition.y)
          ].classList.remove("coin");
        this.insertCoin();
        this.score += 1;
      }
    },
    changeDirection(e) {
      console.log(e);
      switch (e) {
        case 40:
          this.furryPosition.direction = "down";
          break;
        case 38:
          this.furryPosition.direction = "up";
          break;
        case 37:
          this.furryPosition.direction = "left";
          break;
        case 39:
          this.furryPosition.direction = "right";
          break;
      }
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
.score {
  color: green;
}
</style>
