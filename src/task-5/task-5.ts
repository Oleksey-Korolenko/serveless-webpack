import formatJSONResponse, {
  ValidatedAPIGatewayProxyEvent,
  ValidatedEventAPIGatewayProxyEvent,
} from '../libs/apiGateway';
import { middyfy } from '../libs/lambda';
import { IRequestBody } from './request.interface';

const func: ValidatedEventAPIGatewayProxyEvent<IRequestBody> = async (
  event: ValidatedAPIGatewayProxyEvent<IRequestBody>
) => {
  let array = event.body.array;

  array.sort((a, b) => {
    if (a.firstName === b.firstName) {
      return new Date(a.birthDate).getTime() > new Date(b.birthDate).getTime()
        ? -1
        : 1;
    } else {
      return a.firstName > b.firstName ? 1 : -1;
    }
  });

  return formatJSONResponse({
    array,
  });
};

export const handler = middyfy(func);
