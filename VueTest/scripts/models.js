class ClientModel {
    constructor(name, phone, email, id) {
        this.Id = id || Date.now();
        this.Name = name;
        this.Phone = phone;
        this.Email = email;
    }
}