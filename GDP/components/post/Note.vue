<template>
    <div class="post-note">
        <div class="post-note-title-area">
            <span class="post-note-name"><i class="fas fa-pen box-icon"></i>Note</span>
            <h4 class="post-note-title" v-if="title != ''" >{{title}}</h4>
        </div>
        <div class="post-note-content">
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