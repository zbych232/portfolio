<template>
  <div class="text-center">
    <div class="board ">
      <div
        class="board__cell "
        v-for="(element, index) in boardSize"
        :key="index"
        @click="(e) => addAliveClass(e)"
      ></div>
    </div>
<div class="btnsWrapper">
    <md-button
      class="md-warning md-round"
      @click="startFun()"
      v-if="!toggleStart"
      >Start</md-button
    >
    <md-button class="md-warning md-round" @click="stopFun()" v-if="toggleStart"
      >Stop</md-button
    >
</div>
  </div>
</template>

<script>
var $ = require("jquery");

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
      futureArray: [],
      toggleStart: false,
    };
  },
  methods: {
    addAliveClass(e) {
      e.target.classList.add("aliveClass");
    },
    computeNextGeneration() {
      for (var i = 0; i < 50; i++) {
        for (var j = 0; j < 50; j++) {
          this.futureArray.push(this.computeCellNextState(j, i));
        }
      }
    },
    computeCellNextState(x, y) {
      const cellsArray = $(".board__cell");
      let numberOfNaighbours = 0;
      if (this.calculateCellIndex(x - 1, y - 1) >= 0) {
        if (
          cellsArray[this.calculateCellIndex(x - 1, y - 1)].classList.contains(
            "aliveClass"
          )
        ) {
          numberOfNaighbours++;
        }
      }
      if (this.calculateCellIndex(x, y - 1) >= 0) {
        if (
          cellsArray[this.calculateCellIndex(x, y - 1)].classList.contains(
            "aliveClass"
          )
        ) {
          numberOfNaighbours++;
        }
      }
      if (this.calculateCellIndex(x + 1, y - 1) >= 0) {
        if (
          cellsArray[this.calculateCellIndex(x + 1, y - 1)].classList.contains(
            "aliveClass"
          )
        ) {
          numberOfNaighbours++;
        }
      }
      if (this.calculateCellIndex(x + 1, y) <= 2499) {
        if (
          cellsArray[this.calculateCellIndex(x + 1, y)].classList.contains(
            "aliveClass"
          )
        ) {
          numberOfNaighbours++;
        }
      }
      if (this.calculateCellIndex(x + 1, y + 1) <= 2499) {
        if (
          cellsArray[this.calculateCellIndex(x + 1, y + 1)].classList.contains(
            "aliveClass"
          )
        ) {
          numberOfNaighbours++;
        }
      }
      if (this.calculateCellIndex(x, y + 1) <= 2499) {
        if (
          cellsArray[this.calculateCellIndex(x, y + 1)].classList.contains(
            "aliveClass"
          )
        ) {
          numberOfNaighbours++;
        }
      }
      if (this.calculateCellIndex(x - 1, y + 1) <= 2499) {
        if (
          cellsArray[this.calculateCellIndex(x - 1, y + 1)].classList.contains(
            "aliveClass"
          )
        ) {
          numberOfNaighbours++;
        }
      }
      if (this.calculateCellIndex(x - 1, y) >= 0) {
        if (
          cellsArray[this.calculateCellIndex(x - 1, y)].classList.contains(
            "aliveClass"
          )
        ) {
          numberOfNaighbours++;
        }
      }

      if (
        cellsArray[this.calculateCellIndex(x, y)].classList.contains(
          "aliveClass"
        )
      ) {
        if (numberOfNaighbours < 2) {
          return 0;
        }
        if (numberOfNaighbours > 1 && numberOfNaighbours < 4) {
          return 1;
        }
        if (numberOfNaighbours >= 4) {
          return 0;
        }
      }
      if (
        !cellsArray[this.calculateCellIndex(x, y)].classList.contains(
          "aliveClass"
        )
      ) {
        if (numberOfNaighbours === 3) {
          return 1;
        } else {
          return 0;
        }
      }
    },
    calculateCellIndex(x, y) {
      return x + y * 50;
    },
    startFun() {
      this.toggleStart = this.toggleStart ? false : true;
      let cellsArray = document.getElementsByClassName("board__cell");

      this.intervalll = setInterval(() => {
        this.futureArray = [];
        this.computeNextGeneration();

        this.futureArray.forEach((element, index) => {
          if (element === 1) {
            cellsArray[index].classList.add("aliveClass");
          }
          if (element === 0) {
            cellsArray[index].classList.remove("aliveClass");
          }
        });

        if (this.futureArray.every((e) => e === 0)) {
          clearInterval(this.intervalll);
          this.toggleStart = this.toggleStart ? false : true;
        }
      }, 250);
    },
    stopFun() {
      this.toggleStart = this.toggleStart ? false : true;
      clearInterval(this.intervalll);
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
  @media screen and (min-width: 768px) {
    width: 800px;
  }

  &__cell {
    height: 14px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    width: 2%;
    @media screen and (max-width: 768px) {
      height: 7px;
    }
  }
}
.aliveClass {
  background-color: #5000ca;
}
.btnsWrapper{
  margin-top:10px;
}
</style>
