<template>
  <main class="theContent">
    <!-- FirebaseTest (part of firebase) -->
    <!-- Web3Test (part of web3) -->
    <!-- <TheBuilder /> -->
    <!-- TheBuilder (part of locomotive) -->
    
    <BannerHero />

    <!-- PROTOCOL STATS COMMENTED OUT BELOW-->

    <StatsModule />
    <!-- <CarouselContent /> -->
    <IconGrid />
    <!-- <Roadmap /> -->
    <TextContent />
    <TheFooter />
  </main>
</template>

<script>
import { transitions } from "~/mixins/transitions.js";
// import locomotive (part of locomotive)

export default {
  name: "PageHome",
  mixins: [transitions /* locomotive (part of locomotive) */],
};
</script>

<style>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
}
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
