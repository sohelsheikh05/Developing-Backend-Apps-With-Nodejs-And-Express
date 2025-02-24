
import jwt from "jsonwebtoken";

 const authenticateToken = (req, res, next) => {

    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        req.user = decoded.id;
        
        next();
    });

}

export default authenticateToken