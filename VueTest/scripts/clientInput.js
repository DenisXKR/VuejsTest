Vue.component('client-input', {
    data: function () {
        return {
            Name: '',
            Phone: '',
            Email: '',
            NameValid: true,
            PhoneValid: true,
            EmailValid: true
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
        }
    },
    computed: {
        isValid: function () {
            return this.NameValid && this.PhoneValid && this.EmailValid;
        }
    },
    template: '#client-input-template'
});