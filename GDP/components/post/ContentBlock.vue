<template>
    <div :class="{ 'content-block': true, 'bg-grey': isGrey }">
        <slot />
    </div>
</template>

<script>
export default {
    props: [
        "color",
    ],

    data() {
        return {
            isGrey: this.color == "grey",
        }
    }
}
</script>