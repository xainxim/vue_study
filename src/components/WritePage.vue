<template>
  <div class="write">
    <header>
      <h1>게시글 등록</h1>
    </header>

    <section class="write-section">
      <div class="write-title">
        제목 &emsp;&emsp;<input type="text" class="writeInput" v-model="title">
      </div>
      <textarea class="writeContent" cols="130" rows="15" v-model="contents"></textarea>
      
    </section>

    <footer>
      <button v-on:click="saveDATA()" class="writeBtn">저장</button>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'WritePage',
  components: {
  },
  data(){
    return{
      title : '',
      contents : ''
    }
  },
  methods: {
    saveDATA(){
      if(this.title == "" || this.contents == ""){
        alert('제목, 내용 좀');
        return;
      }
      this.axios.post("/api/web/write",{
        title: this.title,
        contents: this.contents
      }).then((res) => {
        if(res.status== '200'){
          alert('저장 완료');
          this.$router.push('/');
        }
      }
      );
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/write.css';
</style>
