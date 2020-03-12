Vue.component('clients-list', {
    props: ['clients'],
    data: function () {
        return {
        }
    },
    methods: {
        delClient: function (client) {
            this.$emit('delclient', client);
        }
    },
    template: `
    <div div class="row">
    <table class="table" v-if="clients.length">
        <thead>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
        </thead>
        <tbody>
            <tr v-for="(client, index) in clients">
                <td>{{index + 1}}</td>
                <td>{{client.Name}}</td>
                <td>{{client.Phone}}</td>
                <td>{{client.Email}}</td>
                <td>
                    <button type="button" v-on:click="delClient(client)" class="btn btn-dark">Del</button>
                </td>
            </tr>
        </tbody>
    </table>
    <div v-else class="ml-3">
        List is empty
    </div>
    </div>
    `
});