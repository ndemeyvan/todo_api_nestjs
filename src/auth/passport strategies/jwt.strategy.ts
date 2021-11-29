import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "../entities/user.enty";
import { JtwPayload } from "../jtw-payload";
import { UserRepository } from "../repository/user.repository";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "secret",
    });
  }

  async validate(payload: JtwPayload) {
    const { username } = payload;
    const user : User= await this.userRepository.findOne({ username });
    if (!user) {
      throw new Error("Invalid user");
    }
    return user;
  }
  
}
