<template>
    <div class="ox-answer">
        <button class="show-answer" href="#" v-if="!showAnswer" v-on:click="clickToShow"><i class="fas fa-angle-double-right"></i> Show Answer</button>
        <div v-if="showAnswer">
            <span class="ox-sign">A. </span>
            <slot />
        </div>
    </div>
</template>

<script>
import Name from './Name.vue';

export default {
    data() {
        return {
            showAnswer: false,
        }
    },

    methods: {
        clickToShow: function (event) {
            this.showAnswer = true;
        },
    }

    
}
</script>