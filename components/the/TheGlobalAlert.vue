<template>
  <div class="theGlobalAlert flex flex--y-center pos--fix z--max">
    <IconAlert class="theGlobalAlert__icon" fill="#fd413b" />
    <p class="theGlobalAlert__label lh--140">{{ global.globalAlert }}</p>
    <button class="theGlobalAlert__close z--1 o--3 buttonReset" @click="close">
      <IconClose class="fill--white" />
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import IconAlert from '~/assets/svgs/interface/alert.svg?inline'
import IconClose from '~/assets/svgs/interface/cross.svg?inline'

export default {
  name: 'TheGlobalAlert',
  components: {
    IconAlert,
    IconClose
  },
  computed: {
    ...mapState(['global'])
  },
  mounted() {
    setTimeout(this.close, 8000)
  },
  methods: {
    close() {
      this.$store.commit('global/UPDATE_GLOBAL_ALERT', null)
    }
  }
}
</script>

<style lang="scss">
@keyframes revealMessage {
  from {
    transform: translateY(150%);
  }
  to {
    transform: translateY(0%);
  }
}

.theGlobalAlert {
  bottom: 40px;
  right: 40px;
  left: 40px;
  padding: 20px;
  background: $white;
  border-radius: 8px;
  border: 1px solid rgba($error, 0.5);
  box-shadow: 0 10px 30px rgba($error, 0.2);
  transform: translateY(150%);
  animation: revealMessage 0.5s ease forwards;

  &__icon {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }

  &__label {
    flex: 1;
  }

  &__close {
    width: 24px;
    height: 24px;
    top: 10px;
    right: 10px;
    transition: opacity 0.2s ease;

    svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    &:hover {
      opacity: 1;
    }
  }
}
</style>
