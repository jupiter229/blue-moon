export const onload = {
  async asyncData({ store, params, route }) {
    const slug = route.name
    await store.dispatch('global/fetchModules', slug)
  }
}
