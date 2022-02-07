import { APIGatewayEvent } from "aws-lambda";
import { checkBody } from "./check-body";

export const handler = async (event: APIGatewayEvent) => {
	let body = checkBody<{ array: number[] }>(event);

	if (body === undefined) {
		return {
			statusCode: 404,
			body: "Something went wrong",
		};
	}

	let number = undefined;

	body.array.every((it) => {
		if (it % 2 === 0) {
			number = it;
			return false;
		}
		return true;
	});

	return {
		statusCode: 200,
		body: JSON.stringify({
			number,
		}),
	};
};
