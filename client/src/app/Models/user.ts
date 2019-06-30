export interface IUser {
  id: number;
  name: string;
  email: string;
}

export class User {
  id: number;
  name: string;
  email: string;

  constructor(user) {
    {
      this.id = user.id;
      this.name = user.name;
      this.email = user.email;
    }
  }
}
