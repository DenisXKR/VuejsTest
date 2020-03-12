
var app = new Vue({
    el: '#clients',
    data: {
        Clients: []
    },
    created: function () {
        //Test data
        this.Clients.push(
            new ClientModel('Client1', '23423432', 'Client1@mail.com'));
        this.Clients.push(
            new ClientModel('Client2', '234432', 'Client2@mail.com'));
    },
    methods: {
        addClient: function (client) {
            this.Clients.push(client);
        },
        delClient: function (client) {
            this.Clients = this.Clients.filter(function (el) {
                return el.Name != client.Name;
            });
        }
    }
});