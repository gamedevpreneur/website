<template>
    <div class="answer">
        <button class="show-answer" href="#" v-if="!showAnswer" v-on:click="clickToShow"><i class="fas fa-angle-double-right"></i> Show Answer</button>
        <div v-if="showAnswer">
            <h4 class="answer-head">Answer</h4>
            <slot />
        </div>
    </div>
</template>

<script>
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