"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_enty_1 = require("../entities/user.enty");
const bcrypt = require("bcrypt");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async createUser(autCredentialDto) {
        const { username, password } = autCredentialDto;
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        console.log("#### This is the hashPassword : " + hashPassword);
        const user = this.create({
            username,
            password: hashPassword,
        });
        try {
            await this.save(user);
        }
        catch (error) {
            if (error.code === "23505") {
                throw new common_1.ConflictException("Ce nom d'utilisateur existe deja");
            }
            else {
                throw common_1.InternalServerErrorException;
            }
        }
    }
};
UserRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_enty_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map