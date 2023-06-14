<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <paginated-list :HelloWorld="boardList" />
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
        <ul v-for="item in paginatedData" :key="item">
          <li>
            {{ item.webIdx }}
          </li>
          <li v-on:click="getBoardDetail(item.webIdx)" style="cursor : pointer">
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
      <div class="btn-cover">
        <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
          이전
        </button> 
        &emsp;<span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span> &emsp;
        <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
          다음
        </button>
      </div>

    </footer>
  </div>
</template>

<script>
export default { 
  name: 'HelloWorld',
  components: {
  },
  props: {
    msg: String,
    pageSize : {
      type : Number,
      required : false,
      default : 7
    }
  },
  el:'#sub-menu',
  data() {
    return {
      pageNum : 0,
      boardList: [
        {webIdx:''},
        {title:''},
        {hitCnt:''},
        {createdDatetime:''}
      ],
      boardLength :0,
    };
  },
  methods: {


    nextPage (){
      this.pageNum += 1;
    },
    prevPage(){
      this.pageNum -= 1;
    },
    getBoardList(){
      this.axios.get("/api/web").then((res) => {
        this.boardList = res.data;
        this.boardLength = this.boardList.length;
        console.log('length :: ' + this.boardList.length);
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
  computed: {
    pageCount(){      
      let listLeng = this.boardLength,
          listSize = this.pageSize,          
          page = Math.floor((listLeng - 1) / listSize) + 1;
          return page;
    },
    paginatedData (){
      const start = this.pageNum * this.pageSize,
            end = start + this.pageSize;
      return this.boardList.slice(start, end);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/hello.css';
</style>
