<template>
  <parallax class="section page-header header-filter" :style="headerStyle">
    <div class="container">
      <div class="md-layout">
        <div
          class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
        >
          <h1 class="title"><slot name="title"></slot></h1>
          <h4>
            <slot name="description"></slot>
          </h4>
          <br />
          <md-button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            class="md-success md-lg"
            target="_blank"
            ><i class="fas fa-play"></i> Watch video</md-button
          >
        </div>
      </div>
    </div>
  </parallax>
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
