// This is a real basic script that we can use to add an .is-inview class when the element is scrolled into view
// You could use Locomotive for this, but since it's not a very hard thing to figure out it's kinda not needed

export const inview = {
  data() {
    return {
      observer: null,
      isInview: false,
      inviewClass: 'is-inview',
      inviewThreshold: 0.25 // Once 25% of the element is in view
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(this.inview, {
      threshold: this.inviewThreshold
    })

    this.observer.observe(this.$el)
  },
  methods: {
    inview(event) {
      if (!event[0].isIntersecting || this.isInview) {
        return
      }

      this.$el.classList.add(this.inviewClass)
      this.isInview = true
    }
  }
}
