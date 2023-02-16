<template>
    <div class="w-full flex flex-wrap px-4 md:px-32 gap-4">
        <div class="w-full h-full flex-1">
            <div class="w-full min-w-max flex flex-wrap justify-between items-center my-2 gap-4">
                <h2 class="font-bold text-lg"> TASKS </h2>
                <button class="text-white bg-blue-500 rounded-sm px-4 py-2"> Add Todo </button>
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

                <select name="filter" id="filterTasks">
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="completed">Past Due</option>
                </select>
            </div>
            <div class="w-full flex flex-col">
                <TaskCard v-for="task in todos" v-bind:key="task.title" v-bind="task"/>
            </div>
        </div>
        <div class="w-full min-w-max lg:flex-[0.25]">
            <h2> Summary </h2>
            <p> Total Tasks: {{ totalTasks }}</p>
            <p> Pending Tasks: </p>
            <p> Completed Tasks: </p>
            <p> Past Due Tasks: </p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import TaskCard from './TaskCard.vue';


export default {
    name: 'ContentView',
    components: {
        TaskCard
    },
    data: function () {
        return {
            isOpen: false,
        };
    },
    computed: {
        ...mapState(['todos']),
        totalTasks () { return this.$store.state.todos.length; }
    }    
}
</script>