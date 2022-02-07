import { APIGatewayEvent } from "aws-lambda";
import { checkBody } from "./check-body";

export const handler = async (event: APIGatewayEvent) => {
	let body = checkBody<{
		array: {
			firstName: string;
			birthDate: Date;
		}[];
	}>(event);

	if (body === undefined) {
		return {
			statusCode: 404,
			body: "Something went wrong",
		};
	}

	let array = body.array;

	array.sort((a, b) => {
		if (a.firstName === b.firstName) {
			return new Date(a.birthDate).getTime() > new Date(b.birthDate).getTime()
				? -1
				: 1;
		} else {
			return a.firstName > b.firstName ? 1 : -1;
		}
	});

	return {
		statusCode: 200,
		body: JSON.stringify({ array }),
	};
};
