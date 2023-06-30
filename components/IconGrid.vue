<template>
  <div class="iconGrid pos--rel">
    <div class="container container--large">
      <div
        class="iconGrid__textHolder ta--center flex alignI--center flex--dir-c"
      >
        <h2 class="iconGrid__header ff--jura fs--48 fw--300">
          The $BMOON Token
        </h2>
        <p class="iconGrid__text o--5 fs--18 lh--180 ls--l50">
          As a member of the Blue Moon Army, you'll earn $BMOON, the currency that pays you. Learn more below.
        </p>
        &nbsp;
        <a href="https://blue-moon-1.gitbook.io/blue-moon/" target="_blank">
          <BaseBtn class="bannerHero__btn" background outline>View Whitepaper</BaseBtn>
        </a>
      </div>
      <div class="iconGrid__items flex justifyC--between">
        <IconGridItem>
          <template #icon>
            <IconToken2 />
          </template>
          <template #heading>Auto-Stake.</template>
          <template #text
            >Earn 1% Every 12 Hours (150,000% APY) just by holding $BMOON in your wallet.</template
          >
        </IconGridItem>
        <IconGridItem class="pos--rel">
          <template #icon>
            <IconToken1 />
          </template>
          <template #heading>Taxes</template>
          <template #text
            >0% Buy Fee Always. 10% Buy Fee goes towards Marketing & Auto-Liquidity.</template
          >
        </IconGridItem>
        <IconGridItem>
          <template #icon>
            <IconToken3 />
          </template>
          <template #heading>Blue Moon Ecosystem</template>
          <template #text
            >$BMOON is the key to an Ecosystem of Utility, starting with the $BMOON Lottery.</template
          >
        </IconGridItem>
      </div>
    </div>
    <div class="iconGrid__backgroundFade pos--abs"></div>
  </div>
</template>
<script>
import IconToken1 from "~/assets/svgs/token-1.svg?inline";
import IconToken2 from "~/assets/svgs/token-2.svg?inline";
import IconToken3 from "~/assets/svgs/token-3.svg?inline";

import { inview } from "~/mixins/inview.js";

export default {
  name: "IconGrid",
  components: {
    IconToken1,
    IconToken2,
    IconToken3,
  },
  mixins: [inview],
};
</script>
<style lang="scss">
.iconGrid {
  padding-top: 150px;
  padding-bottom: 50px;

  background: url("~/assets/pngs/bg-stars.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &__backgroundFade {
    left: 0;
    width: 100%;
    height: 40px;
    bottom: 0%;
    background: linear-gradient(
      to bottom,
      rgba($midnightblue, 0),
      rgba($midnightblue, 1)
    );
  }

  &__textHolder {
    margin-bottom: 43px;
    padding-top: 25px;
  }

  &__header {
    transform: translateY(30px);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }

  &__text {
    max-width: 540px;
    margin: 40px 0 0;
    transform: translateY(30px);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
    transition-delay: 0.15s;
  }

  &.is-inview {
    .iconGrid__header {
      transform: translateY(0);
      opacity: 1;
    }
    .iconGrid__text {
      transform: translateY(0);
      opacity: 0.5;
    }
  }
}

.iconGridItem {
  transition-delay: 0.15s;

  &:nth-of-type(2) {
    transition-delay: 0.3s;
  }

  &:nth-of-type(3) {
    transition-delay: 0.45s;
  }
}
/*------------------------------------------*/
// < 1400px
@include breakpoint(xxxl) {
  .iconGrid {
    &__header {
      font-size: 44px;
    }
  }
}

/*------------------------------------------*/
// < 1200px
@include breakpoint(xxl) {
  .iconGrid {
    &__header {
      font-size: 40px;
    }
  }
}

/*------------------------------------------*/
// < 1080px
@include breakpoint(xl) {
  .iconGrid {
    &__header {
      font-size: 38px;
    }
  }
}

/*------------------------------------------*/
// < 960px
@include breakpoint(l) {
  .iconGrid {
    padding-top: 90px;
    &__header {
      font-size: 36px;
    }
    &__items {
      justify-content: space-around;
    }
  }
}

/*------------------------------------------*/
// < 750px
@include breakpoint(m) {
  .iconGrid {
    &__header {
      font-size: 28px;
    }
  }
}

/*------------------------------------------*/
// < 500px
@include breakpoint(xs) {
  .iconGrid {
    &__header {
      font-size: 24px;
      margin-bottom: 16.5px;
    }

    &__textHolder {
      max-width: 100%;
    }

    &__text {
      max-width: 100%;
      margin: 20px 0 0;
      font-size: 16px;
    }
  }
}
/*------------------------------------------*/
// < 400px
@include breakpoint(xxs) {
  .iconGrid {
    padding-top: 30px;
  }
}
</style>

