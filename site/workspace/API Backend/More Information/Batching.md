---
order: -1
---

The standard version of the ONLYOFFICE API is designed to make it really easy to get data for an individual object and to browse connections between objects. It also includes a limited ability to retrieve data for several objects in a single request.

If your application needs the ability to access significant amounts of data in a single go - or you need to make changes to several objects at once, it is often more efficient to batch your queries rather than make multiple individual HTTP requests.

To enable this, the ONLYOFFICE API supports request batching which allows you to pass instructions for several operations in a single HTTP request. You can also specify dependencies between related operations (described in the [Batch requests containing multiple methods](#batch-requests-containing-multiple-methods) section below). ONLYOFFICE will process each of your independent operations in parallel and will process your dependent operations sequentially. Once all operations have been completed, a consolidated response will be passed back to you and the HTTP connection will be closed.

## Making a simple batched request

The batch API takes an array of logical HTTP requests represented as JSON arrays - each request has a **method** (corresponding to HTTP method GET/PUT/POST/DELETE etc), a **relativeUrl** (the portion of the URL after **yourportal.onlyoffice.com**), optional headers array (corresponding to HTTP headers) and an optional **body** (for POST and PUT requests). The batch API returns an array of logical HTTP responses represented as JSON arrays - each response has a status code, an optional headers array and an optional body (which is a JSON encoded string).

To make batched requests, you build a JSON object which describes each individual operation you'd like to perform and **POST** this to the ONLYOFFICE API endpoint at **/api/2.0/batch**. The following example gets the current user's profile information and the user group in a single request:

``` json
[
  {
    "method": "GET",
    "relativeUrl": "/api/2.0/people/@self"
  },
  {
    "method": "GET",
    "relativeUrl": "/api/2.0/group/@self"
  }
]
```

Once both operations have been completed, ONLYOFFICE sends a response which encapsulates the result of all the operations. For each operation, the response includes a status code, header information, and the body. These are equivalent to the response you could expect from each operation if performed as raw requests against the ONLYOFFICE API. The body field contains a string encoded JSON object:

For the above request, the expected response would be of the form:

``` json
{
  "count": 1,
  "startIndex": 0,
  "status": 0,
  "statusCode": 200,
  "response": [
    {
      "status": 200,
      "headers": {
        "x-AspNet-Version": "2.0.50727",
        "access-Control-Allow-Origin": "*",
        "cache-Control": "private, max-age=0",
        "content-Type": "application/json; charset=UTF-8"
      },
      "data": "{\"count\": 1, \"startIndex\": 0, \"status\": 0, \"statusCode\": 200, \"response\": {\"id\": \"293bb997-28d8-4be0-8547-6eb50add1f3c\", \"userName\": \"Mike.Zanyatski\", \"firstName\": \"Mike\", \"lastName\": \"Zanyatski\", \"email\": \"mike@gmail.com\", \"birthday\": \"1974-05-16T05:00:00.0000000+05:00\", \"sex\": \"male\", \"status\": 1, \"terminated\": null, \"department\": \"Sample group\", \"workFrom\": \"2007-10-09T05:00:00.0000000+05:00\", \"location\": \"\", \"notes\": \"\", \"displayName\": \"Mike Zanyatski\", \"title\": \"Manager\", \"contacts\": [], \"groups\": [{\"id\": \"eeb47881-6330-4b6d-8a32-82366d4caf27\", \"name\": \"Sample group\", \"manager\": \"Jake.Zazhitski\"}], \"avatarMedium\": \"/data/0/userphotos/eeb47881-6330-4b6d-8a32-82366d4caf27_size_48-48.jpeg\", \"avatar\": \"/data/0/userphotos/eeb47881-6330-4b6d-8a32-82366d4caf27_size_82-82.jpeg\", \"avatarSmall\": \"/data/0/userphotos/eeb47881-6330-4b6d-8a32-82366d4caf27_size_32-32.jpeg\"}}"
    }
  ]
}
```

## Batch requests containing multiple methods

It is possible to combine operations that would normally use different HTTP methods into a single batch request. While **GET** and **DELETE** operations must only have a **relativeUrl** and a **method** field, **POST** and **PUT** operations may contain an optional **body** field. This should be formatted as a raw HTTP POST body string, similar to a URL query string. The following example gets information on the current contact and updates the contact information for the contact with the selected ID in a single operation:

``` json
[
  {
    "method": "GET",
    "relativeUrl": "/api/2.0/people/@self"
  },
  {
    "method": "POST",
    "relativeUrl": "/api/2.0/people/{userid}/contacts",
    "body": "contacts[0].Type=skype&contacts[0].Value=skypename&contacts[1].Type=msn&contacts[1].Value=msn_login"
  }
]
```
