<template>
  <header id="home_header">
    <div class="container">
      <div class="row">
        <div class="header">

          <!-- header_menu -->
          <div class="header_menu">
            <router-link to="#">Blog</router-link>
            <router-link to="#">Github</router-link>
            <router-link to="#">Korini</router-link>
          </div>

          <!-- header_title -->
          <div class="header_title">
            <h1>Professional Web Publishser</h1>
            <a href="https://shiro21.tistory.com/" target="_blank">shiro21.tistory.com</a>
          </div>

          <!-- header_icon -->
          <div class="header_icon">
            <ul>
              <li><router-link to="/"><fa class="html" :icon="['fab', 'html5']" /><span>HTML5</span></router-link></li>
              <li><router-link to="/"><fa class="git" :icon="['fab', 'github']" /><span>Github</span></router-link></li>
              <li><router-link to="/"><fa @click="facebookMove()" class="facebook" :icon="['fab', 'facebook-square']" /><span>Facebook</span></router-link></li>
              <li><router-link to="/"><fa @click="twitterMove()" class="twitter" :icon="['fab', 'twitter']" /><span>Twitter</span></router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- // home_header -->

  <nav id="home_nav">
    <div class="container">
      <div class="row">
        <!-- ir_su 웹표준 -->
        <h2 class="ir_su">반응형 사이트 전체 메뉴</h2>
        <div>
          <h3>HTML Reference</h3>
          <ol>
            <li><a href="#">HTML 태그(Tag)</a></li>
            <li><a href="#">블록 요소/인라인 요소</a></li>
            <li><a href="#">DTD 선언</a></li>
            <li><a href="#">언어 속성 설정</a></li>
            <li><a href="#">HTML &lt;title&gt;</a></li>
            <li><a href="#">HTML &lt;meta&gt;</a></li>
            <li><a href="#">특수문자</a></li>
            <li><a href="#">하이퍼 링크</a></li>
            <li><a href="#">HTML &lt;style&gt;</a></li>
            <li><a href="#">HTML &lt;html&gt;</a></li>
            <li><a href="#">HTML &lt;head&gt;</a></li>
            <li><a href="#">HTML &lt;div&gt;</a></li>
            <li><a href="#">HTML &lt;colgroup&gt;</a></li>
            <li><a href="#">HTML &lt;caption&gt;</a></li>
          </ol>
        </div>

        <div>
          <h3>CSS Reference</h3>
          <ol>
            <li><a href="#">CSS 선택자</a></li>
            <li><a href="#">CSS 단위</a></li>
            <li><a href="#">CSS 색상</a></li>
            <li><a href="#">CSS 선언 방법</a></li>
            <li><a href="#">상대주소와 절대주소</a></li>
            <li><a href="#">CSS float</a></li>
            <li><a href="#">이미지 표현 방법</a></li>
            <li><a href="#">이미지 스프라이트</a></li>
            <li><a href="#">IR 효과</a></li>
            <li><a href="#">이미지 최적화</a></li>
            <li><a href="#">background-color</a></li>
            <li><a href="#">border-style</a></li>
            <li><a href="#">font-size</a></li>
            <li><a href="#">text-align</a></li>
          </ol>
        </div>

        <div>
          <h3>Webstandard</h3>
          <ol>
            <li><a href="#">웹 표준</a></li>
            <li><a href="#">웹 접근성</a></li>
            <li><a href="#">W3C</a></li>
            <li><a href="#">웹 접근성 연구소</a></li>
            <li><a href="#">네이버 널리</a></li>
            <li><a href="#">다음 다룸</a></li>
            <li><a href="#">Webstandard</a></li>
          </ol>
        </div>
      </div>
    </div>
  </nav>
  <!-- // home_nav -->

  <article id="home_title">
    <div class="container">
      <div class="title">
        <h2>"Shiro21 Site"</h2>
        <a href="#" class="btn">
          <!-- aria-hidden : 안에 내용은 읽지 않고, 스크린리더에서만 읽을 수 있는 아이콘 설명이 들어간다. -->
          <fa class="angle-down" :icon="['fas', 'angle-down']" aria-hidden="true" />
          <span class="ir_su">전체메뉴 보기</span>
        </a>
      </div>
    </div>
  </article>

  <!-- // home_title -->

  <main>
    <section id="home_contents">
      <div class="container">
        <h2 class="ir_su">반응형 사이트 컨텐츠</h2>
        <section id="contents_left">
          <h3 class="ir_su">반응형 사이트 왼쪽 컨텐츠</h3>
          <article class="column" :class="[`col${i + 1}`]" v-for="(item, i) in items" :key="item">
            <h4 class="col_title">{{item.title}}</h4>
            <p class="col_description">{{item.description}}</p>
            <div class="menu">
              <ul>
                <li v-for="menu in item.menus" :key="menu"><a href="#">{{menu.menu}} <fa class="icon" :icon="['fas', menu.icon]" /></a></li>
              </ul>
            </div>
          </article>
        </section>
        <!-- // contents_left -->
        <section id="contents_center">
          <h3 class="ir_su">반응형 사이트 가운데 컨텐츠</h3>
          <article class="column" :class="[`col${i + 4}`]" v-for="(item, i) in [0,1,2]" :key="item">
            <h4 class="col_title">Title {{i + 4}}</h4>
            <p class="col_description">이곳은 설명부분입니다.</p>
          </article>
        </section>
        <!-- // contents_center -->
        <section id="contents_right">
          <h3 class="ir_su">반응형 사이트 오른쪽 컨텐츠</h3>
          <article class="column" :class="[`col${i + 7}`]" v-for="(item, i) in [0,1,2]" :key="item">
            <h4 class="col_title">Title {{i + 7}}</h4>
            <p class="col_description">이곳은 설명부분입니다.</p>
          </article>
        </section>
        <!-- // contents_right -->
      </div>
    </section>
  </main>
  <!-- // contents -->

  <footer id="home_footer">
    <div class="container">
      <h2>반응형 사이트 푸터</h2>
    </div>
  </footer>

</template>

<script>
import $ from 'jquery'

export default {
  name: 'Home',
  data() {
    return {
      items: [
        {
          title: 'Menu',
          description: 'Box-Shadow를 이용한 마우스 오버 효과 메뉴',
          menus: [
            {
              menu: 'Cafe',
              icon: 'angle-double-right'
            },
            {
              menu: 'Tutorial',
              icon: 'angle-double-right'
            },
            {
              menu: 'WebSite',
              icon: 'angle-double-right'
            },
            {
              menu: 'Reference',
              icon: 'angle-double-right'
            },
            {
              menu: 'CSS3',
              icon: 'angle-double-right'
            },
            {
              menu: 'HTML5',
              icon: 'angle-double-right'
            }
          ]
        },
        {
          title: 'Menu1',
          description: 'Box-Shadow를 이용한 마우스 오버 효과 메뉴'
        },
        {
          title: 'Menu2',
          description: 'Box-Shadow를 이용한 마우스 오버 효과 메뉴'
        }
      ]
    }
  },
  components: {
  },
  methods: {
    facebookMove() {
      $(".facebook").click(function (e) {
        e.preventDefault()
        window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600')
      })
    },
    twitterMove() {
      $(".twitter").click(function (e) {
        e.preventDefault()
        window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' + encodeURIComponent(document.URL) + '%20-%20' + encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600')
      })
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/home.scss";
</style>
