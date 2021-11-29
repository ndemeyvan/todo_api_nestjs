
import { IsNotEmpty, IsString, IS_LENGTH, Matches, MaxLength, MinLength } from 'class-validator';

export  class AuthCredentialDto{
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    username:String;
    @IsNotEmpty()
    @MinLength(6)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{message:"Votre mot de passe est tres faible"})
    password:String;
}