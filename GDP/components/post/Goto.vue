<template>
    <div class="goto">
        <i class="fas fa-arrow-circle-right"></i><a :href="href"><slot /></a>
    </div>
</template>

<script>
export default {
    props: [
        "href",
    ],
}
</script>