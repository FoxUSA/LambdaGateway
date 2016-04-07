# Setup
1. Create project and stage in AWS API Gateway(AG).

2. Upload zip of this engine to AWS Lambda(λ).

3. Create the following endpoints in AG
`GET /status`
`POST /echo/{id}`
the `{id}` indicates a url path parameter in AG.
In each of the AG methods set the λ function to the one uploaded in step 2.

4. Set up a mapping template with the type `application/json`
 Paste in the contents of `gatewayContext.mapping.json` for both functions. This mapping template maps the http path,query and body variables into the λ event object.

5. Now you can deploy the AG configuration to the AG stage configured in the step 1.

Tradditional multi envorment build chains(Dev,QA,Prod) can be achived using AG variables and configuration swapping. For more information see [this guide](https://aws.amazon.com/blogs/compute/using-api-gateway-stage-variables-to-manage-lambda-functions/).
# Credits
	Jacob Liscom
	Sam Strickler
