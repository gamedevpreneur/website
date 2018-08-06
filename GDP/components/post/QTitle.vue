<template>
    <h3 class="quiz-section-title">
        <span class="quiz-section-name">{{name}}</span>
        {{explanation}}
    </h3>
</template>

<script>
export default {
    computed: {
        name: function() {
            return this.$slots.default[0].text.split('.')[0];
        },
        explanation: function() {
            return this.$slots.default[0].text.split('.')[1].replace('()', '');
        }
    }
}
</script>