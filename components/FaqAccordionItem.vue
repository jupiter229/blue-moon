<template>
  <div
    :class="[
      isOpen ? 'faqAccordionItem--open' : 'faqAccordionItem--closed',
      { 'is-inview': isInview },
    ]"
    class="faqAccordionItem flex pos--rel"
    @click="isOpen = !isOpen"
  >
    <div class="faqAccordionItem__content">
      <p class="faqAccordionItem__header fs--20 o--9">
        <slot name="header" />
      </p>
      <p
        :class="
          isOpen
            ? 'faqAccordionItem__text--open'
            : 'faqAccordionItem__text--closed'
        "
        class="faqAccordionItem__text lh--160"
      >
        <slot name="text" />
      </p>
    </div>
    <div class="faqAccordionItem__iconHolder pos--abs">
      <div
        :class="isOpen ? 'faqAccordionItem__icon--open' : ''"
        class="faqAccordionItem__icon pos--rel"
      >
        <!-- <IconCross /> -->
      </div>
    </div>
  </div>
</template>
<script>
// import IconCross from "~/assets/svgs/interface/cross-2.svg?inline";
import { inview } from "~/mixins/inview.js";

export default {
  name: "FaqAccordionItem",
  mixins: [inview],
  components: {
    // IconCross,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
<style lang="scss">
.faqAccordionItem {
  border-bottom: 1px solid rgba(#1f2846, 0.6);
  border-left: none;
  border-right: none;
  padding: 35px 30px;
  width: 800px;
  overflow: hidden;
  cursor: pointer;

  transition: max-height 0.5s, transform 0.5s, opacity 0.5s;
  transform: translateX(30px);
  opacity: 0;

  &:first-of-type {
    border-top: 1px solid rgba(#1f2846, 0.6);
  }

  &__header {
    margin-bottom: 20px;
  }
  &__text {
    max-width: 625px;
    padding: 5px 0 10px;
    transition: 0.5s;

    &--open {
      opacity: 0.5;
    }
    &--closed {
      opacity: 0;
    }
  }

  &--closed {
    max-height: 90px;
  }

  &--open {
    max-height: 1000px;
  }

  &__iconHolder {
    width: fit-content;
    height: fit-content;
    right: 5%;
    top: 45px;
    transform: translateY(-50%);
  }

  &__icon {
    height: 18px;
    width: 18px;
    transition: transform 0.3s;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 1px;
      top: 50%;
      background: white;
      transform: translateY(-50%);
      opacity: 1;
      display: block;
      transition: opacity 0.3s ease-in-out;
    }

    &::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      background: white;
      display: block;
      left: 50%;
      transform: translateX(-50%);
      transition: all 0.3s ease-in-out;
    }
    &--open {
      transform: rotate(45deg);

      &::before {
        opacity: 0;
      }

      &::after {
        transform: rotate(45deg);
        opacity: 1;
      }
    }
  }

  //inview animation
  &.is-inview {
    transform: translateX(0);
    opacity: 1;
  }
}

/*------------------------------------------*/
// < 960px
@include breakpoint(l) {
  .faqAccordionItem {
    width: 100%;
    // &__icon {
    //   right: 7%;
    //   position: absolute;
    // }
  }
}

/*------------------------------------------*/
// < 750px
@include breakpoint(m) {
  .faqAccordionItem {
    width: 100%;
    padding: 30px 15px;
    padding-left: 0;
    &__header {
      font-size: 18px;
      max-width: 80%;
    }
  }
}
/*------------------------------------------*/
// < 400px
@include breakpoint(xxs) {
  .faqAccordionItem {
    &__header {
      font-size: 16px;
    }

    &__text {
      font-size: 14px;
    }
  }
}
</style>

