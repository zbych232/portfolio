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
    <div class="section" id="aboutMe">
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
              <h2>A bit about me 👋</h2>
              <p>
                I am a Frontend Developer creating
                modern and responsive websites from scratch using top frontend
                frameworks. I am doing my best to create a user-oriented website
                that is accessible and with fast loading speed. I’m using my
                experience to pick the right tools to create a design that suits
                your specific requirement. I am available to join your team, and
                I'm willing to work efficiently and thoroughly.
              </p>
              <md-button
                class="md-white md-round md-lg"
                style="color: rgb(80, 0, 202) !important"
                href="zbigniewFrontendDeveloper.pdf"
                target="_blank"
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
          <h2>My recent projects 🏆</h2>
          <p>Here are a few design projects I've worked on recently.</p>
        </div>
        <div class="md-layout">
          <div class="md-size-50  md-xsmall-size-100 md-layout-item">
            <a href="https://fir-508b2.web.app/">
              <div class="myProjectsSection__projectItem text-center">
                <img
                  src="../assets/img/socialApp/socialApp.png"
                  alt="Rounded Image"
                />
                <div class="myProjectsSection__projectItem__textSection">
                  <h3>Social App</h3>
                  <div class="dotsSpacing">
                    <div
                      class="dotsSpacing__dot"
                      v-for="(element, index) in dots"
                      :key="index"
                    ></div>
                  </div>
                  <h4>Social media app</h4>
                  <p>
                   Fully-featured social media application using React, Firebase, Redux, Express, and Material-UI.
                  </p>
                </div>
              </div>
            </a>
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
                  <h4>Platform to find, hire and settle employees</h4>
                  <p>
                    This is the most demanding project I have worked on so far.
                    Employees apply for orders placed by employers. The process
                    of settling employees is automatic. The employee is obliged
                    to complete the health and safety training and complete the
                    personal data before going to work. The employee must upload
                    a report confirming the number of hours worked on the basis
                    of which the employer receives an invoice to be paid.<br />
                    This project required me to put in all my experience as a
                    frontend developer. The data sent from the backend had to be
                    properly presented to the user, who could easily edit it.
                    After that, the data was sent back in an appropriate form.
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
                  <h3>Pikachu Game</h3>
                  <div class="dotsSpacing">
                    <div
                      class="dotsSpacing__dot"
                      v-for="(element, index) in dots"
                      :key="index"
                    ></div>
                  </div>
                  <h4>Simple JavaScript game</h4>
                  <p>
                    This is one of the games I made in my spare time. The game
                    is about catching Pikachu without hitting the edges of the
                    board. It was written using Vue.js. The ability to work on
                    arrays and objects was essential.
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
                  <h3>Sprawdz za darmo</h3>
                  <div class="dotsSpacing">
                    <div
                      class="dotsSpacing__dot"
                      v-for="(element, index) in dots"
                      :key="index"
                    ></div>
                  </div>
                  <h4>Drone operator website</h4>
                  <p>
                    This is my personal website through which I acquire
                    customers looking for drone filming. The ability to work
                    with WordPress and the ability to put the page on the server
                    was essential.
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
                  Task scheduler app
                </h4>
                <p style="color:white">
                  This is another project that I created in my spare time. The
                  user adds tasks to his to-do list and manages them in a
                  convenient way. The data is stored in the browser's memory. It
                  was necessary to be able to use an external library to change
                  the date of the task.
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
                    This is another game that I made in my spare time. It
                    presents the process of cells reproduction. It was written
                    using Vue.js. It is a zero-player game, meaning that its
                    evolution is determined by its initial state, requiring no
                    further input. The ability to work on boards and objects was
                    essential.
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
                  <h3>Psycho_tresci</h3>
                  <div class="dotsSpacing">
                    <div
                      class="dotsSpacing__dot"
                      v-for="(element, index) in dots"
                      :key="index"
                    ></div>
                  </div>
                  <h4>Psychology blog</h4>
                  <p>
                    The blog was created on the WordPress platform. The user can
                    easily add new posts and manage them. Home page built using
                    Elementor plugin. Communication with the author via comments
                    and a contact form.
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
                  <h4>Kindergarten website</h4>
                  <p>
                    The website was created on the WordPress platform. The user
                    can easily add and manage the news. The whole page built
                    with Elementor plugin. Communication with the administrator
                    via the contact form, phone or e-mail. Additionally,
                    location on the google map and photo gallery.
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
                If you’re ever interested in learning about my work please feel
                free to contact me with information about the projects. We can
                set up a call or a meet to discuss how I can utilize my skills
                in achieving the success of your project.
              </p>
              <p>
                You can find me in a few places on the web, but if if you prefer
                to do it the "old way" then just write to me a message.
              </p>
            </div>
          </div>
          <div class="md-size-50  md-xsmall-size-100 md-layout-item">
            <contactForm></contactForm>
          </div>
        </div>
      </div>
    </div>
    <div class="contactIconsWrapper">
      <div
        class="contactIconsWrapper__dot"
        v-for="(element, index) in numberOfDotsInContactsIcons"
        :key="index"
      ></div>
      <md-list-item href="https://github.com/zbych232" target="_blank">
        <i class="fab fa-github"></i>
        <md-tooltip md-direction="left">Github</md-tooltip>
      </md-list-item>
      <md-list-item
        href="https://www.linkedin.com/in/zbigniewcl/"
        target="_blank"
      >
        <i class="fab fa-linkedin"></i>
        <md-tooltip md-direction="left">LinkedIn</md-tooltip>
      </md-list-item>
      <md-list-item href="https://m.me/zbigniew.stolarski.167" target="_blank">
        <i class="fab fa-facebook-messenger"></i>
        <md-tooltip md-direction="left">Messenger</md-tooltip>
      </md-list-item>
      <md-list-item href="mailto:stolarskizbigniew93@gmail.com" target="_blank">
        <i class="material-icons">email</i>
        <md-tooltip md-direction="left">E-mail</md-tooltip>
      </md-list-item>
    </div>
  </div>
</template>

<script>
import contactForm from "./contactForm";
import $ from "jquery";
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
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    numberOfDotsInContactsIcons: function() {
      if (window.innerWidth < 992) {
        return 16;
      } else {
        return 26;
      }
    },
  },

  methods: {
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
    handleScroll() {
      if (window.scrollY > 0) {
        $(".contactIconsWrapper").fadeOut();
        $(".aboutMe__photoSection").css({
          visibility: "visible",
          opacity: "1",
        });
        $(".aboutMe__textSection").css({ visibility: "visible", opacity: "1" });
      } else {
        $(".contactIconsWrapper").fadeIn();
        $(".aboutMe__photoSection").css({ visibility: "hidden", opacity: "0" });
        $(".aboutMe__textSection").css({ visibility: "hidden", opacity: "0" });
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
#aboutMe {
  padding-bottom: 0;
  @media only screen and (max-width: 480px) {
    margin-top: -120px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: -220px;
  }
}
.aboutMe {
  background-color: #5000ca;
  min-height: 200px;
  color: white;
  margin: -10px 0px 0px 0px;
  &__photoSection {
    opacity: 0;
    visibility: hidden;
    -webkit-transition: visibility 0.4s linear, opacity 0.4s linear;
    -moz-transition: visibility 0.4s linear, opacity 0.4s linear;
    -o-transition: visibility 0.4s linear, opacity 0.4s linear;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      @media only screen and (max-width: 992px) {
        width: 200px;
      }
    }
  }
  &__textSection {
    opacity: 0;
    visibility: hidden;
    -webkit-transition: visibility 0.4s linear, opacity 0.4s linear;
    -moz-transition: visibility 0.4s linear, opacity 0.4s linear;
    -o-transition: visibility 0.4s linear, opacity 0.4s linear;
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
  //padding-top: 0;
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
.contactIconsWrapper {
  @media only screen and (max-width: 992px) {
    left: 10px;
  }
  position: absolute;
  height: 90vh;
  top: calc(100vh - 90vh);
  left: 12%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  &__dot {
    width: 4px;
    height: 4px;
    background-color: black;
    margin: 2px;
    border-radius: 50%;
  }
  i:hover {
    cursor: pointer;
    color: #5000ca;
  }
  i {
    color: black;
  }
}
</style>
