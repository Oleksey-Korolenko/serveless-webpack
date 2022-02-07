import { APIGatewayEvent } from "aws-lambda";

export const checkBody = <T>(event: APIGatewayEvent): T | undefined => {
	if (event === null) {
		return undefined;
	} else if (typeof event === "string") {
		return JSON.parse(event);
	} else if (event.body === null) {
		return undefined;
	} else {
		return JSON.parse(event.body);
	}
};
