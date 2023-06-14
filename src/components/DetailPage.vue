<template>
    <div class="detail">
        <header>
            <h1>게시글 상세 화면</h1>
        </header>
        <div class="contents">
            <div id="menu">
            <ul>
                <li>글 번호</li>
                <li>{{webIdx}}</li>
                <li>조회수</li>
                <li>{{hitCnt}}</li>
            </ul>
            <ul>
                <li>작성자</li>
                <li>{{creatorId}}</li>
                <li>작성일</li>
                <li>{{createdDatetime}}</li>
            </ul>
            <ul>
                <li>제목</li>
                <li><input type="text" :value="webTitle" class="detailInput" @input="webTitle = $event.target.value"></li>
            </ul>
            <textarea class="detailContent" cols="50" rows="20" :value="contents" @input="contents = $event.target.value"></textarea>
            </div>
            <footer>
                <button class="detailBtn"><router-link to="/">목록으로</router-link></button>
                <button class="detailBtn" v-on:click="updateList()">수정하기</button>
                <button class="detailBtn" v-on:click="deleteList()">삭제하기</button>
            </footer>
        </div>
    </div>
</template>
<script>
export default {   
  props:{
    idx:Number
  },
  data() {
    return {
      webIdx: this.$route.params.idx,
      webTitle : '',
      contents : '',
      createdDatetime : '',
      hitCnt : '',
      creatorId : ''
    };
  },
  methods: {
    getBoardList(){
        this.axios.get("/api/web/" + this.webIdx).then((res) => {
            this.webTitle = res.data.title;
            this.contents = res.data.contents;
            this.createdDatetime = res.data.createdDatetime;
            this.hitCnt = res.data.hitCnt;
            this.creatorId = res.data.creatorId;
      });
    },
    updateList(){
        if(this.webTitle == "" || this.contents == ""){
            alert('제목과 내용을 입력해주세요 !');
            return;
        }
        this.axios.put("/api/web/", {
            webIdx : this.webIdx,
            title : this.webTitle,
            contents : this.contents
        }).then((res) => {
            if(res.status == '200'){
                this.$router.push('/');

            }
            console.log(this.webIdx);
            console.log(this.title);
        })
    },
    deleteList(){
        this.axios.delete("/api/web/" + this.webIdx).then((res) => {
            if(res.status == '200'){
                this.$router.push('/');
            }
        })
    }
  },
  created() {
    this.getBoardList();
  },
}
</script>
<style scoped>
@import '../assets/css/detail.css';
</style>