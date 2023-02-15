<template>
    <nav class="flex bg-blue-400 justify-between md:items-center px-4 md:px-20 py-3 transition-all">
        <div class="text-lg">
            Todo App Logo
        </div>
        <div class="flex flex-col items-end">
            <button id="hamburger" class="md:hidden text-white" @click="isOpen = !isOpen">
                <font-awesome-icon icon="fa-solid fa-bars" :class="isOpen ? 'hidden': 'block'"/>
                <font-awesome-icon icon="fa-solid fa-xmark" :class="isOpen ? 'block': 'hidden'"/>                
            </button>
            <ul class="flex-col md:flex md:flex-row items-end md:items-center gap-6 py-3 transition-all"
                :class="isOpen ? 'flex' : 'hidden'">
                <li class="hover:text-white cursor-pointer"> Home </li>
                <li class="hover:text-white cursor-pointer"> Todos </li>
                <li class="hover:text-white cursor-pointer"> About </li>
                <button class="hidden md:block">
                    Dark
                </button>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'NavBar',
    data: function () {
        return {
            isOpen: false,
        };
    }
}
</script>