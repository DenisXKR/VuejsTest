class ClientModel {
    constructor(name, phone, email) {
        this.Name = name;
        this.Phone = phone;
        this.Email = email;
    }
}

var app = new Vue({
    el: '#clients',
    data: {
        Name: '',
        Phone: '',
        Email: '',
        NameValid: true,
        PhoneValid: true,
        EmailValid: true,
        Clients: []
    },
    methods: {
        addClient: function () {
            const client = new ClientModel(this.Name, this.Phone, this.Email);
            this.checkForm(client);

            if (this.isValid) {
                this.Clients.push(client);

                this.Name = '';
                this.Phone = '';
                this.Email = '';
            }
        },
        delClient: function (client) {
            this.Clients = this.Clients.filter(function (el) {
                return el.Name != client.Name;
            });
        },
        checkForm: function (data) {
            this.NameValid = false;

            if (data.Name) {
                this.NameValid = true;
            }

            const phoneFormat = /^\d+$/;
            this.PhoneValid = data.Phone.match(phoneFormat);

            const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            this.EmailValid = data.Email.match(mailformat);
        }
    },
    computed: {
        isValid: function () {
            return this.NameValid && this.PhoneValid && this.EmailValid;
        }
    }
});