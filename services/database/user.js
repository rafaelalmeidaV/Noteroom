import { MongoClient } from "mongodb";

export default class Database {
  constructor() {
    this.client = new MongoClient(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  async connect() {
    await this.client.connect();
    this.db = this.client.db();
    this.collection = this.db.collection("users");
  }

  getUsers() {
    return this.collection.find({}).toArray();
    
  }

  getUser(id) {
    
  }

  addUser(name, email,telefone, senha) {
    this.collection.insertOne({ name, email, telefone, senha });
  }

  updateUser(id, name, email) {
    
  }

  deleteUser(id) {
   
}

}