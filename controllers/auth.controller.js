import UserSchema2 from "../models/user.model.js";
import { hashPassword, comparePassword } from "../utils/hashpassword.js";
import{ generateToken} from "../utils/token.js";
const login =async (req, res) => {
const { username, password } = req.body;
if (!username || !password) {
    return res.status(400).json({ message: "username and password are required" });
}
const user =await UserSchema2.findOne({ username });
if (!user) {
    return res.status(400).json({ message: "user not found" });
}

const isPasswordValid =await comparePassword(password, user.password);
if (!isPasswordValid) {
    return res.status(400).json({ message: "password is incorrect" });
}
await generateToken(user, res);
res.status(200).json({ message: "login successful" ,user});
}
const signup = async(req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "username and password are required" });
    }
    const user =await UserSchema2.findOne({ username });
    if (user) {
        return res.status(400).json({ message: "user already exists" });
    }
    const hashedPassword =await hashPassword(password);
    const newUser = new UserSchema2({ username, password: hashedPassword });
    await newUser.save();
    await generateToken(newUser, res);
    res.status(200).json({ message: "signup successful" });
}



export { login, signup };