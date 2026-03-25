# Token in header

When performing the HTTP requests from or to ONLYOFFICE Docs an authorization header with the token is added to validate the request.

The JSON Web Token payload contains the `payload` object with the request body parameters.

:::info
In the examples below, `example.com` represents the server where your **document storage service** is installed. See the [How it works](../../../get-started/how-it-works/how-it-works.md) section to learn more about ONLYOFFICE Docs service client-server interactions.
:::

## Incoming request

:::caution
It is not recommended to send a signature in the header when performing the HTTP requests to ONLYOFFICE Docs. Send the signature [in the body](./token-in-body.md).
:::

### Get document status

Validation is performed for incoming requests with the commands from the **document storage service** to the [document command service](../../command-service/command-service.md).

Sample payload:

  ``` json
  {
    "payload": {
      "c": "info",
      "key": "Khirz6zTPdfd7"
    }
  }
  ```

**Request:**

``` bash
curl -X POST "https://documentserver/command" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImMiOiJpbmZvIiwia2V5IjoiS2hpcno2elRQZGZkNyJ9fQ.hGQ8kquQWpg4MQYiSYaIzik0wotP1coAop6QfLruenA" \
  -d '{
    "c": "info",
    "key": "Khirz6zTPdfd7"
  }'
```

### Convert document

Validation is performed for incoming requests from the **document storage service** to the [document conversion service](../../conversion-api/request.md).

Sample payload:

  ``` json
  {
    "payload": {
      "filetype": "docx",
      "key": "Khirz6zTPdfd7",
      "outputtype": "pdf",
      "title": "Example Document Title.docx",
      "url": "https://example.com/url-to-example-document.docx"
    }
  }
  ```

**Request:**

``` bash
curl -X POST "https://documentserver/converter" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImZpbGV0eXBlIjoiZG9jeCIsImtleSI6IktoaXJ6NnpUUGRmZDciLCJvdXRwdXR0eXBlIjoicGRmIiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQuZG9jeCJ9fQ.Ec50Gvafu4niR2I1LPgETn1jkvvs1wKm0YeeI1RbRQs" \
  -d '{
    "filetype": "docx",
    "key": "Khirz6zTPdfd7",
    "outputtype": "pdf",
    "title": "Example Document Title.docx",
    "url": "https://example.com/url-to-example-document.docx"
  }'
```

### Document builder

Validation is performed for incoming requests from the **document storage service** to the [document builder service](../../document-builder-api.md).

Sample payload:

  ``` json
  {
    "payload": {
      "async": true,
      "url": "https://example.com/url-to-example-script.js"
    }
  }
  ```

**Request:**

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImFzeW5jIjp0cnVlLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLXNjcmlwdC5qcyJ9fQ.0_2NH7PCswspvVWcc8W5Fzfbx9dCNvynP9DNlI0qJDU" \
  -d '{
    "async": true,
    "url": "https://example.com/url-to-example-script.js"
  }'
```

## Outgoing requests

### Callback on close without changes

Validation is performed for outgoing requests to "[callbackUrl](../../../usage-api/config/editor/editor.md#callbackurl)" address by **document editing service**.

Sample payload:

  ``` json
  {
    "payload": {
      "key": "Khirz6zTPdfd7",
      "status": 4
    }
  }
  ```

**Request:**

``` bash
curl -X POST "https://example.com/url-to-callback.ashx" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImtleSI6IktoaXJ6NnpUUGRmZDciLCJzdGF0dXMiOjR9fQ.MfVoGT-aYuPJfjQAaxwBv7-CqBylDae2AF9K5TpLf-E" \
  -d '{
    "key": "Khirz6zTPdfd7",
    "status": 4
  }'
```

### File download

Validation is performed for outgoing requests to **document storage service** for file download.

Sample payload:

  ``` json
  {
    "payload": {
      "url": "https://example.com/url-to-example-document.docx"
    }
  }
  ```

**Request:**

``` bash
curl -X GET "https://example.com/url-to-example-document.docx" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQuZG9jeCJ9fQ.DnhdBVtn8sFo9Adfl6GuT_v53NVV5cQ0Vi9c8xRzrjs"
```

The token includes the payload (the full URL to the document, in the example above it is `{"url": "https://example.com/url-to-example-document.docx"}`), which is also duplicated in the header as the `Host` (`example.com`) and the document address the GET request is sent to (`url-to-example-document.docx`).

### Document changes download

Validation is performed for outgoing requests to **document storage service** for document changes data download.

Sample payload:

  ``` json
  {
    "payload": {
      "url": "https://example.com/url-to-document-changes.zip"
    }
  }
  ```

**Request:**

``` bash
curl -X GET "https://example.com/url-to-document-changes.zip" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWRvY3VtZW50LWNoYW5nZXMuemlwIn19.4CJ4F8x7VDMW72ss9VnIYGIwjRpBMYBBRXZ5aX2r2Y4"
```

The token includes the payload (the full URL to the document, in the example above it is `{"url": "https://example.com/url-to-document-changes.zip"}`), which is also duplicated in the header as the `Host` (`example.com`) and the document address the GET request is sent to (`url-to-document-changes.zip`).
