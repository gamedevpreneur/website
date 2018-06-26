<template>
    <div class="post-image-wrap">
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
