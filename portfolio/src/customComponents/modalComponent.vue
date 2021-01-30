<template>
  <div>
    <div class="modalBackground"></div>
    <div class="modalWrapper">
      <div class="modalWindow text-center  md-size-50  md-small-size-90 md-layout-item">
        <slot name="title"></slot>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalComponent",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg"),
    },
  },
  methods: {
    closeModal: function() {
      this.$emit("close");
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
