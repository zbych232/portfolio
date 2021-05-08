<template>
  <div>
    <div id="board">
      <div
        class="cell md-layout-item md-size-10  md-small-size-10 md-layout-item"
        v-for="(element, index) in this.numberOfCells"
        :key="index"
      ></div>
      <modal v-if="!isGameStarted">
        <template v-slot:title>
          <h2 v-if="!isGameLost">Pikachu Game</h2>
          <h2 v-else>Game Over</h2></template
        >
        <template v-slot:content>
          <p v-if="!isGameLost">
            Direct the pikachu with the arrows.<br />
            Try to collect as many points as possible. Good luck!
          </p>

          <p v-else>You got {{ score }} points!<br />Try again!</p>
          <md-button class="md-warning md-round" @click="startGame()"
            >Start the game</md-button
          >
        </template>
      </modal>
    </div>
    <div class="text-center score">
      <h4>Score: {{ this.score }}</h4>
    </div>
    <div class="mobileBtnsWrapper">
      <div
        class="mobileBtnsWrapper__mobileBtns  md-size-50  md-xsmall-size-50 md-layout-item"
      >
        <div class="mobileBtnsWrapper__mobileBtns__upBtnWrapper text-center">
          <md-button
            class="md-default md-just-icon md-round"
            @click="
              () => {
                furryPosition.direction = 'up';
              }
            "
            ><md-icon>keyboard_arrow_up</md-icon></md-button
          >
        </div>
        <div class="mobileBtnsWrapper__mobileBtns__leftBtnWrapper text-center">
          <md-button
            class="md-default md-just-icon md-round"
            @click="
              () => {
                furryPosition.direction = 'left';
              }
            "
            ><md-icon>keyboard_arrow_left</md-icon></md-button
          >

          <md-button
            class="md-default md-just-icon md-round"
            @click="
              () => {
                furryPosition.direction = 'right';
              }
            "
            ><md-icon>keyboard_arrow_right</md-icon></md-button
          >
        </div>
        <div class="mobileBtnsWrapper__mobileBtns__upBtnWrapper text-center">
          <md-button
            class="md-default md-just-icon md-round"
            @click="
              () => {
                furryPosition.direction = 'down';
              }
            "
            ><md-icon>keyboard_arrow_down</md-icon></md-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from "./modalComponent";
var $ = require("jquery");
export default {
  name: "furryGame",
  components: {
    modal,
  },
  props: {},
  data() {
    return {
      numberOfCells: 100,
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
      isGameStarted: false,
      isGameLost: false,
    };
  },
  mounted() {
    window.addEventListener("keydown", (e) => {
      this.changeDirection(e.keyCode);
      e.preventDefault();
    });
  },
  methods: {
    startGame() {
      $("#board")
        .find("div")
        [
          this.divIndex(this.coinPosition.x, this.coinPosition.y)
        ].classList.remove("coin");
      this.score = 0;
      this.isGameStarted = true;
      this.isGameLost = false;
      this.furryPosition.x = 0;
      this.furryPosition.y = 0;
      this.furryPosition.direction = "right";
      this.insertFurry();
      this.insertCoin();
      this.moveFurry();
    },
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
      return x + y * 10;
    },
    moveFurry() {
      this.intervalFun = setInterval(() => {
        if (!this.isGameLost) {
          $("#board")
            .find("div")
            [
              this.divIndex(this.furryPosition.x, this.furryPosition.y)
            ].classList.remove("furry");
        }
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
        if (!this.isGameLost) {
          this.insertFurry();
        }
      }, 250);
    },
    checkWallCollision() {
      if (
        this.furryPosition.x > 9 ||
        this.furryPosition.x < 0 ||
        this.furryPosition.y > 9 ||
        this.furryPosition.y < 0
      ) {
        clearInterval(this.intervalFun);
        this.isGameStarted = false;
        this.isGameLost = true;
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
  display: flex;
  flex-wrap: wrap;
  //position: relative;
  width: 322px;
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
  background-size: contain;
  background-position: center;
}
.coin {
  background-image: url("../assets/img/furryGame/coin.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
}
@media screen and (max-width: 768px) {
  .cell {
    height: 30px;
  }
}
@media screen and (min-width: 768px) {
  .cell {
    height: 60px;
  }
  #board {
    width: 600px;
  }
}
.score {
  color: #ff5252;
  h4 {
    font-weight: 800;
  }
}
.mobileBtnsWrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  @media screen and (min-width: 1025px) {
    display: none;
  }
  &__mobileBtns {
    &__leftBtnWrapper {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
