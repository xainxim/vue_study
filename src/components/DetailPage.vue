<template>
    <div class="detail">
        <header>
            <h1>게시글 상세 화면</h1>
        </header>
        <div class="contents">
            <div id="menu">
            <ul>
                <li>글 번호</li>
                <li>111</li>
                <li>조회수</li>
                <li>111</li>
            </ul>
            <ul>
                <li>작성자</li>
                <li>aaa</li>
                <li>작성일</li>
                <li>2023.11.1</li>
            </ul>
            <ul>
                <li>제목</li>
                <li><input type="text" value="aa" class="detailInput"></li>
            </ul>
            <textarea class="detailContent" id="" cols="50" rows="20"></textarea>
            </div>
            <footer>
                <button class="detailBtn"><router-link to="/">목록으로</router-link></button>
                <button class="detailBtn">수정하기</button>
                <button class="detailBtn">삭제하기</button>
            </footer>
        </div>
    </div>
</template>

<style scoped>
@import '../assets/css/detail.css';
</style>