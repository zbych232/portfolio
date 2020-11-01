<template>
  <div>
    <b-container class="bv-example-row">
  <b-row>
    <b-col>Game of life</b-col>
    <b-col>Game of life</b-col>
    <b-col>Game of life</b-col>
  </b-row>
</b-container>
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
