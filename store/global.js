import Services from '@/services/services.js'

function commitTimeout(f) {
  if (process.client) {
    setTimeout(() => {
      f()
    }, 0)
  } else {
    f()
  }
}

export const state = () => ({
  currentPage: '/',
  currentTransition: 'default',
  isFirstLoad: true,
  isMenuOpen: false,
  globalAlert: null,
  modules: {}
})

export const mutations = {
  UPDATE_CURRENT_PAGE(state, currentPage) {
    state.currentPage = currentPage
  },
  UPDATE_CURRENT_TRANSITION(state, currentTransition) {
    state.currentTransition = currentTransition
  },
  UPDATE_FIRST_LOAD(state, isFirstLoad) {
    state.isFirstLoad = isFirstLoad
  },
  UPDATE_MENU_OPEN(state, isMenuOpen) {
    state.isMenuOpen = isMenuOpen
  },
  UPDATE_GLOBAL_ALERT(state, globalAlert) {
    state.globalAlert = globalAlert
  },
  UPDATE_MODULES(state, modules) {
    state.modules = modules
  }
}

export const actions = {
  updateCurrentPage({ commit }, currentPage) {
    commit('UPDATE_CURRENT_PAGE', currentPage)
  },
  updateCurrentTransition({ commit }, currentTransition) {
    commit('UPDATE_CURRENT_TRANSITION', currentTransition)
  },
  updateIsFirstLoad({ commit }, isFirstLoad) {
    commit('UPDATE_FIRST_LOAD', isFirstLoad)
  },
  updateIsMenuOpen({ commit }, isMenuOpen) {
    commit('UPDATE_MENU_OPEN', isMenuOpen)
  },
  updateGlobalAlert({ commit }, globalAlert) {
    commit('UPDATE_GLOBAL_ALERT', globalAlert)
  },
  fetchModules({ commit }, pageid) {
    return Services.getModules(pageid).then((response) => {
      commitTimeout(() => {
        commit('UPDATE_MODULES', response.data)
      })
    })
  }
}
