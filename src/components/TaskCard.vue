<template>
    <div class="w-full flex flex-col">
        <div class="w-full flex flex-wrap justify-between items-center py-2 px-4"
            :class="isComplete$ ? 'bg-green-500' : 'bg-gray-400'">
            <div class="flex gap-2 items-center">
                <input type="checkbox" id="taskCheck" v-model="isComplete$" @change="changeComplete">
                <p class="text-xs text-gray-900"> {{ dueDate$ }}</p>
                <p> {{ title$ }} </p>
            </div>
            <div class="flex gap-4">
                <button class="hover:text-white"> <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                </button>
                <button class="hover:text-white"> <font-awesome-icon icon="fa-solid fa-calendar-days" />
                </button>
                <button class="hover:text-red-700"> <font-awesome-icon icon="fa-solid fa-trash" @click="deleteThisTodo" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'TaskCard',
    props: {
        title: String,
        isComplete: Boolean,
        dueDate: String
    },
    data: function () {
        return {
            title$: this.title,
            isComplete$: this.isComplete,
            dueDate$: this.dueDate
        };
    },
    methods: {
        ...mapActions(["updateTodo", "deleteTodo"]),
        changeComplete() {
            const newTodo = {
                title: this.title$,
                isComplete: this.isComplete$,
                dueDate: this.dueDate$
            };
            this.updateTodo(newTodo);
        },
        deleteThisTodo() {
            this.deleteTodo(this.title);
        }
    }
}
</script>