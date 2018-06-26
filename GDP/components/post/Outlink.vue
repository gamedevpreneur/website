<template>
    <a :href="href"><slot /><i class="fas fa-external-link-alt"></i></a>
</template>

<script>
export default {
    props: [
        "href",
    ],
}
</script>
