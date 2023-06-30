<template>
  <div class="baseContainer z--1">
    <slot />
  </div>
</template>
<script>
export default {
  name: "BaseContainer",
};
</script>
<style lang="scss">
.baseContainer {
  background: $midnightblue;
//   padding: 25px;
  border: 1px solid #1f2846;
  border-radius: 15px;
}
</style>