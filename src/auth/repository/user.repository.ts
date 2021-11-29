import {
  ConflictException,
  InternalServerErrorException,
} from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialDto } from "../dto/auth.credential.dto";
import { User } from "../entities/user.enty";
import * as bcrypt from "bcrypt";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(autCredentialDto: AuthCredentialDto): Promise<void> {
    const { username, password } = autCredentialDto;
    //Hash password with bcrypt
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    console.log("#### This is the hashPassword : " +hashPassword);
    
    const user = this.create({
      username,
      password:hashPassword,
    });
    //23505 valeur unique duplique
    try {
      await this.save(user);
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("Ce nom d'utilisateur existe deja");
      } else {
        throw InternalServerErrorException;
      }
    }
  }
}
