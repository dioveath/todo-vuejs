import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: uuidv4(),
        isComplete: false,
        title: "Fill up the water tank!",
        dueDate: "2023-02-15",
      },
      {
        id: uuidv4(),
        isComplete: false,
        title: "Customize the UIs!",
        dueDate: "2023-02-15",
      },
    ],
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("add_todo", todo);
    },
    updateTodo({ commit }, todo) {
      console.log('update action...');
      commit("update_todo", todo);
    },
    deleteTodo({ commit }, id) {
      commit("delete_todo", id);
    },
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
    },
    update_todo(state, todo) {
      console.log('update mutation....');
      if(!todo?.id) { 
        console.error("not valid id");
        return;
       }
      const idx = state.todos.findIndex((t) => t.id === todo.id);
      if (idx === -1) { 
        console.error("couldn't find with the given id");
        return;
      }
      Object.assign(state.todos[idx], todo);
      console.log("updated successfully!");
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter((t) => t.id !== id);
    },
  },
});
