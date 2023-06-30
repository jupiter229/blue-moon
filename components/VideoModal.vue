<template>
  <section class="videoModal pos--fix z--max grid placeI--center">
    <button
      class="videoModal__close grid placeI--center pos--abs"
      @click="toggleModal()"
    >
      <IconClose class="videoModal__closeIcon" />
    </button>
    <iframe
      class="videoModal__video"
      src="https://player.vimeo.com/video/722123524?h=5d0e80b08e&amp;badge=0&amp;autoplay=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    />
  </section>
</template>

<script>
import IconClose from "~/assets/svgs/interface/cross.svg?inline";

export default {
  name: "VideoModal",
  components: {
    IconClose,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    toggleModal: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.videoModal {
  background: rgba(black, 0.7);
  inset: 0;

  &__close {
    @include buttonReset;
    top: 0;
    right: 0;
    width: 72px;
    height: 72px;
    transition: border 0.3s;
    background: $bluemoonblue;
    transition: background 0.3s ease;

    &:hover {
      background: white;
      cursor: pointer;
      .videoModal__closeIcon {
        fill: $bluemoonblue;
      }
    }
  }

  &__closeIcon {
    width: 18px;
    fill: white;
    transition: fill 0.3s ease;
  }

  &__video {
    max-width: 1050px;
    width: 100%;
    aspect-ratio: 16/9;
    background: $bluemoonblue;
  }
}
</style>
