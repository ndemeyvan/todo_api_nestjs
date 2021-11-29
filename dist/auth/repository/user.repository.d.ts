import { Repository } from "typeorm";
import { AuthCredentialDto } from "../dto/auth.credential.dto";
import { User } from "../entities/user.enty";
export declare class UserRepository extends Repository<User> {
    createUser(autCredentialDto: AuthCredentialDto): Promise<void>;
}
