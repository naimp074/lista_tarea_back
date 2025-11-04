import mongoose from "mongoose";

try {
    mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB).then(() =>
        console.info("BD: Conexion exitosa")
    )
} catch (error) {
    console.error(error)
}

export default mongoose
