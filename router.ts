import { Express } from 'express';
import productRouter from './products/router';
import authRouter from './auth/router';
import categoryRouter from './libreria/router'
import postresRouter from './postres/router'

const router = (app: Express) => {
    app.use("/auth", authRouter)
    app.use("/products", productRouter)
    app.use("/libreria", categoryRouter)
    app.use("/postres", postresRouter)
}

export default router;