<template>
  <div class="wrapper">
    <div class="section">
      <div class="fancyShape"></div>
      <div class="fancyShapePageBottom1"></div>
      <div class="fancyShapePageBottom2"></div>
      <div class="container">
        <div class="headerContainer">
          <h1>Hi there!</h1>
          <h1>I'm Zbigniew</h1>
          <h2>Frontend Developer</h2>
        </div>
      </div>
    </div>
    <div class="section" id="aboutMe" style="padding:0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5000ca"
          fill-opacity="1"
          d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div class="aboutMe ">
        <div class="container">
          <div class="md-layout">
            <div
              class="aboutMe__photoSection md-size-50 md-small-size-100 md-layout-item"
            >
              <img :src="image" alt="Rounded Image" class="rounded" />
            </div>
            <div
              class="aboutMe__textSection md-size-50  md-small-size-100 md-layout-item"
            >
              <h2>A bit about me</h2>
              <p>
                I am a freelance Web Developer with many years of experience
                creating simple and modern designs from scratch using top-notch
                technology. I put in my best effort to create a better platform
                for clients, websites that are user-oriented, accessible, and
                with fast loading speed. Whatever your business requirement is,
                I’m dedicated to using my years of experience to pick the right
                tools and processes in order to create a design that suits your
                specific requirement. I recognize that creating a modern website
                entails combining design, server technology, and the platform
                that visitors and users interact with. I am also available to
                join your team, and I'm willing to work efficiently and
                thoroughly with your in-house team.
              </p>
              <md-button
                class="md-white md-round md-lg"
                style="color: rgb(80, 0, 202) !important"
                >Download CV</md-button
              >
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5000ca"
          fill-opacity="1"
          d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,122.7C672,96,768,64,864,48C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
    <div class="section myProjectsSection" id="projectsSection">
      <div class="container">
        <div class="myProjectsSection__title text-center">
          <h2>My recent projects</h2>
          <p>Here are a few design projects I've worked on recently.</p>
        </div>
        <div class="md-layout">
          <div class="md-size-50  md-xsmall-size-100 md-layout-item">
            <a href="https://incpraca.pl">
              <div class="myProjectsSection__projectItem text-center">
                <img
                  src="../assets/img/incPraca/incPracaScreen.png"
                  alt="Rounded Image"
                />
                <div class="myProjectsSection__projectItem__textSection">
                  <h3>IncPraca</h3>
                  <div class="dotsSpacing">
                    <div
                      class="dotsSpacing__dot"
                      v-for="(element, index) in dots"
                      :key="index"
                    ></div>
                  </div>
                  <h4>High quality transport and logistic services</h4>
                  <p>
                    This project required me to put in all my experience as a
                    full-stack developer to create a design and set themes for
                    the website. It also required a smooth design that could
                    work on different browsers, and I successfully achieved the
                    goal.
                  </p>
                </div>
              </div>
            </a>
            <router-link :to="{ name: 'furryGame' }">
              <div class="myProjectsSection__projectItem text-center">
                <img
                  src="../assets/img/furryGame/furryScreen.png"
                  alt="Rounded Image"
                />
                <div class="myProjectsSection__projectItem__textSection">
                  <h3>Furry Game</h3>
                  <div class="dotsSpacing">
                    <div
                      class="dotsSpacing__dot"
                      v-for="(element, index) in dots"
                      :key="index"
                    ></div>
                  </div>
                  <h4>Simple JavaScript game</h4>
                  <p>
                    This project required me to put in all my experience as a
                    full-stack developer to create a design and set themes for
                    the website. It also required a smooth design that could
                    work on different browsers, and I successfully achieved the
                    goal.
                  </p>
                </div>
              </div>
            </router-link>
            <a href="https://sprawdz-za-darmo.pl/">
              <div class="myProjectsSection__projectItem text-center">
                <div class="wordpressSign">
                  <img :src="brandImageWordpress" />
                </div>
                <img
                  src="../assets/img/wordpress/sprawdzZaDarmoScreen.png"
                  alt="Rounded Image"
                />
                <div class="myProjectsSection__projectItem__textSection">
                  <h3>Sprawdź za darmo</h3>
                  <div class="dotsSpacing">
                    <div
                      class="dotsSpacing__dot"
                      v-for="(element, index) in dots"
                      :key="index"
                    ></div>
                  </div>
                  <h4>Wordpress Website</h4>
                  <p>
                    This project required me to put in all my experience as a
                    full-stack developer to create a design and set themes for
                    the website. It also required a smooth design that could
                    work on different browsers, and I successfully achieved the
                    goal.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="md-size-50  md-xsmall-size-100 md-layout-item">
            <div
              class="myProjectsSection__projectItem text-center"
              style="background-color: #5000ca; "
            >
              <div class="myProjectsSection__projectItem__textSection">
                <h3 style="color:white">To do list</h3>
                <div class="dotsSpacing">
                  <div
                    class="dotsSpacing__dot"
                    v-for="(element, index) in dots"
                    :key="index"
                  ></div>
                </div>
                <h4 style="color:white">
                  High quality transport and logistic services
                </h4>
                <p style="color:white">
                  This project required me to put in all my experience as a
                  full-stack developer to create a design and set themes for the
                  website.
                </p>
              </div>
            </div>
            <router-link :to="{ name: 'gameOfLife' }">
              <div class="myProjectsSection__projectItem text-center">
                <img
                  src="../assets/img/gameOfLife/gameOfLifeScreen.png"
                  alt="Rounded Image"
                />
                <div class="myProjectsSection__projectItem__textSection">
                  <h3>Game of life</h3>
                  <div class="dotsSpacing">
                    <div
                      class="dotsSpacing__dot"
                      v-for="(element, index) in dots"
                      :key="index"
                    ></div>
                  </div>
                  <h4>Simple JavaScript game</h4>
                  <p>
                    This project required me to put in all my experience as a
                    full-stack developer to create a design and set themes for
                    the website. It also required a smooth design that could
                    work on different browsers, and I successfully achieved the
                    goal.
                  </p>
                </div>
              </div>
            </router-link>
            <a href="https://psychologia-wokol-nas.pl/">
              <div class="myProjectsSection__projectItem text-center">
                <div class="wordpressSign">
                  <img :src="brandImageWordpress" />
                </div>
                <img
                  src="../assets/img/wordpress/psychologiaWokolNas.png"
                  alt="Rounded Image"
                />
                <div class="myProjectsSection__projectItem__textSection">
                  <h3>Psychologia wokół nas</h3>
                  <div class="dotsSpacing">
                    <div
                      class="dotsSpacing__dot"
                      v-for="(element, index) in dots"
                      :key="index"
                    ></div>
                  </div>
                  <h4>Wordpress Website</h4>
                  <p>
                    This project required me to put in all my experience as a
                    full-stack developer to create a design and set themes for
                    the website. It also required a smooth design that could
                    work on different browsers, and I successfully achieved the
                    goal.
                  </p>
                </div>
              </div>
            </a>
            <a href="https://przedszkole-rozprza.pl/">
              <div class="myProjectsSection__projectItem text-center">
                <div class="wordpressSign">
                  <img :src="brandImageWordpress" />
                </div>
                <img
                  src="../assets/img/wordpress/przedszkoleRozprza.png"
                  alt="Rounded Image"
                />
                <div class="myProjectsSection__projectItem__textSection">
                  <h3>Akademia malucha</h3>
                  <div class="dotsSpacing">
                    <div
                      class="dotsSpacing__dot"
                      v-for="(element, index) in dots"
                      :key="index"
                    ></div>
                  </div>
                  <h4>Wordpress Website</h4>
                  <p>
                    This project required me to put in all my experience as a
                    full-stack developer to create a design and set themes for
                    the website. It also required a smooth design that could
                    work on different browsers, and I successfully achieved the
                    goal.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section myProjectsSection">
      <div class="container">
        <div class="myProjectsSection__title text-center">
          <h2>Skills & Tools</h2>
          <p>For those who know what they’re looking for...</p>
        </div>
        <div class="brandsContainer">
          <div class="brandsContainer__item">
            <div class="brandsContainer__item__imgWrapper">
              <div class="text-center">
                <img :src="brandImageHtml" />
              </div>
            </div>
            <div class="brandsContainer__item__titleWrapper">
              <div>
                <p>HTML5</p>
              </div>
            </div>
          </div>
          <div class="brandsContainer__item">
            <div class="brandsContainer__item__imgWrapper">
              <div class="text-center">
                <img :src="brandImageCss" />
              </div>
            </div>
            <div class="brandsContainer__item__titleWrapper">
              <div>
                <p>CSS3</p>
              </div>
            </div>
          </div>
          <div class="brandsContainer__item">
            <div class="brandsContainer__item__imgWrapper">
              <div class="text-center">
                <img :src="brandImageJs" />
              </div>
            </div>
            <div class="brandsContainer__item__titleWrapper">
              <div>
                <p>JavaScript</p>
              </div>
            </div>
          </div>
          <div class="brandsContainer__item">
            <div class="brandsContainer__item__imgWrapper">
              <div class="text-center">
                <img :src="brandImageVue" />
              </div>
            </div>
            <div class="brandsContainer__item__titleWrapper">
              <div>
                <p>Vue</p>
              </div>
            </div>
          </div>
          <div class="brandsContainer__item">
            <div class="brandsContainer__item__imgWrapper">
              <div class="text-center">
                <img :src="brandImageJquerry" />
              </div>
            </div>
            <div class="brandsContainer__item__titleWrapper">
              <div>
                <p>jQuerry</p>
              </div>
            </div>
          </div>
          <div class="brandsContainer__item">
            <div class="brandsContainer__item__imgWrapper">
              <div class="text-center">
                <img :src="brandImageSass" />
              </div>
            </div>
            <div class="brandsContainer__item__titleWrapper">
              <div>
                <p>Sass</p>
              </div>
            </div>
          </div>
          <div class="brandsContainer__item">
            <div class="brandsContainer__item__imgWrapper">
              <div class="text-center">
                <img :src="brandImageBootstrap" />
              </div>
            </div>
            <div class="brandsContainer__item__titleWrapper">
              <div>
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
          <div class="brandsContainer__item">
            <div class="brandsContainer__item__imgWrapper">
              <div class="text-center">
                <img :src="brandImageGit" />
              </div>
            </div>
            <div class="brandsContainer__item__titleWrapper">
              <div>
                <p>git</p>
              </div>
            </div>
          </div>
          <div class="brandsContainer__item">
            <div class="brandsContainer__item__imgWrapper">
              <div class="text-center">
                <img :src="brandImageWordpress" />
              </div>
            </div>
            <div class="brandsContainer__item__titleWrapper">
              <div>
                <p>Wordpress</p>
              </div>
            </div>
          </div>
          <div class="brandsContainer__item">
            <div class="brandsContainer__item__imgWrapper">
              <div class="text-center">
                <img :src="brandImageNpm" />
              </div>
            </div>
            <div class="brandsContainer__item__titleWrapper">
              <div>
                <p>npm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section " id="contactSection">
      <div class="container">
        <div class="md-layout contactSectionMobile">
          <div class="md-size-50  md-xsmall-size-100 md-layout-item">
            <div class="getInTouchText">
              <h2>Get in Touch</h2>
              <p>
                If you’re ever interested in learning about my work and my
                working process with clients, please feel free to contact me
                with information about the projects. We can set up a call or a
                meet to discuss how I can utilize my skills in achieving the
                success of your project.
              </p>
              <p>
                You can find me in a few places on the web, but if if you prefer
                to do it the "old way" then just write to me message.
              </p>
            </div>
          </div>
          <div class="md-size-50  md-xsmall-size-100 md-layout-item">
            <contactForm></contactForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contactForm from "./contactForm";
export default {
  components: {
    contactForm,
  },

  data() {
    return {
      image: require("@/assets/img/faces/zbyszeknew.jpg"),
      brandImageHtml: require("@/assets/img/brands/html.png"),
      brandImageCss: require("@/assets/img/brands/css.png"),
      brandImageJs: require("@/assets/img/brands/js.png"),
      brandImageVue: require("@/assets/img/brands/vue.png"),
      brandImageJquerry: require("@/assets/img/brands/jquerry.png"),
      brandImageSass: require("@/assets/img/brands/sass.png"),
      brandImageBootstrap: require("@/assets/img/brands/bootstrap.png"),
      brandImageGit: require("@/assets/img/brands/git.png"),
      brandImageWordpress: require("@/assets/img/brands/wordpress.png"),
      brandImageNpm: require("@/assets/img/brands/npm.png"),
      projectImage: require("@/assets/img/nature-2.jpg"),
      projectImage2: require("@/assets/img/bg2.jpg"),
      projectImage3: require("@/assets/img/city.jpg"),
      responsive: false,
      dots: 9,
    };
  },
  props: {},
  computed: {},
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  methods: {
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.headerContainer {
  text-align: right;
  margin-top: 100px;
  h1 {
    font-weight: 900;
    font-size: 4em;
    color: black;
    @media only screen and (min-width: 600px) {
      font-size: 7em;
    }
  }
  h2 {
    font-weight: 900;
    font-size: 2em;
    color: black;
    @media only screen and (min-width: 600px) {
      font-size: 4em;
    }
  }
}
.fancyShape {
  position: absolute;
  top: calc(20vh);
  left: calc(20vw);
  width: 100px;
  height: 100px;
  @media only screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
  background-color: #5000ca;
  border-radius: 58% 42% 36% 64% / 60% 64% 36% 40%;
  animation-name: fancyShape;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes fancyShape {
  0% {
  }
  100% {
    border-radius: 58% 42% 51% 49% / 51% 52% 48% 49%;
  }
}
.fancyShapePageBottom1 {
  position: absolute;
  bottom: 200px;
  width: 200px;
  height: 400px;
  @media only screen and (min-width: 768px) {
    width: 130px;
    height: 400px;
  }
  background-color: #5000ca;
  border-radius: 0% 100% 100% 0% / 0% 49% 51% 100%;
  animation-name: fancyShapePageBottom1;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes fancyShapePageBottom1 {
  0% {
  }
  100% {
    border-radius: 0% 100% 100% 0% / 0% 58% 42% 100%;
  }
}
.fancyShapePageBottom2 {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100px;
  height: 100px;
  @media only screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
  background-color: #5000ca;
  border-radius: 100% 0% 0% 100% / 100% 0% 100% 0%;
}

.aboutMe {
  background-color: #5000ca;
  color: white;
  margin: -10px 0px 0px 0px;
  &__photoSection {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      @media only screen and (max-width: 992px) {
        width: 240px;
      }
    }
  }
  &__textSection {
    @media only screen and (max-width: 992px) {
      text-align: center;
    }
    h2 {
      margin-top: 0;
      font-weight: 400;
      @media only screen and (max-width: 992px) {
        font-size: 1.4em;
        font-weight: 800;
        margin: 20px 0;
      }
    }
    p {
      font-size: 1.2em;
      font-weight: 400;
      @media only screen and (max-width: 992px) {
        font-weight: 100;
      }
    }
  }
}
.myProjectsSection {
  padding-top: 0;
  &__title {
    h2 {
      color: black;
      text-transform: uppercase;
      font-weight: 400;
      @media only screen and (max-width: 992px) {
        font-size: 1.4em;
        font-weight: 800;
      }
    }
    p {
      font-size: 1.5em;
      font-weight: 400;
      @media only screen and (max-width: 992px) {
        font-size: 1.2em;
      }
    }
  }

  &__projectItem {
    position: relative;
    transition: width 0s;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.12);
    transition: margin 0.3s;
    margin: 40px 10px;
    box-sizing: border-box;
    img {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
    &__textSection {
      margin-left: auto;
      margin-right: auto;
      width: 320px;
      padding: 20px 0;
      @media only screen and (max-width: 400px) {
        width: 200px;
        padding: 20px 0;
      }
      @media only screen and (min-width: 600px) {
        width: 200px;
        padding: 20px;
      }
      @media only screen and (min-width: 992px) {
        width: 420px;
        padding: 40px;
      }
      @media only screen and (min-width: 1200px) {
        width: 500px;
        padding: 40px;
      }

      h3 {
        color: black;
        text-transform: uppercase;
        font-weight: 400;
        margin: 0;
      }
      h4 {
        font-style: italic;
        color: black;
      }
      p {
        color: black;
        word-break: keep-all;
        font-size: 16px;
        margin: 0;
      }
    }
    .dotsSpacing {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;

      &__dot {
        width: 4px;
        height: 4px;
        background-color: #5000ca;
        border-radius: 50%;
        margin: 0 2px;
      }
    }
  }
  &__projectItem:hover {
    margin: 30px 0;
    box-shadow: 0 3px 40px 0 rgba(0, 0, 0, 0.12);
  }
}
.brandsContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  &__item {
    width: 100px;
    height: 100px;
    border-radius: 6px;
    border: 1px solid #dadada;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
    margin: 10px;
    display: flex;
    flex-direction: column;
    &__imgWrapper {
      height: 70%;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 60%;
      }
    }
    &__titleWrapper {
      height: 30%;

      display: flex;
      align-items: center;
      justify-content: center;
      p {
        margin: 0;
        font-weight: 800;
      }
    }
  }
}
.getInTouchText {
  @media only screen and (max-width: 992px) {
    text-align: center;
  }
  h2 {
    font-weight: 400;
    color: black;
    @media only screen and (max-width: 992px) {
      font-size: 1.4em;
      font-weight: 800;
    }
  }
  p {
    font-size: 1.2em;
    font-weight: 400;
    color: black;
    @media only screen and (max-width: 992px) {
      font-weight: 100;
    }
  }
}
.wordpressSign {
  position: absolute;
  width: 40px;
  height: 40px;
  right: -10px;
  top: -10px;
}
.contactSectionMobile {
  @media only screen and (max-width: 992px) {
    padding-bottom: 20px;
    background-color: white;
    margin: 0 10px;
    border-radius: 20px;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.12);
  }
}
</style>
