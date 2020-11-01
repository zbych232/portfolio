<template>
  <div class="main main-raised">
    <div class="section">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
          >
            <div class="row" id="board">
              <div
                class="cell col-1"
                v-for="(element, index) in this.numberOfCells"
                :key="index"
              ></div>
            </div>
            <div class="text-center score">
              <h4>Wynik: {{ this.score }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modalBackground" v-if="!isGameStarted"></div>
    <div class="modalWrapper" v-if="!isGameStarted">
      <div class="modalWindow col-lg-3  text-center">
        <h2 v-if="!isGameLost">Furry Game</h2>
        <h2 v-else>Przegrana</h2>
        <p v-if="!isGameLost">
          Steruj Furrym za pomocą strzałek.<br />
          Postaraj się zebrać jak najwięcej monet. Powodzenia!
        </p>

        <p v-else>Zebrałeś {{ this.score }} monet!<br />Spróbuj jeszcze raz!</p>
        <md-button class="md-success md-round" @click="startGame()"
          >Rozpocznij grę</md-button
        >
      </div>
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
      return x + y * 12;
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
        this.furryPosition.x > 11 ||
        this.furryPosition.x < 0 ||
        this.furryPosition.y > 11 ||
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
  background-size: 70%;
  background-position: center;
}
.coin {
  background-image: url("../assets/img/furryGame/coin.png");
  background-size: 70%;
  background-position: center;
}
@media screen and (max-width: 768px) {
  .cell {
    height: 30px;
  }
}
@media screen and (min-width: 768px) {
  .cell {
    height: 44px;
  }
}
.score {
  color: green;
}
.modalBackground {
  z-index: 9;
  background-color: black;
  opacity: 0.8;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modalWrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modalWindow {
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    z-index: 99;
  }
}
</style>
