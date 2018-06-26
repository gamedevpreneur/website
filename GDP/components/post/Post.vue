<template>
    <div class="post">
        <NavBar />
        <main id="main" class="site-main" role="main">
            <article class="post-content">
                <slot />
            </article>
        </main>
    </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar,
  }
}
</script>