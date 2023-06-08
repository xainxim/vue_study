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
      <div id="sub-menu">        
        <ul v-for="item in boardList" :key="item">
          <li>
            {{ item.webIdx }}
          </li>
          <li v-on:click="getBoardDetail(item.webIdx)">
            {{ item.title }}
          </li>
          <li>
            {{ item.hitCnt }}
          </li>
          <li>
            {{ item.createdDatetime }}
          </li>
        </ul>
      </div>
    </section>

    <footer>
      <button><router-link to="/write">글 쓰기</router-link></button>
    </footer>
  </div>
</template>

<script>
export default { 
  name: 'HelloWorld',
  components: {
  },
  props: {
    msg: String
  },
  el:'#sub-menu',
  data() {
    return {
      boardList: [
        {webIdx:''},
        {title:''},
        {hitCnt:''},
        {createdDatetime:''}
      ]
    };
  },
  methods: {
    getBoardList(){
      this.axios.get("/api/web").then((res) => {
        this.boardList = res.data;
        // console.log(this.boardList);
      });
    },
    getBoardDetail(webIdx){
      this.$router.push('/detail/' + webIdx);
    }
  },
  created() {
    this.getBoardList();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/hello.css';
</style>
