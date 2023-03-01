import axios from 'axios';  

export default class Database {
  async postUser({ email, password, name, telefone}) {
    try {
      const user = await axios.post('https://note-room-default-rtdb.firebaseio.com/users.json', {
        email,
        password,
        name,
        telefone
      });  
      return user;
    } catch (err) {
      console.error(`Failed to log in anonymously: ${err}`);
      throw err;
    }
  }

  
}

