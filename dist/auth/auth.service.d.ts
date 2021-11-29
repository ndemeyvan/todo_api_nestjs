import { AuthCredentialDto } from "./dto/auth.credential.dto";
import { UserRepository } from "./repository/user.repository";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(autCredentialDto: AuthCredentialDto): Promise<void>;
    signIn(autCredentialDto: AuthCredentialDto): Promise<{
        accessToken: any;
    }>;
}
