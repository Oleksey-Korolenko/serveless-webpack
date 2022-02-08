import formatJSONResponse, {
  ValidatedAPIGatewayProxyEvent,
  ValidatedEventAPIGatewayProxyEvent,
} from '../libs/apiGateway';
import { middyfy } from '../libs/lambda';
import { IRequestBody } from './request.interface';

const func: ValidatedEventAPIGatewayProxyEvent<IRequestBody> = async (
  event: ValidatedAPIGatewayProxyEvent<IRequestBody>
) => {
  let sum = 0;

  event.body.array.forEach((it) => (it > 0 ? (sum += it) : null));

  return formatJSONResponse({
    sum,
  });
};

export const handler = middyfy(func);
