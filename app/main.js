const state = {
  notes: [],
  timestamps: []
}

const mutations = {
  ADD_NOTE(state, payload) {
    let newNote = payload;
    state.notes.push(newNote);
  },
  ADD_TIMESTAMP(state, payload) {
    let newTimestamp = payload
    state.timestamps.push(newTimestamp)
  }
}

const inputComponent = {
  template: `<input placeholder='Enter a note' class="input is-small" type="text" />`,
}

new Vue({
  el: '#app',
  components: {
    'input-component': inputComponent
  }
})
