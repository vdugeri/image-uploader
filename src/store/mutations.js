export let images = (state, payload) => {
  state.photos = { ...state.photos, ...payload.images };
};
