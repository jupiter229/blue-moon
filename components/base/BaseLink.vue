<template>
  <div v-if="parentLink" class="baseLink">
    <p class="baseLink__label"><slot /></p>
  </div>

  <NuxtLink v-else-if="!external" :to="link" class="baseLink">
    <p class="baseLink__label"><slot /></p>
  </NuxtLink>

  <a v-else :href="link" target="_blank" class="baseLink">
    <p class="baseLink__label"><slot /></p>
  </a>
</template>

<script>
export default {
  name: "BaseLink",
  props: {
    parentLink: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: "",
    },
    external: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.baseLink {
  padding: 4px 0;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 1px solid rgba(white, 0.4);
  transition: border 0.3s;

  &:hover {
    border-color: white;
  }
}
</style>
