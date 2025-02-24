import jwt from "jsonwebtoken";

export const generateToken = (user,res) => {
    const token= jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.cookie("jwt", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    return ;
}

