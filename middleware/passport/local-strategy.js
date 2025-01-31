import LocalStrategy from "passport-local";
import prisma from "../../db/prisma/prismaInteractions.js";
import bcyprt from "bcryptjs";

async function verifyFunction(username, password, callback) {
    try {
        const user = await prisma.getUserByUsername(username);

        if (!user) {
            return callback(null, false);
        }

        const passwordMatch = await bcyprt.compare(password, user.password);

        if (!passwordMatch) {
            return callback(null, false);
        }

        return callback(null, user);
    } catch (error) {
        return callback(error);
    }
}

const strategy = new LocalStrategy(verifyFunction);

export default strategy;
