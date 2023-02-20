<template>
    <nav class="flex bg-gray-300 dark:bg-slate-900 justify-between md:items-center px-4 md:px-28 py-3 transition-all">
        <div class="flex items-center gap-2">
            <img :src="logo" alt="Todo App Logo" class="w-10 h-10">
            <p class="font-bold">My Todos</p>
        </div>
        <div class="flex items-center justify-center">
            <button class="dark:border-white border-black border-[2px] h-10 w-10 text-2xl rounded-md" @click="toggleTheme">
                <font-awesome-icon icon="fa-solid fa-moon" v-if="theme === 'light'"/>
                <font-awesome-icon icon="fa-solid fa-sun" v-if="theme === 'dark'"/>
            </button>            
            <!-- <button id="hamburger" class="md:hidden text-white" @click="isOpen = !isOpen">
                <font-awesome-icon icon="fa-solid fa-bars" :class="isOpen ? 'hidden' : 'block'" />
                <font-awesome-icon icon="fa-solid fa-xmark" :class="isOpen ? 'block' : 'hidden'" />
            </button>                         -->

            <!-- <ul class="flex-col md:flex md:flex-row items-end md:items-center gap-6 py-3 transition-all"
                :class="isOpen ? 'flex' : 'hidden'">
                <li class="hover:text-white cursor-pointer"> Home </li>
                    <li class="hover:text-white cursor-pointer"> Todos </li>
                    <li class="hover:text-white cursor-pointer"> About </li>                
            </ul> -->
        </div>
    </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import logo from '../assets/logo.png';

export default {
    name: 'NavBar',
    data: function () {
        return {
            isOpen: false,
            logo: logo
        };
    },
    computed: {
        ...mapState(['theme']),
    },
    methods: {
        ...mapActions(['changeTheme']),
        toggleTheme() {
            if (this.$store.state.theme === 'dark') {
                this.changeTheme('light');
            } else {
                this.changeTheme('dark');
            }
        }
    }
}
</script>