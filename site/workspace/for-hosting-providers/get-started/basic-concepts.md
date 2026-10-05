---
sidebar_position: -2
---

# Basic concepts

The ONLYOFFICE Hosted Solution is implemented as REST over HTTP using GET/POST. All the resources, like client creation, portal registration, etc, have their own URLs and are designed to be manipulated in isolation.

## Authentication

Authentication in the ONLYOFFICE Hosted Solution is managed via the HTTP authentication, i.e. every request must include the Authorization HTTP header. For information and examples please visit the [Authentication](./authentication.md) section.

## Making requests

To identify the request and response format, please make sure that both the **Content-Type** and **Accept** headers are set to *application/json*. The API methods are called without specifying the format for the response and are returned in JSON format.

## Responses

**If a request succeeds, it will return a status code in the 200 range** and a JSON-formatted response. Note that, in general, if a request causes a new record to be created, the response will use the **201 Created** status. Any other successful operation will return a *200* status code.

**If a request fails, a non-200 status code will be returned** in JSON format, containing the error code and additional error information (if available) as the response content.

## Possible error codes and their description

Every code a failed request can return, with the HTTP status it comes with, is listed in
[Errors](../usage-api/errors.md).
