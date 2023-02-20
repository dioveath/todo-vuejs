<template>
    <div @wheel.prevent @touchmove.prevent @scroll.prevent
        class="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center bg-gray-500/70">
        <div class="w-full min-w-fit max-w-md mt-20 h-fit bg-[#efefef] dark:bg-slate-800 flex flex-col gap-4 mx-4">
            <div class="w-full flex justify-between bg-gray-300 dark:bg-slate-900 p-4">
                <h2> Delete Todo </h2>
                <font-awesome-icon class="text-white" icon="fa-solid fa-xmark" @click="onCancelClick" />
            </div>
            <div class="flex gap-4 px-4 pb-4">
                <button class="w-full bg-red-500 py-2 text-white" @click="deleteThisTodo"> Yes </button>
                <button class="w-full bg-green-500 py-2 text-white" @click="onCancelClick"> No </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'DeleteTodo',
    props: {
        todo: Object,
    },
    methods: {
        ...mapActions(['deleteTodo']),
        deleteThisTodo() {
            this.deleteTodo(this.todo.id);
            this.$emit('toggle-event');
        },
        onCancelClick() {
            this.$emit('toggle-event');
        }
    }
}

</script>