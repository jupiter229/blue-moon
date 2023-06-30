<template>
  <div class="statsModule flex alignI--center justifyC--center">
    <BaseContainer class="statsModule__container flex justifyC--around">
      <h3 class="statsModule__header ff--jura fw--300">Hold & Rebase</h3>
      <div class="statsModule__statsHolder grid">
        <StatsModuleItem>
          <template #label>APY</template>
          <template #value>150,000%</template>
        </StatsModuleItem>
        <StatsModuleItem>
          <template #label>Reward Frequency</template>
          <template #value>1% Every 12 Hours</template>
        </StatsModuleItem>
      </div>
    </BaseContainer>
  </div>
</template>
<script>
import { inview } from "~/mixins/inview.js";
export default {
  name: "StatsModule",
  mixins: [inview],
};
</script>
<style lang="scss">
.statsModule {
  width: 100%;
  margin-top: -350px;
  transition: transform 0.5s, opacity 0.5s;
  transform: translateY(50px);
  opacity: 0;
  &__container {
    width: 90%;
    padding: 100px 20px;
  }

  &__header {
    font-size: 32px;
    margin-bottom: 20px;
    transition: transform 0.5s, opacity 0.5s;
    transform: translateX(-30px);
    opacity: 0;
  }

  &__statsHolder {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 60px;
    grid-row-gap: 60px;
  }

  &.is-inview {
    transform: translateY(0);
    opacity: 1;
    .statsModule__header {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

.statsModuleItem {
  &:nth-of-type(2) {
    transition-delay: 0.15s;
  }
  &:nth-of-type(3) {
    transition-delay: 0.3s;
  }
  &:nth-of-type(4) {
    transition-delay: 0.45s;
  }
}

//1080
@include breakpoint(xl) {
  .statsModule {
    &__statsHolder {
      grid-column-gap: 30px;
      grid-row-gap: 30px;
    }
  }
}
//960
@include breakpoint(l) {
  .statsModule {
    &__header {
      font-size: 26px;
      margin-bottom: 50px;
      padding-right: 15px;
    }
    &__container {
      width: 95%;
      padding: 90px 15px;
    }
  }
}
//750
@include breakpoint(m) {
  .statsModule {
    &__container {
      flex-direction: column;
      align-items: center;
      padding: 40px 20px;
    }
    &__header {
      margin-bottom: 50px;
      font-size: 28px;
      padding-right: 0;
    }
    &__statsHolder {
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(2, auto);
      grid-column-gap: 60px;
      grid-row-gap: 60px;
    }
  }
}
//600
@include breakpoint(s) {
  .statsModule {
    &__statsHolder {
      grid-column-gap: 30px;
      grid-row-gap: 30px;
    }
  }
}
//500
@include breakpoint(xs) {
  .statsModule {
    &__container {
      padding: 40px;
      align-items: flex-start;
    }

    &__statsHolder {
      grid-template-columns: repeat(1, auto);
      grid-template-rows: repeat(1, auto);
      grid-column-gap: 30px;
      grid-row-gap: 30px;
    }
  }
}
</style>

