import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { User } from './users.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];

  update(id: number, user: User) {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }
    this.users[userIndex] = { ...this.users[userIndex], ...user };
    return { message: 'Usuário atualizado com sucesso' };
  }

  create(user: User) {
    const emailExists = this.users.find((u) => u.email === user.email);
    if (emailExists) {
      throw new HttpException('Email já existe', HttpStatus.BAD_REQUEST);
    }

    const newUser = {
      id: uuidv4(),
      ...user,
    };

    this.users.push(newUser);

    return { message: 'Usuário cadastrado com sucesso', user: newUser };
  }

  list() {
    return this.users;
  }
}
