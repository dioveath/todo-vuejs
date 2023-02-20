<template>
    <div class="w-full flex flex-col">
        <UpdateTodo :todo="todo" @toggle-event="toggleUpdateDialog" v-if="showUpdate"/>
        <DeleteTodo :todo="todo" @toggle-event="toggleDeleteDialog" v-if="showDelete" />
        <div class="w-full flex flex-wrap justify-between items-center py-2 px-4 border-l-4 bg-gray-200 dark:bg-slate-500 rounded-sm gap-2 hover:cursor-default hover:scale-[101%] transition-all"
            :class="todo.isComplete ? 'border-green-500' : isDue ? 'border-red-500' : 'border-gray-400'">
            <div class="flex gap-2 items-center">
                <input type="checkbox" id="todoCheck" v-model="checkComplete" @change="changeComplete">
                <p id="duedate" class="text-xs text-gray-900 dark:text-gray-100"> {{ todo.dueDate }}</p>
                <p id="title"> {{ todo.title }} </p>
            </div>
            <div class="flex gap-4">
                <button class="hover:text-white text-sky-600 dark:text-sky-200"> <font-awesome-icon icon="fa-solid fa-pen-to-square"
                        @click="toggleUpdateDialog" />
                </button>
                <button id="duplicateButton" class="hover:text-white text-amber-600 dark:text-amber-200"> <font-awesome-icon icon="fa-solid fa-copy"
                        @click="duplicateTodo" />
                </button>                
                <button class="text-red-500 dark:text-red-300"> <font-awesome-icon icon="fa-solid fa-trash"
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
    computed: {
        isDue (){
            const dueTime = new Date(this.todo.dueDate);
            const nowTime = new Date();
            dueTime.setHours(0,0,0,0);
            nowTime.setHours(0,0,0,0);            
            return nowTime > dueTime;
        }
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
        ...mapActions(["updateTodo", "deleteTodo", "addTodo"]),
        duplicateTodo(){
            // eslint-disable-next-line no-unused-vars
            const { id, ...copyTodo } = this.todo;
            copyTodo.isComplete = false;
            this.addTodo(copyTodo);
        },
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