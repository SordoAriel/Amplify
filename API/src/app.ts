import apiRouter from './routes/index.router'
import { errorHandler } from './middleware/ErrorHandler';
import express, { Request, Response, NextFunction } from 'express';
import { httpResponse } from './utils/EnumsError';

const app = express()
const HttpResponse = new httpResponse();

//parta probar errores

app.get('/example', async (req: Request, res: Response, next: NextFunction) => {
  try {
    return HttpResponse.NotFound(res, 'No existe ningun dato');
  } catch (error) {
    return HttpResponse.NotFound(res, error);
  }
}
);
app.use(errorHandler);

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use("/", apiRouter)

export default app;