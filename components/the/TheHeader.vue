<template>
  <header
    class="theHeader pos--fix z--max"
    :class="{ 'theHeader--collapsed': collapsed }"
  >
    <div
      class="
        theHeader__container
        container container--large
        grid grid--flow-c
        alignI--center
      "
    >
      <div class="theHeader__icons grid grid--flow-c gap--12 justifyC--start">
        <BaseSocial
          :href="`https://t.me/BlueMoonERC`"
          onclick="window.open(this.href,'name','width=600,height=600'); return false;"
          social="telegram"
          class="theFooter__socialLink"
        />
        <BaseSocial
          :href="`https://twitter.com/BlueMoonERC`"
          onclick="window.open(this.href,'name','width=600,height=600'); return false;"
          social="twitter"
          class="theFooter__socialLink"
        />
        <BaseSocial
          :href="`https://www.dextools.io/app/en/ether/pair-explorer/0x9408694da0108535fb72f445ccd62b5dd5125a7b`"
          onclick="window.open(this.href,'name','width=600,height=600'); return false;"
          social="dextools"
          class="theFooter__socialLink"
        />
      </div>
      <NuxtLink to="/" class="theHeader__logo">
        <IconLogo />
      </NuxtLink>
      <BaseBtn
        :disabled="true"
        class="theHeader__cta"
        link=""
        external
        >App Coming Soon</BaseBtn
      >
    </div>
  </header>
</template>

<script>
import IconLogo from "~/assets/svgs/logo.svg?inline";

export default {
  name: "TheHeader",
  components: {
    IconLogo
  },
  data() {
    return {
      collapsed: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        this.collapsed = true;
      } else {
        this.collapsed = false;
      }
    });
  },
};
</script>

<style lang="scss">
.theHeader {
  top: 0;
  right: 0;
  left: 0;
  padding: 42px 0;
  transition: padding 0.3s ease, opacity 0.3s ease, background 0.3s ease;

  &--collapsed {
    padding: 21px 0;
    background: $midnightblue;

    .theHeader__cta {
      opacity: 0.7;
    }
  }

  &__container {
    grid-template-columns: 1fr auto 1fr;
  }

  &__logo {
    width: 184px;
  }

  &__cta {
    justify-self: end;
  }
}

// 750
@include breakpoint(m) {
  .theHeader {
    &__container {
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
    }

    &__icons {
      display: none;
    }
  }
}

// 500
@include breakpoint(xs) {
  .theHeader {
    padding: 16px 0;

    &__logo {
      width: 120px;
    }

    // &__cta.baseBtn {
    //   padding: 16px;
    //   font-size: 14px;
    // }
  }
}

// 400
@include breakpoint(xxs) {
  .theHeader {
    &__cta.baseBtn {
      font-size: 14px;
    }
  }
}
// 350
@include breakpoint(t) {
  .theHeader {
    &__logo {
      margin: 0 8px 0 -18px;
    }

    // &__cta.baseBtn {
    //   padding: 8px;
    // }
  }
}
</style>
