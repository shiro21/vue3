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
            <div class="menu" v-if="item.menus">
              <ul>
                <li v-for="menu in item.menus" :key="menu"><a href="#">{{menu.menu}} <fa class="icon" :icon="['fas', menu.icon]" /></a></li>
              </ul>
            </div>

            <div class="notice" v-if="item.notices">
              <h5>Notice1</h5>
              <ul>
                <li v-for="notice in item.notices" :key="notice"><a href="#">{{notice}}</a></li>
              </ul>
              <a href="#" class="more" title="더 보기">More <fa class="plus" :icon="['fas', 'plus-circle']" /></a>
            </div>
            <div class="notice2 mt15" v-if="item.notices2">
              <h5>Notice2</h5>
              <ul>
                <li v-for="notice in item.notices2" :key="notice"><a href="#">{{notice}}</a></li>
              </ul>
              <a href="#" class="more" title="더 보기">More <fa class="plus" :icon="['fas', 'plus-circle']" /></a>
            </div>

            <div class="blog" v-if="item.figures">
              <h5 class="ir_su">Image</h5>
              <!-- figure = 사진 이미지 다이어그램 등을 감싸는 태그 -->
              <figure v-for="figure in item.figures" :key="figure">
                <img :class="figure.class" :src="figure.image" :alt="figure.alt">
                <figcaption :class="figure.class">{{figure.caption}}</figcaption>
              </figure>
            </div>

            <!-- 바인딩으로 하는방법....... . . . .  ..  -->
            <div class="blog2 mt15" v-if="item.title === 'Blog'">
              <div class="img_bg" v-bind:style="{backgroundImage: 'url('+ item.figures2[0].image +')'}">
                <h5>Image2</h5>
              </div>
              <p>이미지를 SCSS쪽으로 바인딩하는 방법 ?</p>
            </div>

            <div class="blog3 mt15" v-if="item.title === 'Blog'">
              <div class="img_bg2">
                <h5>Image3</h5>
              </div>
              <p>반응형 웹 사이트 이미지 글입니다.</p>
            </div>
          </article>
        </section>
        <!-- // contents_left -->
        <section id="contents_center">
          <h3 class="ir_su">반응형 사이트 가운데 컨텐츠</h3>
          <article class="column" :class="[`col${i + 4}`]" v-for="(item, i) in items2" :key="item">
            <h4 class="col_title">{{item.title}}</h4>

            <!-- 이미지 슬라이드 -->
            <div class="image_slider" slideWidth="100%" v-if="item.title === 'Carousel Slider'">
              <carousel :items-to-show="1" :wrapAround="true" :autoplay="5000">
                <slide v-for="slide in item.menus" :key="slide">
                  <div class="carousel__item">
                    <figure>
                      <img :src="slide.image" :alt="slide.alt" />
                      <figcaption><em>{{slide.caption}}</em><span>{{slide.description}}</span></figcaption>
                    </figure>
                  </div>
                </slide>

                <template #addons>
                  <navigation />
                  <pagination />
                </template>
              </carousel>
            </div>

            <div class="light_gallery" v-if="item.title === 'Blend Effect'">
              <lightgallery
                  :settings="{ speed: 500, plugins: plugins }"
                  :onInit="onInit"
                  :onBeforeSlide="onBeforeSlide"
              >
                <a
                    v-for="item in lightItems"
                    :key="item.id"
                    :data-lg-size="item.size"
                    className="gallery-item"
                    :data-src="item.src"
                >
                    <img className="img-responsive" :src="item.thumb" :alt="item.alt" />
                    <em>{{item.subscription}}</em>
                </a>
              </lightgallery>
            </div>

            <div class="video_contents" v-if="item.title === 'Video'">
              <!-- 비디오 직업 넣기 -->
              <!-- <video autoplay="autoplay" controls="controls" loop="loop">
                <source src="비디오.mp4" type="video/mp4" />
              </video> -->

              <!-- width값 height값 삭제하기 allowfullscreen="" title제거 -->
              <iframe src="https://www.youtube.com/embed/i4UiNe0j9_g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            </div>
          </article>
        </section>
        <!-- // contents_center -->
        <section id="contents_right">
          <h3 class="ir_su">반응형 사이트 오른쪽 컨텐츠</h3>
          <article class="column" :class="[`col${i + 7}`]" v-for="(item, i) in items3" :key="item">
            <h4 class="col_title">{{item.title}}</h4>
            <p class="col_description">{{item.description}}</p>

            <div class="side">
              <figure>
                <img :src="item.image" :alt="item.alt">
              </figure>
            </div>
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
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

// If you are using scss you can skip the css imports below and use scss instead
import 'lightgallery/scss/lightgallery.scss'

const lightGallery = null

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Lightgallery
  },
  watch: {
    items(newVal, oldVal) {
        this.$nextTick(() => {
            lightGallery.refresh()
        })
    }
  },
  data() {
    return {
      plugins: [lgThumbnail, lgZoom],
      lightItems: [
            {
              id: '1',
              size: '1',
              src: require('../assets/images/light01_s.jpg'),
              thumb: require('../assets/images/light01.jpg'),
              subscription: 'blur',
              alt: '이미지입니다'
            },
            {
              id: '1',
              size: '1',
              src: require('../assets/images/light02_s.jpg'),
              thumb: require('../assets/images/light02.jpg'),
              subscription: 'brightness',
              alt: '이미지입니다'
            },
            {
              id: '1',
              size: '1',
              src: require('../assets/images/light03_s.jpg'),
              thumb: require('../assets/images/light03.jpg'),
              subscription: 'contrast',
              alt: '이미지입니다'
            },
            {
              id: '1',
              size: '1',
              src: require('../assets/images/light04_s.jpg'),
              thumb: require('../assets/images/light04.jpg'),
              subscription: 'grayscale',
              alt: '이미지입니다'
            },
            {
              id: '1',
              size: '1',
              src: require('../assets/images/light05_s.jpg'),
              thumb: require('../assets/images/light05.jpg'),
              subscription: 'hur-rotate',
              alt: '이미지입니다'
            },
            {
              id: '1',
              size: '1',
              src: require('../assets/images/light06_s.jpg'),
              thumb: require('../assets/images/light06.jpg'),
              subscription: 'invert',
              alt: '이미지입니다'
            },
            {
              id: '1',
              size: '1',
              src: require('../assets/images/light07_s.jpg'),
              thumb: require('../assets/images/light07.jpg'),
              subscription: 'opacity',
              alt: '이미지입니다'
            },
            {
              id: '1',
              size: '1',
              src: require('../assets/images/light08_s.jpg'),
              thumb: require('../assets/images/light08.jpg'),
              subscription: 'saturate',
              alt: '이미지입니다'
            },
            {
              id: '1',
              size: '1',
              src: require('../assets/images/light09_s.jpg'),
              thumb: require('../assets/images/light09.jpg'),
              subscription: 'sepia',
              alt: '이미지입니다'
            },
            {
              id: '1',
              size: '1',
              src: require('../assets/images/light10_s.jpg'),
              thumb: require('../assets/images/light10.jpg'),
              subscription: 'Mix',
              alt: '이미지입니다'
            }
      ],
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
          title: 'Notice',
          description: '게시판 영역의 한줄, 두줄 효과 게시판입니다.',
          notices: [
            "이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다.",
            "이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다.",
            "이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다.",
            "이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다."
          ],
          notices2: [
            "이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다.",
            "이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다.",
            "이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다.",
            "이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다. 이 줄은 두 줄 효과입니다."
          ]
        },
        {
          title: 'Blog',
          description: '해상도에 따라 이미지 다르게 표현하기',
          figures: [
            {
              image: require('../assets/images/blog1_@1.jpg'),
              alt: 'normal image',
              class: 'img_normal',
              caption: '반응형 웹 사이트 이미지 글입니다.'
            },
            {
              image: require('../assets/images/blog1_@2.jpg'),
              alt: 'retina image',
              class: 'img_retina',
              caption: '반응형 웹 사이트 이미지 글입니다.'
            }
          ],
          figures2: [
            {
              image: require('../assets/images/blog4_@1.jpg'),
              alt: 'normal image',
              class: 'img_normal',
              caption: '반응형 웹 사이트 이미지 글입니다.'
            },
            {
              image: require('../assets/images/blog4_@2.jpg'),
              alt: 'retina image',
              class: 'img_retina',
              caption: '반응형 웹 사이트 이미지 글입니다.'
            }
          ]
        }
      ],
      items2: [
        {
          title: 'Carousel Slider',
          description: 'Carousel를 이용한 이미지 슬라이드 효과',
          menus: [
            {
              image: require('../assets/images/slider01.jpg'),
              alt: 'image1',
              caption: 'Responsive Site',
              description: '슬라이드 플러그인을 이용한 반응형 이미지 슬라이드'
            },
            {
              image: require('../assets/images/slider02.jpg'),
              alt: 'image1',
              caption: 'Responsive Site',
              description: '슬라이드 플러그인을 이용한 반응형 이미지 슬라이드'
            },
            {
              image: require('../assets/images/slider03.jpg'),
              alt: 'image1',
              caption: 'Responsive Site',
              description: '슬라이드 플러그인을 이용한 반응형 이미지 슬라이드'
            }
          ]
        },
        {
          title: 'Blend Effect',
          description: 'Carousel를 이용한 이미지 슬라이드 효과'
        },
        {
          title: 'Video',
          description: 'Video반응형'
        }
      ],
      items3: [
        {
          title: 'Effect1',
          description: 'CSS의 transform을 이용한 마우스 오버효과',
          image: require('../assets/images/side1.jpg'),
          alt: '이미지'
        },
        {
          title: 'Effect2',
          description: 'CSS의 transform을 이용한 마우스 오버효과',
          image: require('../assets/images/side2.jpg'),
          alt: '이미지'
        },
        {
          title: 'Effect3',
          description: 'CSS의 transform을 이용한 마우스 오버효과',
          image: require('../assets/images/side3.jpg'),
          alt: '이미지'
        }
      ]
    }
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
    },
    onBeforeSlide: () => {
      console.log('calling before slide')
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/home.scss";
</style>
