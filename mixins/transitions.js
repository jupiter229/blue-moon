export const transitions = {
  transition: {
    name: 'default',
    css: false,
    leave(el, done) {
      if (this.$store.state.global.isFirstLoad) {
        this.$store.dispatch('global/updateIsFirstLoad', false)
      }

      document.querySelector('.theTransition').classList.add('show')

      setTimeout(() => {
        done()
      }, 600)
    },
    enter(el, done) {
      // if (this.$store.state.global.isMenuOpen) {
      //   this.$store.dispatch('global/updateIsMenuOpen', false)
      // }

      this.$store.dispatch('global/updateCurrentPage', this.$route.path)

      document.querySelector('.theTransition').classList.remove('show')

      setTimeout(() => {
        done()
      }, 600)
    }
  }
}
