import { AuthCredentialDto } from "./dto/auth.credential.dto";
import { UserRepository } from "./repository/user.repository";
export declare class AuthService {
    private userRepository;
    constructor(userRepository: UserRepository);
    signUp(autCredentialDto: AuthCredentialDto): Promise<void>;
    signIn(autCredentialDto: AuthCredentialDto): Promise<String>;
}
