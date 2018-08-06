<template>
    <div class="step">
        <div class="step-number">{{number}}</div>
        <div class="step-text"><slot /></div>
    </div>
</template>

<script>
export default {
    props: [
        "number",
    ],
}
</script>