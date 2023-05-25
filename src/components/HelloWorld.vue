<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <header>
      <h1>게시글 목록</h1>
    </header>

    <section class="hello-section">
      <div class="main-menu">
        <ul>
          <li>글번호</li>
          <li>제목</li>
          <li>조회수</li>
          <li>작성일</li>
        </ul>
      </div>
      <p>조회된 결과가 없습니다</p>
    </section>

    <footer>
      <button><router-link to="/write">글 쓰기</router-link></button>
    </footer>
  </div>
</template>

<script>
// import WritePage from './WritePage.vue'

export default {
  name: 'HelloWorld',
  components: {
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/hello.css';
</style>
