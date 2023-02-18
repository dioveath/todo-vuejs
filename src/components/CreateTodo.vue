<template>
    <div class="absolute top-0 left-0 w-screen h-screen flex justify-center bg-gray-500/70">
        <div class="w-full min-w-fit max-w-md bg-red-300 mt-20 h-fit p-4 flex flex-col gap-4 mx-4">
            <div class="w-full flex justify-between ">
                <h2> Add Todo </h2>
                <font-awesome-icon class="text-white" icon="fa-solid fa-xmark" @click="$emit('toggle-event')" />
            </div>

            <ValidationObserver v-slot="{ invalid }">
                <form @submit.prevent="addNewTodo">
                    <ValidationProvider rules="dueDate" v-slot="{ errors }">
                        <div class="flex">
                            <label for="dueDate"> Deadline </label>
                            <input type="date" v-model="deadline" />
                        </div>
                        <p> {{ errors[0] }}</p>                        
                    </ValidationProvider>

                    <ValidationProvider rules="title" v-slot="{ errors }">
                        <div class="flex">
                            <label for="todoTitle"> Title </label>
                            <input type="text" v-model="title" />
                        </div>
                        <p> {{ errors[0] }}</p>                        
                    </ValidationProvider>
                    <button class="w-full bg-blue-500 py-2 disabled:bg-gray-500" type="submit" :disabled="invalid"> Add </button>
                </form>
            </ValidationObserver>
        </div>
    </div>
</template>
    
<script>
import { mapActions } from 'vuex';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
    name: 'CreateTodo',
    props: {
        isOpen: Boolean,
    },
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            title: "",
            deadline: new Date().toISOString().split('T')[0]
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        addNewTodo() {
            const newTodo = {
                title: this.title,
                dueDate: this.deadline,
                isComplete: false,
            }
            
            this.addTodo(newTodo);
            this.$emit('toggle-event');
            this.clear();
        },
        clear() {
            this.title = "";
            this.deadline = new Date().toLocaleDateString();
        }
    }
}

</script>
