<template>
<Post>
  <ContentBlock>
    <Title>The C# Guide for JavaScript Developers</Title>
  </ContentBlock>
  <ContentBlock>
    <FullImage src="/img/cs4j/opening.png" title="C# guide for JavaScript developers isn't a fantasy." />
    <p>You’re a web developer. That means you’re not a beginner. </p>
    <p>But most C# tutorials treat you like a novice. They kindly explains what variables, functions are. Unfortunately, it’s too boring for you. </p>
    <p>What you need is the comprehensive comparison between JavaScript and C#. </p>
    <p>Because you need to know how to do your daily task like declaring variables, looping arrays and dictionaries, handling objects in C# to finish the tasks. </p>
    <p>And this guide is written just for you. </p>
  </ContentBlock>
  <ContentBlock color="grey">
    <Subhead>Test Phrase</Subhead>
    <p>Note: The main topic of this blog is making game with Unity Engine. That’s why I used a lot of game examples. But it doesn’t mean that it isn’t helpful for you if you don’t want to make a game. </p>
    <p>I don’t cover any Unity methods or classes. It’s all about C# with game examples. </p>
    <p>If you are not interested in Unity, just skip chapter 0 and start from chapter 1. </p>
  </ContentBlock>
  <ContentBlock>
    <p>You’re a web developer. That means you’re not a beginner. </p>
    <p>But most C# tutorials treat you like a novice. They kindly explains what variables, functions are. Unfortunately, it’s too boring for you. </p>
    <p>What you need is the comprehensive comparison between JavaScript and C#. </p>
    <p>Because you need to know how to do your daily task like declaring variables, looping arrays and dictionaries, handling objects in C# to finish the tasks. </p>
    <p>And this guide is written just for you. </p>
  </ContentBlock>
  <ContentBlock>
    <ChapterTitle number="0">Unity Supports JavaScript. Why should I learn C#?</ChapterTitle>
  </ContentBlock>
  <ContentBlock>
    <p>Because Unity has never supported JavaScript since its birth. </p>
    <p>You might think I’m kidding. And you can give me the link to <Outlink href="https://www.youtube.com/watch?time_continue=1&v=GPpw_ZE1LVc">their official video that compares C# and JavaScript.</Outlink> </p>
    <Tip title="Lorem ipsum">
      <p>Because Unity has never supported JavaScript since its birth. </p>
      <p>You might think I’m kidding. And you can give me the link to <Outlink href="https://www.youtube.com/watch?time_continue=1&v=GPpw_ZE1LVc">their official video that compares C# and JavaScript.</Outlink> </p>
    </Tip>
    <Note title="Test note">
      <p>You’re a web developer. That means you’re not a beginner. </p>
      <p>But most C# tutorials treat you like a novice. They kindly explains what variables, functions are. Unfortunately, it’s too boring for you. </p>
    </Note>
  </ContentBlock>
</Post>
</template>

<script>
import PostComponents from '~/components/post-components'

export default {
  components: PostComponents,
  head() {
    return {
      title: "C# for JavaScript Developers: The Side-by-side Comparison",
    }
  },
}
</script>