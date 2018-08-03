<template>
    <span class="inline-code"><span>{{className}}</span>.<span style="color:#dd4a68">{{method}}</span>()</span>
</template>

<script>
import Name from './Name.vue';

export default {
    components: {
        Name,
    },
    computed: {
        className: function() {
            return this.$slots.default[0].text.split('.')[0];
        },
        method: function() {
            return this.$slots.default[0].text.split('.')[1].replace('()', '');
        }
    }
}
</script>