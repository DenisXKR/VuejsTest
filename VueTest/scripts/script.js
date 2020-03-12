
var app = new Vue({
    el: '#clients',
    data: {
        clients: []
    },
    created: function () {
        //Test data
        this.clients.push(
            new ClientModel('Client1', '23423432', 'Client1@mail.com'));
        this.clients.push(
            new ClientModel('Client2', '234432', 'Client2@mail.com'));
    },
    methods: {
        addClient: function (client) {
            this.clients.push(client);
        },
        delClient: function (client) {
            this.clients = this.clients.filter(function (el) {
                return el.Name != client.Name;
            });
        }
    }
});