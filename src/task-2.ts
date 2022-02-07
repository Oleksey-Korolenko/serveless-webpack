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

	let sum = 0;

	body.array.forEach((it) => (it > 0 ? (sum += it) : null));

	return {
		statusCode: 200,
		body: JSON.stringify({ sum }),
	};
};
