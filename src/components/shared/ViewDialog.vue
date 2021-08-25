<template v-slot:details>
  <v-btn depresses v-on="on" @click="onOpen" id="search">
    <i class="fas fa-eye" id="fa"></i>
  </v-btn>
  <v-dialog v-model="dialog" persistent>
    <v-card :elevation="hover ? 24 : 3" width="500px">
      <v-card-title primary-title class="modal-header">
        View Ticket
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <div class="modal-body ng-star-inserted">
          <div class="form-box row">
            <div class="col-12 col-md-12">
              <div form-group mb-2>
                <div class="card" id="card">
                  <div class="card-body bg-main-body border p-3 font-20">
                    <div class="font-18 mb-1">Ticket #4556 -Bugs</div>
                    <div class="font-13 mb-1"></div>
                    <v-card-text class="font-14">
                      Status: <span class="font-weight-bold">High</span>
                    </v-card-text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group row mb-2">
            <label class="col-5 col-md-4 col-form-label">Bank</label>
            <div class="col-7 col-md-8 col-form-label">
              <b>Admin</b>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group row mb-2">
            <label class="col-5 col-md-md-4 col-form-label">Subject</label>
            <div class="col-7 col-md-8 col-form-label">
              <b>System Request</b>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group row mb-2">
            <label class="col-5 col-md-md-4 col-form-label">Category</label>
            <div class="col-7 col-md-8 col-form-label">
              <b>Malware</b>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group row mb-2">
            <label class="col-5 col-md-md-4 col-form-label">Date Issued</label>
            <div class="col-7 col-md-8 col-form-label">
              <b>16-Aug-2021 10:30</b>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-12 mb-2">
          <div class="form-group row mb-2">
            <label class="col-12 col-md-2 col-form-label">Description</label>
            <div class="col-12 col-md-10 col-form-label overflow_chart">
              The system is slow
            </div>
          </div>
        </div>
        <div class="col-12 col-md-12">
          <div class="form-group row mb-2">
            <label class="col-12 col-md-2 col-form-label">Attachments</label>
            <div class="col-12 col-md-10 col-form-label overflow_chart">
              <table
                class="
                  table table-bordered table-striped
                  small-btn
                  table-attachment
                "
              >
                <tr class="ng-star-inserted"></tr>
              </table>
            </div>
          </div>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn type="button" text @click="dialog = false"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    onOpen() {
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
#fa {
  padding: 5px;
  height: 35px;
  top: 223px;
  left: 173px;
  border-radius: 4px;
  color: black;
}
.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #f3f3f3;
  border-bottom-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  background: #f6f8fa;
}
#card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 12px;
  word-wrap: break-word;
  background-color: #f6f8fa;
  background-clip: border-box;
  border-radius: 4px;
  border: 1px solid #c4c4c4;
}
#search {
  margin-left: -20%;
  margin-top: 20px;
  width: 10px;
  color: white;
  background-color: rgb(253, 253, 253);
}
</style>
