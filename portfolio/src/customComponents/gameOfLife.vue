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
            <button @click="startFun()">Start</button>
          </div>
        </div>
      </div>
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
        switch (numberOfNaighbours) {
          case numberOfNaighbours < 2:
            return 0;
            break;
          case numberOfNaighbours > 1 && numberOfNaighbours < 4:
            return 1;
            break;
          case numberOfNaighbours >= 4:
            return 0;
            break;
        }
      } else {
        if (numberOfNaighbours === 3) {
          return 1;
        }
      }
    },
    calculateCellIndex(x, y) {
      return x + y * 50;
    },
    startFun() {
      let cellsArray = document.getElementsByClassName("board__cell");
      var intervalll = setInterval(() => {
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

        if (this.futureArray.every((e) => e === undefined)) {
          clearInterval(intervalll);
        }
      }, 250);
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
  background-color: black;
}
</style>
