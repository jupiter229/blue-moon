<template>
  <footer class="theFooter pos--rel" data-scroll-section>
    <div class="theFooter__container container flex">
      <div class="theFooter__main flex">
        <div class="theFooter__socialsHolder">
          <NuxtLink to="/" class="theFooter__logoHolder pos--rel">
            <IconLogo class="theFooter__logo pos--abs" />
          </NuxtLink>
          <div
            class="TheFooter__icons grid grid--flow-c gap--12 justifyC--start"
          >
            <BaseSocial
              :href="`https://t.me/BlueMoonERC`"
              onclick="window.open(this.href,'name','width=600,height=600'); return false;"
              social="telegram"
              class="theFooter__socialLink"
            />
            <BaseSocial
              :href="`https://twitter.com/BlueMoonERC`"
              onclick="window.open(this.href,'name','width=600,height=600'); return false;"
              social="twitter"
              class="theFooter__socialLink"
            />
            <BaseSocial
              :href="`https://www.dextools.io/app/en/ether/pair-explorer/0x9408694da0108535fb72f445ccd62b5dd5125a7b`"
              onclick="window.open(this.href,'name','width=600,height=600'); return false;"
              social="dextools"
              class="theFooter__socialLink"
            />
          </div>
        </div>
        <div class="theFooter__navHolder flex">
          <ul class="theFooter__nav">
            <li class="theFooter__navItemTitle">
              <p class="theFooter__navTitle fs--22 ff--jura fw--300 fc--white">
                $BMOON
              </p>
            </li>
            <li class="theFooter__navItem">
              <a
                class="theFooter__link fc--white ff--generalsans fs--16 o--6"
                href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xB4c1896b70231402f63277ee031a632773c2A990"
                >Swap</a
              >
            </li>
            <li class="theFooter__navItem">
              <a
                class="theFooter__link fc--white ff--generalsans fs--16 o--6"
                href="https://forms.gle/cCqzohdNxjhcGLkj7"
                >Airdrop</a
              >
            </li>
            <li class="theFooter__navItem">
              <a
                class="theFooter__link fc--white ff--generalsans fs--16 o--6"
                href="https://www.dextools.io/app/en/ether/pair-explorer/0x9408694da0108535fb72f445ccd62b5dd5125a7b"
                >Chart</a
              >
            </li>
            <li class="theFooter__navItem">
              <a
                class="theFooter__link fc--white ff--generalsans fs--16 o--6"
                href="https://blue-moon-1.gitbook.io/blue-moon/"
                >Documentation</a
              >
            </li>
          </ul>
          <ul class="theFooter__nav">
            <li class="theFooter__navItemTitle">
              <p class="theFooter__navTitle fs--22 ff--jura fw--300 fc--white">
                Join
              </p>
            </li>
            <li class="theFooter__navItem">
              <a
                class="theFooter__link fc--white ff--generalsans fs--16 o--6"
                href="https://t.me/BlueMoonERC"
                >Telegram</a
              >
            </li>
            <li class="theFooter__navItem">
              <a
                class="theFooter__link fc--white ff--generalsans fs--16 o--6"
                href="https://twitter.com/BlueMoonERC"
                >Twitter</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="theFooter__sub flex justifyC--between">
        <p
          class="theFooter__copyright ff--generalsans fs--14 fw--300 fc--white o--6"
          href=""
        >
          © 2023 Blue Moon. All right reserved.
        </p>
        <div class="theFooter__privacyHolder flex">
          <a
            class="theFooter__link ff--generalsans fs--14 fw--300 fc--white o--6"
            href=""
            >
          </a>
          <a
            class="theFooter__link ff--generalsans fs--14 fw--300 fc--white o--6"
            href=""
            ></a
          >
        </div>
      </div>
    </div>
    <div class="theFooter__moonToken pos--abs">
      <img src="~/assets/pngs/moon-token.png" alt="" />
    </div>
  </footer>
</template>

<script>
import IconLogo from "~/assets/svgs/logo.svg?inline";

export default {
  name: "TheFooter",
  components: {
    IconLogo,
  },
};
</script>

<style lang="scss">
.theFooter {
  background: $darkblue;
  padding: 120px 0;
  // margin: 120px 0 0;

  &__main {
    flex-direction: row;
  }

  &__container {
    flex-direction: column;
  }
  &__sub {
    width: 100%;
  }

  &__navHolder,
  &__socialsHolder {
    width: 50%;
  }

  &__nav {
    &:nth-child(1) {
      margin-right: 130px;
    }
  }

  &__main {
    margin-bottom: 101px;
  }

  &__logoHolder {
    margin-bottom: 28px;
    width: 149px;
    height: 42px;
    display: inline-flex;
  }

  &__logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__link {
    margin-right: 30px;
    transition: opacity 0.3s;

    &:nth-last-child(1) {
      margin-right: 0;
    }
    &:hover {
      opacity: 1;
    }
  }

  &__navItem,
  &__navItemTitle {
    list-style: none;
    margin-bottom: 28px;

    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }

  &__navItemTitle {
    margin-bottom: 20px;

    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }

  &__moonToken {
    top: -18%;
    right: 5%;
    width: 10%;
    animation: float 2s ease-in-out infinite;
    animation-duration: 10s;
    user-select: none;
    img {
      width: 100%;
    }
  }
}

// 1400
@include breakpoint(xxxl) {
  .theFooter {
    &__moonToken {
      top: -15%;
    }
  }
}
//1080
@include breakpoint(xl) {
  .theFooter {
    &__nav {
      &:nth-child(1) {
        margin-bottom: 25px;
      }
    }
    &__moonToken {
      top: -10%;
    }

    &__socialsHolder {
      width: 33.33%;
    }
  }
}
// 960
@include breakpoint(l) {
  .theFooter {
    &__nav {
      &:nth-child(1) {
        margin-right: 65px;
      }
    }

    &__navHolder {
      justify-content: end;
    }
    &__moonToken {
      width: 12%;
    }
  }
}

@media screen and (min-width: 750px) and (max-width: 800px) {
  .theFooter {
    &__nav {
      &:nth-child(1) {
        margin-right: 0;
      }
    }
  }
}
@media screen and (min-width: 801px) and (max-width: 847px) {
  .theFooter {
    &__nav {
      &:nth-child(1) {
        margin-right: 0;
      }
    }
  }
}

// 750
@include breakpoint(m) {
  .theFooter {
    padding: 60px 0;
    &__main {
      flex-direction: column;
      margin-bottom: 50px;
    }

    &__navHolder {
      flex-direction: column;
    }

    &__socialsHolder {
      margin-bottom: 24px;
    }

    &__navItem,
    &__navTitle,
    &__copyright {
      margin-bottom: 14px;
    }

    &__nav {
      padding: 0;
      &:nth-child(1) {
        margin-right: 0;
      }
    }

    &__object {
      &--moonRock {
        right: 11%;
        top: -25%;
        width: 15%;
      }

      &--moonRock {
        right: 11%;
        top: -25%;
        width: 15%;
      }

      &--token {
        right: 5%;
        top: -37%;
      }
    }
    &__moonToken {
      top: -8%;
      width: 12%;
    }
  }
}

// 500
@include breakpoint(xs) {
  .theFooter {
    &__object {
      &--moonRock {
        top: -20%;
      }
    }
    &__moonToken {
      display: none;
    }

    &__sub {
      width: 75%;
    }
  }
}
</style>
