import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() user: User) {
    return this.usersService.update(id, user);
  }

  @Post()
  createUser(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Get()
  listUsers() {
    return this.usersService.list();
  }
}
