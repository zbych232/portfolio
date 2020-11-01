<template>
  <div class="main main-raised">
    <div class="section">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
          >
            Game of Life
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

<style lang="scss"></style>
