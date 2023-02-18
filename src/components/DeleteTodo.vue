<template>
    <div class="absolute top-0 left-0 w-screen h-screen flex justify-center bg-gray-500/70">
        <div class="w-full min-w-fit max-w-md bg-red-300 mt-20 h-fit p-4 flex flex-col gap-4 mx-4">
            <div class="w-full flex justify-between ">
                <h2> Delete Todo </h2>
                <font-awesome-icon class="text-white" icon="fa-solid fa-xmark" @click="onCancelClick" />
            </div>
            <div class="flex gap-4">
                <button class="w-full bg-red-500 py-2" @click="deleteThisTodo"> Yes </button>
                <button class="w-full bg-green-500 py-2" @click="onCancelClick"> No </button>
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
        deleteThisTodo(){            
            this.deleteTodo(this.todo.id);
            this.$emit('toggle-event');       
        },
        onCancelClick(){
            this.$emit('toggle-event');
        }
    }    
}

</script>