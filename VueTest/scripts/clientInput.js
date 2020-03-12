Vue.component('client-input', {
    data: function () {
        return {
            Name: '',
            Phone: '',
            Email: '',
            NameValid: true,
            PhoneValid: true,
            EmailValid: true,
            isValid: true
        };
    },
    methods: {
        addClient: function () {
            const client = new ClientModel(this.Name, this.Phone, this.Email);
            this.validate(client);

            if (this.isValid) {
                this.$emit('newclient', client);
                this.Name = '';
                this.Phone = '';
                this.Email = '';
            }
        },
        validate: function (data) {
            this.NameValid = false;

            if (data.Name) {
                this.NameValid = true;
            }

            const phoneFormat = /^\d+$/;
            this.PhoneValid = data.Phone.match(phoneFormat);

            const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            this.EmailValid = data.Email.match(mailformat);

            this.isValid = this.NameValid && this.PhoneValid && this.EmailValid;
        }
    },
    template: `
    <form class="client-form">
        <h6>Add new client</h6>
        <div class="row">
            <div class="col">
                <input type="text" v-bind:class="{'input-validate-error': !NameValid }" v-model="Name" class="form-control" placeholder="Name">
            </div>
            <div class="col">
                <input type="text" v-bind:class="{'input-validate-error': !PhoneValid }" v-model="Phone" class="form-control" placeholder="Phone">
            </div>
            <div class="col">
                <input type="text" v-bind:class="{'input-validate-error': !EmailValid }" v-model="Email" class="form-control" placeholder="Email">
            </div>
        </div>
        <div v-if="!isValid" class="row centre validatiton-error">
            Invalid data!
        </div>
        <div div class="row centre mt-4">
            <button v-on:click="addClient" type="button" class="btn btn-success">Add Client</button>
        </div>
    </form >`
});