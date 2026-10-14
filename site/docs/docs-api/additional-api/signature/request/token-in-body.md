# Token in body

Starting from version 5.2, it is possible to use the token in body parameters with ONLYOFFICE Docs. To enable it, set the [services.CoAuthoring.token.inbox.inBody](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-token-inbox-inBody) and [services.CoAuthoring.token.outbox.inBody](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-token-outbox-inBody) in configuration file to `true`.

## Configuration parameters

| Parameter                                | Type    | Example | Description                                                        |
| ---------------------------------------- | ------- | ------- | ------------------------------------------------------------------ |
| services.CoAuthoring.token.inbox.inBody  | boolean | false   | Whether a token is enabled in the incoming request body or not. |
| services.CoAuthoring.token.outbox.inBody | boolean | false   | Whether a token is enabled in the outgoing request body or not. |

The `payload` for the JSON Web Token contains the request body parameters. Starting from version 10.0, the token also contains the [operation](request.md#operation) field.

:::info
In the examples below, `example.com` represents the server where your **document storage service** is installed. See the [How it works](../../../get-started/how-it-works/how-it-works.md) section to learn more about ONLYOFFICE Docs service client-server interactions.
:::

## Incoming request

### Get document status

Validation is performed for incoming requests with the commands from the **document storage service** to the [document command service](../../command-service/command-service.md).

Sample parameters of request to receive the status of the edited document:

  ``` json
  {
    "c": "info",
    "key": "Khirz6zTPdfd7",
    "operation": "command"
  }
  ```

These parameters must be encoded into the token so that the request looked like this:

**Request:**

```bash
curl -X POST "https://documentserver/command" \
  -H "Content-Type: application/json" \
  -d '{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjIjoiaW5mbyIsImtleSI6IktoaXJ6NnpUUGRmZDciLCJvcGVyYXRpb24iOiJjb21tYW5kIn0.trVKeI7OFWsAUhnNKJYxbDW14tcf4RnKgYrRPYL7JAw"
  }'
```

As you can see there is no need to include the above parameters into the request body, as all of them are already encoded into the token and sent within it.

### Convert document

Validation is performed for incoming requests with the commands from the **document storage service** to the [document conversion service](../../conversion-api/request.md).

Sample parameters of request to convert the document:

  ``` json
  {
    "filetype": "docx",
    "key": "Khirz6zTPdfd7",
    "outputtype": "pdf",
    "title": "Example Document Title.docx",
    "url": "https://example.com/url-to-example-document.docx",
    "operation": "converter"
  }
  ```

**Request:**

```bash
curl -X POST "https://documentserver/converter" \
  -H "Content-Type: application/json" \
  -d '{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxldHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3Iiwib3V0cHV0dHlwZSI6InBkZiIsInRpdGxlIjoiRXhhbXBsZSBEb2N1bWVudCBUaXRsZS5kb2N4IiwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1kb2N1bWVudC5kb2N4Iiwib3BlcmF0aW9uIjoiY29udmVydGVyIn0.uPg0UB8h99StTOqnm3nzyGW7MTYdogOlvyXeZ9R9TQA"
  }'
```

### Document builder

Validation is performed for incoming requests with the commands from the **document storage service** to the [document builder service](../../../get-started/how-it-works/how-it-works.md).

Sample parameters of request to document builder service:

  ``` json
  {
    "async": true,
    "url": "https://example.com/url-to-example-script.js",
    "operation": "docbuilder"
  }
  ```

**Request:**

```bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhc3luYyI6dHJ1ZSwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1zY3JpcHQuanMiLCJvcGVyYXRpb24iOiJkb2NidWlsZGVyIn0.47dIcXHShPAz5i1FBcszQ4gabCP2ONcRjj1XRC4apK0"
  }'
```

## Outgoing requests

### Callback on close without changes

Validation is performed for outgoing requests to "[callbackUrl](../../../usage-api/config/editor/editor.md#callbackurl)" address by **document editing service**.

Sample parameters of request to "callbackUrl" address by document editing service when the last user closed the document for editing without changes:

  ``` json
  {
    "key": "Khirz6zTPdfd7",
    "status": 4,
    "operation": "callback"
  }
  ```

**Request:**

```bash
curl -X POST "https://example.com/url-to-callback" \
  -H "Content-Type: application/json" \
  -d '{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJLaGlyejZ6VFBkZmQ3Iiwic3RhdHVzIjo0LCJvcGVyYXRpb24iOiJjYWxsYmFjayJ9.4350Gsw3fFOH9EC_tnY9iJ_PfAbKW8ZiNU4wiBagHdU"
  }'
```

When performing the GET requests from ONLYOFFICE Docs an [authorization header](./token-in-header.md) with the token is added.
