<template>
  <div class="iconGridItem">
    <BaseContainer
      class="
        iconGridItem__container
        flex
        alignI--center
        justifyC--center
        flex--dir-c
      "
    >
      <div class="iconGridItem__icon">
        <slot name="icon" />
      </div>
      <h3 class="iconGridItem__heading fs--24 ta--center fw--300">
        <slot name="heading" />
      </h3>
      <p class="iconGridItem__text o--5 ta--center lh--160">
        <slot name="text" />
      </p>
    </BaseContainer>
  </div>
</template>
<script>
import { inview } from "~/mixins/inview.js";

export default {
  name: "IconGridItem",
  mixins: [inview],
};
</script>

<style lang="scss">
.iconGridItem {
  width: calc(33.333% - 25px);
  opacity: 0;
  transform: translateY(30px);
  transition: transform 0.5s, opacity 0.5s;
  &__container {
    padding: 50px 24px;
    height: 100%;
  }
  &__icon {
    margin-bottom: 25px;

    * {
      height: 90px;
    }
  }
  &__heading {
    margin: 15px 0;
  }

  &__text {
    max-width: 350px;
  }

  &.is-inview {
    transform: translateY(0);
    opacity: 1;
  }
}

//1080
@include breakpoint(xl) {
  .iconGridItem {
    width: calc(33.333% - 10px);

    &__heading {
      font-size: 22px;
    }
  }
}
//960
@include breakpoint(l) {
  .iconGridItem {
    width: calc(50% - 32px);
    margin-bottom: 32px;

    &__heading {
      font-size: 22px;
    }
  }
}
//600
@include breakpoint(s) {
  .iconGridItem {
    width: 100%;
    // &__container {
    //   padding: 50px 10px;
    // }
    &__heading {
      font-size: 20px;
    }
  }
}
//500
@include breakpoint(xs) {
  .iconGridItem {
    width: 100%;
  }
}
</style>

