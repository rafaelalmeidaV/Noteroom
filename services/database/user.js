export class User {
    constructor(id, name, email, phone, password) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.password = password;
    }
  }
  
  export default class UserCRUD {
    constructor() {
      // Inicializa a lista de usuários
      this.users = [];
    }
  
    create(user) {
      // Adiciona um usuário à lista
      this.users.push(user);
      return user;
    }
  
    read(id) {
      // Encontra um usuário pelo id
      return this.users.find(user => user.id === id);
    }
  
    update(user) {
      // Encontra o índice do usuário na lista pelo id
      const index = this.users.findIndex(u => u.id === user.id);
  
      // Se o usuário existe, atualiza seus dados
      if (index !== -1) {
        this.users[index] = user;
        return user;
      }
  
      // Caso contrário, retorna null
      return null;
    }
  
    delete(id) {
      // Encontra o índice do usuário na lista pelo id
      const index = this.users.findIndex(user => user.id === id);
  
      // Se o usuário existe, remove-o da lista e retorna true
      if (index !== -1) {
        this.users.splice(index, 1);
        return true;
      }
  
      // Caso contrário, retorna false
      return false;
    }
  
    list() {
      // Retorna a lista completa de usuários
      return this.users;
    }
  }
  
  // Exemplo de uso:
  
  const userCRUD = new UserCRUD();
  
  // Cria um usuário
  const user1 = userCRUD.create(new User(1, "João", "joao@email.com", "(11) 1111-1111"));
  
  // Lê o usuário recém-criado pelo id
  const user1Read = userCRUD.read(1);
  console.log(user1Read);
  
  // Atualiza os dados do usuário
  user1.name = "João da Silva";
  const user1Updated = userCRUD.update(user1);
  console.log(user1Updated);
  
  // Deleta o usuário pelo id
  const user1Deleted = userCRUD.delete(1);
  console.log(user1Deleted);
  
  // Lista todos os usuários (no momento, nenhum)
  const allUsers = userCRUD.list();
  console.log(allUsers);