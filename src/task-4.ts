import { APIGatewayEvent } from "aws-lambda";

export const handler = async (event: APIGatewayEvent) => {
	const now = new Date();
	const start = new Date(now.getFullYear(), 0, 0).getTime();
	const diff = now.getTime() - start;
	const oneDay = 1000 * 60 * 60 * 24;
	const numberOfDay = Math.floor(diff / oneDay);
	return {
		statusCode: 200,
		body: JSON.stringify({ numberOfDay }),
	};
};
