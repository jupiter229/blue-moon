<template>
  <div class="theBuilder pos--rel">
    <template v-for="(module, index) in global.modules.module_content">
      <ExampComp
        v-if="module.ref === 'ExampComp'"
        :key="module.ref + index"
        :title="module.ref"
        :options="module.options"
        :margin="module.marginAttrs"
        :padding="module.paddingAttrs"
        :children="module.children" />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheBuilder',
  computed: {
    ...mapState(['global'])
  }
}
</script>
