<template>
  <a
    :class="'baseSocial--' + social"
    class="baseSocial flex alignI--center justifyC--center"
    :href="href"
    target="_blank"
  >
    <IconTwitter v-if="social === 'twitter'" class="baseSocial__icon" />
    <IconTelegram v-if="social === 'telegram'" class="baseSocial__icon" />
    <IconDextools v-if="social === 'dextools'" class="baseSocial__icon" />
  </a>
</template>

<script>
import IconTwitter from "~/assets/svgs/socials/twitter.svg?inline";
import IconDextools from "~/assets/svgs/socials/dextools.svg?inline";
import IconTelegram from "~/assets/svgs/socials/telegram.svg?inline";
export default {
  name: "BaseSocial",
  components: {
    IconTwitter,
    IconTelegram,
    IconDextools,
  },

  props: {
    social: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.baseSocial {
  width: 48px;
  height: 48px;
  border: 2px solid rgba($bluemoonblue, 0.4);
  border-radius: 50%;
  transition: border 0.3s;
  margin-right: 12px;

  &:nth-last-child(1) {
    margin-right: 0;
  }

  &:hover {
    border-color: $bluemoonblue;
  }

  &__icon {
    width: 20px;
    height: 20px;
    fill: $bluemoonblue;
  }
}

/*------------------------------------------*/

// < 350px
@include breakpoint(t) {
  .baseSocial {
    width: 50px;
    height: 50px;
  }
}
</style>
