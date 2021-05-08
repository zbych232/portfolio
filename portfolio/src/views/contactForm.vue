<template>
  <div class="contactFormContainer">
    <div class="contactFormContainer__iAmAvaliable">
      <div class="contactFormContainer__iAmAvaliable__dotWrapper">
        <div class="contactFormContainer__iAmAvaliable__dotWrapper__dot"></div>
        <div
          class="contactFormContainer__iAmAvaliable__dotWrapper__innerDot"
        ></div>
      </div>
      <p>I’m currently available for work.</p>
    </div>
    <div class="contactFormContainer__form">
      <form>
        <div class=" contactFormContainer__form__input">
          <input
            v-model="name.value"
            type="text"
            placeholder="Name"
            :id="name.id"
            required
            @blur="nameValidation"
            @input="nameOnInput"
            class="contactFormContainer__form__input__contactFormCustomInput"
          />
          <p v-if="name.errorMsg != ''" style="color:red">
            {{ name.errorMsg }}
          </p>
        </div>
        <div class=" contactFormContainer__form__input">
          <input
            v-model="email.value"
            type="text"
            placeholder="Email address"
            :id="email.id"
            required
            @blur="emailValidation"
            @input="emailOnInput"
            class="contactFormContainer__form__input__contactFormCustomInput"
          />
          <p v-if="email.errorMsg != ''" style="color:red">
            {{ email.errorMsg }}
          </p>
        </div>

        <textarea
          rows="6"
          :id="message.id"
          v-model="message.value"
          @blur="messageValidation"
          @input="messageOnInput"
          placeholder="How may I help you?"
          class="contactFormContainer__form__input__contactFormCustomInput"
        ></textarea>
        <p v-if="message.errorMsg != ''" style="color:red">
          {{ message.errorMsg }}
        </p>
        <md-button
          class="md-warning md-round"
          type="submit"
          @click="sendForm"
          v-if="!formSendSuccesfully"
          >Send a message</md-button
        >
      </form>
      <span v-if="formSendSuccesfully" style="color:#4caf50"
        >Wysłano pomyślnie wiadomość</span
      >
      <span v-if="formSendSuccesfully == false" style="color:#f44336"
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
            this.formSendSuccesfully = true;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contactFormContainer {
  @media only screen and (max-width: 992px) {
    padding: 0 20px;
  }
  &__iAmAvaliable {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 992px) {
      margin-top: 40px;
    }

    p {
      font-size: 1.2em;
      font-weight: 400;
      margin: 0;
      @media only screen and (max-width: 992px) {
        font-weight: 100;
      }
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
    margin-top: 20px;
    @media only screen and (max-width: 992px) {
      text-align: center;
    }
    textarea {
      resize: none;
      width: 100%;
      font-size: 16px;
    }
    &__input {
      &__contactFormCustomInput {
        padding: 20px;
        margin: 10px 0;
        border: 0;
        border-radius: 40px;
        background-color: #f5f5f5;
        font-size: 16px;
        width: 100%;
        font-family: Roboto, Noto Sans, -apple-system, BlinkMacSystemFont,
          sans-serif;
      }
    }
  }
}
</style>
