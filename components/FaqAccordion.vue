<template>
  <div class="faqAccordion pos--rel">
    <div class="container container--large flex justifyC--between">
      <div class="faqAccordion__heading">
        <h2 class="faqAccordion__header ff--jura fs--48 fw--300">
          Frequently Asked Questions
        </h2>
      </div>
      <div class="faqAccordion__menu">
        <FaqAccordionItem>
          <template #header>
            Lorem ipsum dolor sit, amet consectetur adipisicing
          </template>
          <template #text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</template
          >
        </FaqAccordionItem>
        <FaqAccordionItem>
          <template #header>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </template>
          <template #text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum est
            iure doloribus earum provident maxime error atque saepe dolor
            accusantium officiis non fuga placeat, ex expedita ratione corporis,
            quia odio? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quae mollitia minus omnis? Cum neque atque ducimus natus asperiores
            est, rem voluptate odit, earum voluptates tempora officiis animi,
            iure ut rerum.</template
          >
        </FaqAccordionItem>
        <FaqAccordionItem>
          <template #header>
            Duis aute irure dolor in reprehenderit in voluptate
          </template>
          <template #text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum est
            iure doloribus earum provident maxime error atque saepe dolor
            accusantium officiis non fuga placeat, ex expedita ratione corporis,
            quia odio? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quae mollitia minus omnis? Cum neque atque ducimus natus asperiores
            est, rem voluptate odit, earum voluptates tempora officiis animi,
            iure ut rerum.</template
          >
        </FaqAccordionItem>
        <FaqAccordionItem>
          <template #header>
            Lorem ipsum dolor sit, amet consectetur adipisicing
          </template>
          <template #text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum est
            iure doloribus earum provident maxime error atque saepe dolor
            accusantium officiis non fuga placeat, ex expedita ratione corporis,
            quia odio? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quae mollitia minus omnis? Cum neque atque ducimus natus asperiores
            est, rem voluptate odit, earum voluptates tempora officiis animi,
            iure ut rerum.</template
          >
        </FaqAccordionItem>
        <FaqAccordionItem>
          <template #header>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </template>
          <template #text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum est
            iure doloribus earum provident maxime error atque saepe dolor
            accusantium officiis non fuga placeat, ex expedita ratione corporis,
            quia odio? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quae mollitia minus omnis? Cum neque atque ducimus natus asperiores
            est, rem voluptate odit, earum voluptates tempora officiis animi,
            iure ut rerum.</template
          >
        </FaqAccordionItem>
        <FaqAccordionItem>
          <template #header>
            Duis aute irure dolor in reprehenderit in voluptate
          </template>
          <template #text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum est
            iure doloribus earum provident maxime error atque saepe dolor
            accusantium officiis non fuga placeat, ex expedita ratione corporis,
            quia odio? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quae mollitia minus omnis? Cum neque atque ducimus natus asperiores
            est, rem voluptate odit, earum voluptates tempora officiis animi,
            iure ut rerum.</template
          >
        </FaqAccordionItem>
      </div>
    </div>
    <div class="faqAccordion__objectsHolder pos--abs">
      <img
        class="faqAccordion__object faqAccordion__object--starsLeft pos--abs"
        src="~/assets/pngs/footer-stars-left.png"
        alt=""
      />
      <img
        class="faqAccordion__object faqAccordion__object--starsRight pos--abs"
        src="~/assets/pngs/footer-stars-right.png"
        alt=""
      />
      <img
        class="faqAccordion__object faqAccordion__object--moonRock pos--abs"
        src="~/assets/pngs/moon-rock.png"
        alt=""
      />
    </div>
    <div class="faqAccordion__orbitHolder z--0 pos--abs">
      <img
        class="faqAccordion__orbit"
        src="/images/footer/footer-orbit.png"
        alt="footer-orbit.png"
      />
    </div>
    <div class="faqAccordion__glow faqAccordion__glow--inner z--0 pos--abs" />
    <div class="faqAccordion__glow faqAccordion__glow--outer z--0 pos--abs" />
  </div>
</template>
<script>
import { inview } from "~/mixins/inview.js";

export default {
  name: "FaqAccordion",
  mixins: [inview],
};
</script>
<style lang="scss">
.faqAccordion {
  overflow: hidden;
  //   padding-top: 50px;
  padding-bottom: 391px;
  background-blend-mode: multiply;
  &__header {
    max-width: 410px;
    transform: translateX(-30px);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }

  &__menu {
    margin: 120px 0 0;
    align-self: flex-end;
  }

  &__orbitHolder {
    bottom: 0;
    width: 40%;
    left: 50%;
    transform: translate(-50%);
  }

  &__orbit {
    width: 100%;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__glow {
    &--inner {
      width: 50%;
      height: 1000px;
      background: rgba($bluemoonblue, 0.3);
      border-radius: 50%;
      bottom: 0;
      filter: blur(90px);
      left: 50%;
      transform: translate(-50%, 93%);
    }
    &--outer {
      width: 100%;
      height: 1000px;
      background: rgba($bluemoonblue, 0.1);
      border-radius: 50%;
      bottom: 0;
      filter: blur(90px);
      left: 50%;
      transform: translate(-50%, 65%);
    }
  }

  &__objectsHolder {
    width: 100%;
    height: 300px;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }

  &__object {
    user-select: none;
    &--starsLeft {
      left: 10%;
      width: 12%;
      animation: pulse 5s infinite;
    }
    &--starsRight {
      bottom: 20%;
      right: 11%;
      width: 9.5%;
      animation: pulse 6s infinite;
    }
    &--moonRock {
      left: 5%;
      width: 3.5%;
      animation: float 3s ease-in-out infinite;
      animation-duration: 7s;
    }
  }

  //inview animations

  &.is-inview {
    .faqAccordion__header {
      transform: translateX(0);
      opacity: 1;
    }
  }
}


/*------------------------------------------*/
// < 1400px
@include breakpoint(xxxl) {
  .faqAccordion {
    &__header {
      font-size: 44px;
    }
  }
}

/*------------------------------------------*/
// < 1200px
@include breakpoint(xxl) {
  .faqAccordion {
    &__header {
      font-size: 40px;
    }
    &__menu {
      margin: 60px 0 50px;
    }
  }
}

/*------------------------------------------*/
// < 1080px
@include breakpoint(xl) {
  .faqAccordion {
    &__header {
      font-size: 38px;
    }
    &__orbitHolder {
      width: 60%;
    }
  }
}

/*------------------------------------------*/
// < 960px
@include breakpoint(l) {
  .faqAccordion {
    &__header {
      font-size: 36px;
    }
    &__object {
      &--starsLeft {
        width: 17%;
        left: 10%;
      }
      &--starsRight {
        width: 11%;
      }
      &--moonRock {
        width: 7.5%;
      }
    }
  }
}

/*------------------------------------------*/
// < 750px
@include breakpoint(m) {
  .faqAccordion {
    // margin-top: 200px;
    padding-bottom: 200px;
    &__header {
      font-size: 28px;
    }
    &__menu {
      margin: 30px 0 25px;
    }
    &__orbitHolder {
      width: 100%;
    }
    &__object {
      &--starsLeft {
        left: 10%;
        top: 40%;
        width: 12%;
      }
      &--starsRight {
        bottom: 38%;
        right: 7%;
        width: 9.5%;
      }
      &--moonRock {
        left: 2%;
        top: 50%;
        width: 5.5%;
      }
    }
    &__glow {
      &--inner {
        width: 50%;
        height: 800px;
      }
      &--outer {
        width: 100%;
        height: 800px;
      }
    }
  }
}

/*------------------------------------------*/
// < 600px
@include breakpoint(s) {
  .faqAccordion {
    &__heading {
      width: 100%;
      text-align: center;
    }

    &__header {
      max-width: 100%;
    }
  }
}

/*------------------------------------------*/
// < 500px
@include breakpoint(xs) {
  .faqAccordion {
    &__header {
      font-size: 24px;
    }
    &__object {
      &--starsLeft {
        left: 10%;
        top: 40%;
        width: 17%;
      }
      &--starsRight {
        bottom: 38%;
        right: 7%;
        width: 15%;
      }
      &--moonRock {
        left: 2%;
        top: 50%;
        width: 5.5%;
      }
    }
  }
}

/*------------------------------------------*/
// < 400px
@include breakpoint(xxs) {
  .faqAccordion {
    padding-top: 25px;
  }
}
</style>

