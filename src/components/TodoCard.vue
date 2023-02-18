<template>
    <div class="w-full flex flex-col">
        <UpdateTodo :todo="todo" @toggle-event="toggleUpdateDialog" v-if="showUpdate"/>
        <DeleteTodo :todo="todo" @toggle-event="toggleDeleteDialog" v-if="showDelete" />
        <div class="w-full flex flex-wrap justify-between items-center py-2 px-4"
            :class="todo.isComplete ? 'bg-green-500' : 'bg-gray-400'">
            <div class="flex gap-2 items-center">
                <input type="checkbox" id="todoCheck" v-model="checkComplete" @change="changeComplete">
                <p class="text-xs text-gray-900"> {{ todo.dueDate }}</p>
                <p> {{ todo.title }} </p>
            </div>
            <div class="flex gap-4">
                <button class="hover:text-white"> <font-awesome-icon icon="fa-solid fa-pen-to-square"
                        @click="toggleUpdateDialog" />
                </button>
                <button class="hover:text-red-700"> <font-awesome-icon icon="fa-solid fa-trash"
                        @click="toggleDeleteDialog" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import UpdateTodo from './UpdateTodo.vue';
import DeleteTodo from './DeleteTodo.vue';

export default {
    name: 'TodoCard',
    components: {
        UpdateTodo,
        DeleteTodo
    },
    props: {
        todo: Object
    },
    data: function () {
        return {
            checkComplete: this.todo.isComplete,
            showUpdate: false,
            showDelete: false,
        };
    },
    watch: { 
        $props: {
            deep: true,
            immediate: true,
            handler(newProps){
                this.checkComplete = newProps.todo.isComplete;
            }
        }
    },
    methods: {
        ...mapActions(["updateTodo", "deleteTodo"]),
        changeComplete() {
            // eslint-disable-next-line no-unused-vars
            const { isComplete, ...rest } = this.todo;

            const updatedTodo = {
                isComplete: this.checkComplete,
                ...rest
            };

            this.updateTodo(updatedTodo);
        },
        deleteThisTodo() { this.deleteTodo(this.todo.id); },
        toggleUpdateDialog() { this.showUpdate = !this.showUpdate; },
        toggleDeleteDialog() { this.showDelete = !this.showDelete; }
    }
}
</script>