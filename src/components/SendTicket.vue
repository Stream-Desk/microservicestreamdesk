<template>
  <div>
    <Files />
    <Form @submit="sendTicket" :validation-schema="schema" v-if="!submitted">
      <TextInput
        name="name"
        type="text"
        label="Name"
        placeholder="Enter your Name"
        success-message="Thank you!"
      />
      <TextInput
        name="summary"
        type="text"
        label="Summary"
        placeholder="Summary"
        success-message="Thank you!"
      />
      <Field
        name="category"
        type="category"
        label="Category"
        success-message="Thank you!"
      >
        <option disabled value="">Please select one</option>
        <option>Bugs</option>
        <option>Slow Update</option>
        <option>Login</option>
      </Field>

      <TextArea
        name="description"
        type="desciption"
        label="Desciption"
        placeholder="Description"
        success-message="Thank you!"
      />
      
      <button class="submit-btn" type="submit">Submit</button>
      <button class="submit-btm" type="submit" @click="saveTicket">Save</button>
    </Form>
  </div>
</template>
<script>
import AllTicketsDataService from "../service/All-ticketDataservices";
import DraftsDataService from "../service/DraftTicketService";
import { Form } from "vee-validate";
import * as Yup from "yup";
import TextInput from "./shared/TextInput.vue";
import TextArea from "./shared/TextArea.vue";
import Field from "./shared/Field.vue";
import Files from "./shared/FileUpload.vue";
export default {
  name: "App",
  components: {
    TextInput,
    TextArea,
    Field,
    Files,
    Form,
  },
  setup() {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      summary: Yup.string().required(),
      category: Yup.string().required(),
      description: Yup.string().required(),
    });

    return {
      schema,
    };
  },
  data() {
    return {
      submitted: false,
      dialogCancel: false,
      dialog: false,
    };
  },
  methods: {
    sendTicket(values) {
      AllTicketsDataService.create(values)
        .then((response) => {
          this.values = response.values;
          console.log(response.values);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    saveTicket(values) {
      DraftsDataService.create(values)
        .then((response) => {
          this.values = response.values;
          console.log(response.values);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newTicket() {
      this.submitted = false;
      this.ticket = {};
      this.dialog = true;
    },

    close() {
      this.dialog = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

:root {
  --primary-color: #0071fe;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
}
form {
  width: 500px;
  margin: 0px auto;
  padding-bottom: 60px;
}

.submit-btn {
  background: var(--primary-color);
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  display: block;
  width: 20%;
  border-radius: 7px;
  margin-top: 2px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  float: right;
}

.submit-btn:hover {
  transform: scale(1.1);
}

.submit-btm {
  background: var(--primary-color);
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  display: block;
  width: 20%;
  border-radius: 7px;
  margin-top: 2px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  float: right;
  margin-right: 10px;
}

.ticket {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
}
</style>
