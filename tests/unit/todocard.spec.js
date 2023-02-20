import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import TodoCard from "@/components/TodoCard.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TodoCard.vue", () => {
  let store, state, actions, getters;

  beforeEach(() => {
    actions = {
      addTodo: jest.fn,
      updateTodo: jest.fn,
      deleteTodo: jest.fn
    };
    state = {
      todos: [
        {
          id: "test_id_1",
        },
        {
          id: "test_id_2",
        },
      ],
    };
    getters = {
      pendingTodos: (state) => [1, 2, 3],
      dueTodos: (state) => [1, 2, 3],
      completedTodos: (state) => [1, 2, 3],
    };

    store = new Vuex.Store({
      state,
      actions,
      getters
    });
  });

  it("renders title & date", () => {
    const wrapper = shallowMount(TodoCard, {  
      propsData: {
        todo: {
          id: 'test_id',
          title: 'Test Title',
          dueDate: '2023-02-23'
        }
      }
    });

    const title = wrapper.find('#title');
    const dueDate = wrapper.find('#duedate');

    expect(title.text()).toContain('Test Title');
    expect(dueDate.text()).toContain('2023-02-23');
  });

});
