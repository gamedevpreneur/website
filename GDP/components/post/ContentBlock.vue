<template>
    <div :class="bg">
        <div class="content-block">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "color",
    ],

    data() {
        return {
            bg: this.color == "grey" ? "bg-grey" : "",
        }
    }
}
</script>