<template>
  <div class="contactFormContainer">
    <div class="contactFormContainer__iAmAvaliable">
      <div class="contactFormContainer__iAmAvaliable__dotWrapper">
        <div class="contactFormContainer__iAmAvaliable__dotWrapper__dot"></div>
        <div
          class="contactFormContainer__iAmAvaliable__dotWrapper__innerDot"
        ></div>
      </div>
      <p>I’m currently available for freelance work.</p>
    </div>
    <div class="contactFormContainer__form">
      <form>
        <div class=" contactFormContainer__form__input">
          <label :for="name.id">Name</label>
          <md-field
            :class="{
              'md-error': name.errorMsg != '',
              'md-valid': name.isValid,
            }"
          >
            <md-icon>face</md-icon>
            <md-input
              v-model="name.value"
              type="text"
              placeholder="Name"
              :id="name.id"
              required
              @blur="nameValidation"
              @input="nameOnInput"
            ></md-input>
            <md-icon v-if="name.isValid">done</md-icon>
            <md-icon v-if="name.errorMsg != ''">clear</md-icon>
          </md-field>
          <p v-if="name.errorMsg != ''" style="color:red">
            {{ name.errorMsg }}
          </p>
        </div>
        <div class=" contactFormContainer__form__input">
          <label :for="email.id">E-mail</label>
          <md-field
            :class="{
              'md-error': email.errorMsg != '',
              'md-valid': email.isValid,
            }"
          >
            <md-icon>email</md-icon>
            <md-input
              v-model="email.value"
              type="text"
              placeholder="Email address"
              :id="email.id"
              required
              @blur="emailValidation"
              @input="emailOnInput"
            ></md-input>
            <md-icon v-if="email.isValid">done</md-icon>
            <md-icon v-if="email.errorMsg != ''">clear</md-icon>
          </md-field>
          <p v-if="email.errorMsg != ''" style="color:red">
            {{ email.errorMsg }}
          </p>
        </div>

        <label :for="message.id">Message</label>
        <textarea
          rows="10"
          :id="message.id"
          v-model="message.value"
          @blur="messageValidation"
          @input="messageOnInput"
          placeholder="How may I help you?"
        ></textarea>
        <p v-if="message.errorMsg != ''" style="color:red">
          {{ message.errorMsg }}
        </p>
        <md-button class="md-warning md-round" type="submit" @click="sendForm"
          >Send a message</md-button
        >
      </form>
      <span v-if="formSendSuccesfully">Wysłano pomyślnie wiadomość</span>
      <span v-if="formSendSuccesfully == false"
        >Błąd serwera. Nie wysłano wiadomości.</span
      >
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;

var $ = require("jquery");
export default {
  components: {},

  data() {
    return {
      formSendSuccesfully: null,
      name: {
        id: "contactFormNameInput",
        value: "",
        errorMsg: "",
        isValid: null,
      },
      email: {
        id: "contactFormEmailInput",
        value: "",
        errorMsg: "",
        isValid: null,
      },
      message: {
        id: "contactFormMessageInput",
        value: "",
        errorMsg: "",
        isValid: null,
      },
    };
  },
  watch: {},
  computed: {},
  beforeMount() {},
  methods: {
    nameValidation() {
      if (this.name.value != "") {
        this.name.errorMsg = "";
        this.name.isValid = true;
      } else {
        this.name.errorMsg = "Name field can't be empty";
        this.name.isValid = false;
      }
    },
    nameOnInput() {
      this.name.isValid != null && this.nameValidation();
    },
    emailValidation() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(String(this.email.value).toLowerCase())) {
        this.email.errorMsg = "";
        this.email.isValid = true;
      } else {
        this.email.errorMsg = "Invalid e-mail address";
        this.email.isValid = false;
      }
    },
    emailOnInput() {
      this.email.isValid != null && this.emailValidation();
    },
    messageValidation() {
      if (this.message.value != "") {
        this.message.errorMsg = "";
        this.message.isValid = true;
      } else {
        this.message.errorMsg = "Message field can't be empty";
        this.message.isValid = false;
      }
    },
    messageOnInput() {
      this.message.isValid != null && this.messageValidation();
    },
    sendForm(e) {
      e.preventDefault();
      this.nameValidation();
      this.emailValidation();
      this.messageValidation();
      if (this.name.isValid && this.email.isValid && this.message.isValid) {
        $.ajax({
          type: "POST",
          url: "./js/contact_me.php",
          data: {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value,
          },
          cache: false,
        })
          .then(() => {
            this.formSendSuccesfully = true;
          })
          .catch(() => {
            this.formSendSuccesfully = false;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contactFormContainer {
  &__iAmAvaliable {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 600px) {
      margin-top: 40px;
    }

    p {
      font-size: 1.2em;
      font-weight: 400;
      margin: 0;
    }
    &__dotWrapper {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      animation-name: blinkingDot;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      box-sizing: border-box;
      flex-shrink: 0;
      &__dot {
        width: 100%;
        height: 100%;

        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        animation-name: blinkingDotColor;
        animation-duration: 2s;
        animation-iteration-count: infinite;
      }
      @keyframes blinkingDotColor {
        0% {
        }
        100% {
          background-color: rgb(80, 0, 202, 0.2);
        }
      }
      &__innerDot {
        width: 10px;
        height: 10px;
        background-color: rgb(80, 0, 202);

        border-radius: 50%;
        position: absolute;
      }
    }
    @keyframes blinkingDot {
      0% {
      }
      100% {
        padding: 10px;
      }
    }
  }
  &__form {
    margin-top: 40px;
    textarea {
      resize: none;
      width: 100%;
      font-size: 16px;
    }
    &__input {
      margin-bottom: 40px;
    }
  }
}
</style>
