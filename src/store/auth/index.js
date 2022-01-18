export const authModule = {
  state: () => ({
    token: 'faketoken'
  }),
  modules: {
    subauth: {
      state: () => ({
        subauthtoken: 'anotherfaketoken'
      })
    }
  }

}