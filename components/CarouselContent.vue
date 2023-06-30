<template>
  <section
    class="
      carouselContent
      flex
      container container--small
      justifyC--between
      alignI--center
      pos--rel
    "
  >

    <div class="carouselContent__overlay" />
   
    <div class="carouselContent__objects pos--abs">
      <img
        class="
          carouselContent__object carouselContent__object--token-1
          pos--abs
          z--1
        "
        src="~/assets/pngs/token.png"
        alt=""
      />
      <img
        class="
          carouselContent__object carouselContent__object--token-2
          pos--abs
          z--1
        "
        src="~/assets/pngs/token-small.png"
        alt=""
      />
      <div class="carouselContent__bgStar--1 pos--abs z--1">
        <img src="~/assets/pngs/star.png" alt="" />
      </div>
      <div class="carouselContent__bgStar--2 pos--abs z--1">
        <img src="~/assets/pngs/star.png" alt="" />
      </div>
      <div class="carouselContent__bgStar--3 pos--abs z--1">
        <img src="~/assets/pngs/star.png" alt="" />
      </div>
    </div>
    <div class="carouselContent__background z--0 pos--abs"></div>
  </section>
</template>



<style lang="scss">
.carouselContent {
  flex-direction: row;
  margin: 225px auto 200px;

  

  &__image {
    width: 100%;
    // top: 0;
    // left: 0;
    padding: 0 33px 0 42px;
    margin-top: -88px;
  }


  &__objects {
    width: 100%;
    height: 300px;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }

  &__object {
    user-select: none;
    &--token-1 {
      width: 7%;
      bottom: -100%;
      left: 10%;
      animation: float 2s ease-in-out infinite;
      animation-duration: 7s;
    }
    &--token-2 {
      left: 5%;
      bottom: -65%;
      width: 5%;
      animation: float 2s ease-in-out infinite;
      animation-duration: 11s;
    }
  }

  &__bgStar {
    user-select: none;
    //Left
    &--1 {
      bottom: -49%;
      left: 16%;
      transform: rotate(55deg);
      opacity: 0.6;
      width: 1.5%;
      animation: pulse 5s infinite;
      img {
        width: 100%;
      }
    }
    &--2 {
      bottom: -62%;
      left: 18%;
      opacity: 0.8;
      width: 2%;
      animation: pulse 7s infinite;
      img {
        width: 100%;
      }
    }
    &--3 {
      bottom: -90%;
      left: 5%;
      opacity: 0.8;
      width: 2%;
      animation: pulse 8s infinite;
      img {
        width: 100%;
      }
    }
  }


}

/*------------------------------------------*/
// < 1600px
@include breakpoint(ssl) {
  .carouselContent {
    &__overlay {
      &:after {
        right: -5%;
      }
    }
  }
}

/*------------------------------------------*/
// < 1400px
@include breakpoint(xxxl) {
  .carouselContent {
    &__header {
      font-size: 44px;
    }
  }
}

/*------------------------------------------*/
// < 1200px
@include breakpoint(xxl) {
  .carouselContent {
    flex-direction: column;
    align-items: flex-start;

    &__header {
      font-size: 40px;
    }
    .navigation-wrapper {
      // position: relative;
      width: 900px;
      // margin-right: 0;
    }
  }
}

/*------------------------------------------*/
// < 1080px
@include breakpoint(xl) {
  .carouselContent {
    &__header {
      font-size: 38px;
    }

    &__textHolder {
      padding-left: 20px;
    }
    .navigation-wrapper {
      width: 800px;
    }
  }
}

/*------------------------------------------*/
// < 960px
@include breakpoint(l) {
  .carouselContent {
    margin-bottom: 350px;
    margin-top: 175px;

    &__header {
      font-size: 36px;
      margin-bottom: 20px;
    }
    .navigation-wrapper {
      width: 100%;
      margin-right: 0;
    }

    &__text {
      margin-bottom: 15px;
    }

    &__textHolder {
      width: 75%;
      margin-bottom: 50px;
    }

    // &__buttonHolder {
    //   left: 2%;
    // }

    &__overlay::after {
      width: 15%;
      bottom: 0;
      height: 60%;
      right: 0;
    }

    &__object {
      &--token-1 {
        width: 10%;
      }
      &--token-2 {
        width: 7%;
      }
    }

    &__bgStar {
      &--1 {
        bottom: -53%;
      }
      &--2 {
        width: 4%;
        bottom: -66%;
      }

      &--3 {
        width: 4%;
      }
    }
  }
}

/*------------------------------------------*/
// < 750px
@include breakpoint(m) {
  .carouselContent {
    &__textHolder {
      width: 100%;
      max-width: 100%;
      margin-bottom: 50px;
    }

    &__contentHolder {
      box-shadow: 0px 0px 10px rgba(200, 200, 200, 0.2);
    }

    .navigation-wrapper {
      width: 150%;
    }
    &__header {
      font-size: 34px;
    }

    &__buttonHolder {
      right: 0;
    }
  }
}

/*------------------------------------------*/
// < 600px
@include breakpoint(s) {
  .carouselContent {
    margin-bottom: 250px;
    padding-bottom: 75px;
    margin-top: 125px;
    &__slideTitle {
      font-size: 20px;
      margin-bottom: 16.5px;
    }

    &__header {
      font-size: 32px;
      margin-bottom: 20px;
    }

    &__text {
      font-size: 16px;
      margin-bottom: 15px;
    }

    // &__buttonHolder,
    // &__overlay {
    //   display: none;
    // }

    &__image {
      width: 350px;
      // margin-top: -126px;
    }

    .navigation-wrapper {
      width: 100%;
    }

    &__object {
      &--token-1 {
        width: 16%;
        bottom: -70%;
        left: 15%;
      }
      &--token-2 {
        width: 12%;
        bottom: -35%;
      }
    }

    &__bgStar {
      &--1 {
        width: 2.5%;
        bottom: -25%;
        left: 28%;
      }
      &--2 {
        left: 33%;
        width: 5%;
        bottom: -35%;
      }

      &--3 {
        bottom: -64%;
        left: 5%;
        width: 6%;
      }
    }
  }
}

/*------------------------------------------*/
// < 500px
@include breakpoint(xs) {
  .carouselContent {
    &__textHolder {
      padding-left: 0;
    }

    &__header {
      font-size: 28px;
    }

    // &__contentHolder {
    //   padding: 10px 15px 27px 21px;
    // }

    &__image {
      padding: 0;
      width: 300px;
    }

    .keen-slider__slide {
      padding: 10px;
    }
  }
}

/*------------------------------------------*/
// < 400px
@include breakpoint(xxs) {
  .carouselContent {
    // margin: 50px 0 50px;
    &__header {
      font-size: 24px;
    }
    &__image {
      width: 100%;
    }

    &__object {
      &--token-1 {
        width: 18%;
        bottom: -60%;
        left: 30%;
      }
      &--token-2 {
        width: 13%;
        bottom: -29%;
        left: 12%;
      }
    }

    &__bgStar {
      &--1 {
        width: 4.5%;
        bottom: -25%;
        left: 32%;
      }
      &--2 {
        left: 45%;
        width: 6%;
        bottom: -40%;
      }

      &--3 {
        bottom: -54%;
      }
    }
  }
}
</style>

