import middy from '@middy/core';
import middyJsonBodyParser from '@middy/http-json-body-parser';
import { Context } from 'aws-lambda';

export const middyfy = (handler) => {
  return middy(handler).use(middyJsonBodyParser());
};
