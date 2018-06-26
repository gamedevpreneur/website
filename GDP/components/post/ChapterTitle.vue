<template>
    <div class="post-chapter-title-wrap">
        <div class="post-chapter-number">Chapter {{ number }}</div>
        <h2 class="post-chapter-title"><slot /></h2>
    </div>
</template>

<script>
export default {
    props: [
        'number',
    ],
}
</script>