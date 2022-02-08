import formatJSONResponse, {
  ValidatedAPIGatewayProxyEvent,
  ValidatedEventAPIGatewayProxyEvent,
} from '../libs/apiGateway';
import { middyfy } from '../libs/lambda';

const func: ValidatedEventAPIGatewayProxyEvent<undefined> = async (
  event: ValidatedAPIGatewayProxyEvent<undefined>
) => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0).getTime();
  const diff = now.getTime() - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const numberOfDay = Math.floor(diff / oneDay);

  return formatJSONResponse({
    numberOfDay,
  });
};

export const handler = middyfy(func);
