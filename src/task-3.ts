import { APIGatewayEvent } from "aws-lambda";
import { checkBody } from "./check-body";

export const handler = async (event: APIGatewayEvent) => {
	let body = checkBody<{ array: number[]; n: number }>(event);

	if (body === undefined) {
		return {
			statusCode: 404,
			body: "Something went wrong",
		};
	}

	const n = body.n;
	let sum = 0;
	let mul = 1;

	body.array.every((it, index) => {
		if (index > n - 1) {
			return false;
		}

		sum += it;
		mul *= it;

		return true;
	});

	return {
		statusCode: 200,
		body: JSON.stringify({ sum, mul }),
	};
};
