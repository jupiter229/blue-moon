<template>
  <div class="statsModuleItem">
    <p class="statsModuleItem__label flex fw--300 o--7">
      <slot name="label" />
    </p>
    <p class="statsModuleItem__value flex ff--jura fs--58">
      <slot name="value" />
    </p>
  </div>
</template>
<script>
import { inview } from "~/mixins/inview.js";
export default {
  name: "StatsModuleItem",
  mixins: [inview],
};
</script>
<style lang="scss">
.statsModuleItem {
  transform: translateY(30px);
  opacity: 0;
  transition: transform 0.5s, opacity 0.5s;
  &__label {
    margin-bottom: 5px;
  }

  &.is-inview {
    transform: translateY(0);
    opacity: 1;
  }
}

//1080
@include breakpoint(xl) {
  .statsModuleItem {
    &__value {
      font-size: 45px;
    }
  }
}
//960
@include breakpoint(l) {
  .statsModuleItem {
    &__value {
      font-size: 40px;
    }
  }
}
//600
@include breakpoint(s) {
  .statsModuleItem {
    &__value {
      font-size: 32px;
    }
  }
}
</style>
