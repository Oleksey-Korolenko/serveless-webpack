import formatJSONResponse, {
  ValidatedAPIGatewayProxyEvent,
  ValidatedEventAPIGatewayProxyEvent,
} from '../libs/apiGateway';
import { middyfy } from '../libs/lambda';

import { IRequestBody } from './request.interface';

const func: ValidatedEventAPIGatewayProxyEvent<IRequestBody> = async (
  event: ValidatedAPIGatewayProxyEvent<IRequestBody>
) => {
  const n = event.body.n;
  let sum = 0;
  let mul = 1;

  event.body.array.every((it, index) => {
    if (index > n - 1) {
      return false;
    }

    sum += it;
    mul *= it;

    return true;
  });

  return formatJSONResponse({
    sum,
    mul,
  });
};

export const handler = middyfy(func);
