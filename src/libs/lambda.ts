import * as middy from 'middy';
import { jsonBodyParser } from 'middy/middlewares';

export const middyfy = (handler: unknown) =>
  middy(handler as any).use(jsonBodyParser());
