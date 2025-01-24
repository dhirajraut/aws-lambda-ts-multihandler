Checkout the project.
Run npm install
Run npm build
Create a lambda and deploy the zip from dist folder.
Create an API Gateway, and configure a GET request to this lambda. Make sure that the Lambda Proxy Integration' is set to true.
![image](https://github.com/user-attachments/assets/29852c2c-6490-4ed4-9921-ebff330cdbcf)

Test API Gateway. You will see the event object printed on CloudWatch log with URLs. Make decision based on the URL.
![image](https://github.com/user-attachments/assets/ab0f68bd-b080-428a-895e-49fd036134a8)
