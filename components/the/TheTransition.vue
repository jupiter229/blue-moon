<template>
  <div class="theTransition grid placeI--center pos--fix z--max o--0">
    <div class="theTransition__loader loadingCircle" />
  </div>
</template>

<script>
export default {
  name: 'TheTransition'
}
</script>

<style lang="scss">
.theTransition {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $white;
  pointer-events: none;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease, background 0.3s ease;

  &.show {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }
}
</style>
