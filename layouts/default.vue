<template>
  <div class="theSite pos--rel">
    <div class="theSite__backgroundOverlay pos--abs z--0"></div>
    <TheHeader />
    <nuxt />
    <TheTransition />
    <TheGlobalAlert v-if="global.globalAlert" />
  </div>
</template>

<script>
import { mapState } from "vuex";
// import auth (part of firebase)

export default {
  name: "LayoutDefault",
  // mixins (part of firebase)
  computed: {
    ...mapState(["global"]),
  },
  mounted() {
    // setupFirebase (part of firebase)
  },
};
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loadingCircle {
  display: block;
  width: 40px;
  height: 40px;
  border: 3px solid rgba(#000, 0.2);
  border-radius: 50%;
  margin: 0 auto;
  border-top-color: #000;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

.theContent {
  // padding-top: 100px;
}

.theSite__backgroundOverlay {
  top: 112vh;
  width: 100%;
  height: 750px;
  background-image: url("~/assets/pngs/bg-stars.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transform: scaleY(-1);
}

body {
  background: $midnightblue;
  // background-image: url("~/assets/pngs/background.png");
  background-size: 100%;
  background-repeat: no-repeat;
  color: $white;
  letter-spacing: 0.05em;
}

html {
  overflow-x: hidden;
}
</style>
