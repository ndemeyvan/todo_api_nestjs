import {
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthCredentialDto } from "./dto/auth.credential.dto";
import { UserRepository } from "./repository/user.repository";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { JtwPayload } from "./jtw-payload";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(autCredentialDto: AuthCredentialDto): Promise<void> {
    return this.userRepository.createUser(autCredentialDto);
  }

  async signIn(autCredentialDto: AuthCredentialDto): Promise<{accessToken}> {
    const { username, password } = autCredentialDto;
    const user = await this.userRepository.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload:JtwPayload = { username };
      const accessToken = await this.jwtService.sign(payload);
      return {accessToken};
    } else {
      throw new UnauthorizedException("Utilisateur ou Mot de passe incorrecte");
    }
  }

}
