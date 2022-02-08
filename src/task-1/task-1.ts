import formatJSONResponse, {
  ValidatedAPIGatewayProxyEvent,
  ValidatedEventAPIGatewayProxyEvent,
} from '../libs/apiGateway';
import { middyfy } from '../libs/lambda';

import { IRequestBody } from './request.interface';

const func: ValidatedEventAPIGatewayProxyEvent<IRequestBody> = async (
  event: ValidatedAPIGatewayProxyEvent<IRequestBody>
) => {
  let number = undefined;

  event.body.array.every((it) => {
    if (it % 2 === 0) {
      number = it;
      return false;
    }
    return true;
  });

  return formatJSONResponse({
    number,
  });
};

export const handler = middyfy(func);
