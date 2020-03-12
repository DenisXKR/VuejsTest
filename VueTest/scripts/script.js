
var app = new Vue({
    el: '#clients',
    data: {
        clients: []
    },
    created() {
        //Test data
        this.clients.push(
            new ClientModel(1, 'Client1', '23423432', 'Client1@mail.com', 1));
        this.clients.push(
            new ClientModel(2, 'Client2', '234432', 'Client2@mail.com', 2));
    },
    methods: {
        addClient(client) {
            this.clients.push(client);
        },
        delClient(client) {
            this.clients = this.clients.filter(function (el) {
                return el.Id != client.Id;
            });
        }
    }
});