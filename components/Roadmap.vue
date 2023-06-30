<template>
  <section
    class="roadmap flex pos--rel z--2"
    :class="{ 'is-inview': isInview }"
  >
    <div class="roadmap__container container container--large">
      <div class="roadmap__moonToken pos--abs">
        <img src="~/assets/pngs/moon-token.png" alt="" />
      </div>
      <div class="roadmap__object roadmap__object--redRock pos--abs">
        <img src="~/assets/pngs/red-rock.png" alt="" />
      </div>
      <!-- intro text -->
      <div class="roadmap__textHolder flex">
        <h2 class="roadmap__header ff--jura fs--48 fw--300">
          Blue Moon Roadmap
        </h2>
        <p
          class="
            roadmap__text
            ff--generalsans
            fw--300
            fs--18
            lh--160
            fc--lightgrey
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="roadmap__body flex">
        <!-- roadmap content -->
        <!-- pre launch 2022 points -->
        <div
          class="roadmap__milestoneHolder roadmap__milestoneHolder--pre flex"
          :class="{ active: currentActive === 1 }"
        >
          <div class="roadmap__milestoneInfo roadmap__milestoneInfo--pre">
            <p
              class="
                roadmap__milestoneTitle
                ff--generalsans
                fw--400
                fs--16
                fc--white
              "
            >
              Title
            </p>
            <p
              class="
                roadmap__milestoneText
                ff--generalsans
                fw--300
                fs--14
                lh--160
                fc--lightgrey
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div class="roadmap__milestoneInfo">
            <p
              class="
                roadmap__milestoneTitle
                ff--generalsans
                fw--400
                fs--16
                fc--white
              "
            >
              Long Roadmap Title
            </p>
            <p
              class="
                roadmap__milestoneText
                ff--generalsans
                fw--300
                fs--14
                lh--160
                fc--lightgrey
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="roadmap__milestoneInfo">
            <p
              class="
                roadmap__milestoneTitle
                ff--generalsans
                fw--400
                fs--16
                fc--white
              "
            >
              Long Roadmap Title
            </p>
            <p
              class="
                roadmap__milestoneText
                ff--generalsans
                fw--300
                fs--14
                lh--160
                fc--lightgrey
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur.
            </p>
            <p
              class="
                roadmap__milestoneText roadmap__milestoneText--secondPara
                ff--generalsans
                fw--300
                fs--14
                lh--160
                fc--lightgrey
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
        <!-- current launch 2022 points -->
        <div
          class="
            roadmap__milestoneHolder roadmap__milestoneHolder--current
            x--center
            flex
          "
          :class="{ active: currentActive === 2 }"
        >
          <div class="roadmap__milestoneInfo">
            <p
              class="
                roadmap__milestoneTitle
                ff--generalsans
                fw--400
                fs--16
                fc--white
              "
            >
              Title
            </p>
            <p
              class="
                roadmap__milestoneText
                ff--generalsans
                fw--300
                fs--14
                lh--160
                fc--lightgrey
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div class="roadmap__milestoneInfo">
            <p
              class="
                roadmap__milestoneTitle
                ff--generalsans
                fw--400
                fs--16
                fc--white
              "
            >
              Long Roadmap Title
            </p>
            <p
              class="
                roadmap__milestoneText
                ff--generalsans
                fw--300
                fs--14
                lh--160
                fc--lightgrey
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="roadmap__milestoneInfo">
            <p
              class="
                roadmap__milestoneTitle
                ff--generalsans
                fw--400
                fs--16
                fc--white
              "
            >
              Long Roadmap Title
            </p>
            <p
              class="
                roadmap__milestoneText
                ff--generalsans
                fw--300
                fs--14
                lh--160
                fc--lightgrey
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur.
            </p>
            <p
              class="
                roadmap__milestoneText roadmap__milestoneText--secondPara
                ff--generalsans
                fw--300
                fs--14
                lh--160
                fc--lightgrey
              "
            >
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
            </p>
          </div>
        </div>
        <!-- post launch 2022 points -->
        <div
          class="roadmap__milestoneHolder roadmap__milestoneHolder--post flex"
          :class="{ active: currentActive === 3 }"
        >
          <div class="roadmap__milestoneInfo">
            <p
              class="
                roadmap__milestoneTitle
                ff--generalsans
                fw--400
                fs--16
                fc--white
              "
            >
              Title
            </p>
            <p
              class="
                roadmap__milstoneText
                ff--generalsans
                fw--300
                fs--14
                lh--160
                fc--lightgrey
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div class="roadmap__milestoneInfo">
            <p
              class="
                roadmap__milestoneTitle
                ff--generalsans
                fw--400
                fs--16
                fc--white
              "
            >
              Long Roadmap Title
            </p>
            <p
              class="
                roadmap__milestoneText
                ff--generalsans
                fw--300
                fs--14
                lh--160
                fc--lightgrey
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="roadmap__milestoneInfo">
            <p
              class="
                roadmap__milestoneTitle
                ff--generalsans
                fw--400
                fs--16
                fc--white
              "
            >
              Another Road Map Title
            </p>
            <p
              class="
                roadmap__milestoneText
                ff--generalsans
                fw--300
                fs--14
                lh--160
                fc--lightgrey
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur.
            </p>
            <p
              class="
                roadmap__milestoneText roadmap__milestoneText--secondPara
                ff--generalsans
                fw--300
                fs--14
                lh--160
                fc--lightgrey
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div class="roadmap__milestoneInfo">
            <p
              class="
                roadmap__milestoneTitle
                ff--generalsans
                fw--400
                fs--16
                fc--white
              "
            >
              Another Road Map Title
            </p>
            <p
              class="
                roadmap__milestoneText
                ff--generalsans
                fw--300
                fs--14
                lh--160
                fc--lightgrey
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur.
            </p>
            <p
              class="
                roadmap__milestoneText roadmap__milestoneText--secondPara
                ff--generalsans
                fw--300
                fs--14
                lh--160
                fc--lightgrey
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
        <!-- roadmap nav  -->
        <div
          class="
            roadmap__holder
            justifyC--center
            alignI--center
            center--x
            z--2
            flex
          "
        >
          <div class="roadmap__milestone flex alignI--center">
            <div class="roadmap__line" />

            <div
              class="roadmap__point roadmap__point--pre pos--rel flex"
              :class="{ active: currentActive === 1 }"
              @click.prevent="goToPoint(1)"
            >
              <div class="roadmap__dot roadmap__dot--pre" />
              <div class="roadmap__outline" />

              <p
                class="
                  roadmap__pointHeader roadmap__pointHeader--pre
                  pos--abs
                  ff--jura
                  fs--18
                  fw--300
                  fc--whitelight
                  tt--capital
                  ls--l00
                "
                :class="{ active: currentActive === 1 }"
              >
                Launch <span class="roadmap__pointYear"></span>
              </p>
              <div
                class="roadmap__stalk"
                :class="{ active: currentActive === 1 }"
              />
            </div>
          </div>

          <div class="roadmap__line" />
          <div class="roadmap__milestone flex alignI--center">
            <div
              class="roadmap__point roadmap__point--current pos--rel flex"
              :class="{ active: currentActive === 2 }"
              @click="goToPoint(2)"
            >
              <div class="roadmap__dot roadmap__dot--current" />
              <div class="roadmap__outline" />
              <p
                class="
                  roadmap__pointHeader roadmap__pointHeader--current
                  pos--abs
                  ff--jura
                  fs--18
                  fw--300
                  fc--whitelight
                  tt--capital
                  ls--l00
                "
                :class="{ active: currentActive === 2 }"
              >
                Post-Launch <span class="roadmap__pointYear"></span>
              </p>
              <div
                class="roadmap__stalk"
                :class="{ active: currentActive === 2 }"
              />
            </div>
          </div>

          <div class="roadmap__line" />
          <div class="roadmap__milestone flex alignI--center">
            <div
              class="roadmap__point roadmap__point--post pos--rel flex"
              :class="{ active: currentActive === 3 }"
              @click="goToPoint(3)"
            >
              <div class="roadmap__dot roadmap__dot--post" />
              <div class="roadmap__outline" />
              <p
                class="
                  roadmap__pointHeader roadmap__pointHeader--post
                  pos--abs
                  ff--jura
                  fs--18
                  fw--300
                  fc--whitelight
                  tt--capital
                  ls--l00
                "
                :class="{ active: currentActive === 3 }"
              >
                And Beyond <span class="roadmap__pointYear"></span>
              </p>
              <div
                class="roadmap__stalk"
                :class="{ active: currentActive === 3 }"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src="~/assets/pngs/planet-roadmap.webp"
        alt=""
        class="roadmap__glow pos--abs z--1"
      />
    </div>
  </section>
</template>

<script>
import { inview } from "~/mixins/inview.js";
export default {
  name: "Roadmap",
  mixins: [inview],
  props: {
    title: {
      type: String,
      default: "",
    },
    options: {
      type: Object,
      default: null,
    },
    margin: {
      type: String,
      default: "",
    },
    padding: {
      type: String,
      default: "",
    },
    children: {
      type: Array,
      default: null,
    },
    currentActive: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    goToPoint(point) {
      if (this.currentActive === point) {
        return;
      }
      const pointElement = this.$el.querySelector(
        `.roadmap__milestoneHolder:nth-child(${point})`
      );

      this.currentActive = point;

      if (pointElement.classList.contains("active")) {
        return pointElement.classList.remove("active");
      }
    },
  },
};
</script>

<style lang="scss">
.roadmap {
  padding: 323px 0 333px;
  // background: $midnightblue;

  //inview animations
  &.is-inview {
    .roadmap__header,
    .roadmap__text,
    .roadmap__milestoneInfo {
      transform: translateX(0);
      opacity: 1;
    }
  }

  &__header {
    margin-bottom: 33px;
    transform: translateX(-30px);
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
  }
  &__text {
    transform: translateX(-30px);
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
    transition-delay: 0.15s;
  }
  &__textHolder {
    margin-bottom: 155px;
    max-width: 576px;
    margin-left: 65px;
  }

  &__holder {
    width: 100%;
    flex-direction: row;
    visibility: visible;

    &:hover {
      cursor: url("/images/cursor.png") 25 25, auto;
    }
  }
  &__milestone {
    flex-direction: column;
  }

  &__milestoneText {
    &--secondPara {
      margin-top: 20px;
    }
  }

  &__point {
    &--pre {
      &::before {
        content: "";
        position: absolute;
        height: 1px;
        width: 24px;
        left: -24px;
        top: 50%;
        background: rgba(#fff, 0.3);
      }
    }

    &--post {
      &::before {
        content: "";
        position: absolute;
        height: 1px;
        width: 24px;
        right: -24px;
        top: 50%;
        background: rgba(#fff, 0.3);
      }
    }
    &:hover {
      .roadmap__outline {
        opacity: 0.3;
      }
    }

    &.active {
      .roadmap__dot {
        opacity: 1;
        &--pre {
          background: $orange;
        }

        &--current {
          background: $green;
        }

        &--post {
          background: $limegreen;
        }
      }
    }
  }

  &__dot {
    width: 27px;
    height: 27px;
    background: white;
    opacity: 0.2;
    margin: 0 7px;
    border-radius: 50%;
    pointer-events: all;
    transition: opacity 0.3s ease, background 0.3s ease;

    &:hover {
      cursor: url("/images/cursor.png") 25 25, auto;

      opacity: 1;

      &.roadmap__dot--pre {
        &:hover {
          background: $orange;
        }
      }

      &.roadmap__dot--current {
        &:hover {
          background: $green;
        }
      }

      &.roadmap__dot--post {
        background: $limegreen;
      }

      .theMenu__pointHeader {
        cursor: pointer;
      }
    }
  }

  &__pointLabel {
    top: 13px;
    width: 113px;
  }

  &__line {
    height: 1px;
    background: rgba(#fff, 0.3);
    flex: 1;
  }

  &__pointHeader {
    transition: opacity 0.3s ease;
    opacity: 0;
    top: -55px;
    left: 50%;
    min-width: 200px;
    text-align: center;
    transform: translateX(-50%);
    // background: $midnightblue;

    &.active {
      opacity: 1;
    }

    &--pre {
      ::after {
        height: 313px;
        background: white;
        position: absolute;
        width: 1px;
        content: "";
        left: 50%;
        bottom: 25px;
      }
    }

    &--post {
      ::after {
        height: 313px;
        background: white;
        position: absolute;
        width: 1px;
        content: "";
        left: 50%;
        bottom: 25px;
      }
    }
  }

  &__pointYear {
    color: #b7b6c3;
  }

  &__stalk {
    height: 18px;
    background: white;
    position: absolute;
    width: 1px;
    content: "";
    left: 50%;
    top: -25px;
    opacity: 0;
    transition: background 0.3s ease;

    &.active {
      opacity: 1;
    }
  }

  &__milestoneHolder {
    align-items: baseline;
    // margin-bottom: 29px;
    width: 100%;
    position: relative;
    opacity: 0;
    pointer-events: none;
    display: none;
    transition: opacity 0.3s ease;
    height: 305px;

    &.active {
      opacity: 1;
      pointer-events: visible;
      display: inline-flex;
      transition: opacity 0.3s ease;
    }

    &--pre {
      padding-left: 6%;

      .roadmap__milestoneInfo {
        &:nth-of-type(1) {
          margin-left: 37px;
        }
      }
    }

    &--current {
      justify-content: center;
      &::after {
        position: absolute;
        content: "";
        background: white;
        height: 1px;
        width: 892px;
        bottom: 0;
      }
    }

    &--post {
      margin-left: 0;
      padding-right: 6%;
      justify-content: center;

      .roadmap__milestoneInfo {
        width: 20%;
      }
    }
  }

  &__milestoneTitle {
    margin-bottom: 14px;
  }

  &__milestoneInfo {
    max-width: 257px;
    margin-right: 60px;
    width: 25%;
    transform: translateX(-30px);
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;

    &:nth-of-type(1) {
      transition-delay: 0.15s;
    }
    &:nth-of-type(2) {
      transition-delay: 0.3s;
    }
    &:nth-of-type(3) {
      transition-delay: 0.45s;
    }

    &:nth-last-child(1) {
      margin-right: 0;
    }
  }

  &__holder {
    margin-top: 68px;
    padding: 0 60px;
  }

  &__glow {
    user-select: none;
    top: -300px;
    left: 0;
  }

  &__moonToken {
    user-select: none;
    right: 10%;
    top: 12%;
    width: 12%;

    animation: float 2s ease-in-out infinite;
    animation-duration: 10s;
    img {
      width: 100%;
    }
  }

  &__object {
    user-select: none;
    &--redRock {
      right: 5%;
      top: 25%;
      width: 4%;
      animation: float 2s ease-in-out infinite;
      animation-duration: 7s;

      img {
        width: 100%;
      }
    }
  }
}

/*------------------------------------------*/
// < 1600px
@include breakpoint(ssl) {
  .roadmap {
    &__glow {
      left: -2%;
    }
  }
}

/*------------------------------------------*/
// < 1400px
@include breakpoint(xxxl) {
  .roadmap {
    &__header {
      font-size: 44px;
    }

    &__glow {
      left: -5%;
    }
  }
}

/*------------------------------------------*/
// < 1200px
@include breakpoint(xxl) {
  .roadmap {
    &__header {
      font-size: 40px;
    }

    &__milestoneHolder {
      max-height: 400px;
      height: 400px;
      &--pre {
        .roadmap__milestoneInfo {
          max-width: 257px;
          &:nth-of-type(1) {
            margin-left: 60px;
          }
        }
      }

      &--current {
        .roadmap__milestoneInfo {
          max-width: 257px;
          width: calc(33.33% - 60px);
          margin-right: 60px;
          &:nth-last-child(1) {
            margin-right: 0;
          }
        }

        &::after {
          width: 94%;
        }
      }

      &--post {
        padding-right: 10%;
        .roadmap__milestoneInfo {
          max-width: 100%;
          width: calc(50% - 60px);
          margin-right: 60px;
          &:nth-child(2n + 2) {
            margin-right: 0;
          }
          &:nth-of-type(1),
          &:nth-of-type(2) {
            margin-bottom: 28px;
          }
        }
      }
    }

    &__pointHeader {
      &--pre {
        ::after {
          height: 409px;
        }
      }

      &--post {
        ::after {
          height: 409px;
        }
      }
    }
  }
}
/*------------------------------------------*/
// < 1080px
@include breakpoint(xl) {
  .roadmap {
    &__header {
      font-size: 38px;
    }

    &__glow {
      left: -7%;
    }

    &__pointHeader {
      &--pre,
      &--post {
        ::after {
          height: 409px;
        }
      }
    }

    &__milestoneHolder {
      height: 600px;
      &--pre {
        .roadmap__milestoneInfo {
          // width: 33.33%;
          margin-right: 30px;
          &:nth-of-type(1) {
            margin-left: 60px;
          }
        }
      }

      &--current {
        .roadmap__milestoneInfo {
          max-width: 100%;
          width: calc(33.33% - 30px);
          margin-right: 30px;
          &:nth-last-child(1) {
            margin-right: 0;
          }
        }

        &::after {
          width: 93%;
        }
      }
    }
  }
}

/*------------------------------------------*/
// < 960px
@include breakpoint(l) {
  .roadmap {
    padding-top: 200px;
    padding-bottom: 300px;
    &__body {
      flex-direction: column-reverse;
    }
    &__holder {
      margin: 50px 0;
      padding: 0 50px;
    }
    &__header {
      font-size: 28px;
      margin-bottom: 16.5px;
    }

    &__text {
      font-size: 16px;
    }

    &__textHolder {
      max-width: 100%;
      margin-bottom: 50px;
      margin-left: 0;
    }

    &__pointHeader {
      &--pre,
      &--post {
        ::after {
          display: none;
        }
      }
    }

    &__milestoneHolder {
      width: 100%;
      height: 100%;
      max-height: 100%;
      padding: 0 72px;

      &--pre {
        &::after {
          // left: 7%;
          display: none;
        }

        .roadmap__milestoneInfo {
          max-width: 100%;
          margin-left: 0;
          margin-right: 0;
          &:nth-of-type(1),
          &:nth-of-type(3) {
            margin-left: 0;
          }
        }
      }

      &--current {
        .roadmap__milestoneInfo {
          width: 100%;
          margin-right: 0;
        }
        &::after {
          display: none;
        }
      }

      &--post {
        .roadmap__milestoneInfo {
          margin-right: 0;
          width: 100%;
          max-width: 100%;
        }

        &:after {
          display: none;
        }
      }
    }

    &__milestoneInfo {
      max-width: 100%;
      width: 100%;
      margin: 0;
      margin-bottom: 24px;

      &:nth-of-type(1) {
        margin-left: 0;
      }

      &:nth-last-child(1) {
        margin-bottom: 0;
      }
    }

    &__milestoneTitle {
      margin-bottom: 12.5px;
    }

    &__dot {
      &:after {
        top: 2px;
        left: 2px;
        width: 12px;
        height: 12px;
      }
    }

    &__glow {
      display: none;
    }

    &__moonToken {
      top: 5%;
      right: 12%;
    }

    &__object {
      &--redRock {
        width: 6%;
        top: 13%;
      }
    }
  }
}

/*------------------------------------------*/
// < 600px
@include breakpoint(s) {
  .roadmap {
    padding-top: 200px;
    padding-bottom: 175px;
  }
}

/*------------------------------------------*/
// < 500px
@include breakpoint(xs) {
  .roadmap {
    &__pointHeader {
      font-size: 16px;
      // min-width: 100px;
    }

    &__textHolder {
      margin-bottom: 38px;
    }

    &__moonToken {
      top: 0;
      width: 15%;
    }

    &__object {
      &--redRock {
        width: 8%;
        top: 7%;
      }
    }

    &__milestoneHolder {
      padding: 0 26px;
    }
  }
}

/*------------------------------------------*/
// < 400px
@include breakpoint(xxs) {
  .roadmap {
    padding-top: 157px;
    padding-bottom: 100px;

    &__textHolder {
      margin-bottom: 38px;
    }
  }
}
</style>

