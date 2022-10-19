import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function checkAuth(req, res, next) {
    let token = req.headers["x-access-token"] || req.headers["authorization"];

    if (!!token && token.startsWith("Bearer ")) {
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json("token_not_valid");
            } else {
                req.decoded = decoded;
                const newToken = jwt.sign(
                    {
                        user: decoded.user,
                    },
                    process.env.SECRET_KEY,
                    {
                        expiresIn: 24 * 60 * 60,
                    }
                );
                res.header("Authorization", "Bearer " + newToken);
                next();
            }
        });
    } else {
        return res.status(401).json("token_required");
    }
}
