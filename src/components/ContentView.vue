<template>
    <div class="w-full h-full px-4 md:px-32">
        <div class="w-full flex flex-wrap justify-between items-center my-2 gap-4">
            <h2 class="font-bold text-lg"> TASKS </h2>
            <button class="text-white bg-blue-500 rounded-sm px-4 py-2"> Add Todo </button>
        </div>
        <div class="w-full flex flex-wrap justify-between items-center my-2 gap-4">
            <input type="text" class="text-black bg-gray-300 rounded-sm flex-1 px-4 py-2" placeholder="Search for todos..!">
            <button class="text-white bg-blue-500 rounded-sm px-4 py-2"> Search </button>
        </div>
        <div class="w-full flex flex-wrap justify-between items-center my-2 gap-4 text-sm text-gray-600">
            <p class=""> Date: 02/15/2023 </p>
            <select name="filter" id="filterTasks">
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>                
                <option value="completed">Past Due</option>                                
            </select>
        </div>        
        <div class="w-full flex flex-col justify-between items-center my-2 gap-4 text-sm text-gray-600">
            <p class="text-lg"> {{ count }}</p>
            <button class="text-white bg-blue-500 rounded-sm px-4 py-2" @click="increment"> Increment </button>
        </div>                
    </div>
</template>

<script>

export default {
    name: 'ContentView',
    data: function () {
        return {
            isOpen: false,
        };
    },
    computed: { 
        count () { return this.$store.state.count; }
    },
    methods: {
        increment () { 
            this.$store.commit('increment');
        }
    }
}
</script>