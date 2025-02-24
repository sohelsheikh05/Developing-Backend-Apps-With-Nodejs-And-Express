import mongoose from "mongoose";


const ConnectDB = async () => {
    try {
        const connection1 = await mongoose.connect(process.env.MONGO_URL);

        console.log("DB connected",connection1.connection.host);
    } catch (error) {
        console.log(error);
    }
}

export default ConnectDB

//conneted
