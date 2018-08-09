<template>
    <div class="console-window">
        <div class="console-title">
            <i class="fas fa-terminal window-icon"></i>
            <span>{{title}}</span>
            <i class="fas fa-times close-icon"></i>
        </div>
        <div class="console-content">
            <pre>{{content}}</pre>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            default: "Console Window",
        },
    },

    computed: {
        content: function() {
            return this.$slots.default[0].text.trim();
        },
    }
}
</script>