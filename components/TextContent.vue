<template>
  <div
    class="
      textContent
      container
      ta--center
      flex
      alignI--center
      flex--dir-c
      pos--rel
    "
  >
    <h2 class="textContent__header ff--jura fs--48 fw--300">About Blue Moon Team</h2>
    <p class="textContent__paragraph fs--18 o--5 lh--180">
      The Blue Moon Team contains OG devs from the famous Titano Auto-Stake project on BSC that hit well over a 100M Market Cap and first started off the Auto-Stake Token craze. We're bringing that expertise to Blue Moon to revolutionize the Crypto space once again, but this time on the biggest network, Ethereum. 
    </p>
    <!-- Left Bg Images -->
    <div class="textContent__object textContent__object--planet pos--abs">
      <img src="~/assets/pngs/planet.png" alt="" />
    </div>
    <div class="textContent__object textContent__object--moonRock-1 pos--abs">
      <img src="~/assets/pngs/moon-rock.png" alt="" />
    </div>
    <!-- Stars -->
    <div class="textContent__bgStar--1 pos--abs">
      <img src="~/assets/pngs/star.png" alt="" />
    </div>
    <div class="textContent__bgStar--2 pos--abs">
      <img src="~/assets/pngs/star.png" alt="" />
    </div>
    <div class="textContent__bgStar--3 pos--abs">
      <img src="~/assets/pngs/star.png" alt="" />
    </div>
    <!-- Right Bg Images -->
    <div class="textContent__object textContent__object--redRock pos--abs">
      <img src="~/assets/pngs/red-rock.png" alt="" />
    </div>
    <div class="textContent__object textContent__object--moonRock-2 pos--abs">
      <img src="~/assets/pngs/moon-rock.png" alt="" />
    </div>
    <div class="textContent__rocket pos--abs z--2">
      <img src="~/assets/pngs/rocket.png" alt="" />
    </div>
    <!-- Stars -->
    <div class="textContent__bgStar--4 pos--abs">
      <img src="~/assets/pngs/star.png" alt="" />
    </div>
    <div class="textContent__bgStar--5 pos--abs">
      <img src="~/assets/pngs/star.png" alt="" />
    </div>
    <div class="textContent__bgStar--6 pos--abs">
      <img src="~/assets/pngs/star.png" alt="" />
    </div>
    <div class="textContent__backgroundFade pos--abs"></div>
  </div>
</template>
<script>
import { inview } from "~/mixins/inview.js";
export default {
  name: "TextContent",
  mixins: [inview],
};
</script>
<style lang="scss">
.textContent {
  //   margin: 40px 0 75px;
  padding: 75px 0 150px;
  background: url("~/assets/pngs/bg-stars.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

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

  &__header {
    margin-bottom: 20px;
    padding-top: 70px;
    transform: translateX(-30px);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }
  &__paragraph {
    max-width: 610px;
    margin-bottom: 200px;
    transform: translateX(30px);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }

  //Background Images

  &__object {
    user-select: none;
    pointer-events: none;
    &--planet {
      left: 8%;
      top: 27%;
      width: 5.5%;
      // transform: translate(90px, 50px);
      animation: float 3s ease-in-out infinite;
      animation-duration: 10s;
      img {
        width: 100%;
      }
    }

    &--redRock {
      right: 14%;
      top: 25%;
      width: 4%;
      // transform: translate(-200px, 50px);
      animation: float 3s ease-in-out infinite;
      animation-duration: 10s;
      img {
        width: 100%;
      }
    }

    &--moonRock {
      &-1 {
        left: 15%;
        top: 43%;
        width: 4%;
        // transform: translate(200px, 150px);
        animation: float 3s ease-in-out infinite;
        animation-duration: 7s;
        img {
          width: 100%;
        }
      }
      &-2 {
        top: 35%;
        right: 8%;
        width: 2%;
        // transform: translate(-120px, 120px);
        animation: float 3s ease-in-out infinite;
        animation-duration: 5s;
        img {
          width: 100%;
        }
      }
    }
  }

  &__rocket {
    user-select: none;
    pointer-events: none;
    width: 24%;
    top: 58%;
    right: 13%;
    // transform: translate(-55%, 85%);
    animation: float 3s ease-in-out infinite;
    animation-duration: 9s;
    img {
      width: 100%;
      transform: translate(-200px, 100px);
      opacity: 0;
      transition: transform 1s, opacity 0.5s;
      transition-delay: 0.3s;
    }
  }

  &__bgStar {
    user-select: none;
    //Left
    &--1 {
      bottom: 40%;
      left: 7%;
      transform: rotate(55deg);
      opacity: 0.5;
      width: 1.5%;
      animation: pulse 5s infinite;
      img {
        width: 100%;
      }
    }
    &--2 {
      bottom: 30%;
      left: 9%;
      transform: rotate(50deg);
      opacity: 0.5;
      width: 2.5%;
      animation: pulse 7s infinite;
      img {
        width: 100%;
      }
    }
    &--3 {
      bottom: 18%;
      left: 28%;
      opacity: 0.5;
      width: 4%;
      animation: pulse 8s infinite;
      img {
        width: 100%;
      }
    }
    //Right
    &--4 {
      top: 10%;
      right: 20%;
      transform: rotate(45deg);
      opacity: 0.5;
      width: 4%;
      animation: pulse 4s infinite;
      img {
        width: 100%;
      }
    }
    &--5 {
      top: -5%;
      right: 10%;
      opacity: 0.5;
      width: 2.5%;
      animation: pulse 7s infinite;
      img {
        width: 100%;
      }
    }
    &--6 {
      top: 0%;
      right: 7%;
      opacity: 0.5;
      width: 1.5%;
      animation: pulse 6s infinite;
      img {
        width: 100%;
      }
    }
  }
  //inview animations
  &.is-inview {
    .textContent__header {
      transform: translateX(0);
      opacity: 1;
    }
    .textContent__paragraph {
      transform: translateX(0);
      opacity: 0.5;
    }
    .textContent__rocket {
      img {
        transform: translate(0, 0);
        opacity: 1;
      }
    }
  }
}

/*------------------------------------------*/
// < 1400px
@include breakpoint(xxxl) {
  .textContent {
    &__header {
      font-size: 44px;
    }
  }
}

/*------------------------------------------*/
// < 1200px
@include breakpoint(xxl) {
  .textContent {
    &__header {
      font-size: 40px;
    }
  }
}

/*------------------------------------------*/
// < 1080px
@include breakpoint(xl) {
  .textContent {
    &__header {
      font-size: 38px;
    }

    //Objects
    &__object {
      &--planet {
        left: 8%;
        top: 70%;
        width: 5.5%;
      }

      &--redRock {
        right: 14%;
        top: 0%;
        width: 4%;
      }

      &--moonRock {
        &-1 {
          left: 17%;
          top: 85%;
          width: 4%;
        }
        &-2 {
          top: 10%;
          right: 8%;
          width: 2%;
        }
      }
    }

    &__rocket {
      width: 24%;
      top: 58%;
      right: 13%;
    }
  }
}

/*------------------------------------------*/
// < 960px
@include breakpoint(l) {
  .textContent {
    &__menu {
      margin: 50px 0 50px;
    }

    &__header {
      font-size: 36px;
    }

    //Objects

    &__object {
      &--planet {
        left: 8%;
        top: 70%;
        width: 5.5%;
      }

      &--redRock {
        right: 14%;
        top: 0%;
        width: 4%;
      }

      &--moonRock {
        &-1 {
          left: 17%;
          top: 85%;
          width: 4%;
        }
        &-2 {
          top: 10%;
          right: 8%;
          width: 2%;
        }
      }
    }

    &__rocket {
      width: 24%;
      top: 58%;
      right: 13%;
    }
  }
}

/*------------------------------------------*/
// < 750px
@include breakpoint(m) {
  .textContent {
    margin: 30px 0 150px;

    &__header {
      font-size: 28px;
    }

    &__paragraph {
      padding: 0 10px;
    }
    &__menu {
      margin: 30px 0 25px;
    }
    &__rocket {
      top: 60%;
    }
  }
}

/*------------------------------------------*/
// < 600px
@include breakpoint(s) {
  .textContent {
    &__paragraph {
      padding: 0 25px;
    }
    //Objects
    &__object {
      &--planet {
        width: 7%;
        top: 65%;
      }

      &--redRock {
        width: 6.5%;
        top: 3%;
      }

      &--moonRock {
        &-1 {
          width: 6%;
          top: 75%;
        }
        &-2 {
          width: 3.5%;
        }
      }
    }
    &__bgStar {
      //Left
      &--2 {
        // bottom: -40%;
        left: 25%;
      }
      &--3 {
        // bottom: -40%;
        left: 40%;
        bottom: 25%;
      }
    }
    &__rocket {
      width: 30%;
    }
  }
}
/*------------------------------------------*/
// < 500px
@include breakpoint(xs) {
  .textContent {
    margin: 25px 0 80px;
    &__header {
      font-size: 24px;
    }
    &__paragraph {
      font-size: 16px;
    }
  }
}
/*------------------------------------------*/
// < 400px
@include breakpoint(xxs) {
  .textContent {
    margin: 15px 0 0;

    &__rocket {
      top: 65%;
      width: 35%;
    }
    //Objects
    // &__object {
    //   &--planet {
    //     left: 40px;
    //     top: 132%;
    //     width: 7%;
    //   }

    //   &--redRock {
    //     right: 100px;
    //     top: -33%;
    //     width: 6.5%;
    //   }

    //   &--moonRock {
    //     &-1 {
    //       left: 100px;
    //       top: 115%;
    //       width: 6%;
    //     }
    //     &-2 {
    //       top: -23%;
    //       right: 50px;
    //       width: 3.5%;
    //     }
    //   }
    // }
    // &__bgStar {
    //   //Right
    //   &--4 {
    //     top: -50%;
    //     right: 42%;
    //   }
    //   &--5 {
    //     top: -60%;
    //     right: 25%;
    //   }
    //   &--6 {
    //     top: -56%;
    //     right: 20%;
    //   }
    // }
  }
}
@include breakpoint(t) {
  .textContent {
    margin-bottom: 0;
  }
}
</style>

