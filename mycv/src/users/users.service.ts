import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
/* 
  userService에서 NotFoundException과 같은 오류를 던지면 userController로 가는데,
  HTTP 프로토콜을 사용하면 괜찮지만 WepSocket과 같은 다른 프로토콜을 사용하면 
  커스텀 예외 필터를 사용해야 한다. 
  쉽게 말하면 애플리케이션에 통신 프로토콜을 여러개 도입하면 HTTP 프로토콜에만 통용되는 
  NotFoundException이 오류를 일으킬 수 있다는 뜻
*/
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }

  find(email: string) {
    return this.repo.find({ where: { email } });
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
