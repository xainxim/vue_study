<template>
  <div class="write">
    <header>
      <h1>게시글 등록</h1>
    </header>

    <section class="write-section">
      <div class="write-title">
        제목 &emsp;&emsp;<input type="text" name="title">
      </div>
      <textarea name="content" cols="130" rows="15"></textarea>
      
    </section>

    <footer>
      <button><router-link to="/">저장</router-link></button>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'WritePage',
  components: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/write.css';
</style>
