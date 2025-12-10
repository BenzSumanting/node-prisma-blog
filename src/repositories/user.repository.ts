import { User } from "../generated/prisma/client";
import prisma from "../lib/prisma";
import { BaseRepository } from "./base.repository";

export class UserRepository extends BaseRepository<User>{
    constructor(){
        super(prisma.user)
    }
}