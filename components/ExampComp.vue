<template>
  <section class="exampComp no-edge-margin" data-scroll-section>
    <h1 class="fs--32">{{ title }}</h1>

    <h2>Options</h2>
    <ul class="exampComp__list">
      <li v-for="(option, key) in options" :key="option + key">
        <strong>{{ key }}:</strong>
        <span v-if="option === ''" style="color: red; display: block">Empty</span>
        <span v-else style="display: block">{{ option }}</span>
      </li>
    </ul>

    <h2>Children</h2>
    <ul class="exampComp__list">
      <li v-for="(child, key) in children" :key="child + key">
        <p v-for="(childItem, key2) in child" :key="childItem + key2">
          <strong>{{ key2 }}</strong>
          <span v-if="childItem === ''" style="color: red; display: block">Empty</span>
          <span v-else style="display: block">{{ childItem }}</span>
        </p>

        <img :data-src="child.image" />
      </li>
    </ul>

    <h2>Margin Class</h2>
    <p>{{ margin }}</p>

    <h2>Padding Class</h2>
    <p>{{ padding }}</p>
  </section>
</template>

<script>
export default {
  name: 'ExampComp',
  props: {
    title: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: null
    },
    margin: {
      type: String,
      default: ''
    },
    padding: {
      type: String,
      default: ''
    },
    children: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss">
.exampComp {
  background: #eee;
  border-radius: 8px;
  padding: 40px;
  width: 100%;
  max-width: 600px;
  margin: 40px 0;

  h1 {
    margin: 0 0 -10px;
    width: 100px;
  }

  h2 {
    margin: 40px 0 20px;
  }

  ul {
    list-style: disc;
    padding: 0 20px;
  }

  li {
    margin: 12px 0;
  }

  p {
    margin: 4px 0;
  }

  img {
    display: block;
    width: 100%;
  }
}
</style>
