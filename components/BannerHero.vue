<template>
  <div class="bannerHero pos--rel" :class="{ 'is-inview': isInview }">
    <div class="bannerHero__container container container--large">
      <div class="bannerHero__contentHolder flex flex--dir-c justifyC--center">
        <h1 class="bannerHero__header ff--jura fs--52 lh--120 z--1 fw--600">
          The Highest Passive Income in Crypto
        </h1>
        <p class="bannerHero__paragraph fs--20 o--6 lh--180">
          1st Auto-Stake on ETH. Earn 150,000% APY Just By Holding.
        </p>
        <p class="bannerHero__paragraph fs--20 o--6 lh--180">
          Simple & Profitable. Brought to you by the Titano Finance Team. 
        </p>
        <div class="bannerHero__btnHolder flex">
          <a href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xB4c1896b70231402f63277ee031a632773c2A990" target="_blank">
            <BaseBtn class="bannerHero__btn" background outline>Buy Now</BaseBtn>
          </a>
          <a href="https://forms.gle/cCqzohdNxjhcGLkj7" target="_blank">
            <BaseBtn class="bannerHero__btn" outline>$100,000 in Airdrops</BaseBtn>
          </a>
        </div>
      </div>
      <!-- Images -->
      <div class="bannerHero__objectsHolder pos--abs">
        <div class="bannerHero__rocketHolder pos--abs z--2">
          <picture>
            <source media="(max-width: 500px)" srcset="/images/rocket.png" />
            <source media="(min-width: 501px)" srcset="/images/rocket.webp" />
            <img
              src="/images/rocket.png"
              class="bannerHero__rocketPng"
              alt=""
            />
          </picture>
        </div>
        <div class="bannerHero__object bannerHero__object--redRock pos--abs">
          <img src="~/assets/pngs/red-rock.png" alt="" />
        </div>
        <div class="bannerHero__object bannerHero__object--moonRock pos--abs">
          <img src="~/assets/pngs/moon-rock.png" alt="" />
        </div>
        <div class="bannerHero__object bannerHero__object--orbit pos--abs">
          <img src="~/assets/pngs/hero-orbit.webp" alt="" />
        </div>
      </div>
    </div>
    <div class="bannerHero__background pos--abs">
      <div class="bannerHero__backgroundOverlay z--0 pos--abs"></div>
      <div class="bannerHero__backgroundStars pos--abs">
        <picture>
          <source
            media="(max-width: 750px)"
            srcset="~/assets/pngs/hero-bgStarsSM.png"
          />
          <source
            media="(min-width: 751px)"
            srcset="~/assets/pngs/hero-bgStars.png"
          />
          <img src="~/assets/pngs/hero-bgStars.png" alt="" />
        </picture>
      </div>
    </div>

    <VideoModal v-if="open" :toggleModal="toggleModal" :open="open" />
  </div>
</template>
<script>
import { inview } from "~/mixins/inview.js";

export default {
  name: "BannerHero",
  mixins: [inview],
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleModal() {
      this.open = !this.open;
    },
  },
};
</script>
<style lang="scss">
.bannerHero {
  height: 100vh;
  min-height: 860px;
  padding-top: 210px;
  margin-bottom: 350px;

  &__background {
    top: 0;
    left: 0;
    height: 140%;
    width: 100%;
    pointer-events: none;
  }

  &__backgroundStars {
    top: 0;
    left: 0;
    height: 90%;
    width: 100%;
    z-index: -2;
    img {
      height: 100%;
      width: 100%;
    }
  }

  &__backgroundOverlay {
    background-image: url("~/assets/pngs/hero-gradient.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    top: 0;
    left: 0;
    height: 105%;
    width: 100%;
  }

  &__container {
    height: 100%;
  }

  &__objectsHolder {
    user-select: none;
    pointer-events: none;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &__contentHolder {
    margin-left: 10px;
  }

  &__header {
    max-width: 700px;
    margin-bottom: 25px;
    transform: translateY(-30px);
    transition: transform 0.8s, opacity 0.8s;
    opacity: 0;
  }

  &__paragraph {
    max-width: 600px;
    margin-bottom: 30px;
    transform: translateY(-30px);
    opacity: 0;
    transition: transform 0.8s, opacity 0.8s;
    transition-delay: 0.15s;
    &:first-of-type {
      margin-bottom: 10px;
    }
  }

  &__btn {
    margin-right: 10px !important;
  }

  &__btnHolder {
    opacity: 0;
    transition: opacity 0.8s, transform 0.8s;
    transform: translateY(-30px);
    transition-delay: 0.3s;
  }

  //Images

  &__rocketHolder {
    width: 42%;
    right: 0;
    height: min-content;
    top: 17%;
    transform: translate(-150px, 150px);
    transition: transform 1.5s, opacity 0.8s;
    opacity: 0;
    img {
      width: 100%;
    }
  }
  &__rocketPng {
    animation: float -1s ease-in-out infinite;
    animation-duration: 8s;
  }

  &__object {
    user-select: none;
    // added this &__obeject class so it makes it easier to target and animate
    &--redRock {
      width: 3%;
      bottom: 15%;
      left: 8%;
      // transform: translate(140%, -180%);
      animation: float 3s ease-in-out infinite;
      animation-duration: 10s;
      img {
        width: 100%;
      }
    }

    &--moonRock {
      width: 2%;
      left: 4%;
      bottom: 25%;
      // transform: translate(50%, -320%);
      animation: float 3s ease-in-out infinite;
      animation-duration: 5s;
      img {
        width: 100%;
      }
    }
    &--orbit {
      right: -2%;
      width: 57%;
      top: 15%;
      // animation: float 3s ease-in-out infinite;
      animation-duration: 12s;
      img {
        width: 100%;
      }
    }
  }

  //Inview animations

  &.is-inview {
    .bannerHero__header {
      transform: translateY(0);
      opacity: 1;
    }
    .bannerHero__paragraph {
      transform: translateY(0);
      opacity: 0.6;
    }
    .bannerHero__rocketHolder {
      transform: translate(0, 0);
      opacity: 1;
    }
    .bannerHero__btnHolder {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
//1500
@include breakpoint(sl) {
  .bannerHero {
    //Images
  }
}
//1400
@include breakpoint(xxxl) {
  .bannerHero {
    //Images
    &__object {
      &--orbit {
        width: 60%;
        top: 35%;
      }
    }
    &__rocketHolder {
      width: 45%;
      top: 35%;
    }
  }
}
//1200
@include breakpoint(xxl) {
  .bannerHero {
    &__header {
      font-size: 50px;
    }
    &__backgroundOverlay {
      // height: 155%;
    }

    //Images
    &__object {
      &--orbit {
        width: 55%;
      }
      &--redRock {
        bottom: 25%;
        left: 10%;
      }

      &--moonRock {
        left: 7%;
        bottom: 30%;
      }
    }
    &__rocketHolder {
      bottom: 10%;
    }
  }
}
//1080
@include breakpoint(xl) {
  .bannerHero {
    &__contentHolder {
      margin-left: 20px;
    }
    &__header {
      font-size: 48px;
      max-width: 640px;
    }

    //Images
    &__object {
      &--orbit {
        top: 35%;
        width: 55%;
      }
      &--redRock {
        bottom: 20%;
        left: 10%;
      }

      &--moonRock {
        left: 7%;
        bottom: 25%;
      }
    }
    &__rocketHolder {
      width: 40%;
      bottom: 15%;
    }
  }
}

//960
@include breakpoint(l) {
  .bannerHero {
    &__contentHolder {
      transform: translate(0, 10%);
      margin-left: 20px;
    }
    &__header {
      max-width: 520px;
      font-size: 36px;
    }

    &__paragraph {
      font-size: 16px;
      max-width: 480px;
    }

    //Images
    &__object {
      &--orbit {
        width: 55%;
        top: 38%;
        right: -50px;
      }
    }

    &__rocketHolder {
      width: 45%;
      top: 43%;
    }
  }
  //750
  @include breakpoint(m) {
    .bannerHero {
      padding-top: 290px;
      &__contentHolder {
        transform: translateY(-35%);

        margin-top: 280px;
      }
      //Images
      &__object {
        &--orbit {
          width: 50%;
          right: 0;
          top: 0;
          transform: translate(0, 40%);
        }
        &--redRock {
          display: none;
        }

        &--moonRock {
          display: none;
        }
      }
      &__rocketHolder {
        width: 50%;
        top: 15%;
        right: 5%;
      }
    }
  }
}
//600
@include breakpoint(s) {
  .bannerHero {
    min-height: 800px;
    &__contentHolder {
      transform: translateY(-25%);
      margin-top: 200px;
    }
    &__header {
      font-size: 32px;
      max-width: 100%;
    }
    //Images
    &__object {
      &--orbit {
        width: 50%;
      }
    }
    &__rocketHolder {
      width: 50%;
    }
  }
}
//500
@include breakpoint(xs) {
  .bannerHero {
    min-height: 700px;
    &__contentHolder {
      margin-left: 0;
      margin-top: 150px;
      transform: translateY(-10%);
      width: 100%;
    }
    &__header {
      font-size: 25px;
    }

    &__paragraph {
      font-size: 14px;
    }
    //Images
    &__object {
      &--orbit {
        width: 65%;
      }
    }
    &__rocketHolder {
      top: 25%;
      right: 5%;
      img {
        width: 80%;
      }
    }
  }
}
//400
@include breakpoint(xxs) {
  .bannerHero {
    min-height: 600px;
    &__contentHolder {
      margin-top: 150px;
    }
    &__header {
      font-size: 22px;
      // line-height: 1.4;
      margin-bottom: 15px;
    }

    &__paragraph {
      font-size: 14px;
    }

    &__btn {
      margin-right: 5px !important;
    }
    //Images
    &__object {
      &--orbit {
        width: 70%;
      }
    }
    &__rocketHolder {
      width: 65%;
    }
  }
}
//350
@include breakpoint(t) {
  .bannerHero {
    &__contentHolder {
      margin-top: 80px;
    }
    &__header {
      font-size: 19px;
      line-height: 1.4;
      margin-bottom: 15px;
    }

    &__paragraph {
      font-size: 14px;
    }

    &__rocketHolder {
      width: 65%;
    }
  }
}

@media screen and (orientation: landscape) and (min-device-width: 150px) and (max-device-width: 600px) {
  .bannerHero {
    min-height: 950px;
    &__contentHolder {
      transform: translateY(-10%);
    }
  }
}
@media screen and (orientation: landscape) and (min-device-width: 601px) and (max-device-width: 999px) {
  .bannerHero {
    min-height: 950px;
  }
}
@media screen and (orientation: landscape) and (min-device-width: 1000px) {
  .bannerHero {
    min-height: 920px;

    &__paragraph {
      font-size: 17px;
    }
  }
}

// @media screen and (max-device-height: 974px) and (max-device-width: 1209px) {
//   .bannerHero {
//     &__backgroundOverlay {
//       height: 155%;
//     }
//   }
// }
// @media screen and (min-device-width: 1210px) and (max-device-width: 1300px) {
//   .bannerHero {
//     &__backgroundOverlay {
//       height: 149%;
//     }
//   }
// }
</style>

