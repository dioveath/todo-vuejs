<template>
    <div @wheel.prevent @touchmove.prevent @scroll.prevent
        class="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center bg-gray-500/70">
        <div class="w-full min-w-fit max-w-md bg-[#efefef] dark:bg-slate-800 mt-20 h-fit flex flex-col gap-4 mx-4">
            <div class="w-full flex justify-between p-4 bg-gray-300 dark:bg-slate-900">
                <h2> Update Todo </h2>
                <font-awesome-icon class="text-white" icon="fa-solid fa-xmark" @click="onCancelClick" />
            </div>
            <ValidationObserver v-slot="{ invalid }">
                <form @submit.prevent="updateThisTodo" class="px-4 pb-4 flex flex-col gap-4">
                    <ValidationProvider rules="dueDate" v-slot="{ errors }">
                        <div class="flex flex-col">
                            <label for="dueDate"> Deadline </label>
                            <input type="date" v-model="dTodo.dueDate"
                                class="text-black p-2 bg-gray-200 rounded-sm outline-none" />
                        </div>
                        <p class="text-xs text-red-500"> {{ errors[0] }}</p>
                    </ValidationProvider>

                    <ValidationProvider rules="title" v-slot="{ errors }">
                        <div class="flex flex-col">
                            <label for="todoTitle"> Title </label>
                            <input type="text" v-model="dTodo.title"
                                class="text-black p-2 bg-gray-200 rounded-sm outline-none"
                                placeholder="Update your todo..." />
                        </div>
                        <p class="text-xs text-red-500"> {{ errors[0] }}</p>
                    </ValidationProvider>
                    <button class="w-full bg-blue-500 dark:bg-blue-800 text-white py-2 disabled:bg-gray-500" type="submit"
                        :disabled="invalid"> Update </button>
                </form>
            </ValidationObserver>

        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
    name: 'UpdateTodo',
    props: {
        todo: Object,
    },
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data: function () {
        return {
            dTodo: { ...this.todo },
        };
    },
    methods: {
        ...mapActions(['updateTodo']),
        updateThisTodo() {
            this.updateTodo(this.dTodo);
            this.$emit('toggle-event');
        },
        onCancelClick() {
            this.dTodo = this.$props.todo;
            this.$emit('toggle-event');
        }
    }
}

</script>