import connection from "../database/pg";

export async function register(email:string, password:string) {
    await connection.users.create({data: {email,password}});
};

export async function findUserByEmail(email:string) {
    const user = await connection.users.findUnique({where: {email}});
    return user;
};