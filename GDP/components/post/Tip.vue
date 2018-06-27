<template>
    <div class="post-tip">
        <div class="post-tip-title-area">
            <span class="post-tip-name"><i class="far fa-lightbulb box-icon"></i>Tip</span>
            <h4 class="post-tip-title" v-if="title != ''" >{{title}}</h4>
        </div>
        <div class="post-tip-content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "title",
    ],
}
</script>