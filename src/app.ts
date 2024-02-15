import {APIGatewayEvent, Handler} from 'aws-lambda';

export const handler: Handler = async (event: APIGatewayEvent, context) => {
    console.log ("In Handler");
    console.log (event);
    switch (event.resource) {
        case '/resource1':
            return {
                statusCode: 200,
                body: 'You have called /resource1'
            }
        case '/resource2':
            return {
                statusCode: 200,
                body: 'You have called /resource2'
            }
        default:
            return {
                statusCode: 400,
                body: 'Bad Request'
            }
    }
}