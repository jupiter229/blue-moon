<template>
  <NuxtLink
    v-if="link && !external"
    :to="link"
    :class="{ 'baseBtn--background': background }"
    class="baseBtn pos--rel align--center"
  >
    <p class="baseBtn__label ff--jura fw--700 ls--t20 z--1 pos--rel">
      <slot />
    </p>
  </NuxtLink>

  <a
    v-else-if="link && external"
    :href="link"
    class="baseBtn pos--rel align--center"
    target="_blank"
    :class="{
      'baseBtn--disabled': disabled,
      'baseBtn--background': background,
    }"
  >
    <p class="baseBtn__label ff--jura fw--500 ls--t20 fs--16 z--1 pos--rel">
      <slot />
    </p>
  </a>

  <button
    v-else
    class="baseBtn pos--rel align--center"
    :class="{
      'baseBtn--outline': outline,
      'baseBtn--play': play,
      'baseBtn--background': background,
    }"
    @click="click"
  >
    <p class="baseBtn__label ff--jura fw--700 ls--t20 z--1 pos--rel">
      <slot />
    </p>
  </button>
</template>

<script>
export default {
  name: "BaseBtn",
  props: {
    link: {
      type: String,
      default: "",
    },
    external: {
      type: Boolean,
      default: false,
    },
    click: {
      type: Function,
      default: () => {},
    },
    outline: {
      type: Boolean,
      default: false,
    },
    play: {
      type: Boolean,
      default: false,
    },
    background: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.baseBtn {
  @include buttonReset;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.04em;
  white-space: nowrap;
  color: white;
  border: 1px solid $bluemoonblue;
  border-radius: 24px;

  &--background {
    &::after {
      position: absolute;
      content: "";
      background: linear-gradient(
        65deg,
        rgba(0, 127, 255, 1) 0%,
        rgba(102, 204, 255, 1) 100%
      );
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 24px;
      transition: opacity 0.3s ease;
    }
  }

  &--disabled {
    cursor: default;
    pointer-events: none;
    background: $disabled;
    border: 1px solid $disabled;

    p {
      opacity: 0.24;
    }
  }

  &:hover {
    &::after {
      opacity: 0;
    }
  }

  &--outline {
    padding: 12px 28px;
    background: 0;
    border: 1px solid $bluemoonblue;
    transition: border 0.3s;

    &:hover {
      border-color: white;
    }
  }

  &--play {
    position: relative;
    padding-left: 64px;

    &::before {
      position: absolute;
      content: "";
      left: 40px;
      bottom: 50%;
      transform: translateY(50%);
      border: 6px solid transparent;
      border-right: 0;
      border-left: 9px solid $bluemoonblue;
    }
  }
}
//600
@include breakpoint(s) {
  .baseBtn {
    padding: 12px 25px;
  }
}
//400
@include breakpoint(xxs) {
  .baseBtn {
    padding: 11px 18px;
    font-size: 14px;
  }
}
//350
@include breakpoint(t) {
  .baseBtn {
    padding: 11px 15px;
  }
}
</style>
