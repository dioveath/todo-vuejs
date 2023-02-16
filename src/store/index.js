import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        isComplete: false,
        title: "Fill up the water tank!",
        dueDate: "02/15/2022",
      },
      {
        isComplete: false,
        title: "Customize the UIs!",
        dueDate: "02/15/2022",
      },
    ],
  },
  getters: {
    getTodos: (state) => state.deleteTodo,
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("add_todo", todo);
    },
    updateTodo({ commit }, todo) {
      commit("update_todo", todo);
    },
    deleteTodo({ commit }, title) {
      commit("delete_todo", title);
    },
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
    },
    update_todo(state, todo) {
      const idx = state.todos.findIndex((t) => t.title === todo.title);
      if (idx === -1) return;
      state.todos[idx] = todo;
    },
    delete_todo(state, title) {
      state.todos = state.todos.filter((t) => t.title !== title);
    },
  },
});
