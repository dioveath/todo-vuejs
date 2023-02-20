import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "light",
    todos: [],
  },
  getters: {
    getTodoById: (state) => (id) => state.todos.find((todo) => todo.id === id),
    pendingTodos: (state) => state.todos.filter((t) => !t.isComplete),
    completedTodos: (state) => state.todos.filter((t) => t.isComplete),
    dueTodos: (state) => {
      return state.todos.filter((todo) => {
        if (todo.isComplete) return false;
        const dueTime = new Date(todo.dueDate);
        const nowTime = new Date();
        dueTime.setHours(0, 0, 0, 0);
        nowTime.setHours(0, 0, 0, 0);
        return nowTime > dueTime;
      });
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("add_todo", todo);
    },
    updateTodo({ commit }, todo) {
      commit("update_todo", todo);
    },
    deleteTodo({ commit }, id) {
      commit("delete_todo", id);
    },
    changeTheme({ commit }, theme) {
      commit("change_theme", theme);
    },
  },
  mutations: {
    initialize_store(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
    add_todo(state, todo) {
      // validate todo
      todo.id = uuidv4();
      state.todos.push(todo);
    },
    update_todo(state, todo) {
      if (!todo?.id) {
        console.error("not valid id");
        return;
      }
      const idx = state.todos.findIndex((t) => t.id === todo.id);
      if (idx === -1) {
        console.error("couldn't find with the given id");
        return;
      }
      Object.assign(state.todos[idx], todo);
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter((t) => t.id !== id);
    },
    change_theme(state, theme) {
      switch (theme) {
        case "dark":
          state.theme = "dark";
          break;
        case "light":
        default:
          state.theme = "light";
      }
    },
  },
});
