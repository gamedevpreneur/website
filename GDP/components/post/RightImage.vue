<template>
    <div class="right-image">
        <img :src="src" :title="title" />
    </div>
</template>

<script>
export default {
    props: [
        "src",
        "title",
    ],
}
</script>
