<template>
    <div class="w-full flex flex-wrap px-4 md:px-32 gap-4">
        <Createtodo @toggle-event="toggleShow" :is-open="isOpen" />
        <div class="w-full h-full flex-1">
            <div class="w-full min-w-max flex flex-wrap justify-between items-center my-2 gap-4">
                <h2 class="font-bold text-lg"> TODOS </h2>
                <button class="text-white bg-blue-500 rounded-sm px-4 py-2" @click="toggleShow"> Add Todo </button>
            </div>
            <div class="w-full flex flex-wrap justify-between items-center my-2 gap-4">
                <input type="text" class="text-black bg-gray-300 rounded-sm flex-1 px-4 py-2"
                    placeholder="Search for todos..!">
                <button class="text-white bg-blue-500 rounded-sm px-4 py-2"> Search </button>
            </div>
            <div class="w-full flex flex-wrap justify-between items-center my-2 gap-4 text-sm text-gray-600">
                <div class="flex items-center gap-4">
                    <font-awesome-icon icon="fa-solid fa-less-than" />
                    <p class=""> Date: 02/15/2023 </p>
                    <font-awesome-icon icon="fa-solid fa-greater-than" />
                </div>

                <select name="filter" id="filterTodos" v-model="filter" @change="onFilterChange">
                    <option value="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="due">Past Due</option>
                </select>
            </div>
            <div class="w-full flex flex-col">
                <TodoCard v-for="todo in displayTodos" v-bind:key="todo.id" :todo="todo" />
            </div>
        </div>
        <div class="w-full min-w-max lg:flex-[0.25]">
            <h2> Summary </h2>
            <p> Total Todos: {{ totalTodos }}</p>
            <p> Pending Todos: {{ pendingTodos.length }}</p>
            <p> Completed Todos: {{ completedTodos.length }}</p>
            <p> Past Due Todos: {{ dueTodos.length }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import TodoCard from './TodoCard.vue';
import Createtodo from './CreateTodo.vue';

export default {
    name: 'ContentView',
    components: {
        TodoCard,
        Createtodo
    },
    data: function () {
        return {
            isOpen: false,
            displayTodos: [],
            filter: "all"
        }
    },
    mounted: function () {
        this.displayTodos = this.todos;
    },
    watch: { 
        todos: { 
            immediate: true,
            deep: true,
            handler(){ this.onFilterChange(); }
        }
    },
    computed: {
        ...mapState(['todos']),
        ...mapGetters(['pendingTodos', 'dueTodos', 'completedTodos']),
        totalTodos() { return this.$store.state.todos.length; },
    },
    methods: {
        onFilterChange() {
            switch (this.filter) {
                case 'completed':
                    this.displayTodos = this.completedTodos;
                    return;
                case 'pending':
                    this.displayTodos = this.pendingTodos;
                    return;
                case 'due':
                    this.displayTodos = this.dueTodos;
                    return;
                case 'all':
                default:
                    this.displayTodos = this.todos;
                    return;
            }
        },
        toggleShow() {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>