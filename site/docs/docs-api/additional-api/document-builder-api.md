# Document Builder API

For the interaction with the **web document builder service** the POST requests are used. The request parameters are entered in JSON format in the request body. The requests are sent to the `https://documentserver/docbuilder` address where `documentserver` is the name of the server with the ONLYOFFICE Docs installed.

Starting from version 8.1, it is recommended to add the [shardkey](../get-started/configuration/shard-key.md) parameter to the URL QueryString with the `key` value in it. For example, `?shardkey=Khirz6zTPdfd7`. This allows you to load balance requests.

## Request parameters and their description

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Parameter | Type    | Presence                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------- | ------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| argument  | object  | optional                  | Defines the arguments to pass to the created document.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| async     | boolean | optional                  | Defines the type of the request to the **document builder service**: asynchronous or not. When `true`, the response is formed instantly with a `key` in the response. You must then poll by sending requests with this `key` until document generation is finished (when `end` becomes `true`). The default value is `false`.                                                                                                                                    |
| key       | string  | conditional               | Defines the request identifier used to unambiguously identify the request. The key is formed on the **document builder service** side and is returned as the response to the first request. When the asynchronous request is used (the `async` parameter is set to `true`) the key is not present in the first request, but must be present in all the following requests which will be sent before the generation is complete. When the synchronous request is used (the `async` parameter is set to `false`), this parameter is not required. |
| token     | string  | required by configuration | Defines the encrypted signature added to the **ONLYOFFICE Docs** config in the form of a [token](./signature/request/token-in-body.md#request-to-document-builder-service).                                                                                                                                                                                                                                                                                                                                                                         |
| url       | string  | required                  | Defines the absolute URL to the `.docbuilder` file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

```mdx-code-block
</APITable>
```

The `.docbuilder` file contains the script used to generate the output document file (text document, spreadsheet or presentation), specifies the output file format and name. Once the document generation is ready, the response with the absolute URL to the resulting file will be returned (see below).

:::note
The `.docbuilder` script file can contain several output files as a result. The URL to them all will be returned in the response to the request once the file generation is finished.
:::

You can find more information about the `.docbuilder` file syntax [here](../../document-builder/builder-app/using-docbuilder-file.md). Please read [Office JavaScript API documentation](../../office-api/get-started/overview.md) for the detailed information on what classes and methods are used to generate the documents with the help of `.docbuilder` files.

## Response parameters and their description

The request result is returned in JSON format.

```mdx-code-block
<APITable name="response">
```

| Parameter | Type    | Example                                              | Description                                                                                                                                                                                                                                                                                                                                    |
| --------- | ------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| end       | boolean | `true`                                               | Defines if the document generation is completed or not. When `false`, the task is still being processed and the `urls` parameter is not included in the response. When `true`, the task is complete and the `urls` parameter will be present.                                                                                                 |
| error     | integer | `-8`                                                 | Defines an error that occurred during document generation. Possible error codes can be found [below](#possible-error-codes-and-their-description).                                                                                                                                                                                            |
| key       | string  | `af86C7e71Ca8`                                       | Defines the unique identifier of the document generation task. If the `key` parameter was provided in the request, the same value is returned. If the `key` parameter was not provided in the first asynchronous request, a new key is generated by the **document builder service**. Use this value in all subsequent polling requests.      |
| urls      | object  | `{"output.docx": "https://documentserver/..."}` | Defines an object containing the absolute URLs to the generated output files. The object keys are the output file names as specified in the `.docbuilder` script. This parameter is present only when the `end` value is `true`.                                                                                                              |

```mdx-code-block
</APITable>
```

## Sample .docbuilder file

Below is a simple `.docbuilder` script that creates a document with "Hello World!" text:

``` js
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Hello World!");
builder.SaveFile("docx", "output.docx");
builder.CloseFile();
```

Host this file on a publicly accessible server to use it with the API requests below.

## Examples

:::info
In the examples below, `example.com` represents the server where your **document storage service** is installed and where `.docbuilder` files are hosted. See the [How it works](../get-started/how-it-works/how-it-works.md) section to learn more about ONLYOFFICE Docs service client-server interactions.
:::

### Asynchronous request

**Step 1.** Send the initial request with the `.docbuilder` file URL:

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "async": true,
    "url": "https://example.com/url-to-example-script.docbuilder"
  }'
```

**Response:**

``` json
{
  "key": "af86C7e71Ca8",
  "end": false
}
```

**Step 2.** Poll using the returned `key` until `end` is `true`:

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "async": true,
    "key": "af86C7e71Ca8"
  }'
```

**Response:**

``` json
{
  "key": "af86C7e71Ca8",
  "urls": {
    "output.docx": "https://documentserver/output.docx"
  },
  "end": true
}
```

### Synchronous request

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "async": false,
    "url": "https://example.com/url-to-example-script.docbuilder"
  }'
```

**Response:**

``` json
{
  "key": "af86C7e71Ca8",
  "urls": {
    "output.docx": "https://documentserver/output.docx"
  },
  "end": true
}
```

### Asynchronous request with token

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhc3luYyI6dHJ1ZSwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1zY3JpcHQuZG9jYnVpbGRlciJ9.dzoTbRzSMa95Fpg34CjnF3ZUPdGA2CnBedFL_qOOxAs"
  }'
```

**Response:**

``` json
{
  "error": -8
}
```

:::info
This example demonstrates the error response when the token is invalid. See the [error codes](#possible-error-codes-and-their-description) section for more details.
:::

### Synchronous request with arguments

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "async": false,
    "url": "https://example.com/url-to-example-script.docbuilder",
    "argument": {
      "key": "string",
      "key2": "string2"
    }
  }'
```

**Response:**

``` json
{
  "key": "af86C7e71Ca8",
  "urls": {
    "output.docx": "https://documentserver/output.docx"
  },
  "end": true
}
```

### Multiple output files

A `.docbuilder` script can generate multiple files. For example:

``` js
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Document 1");
builder.SaveFile("docx", "document1.docx");
builder.CloseFile();

builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Spreadsheet 1");
builder.SaveFile("xlsx", "spreadsheet1.xlsx");
builder.CloseFile();
```

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "async": false,
    "url": "https://example.com/url-to-example-script.docbuilder"
  }'
```

**Response:**

``` json
{
  "key": "af86C7e71Ca8",
  "urls": {
    "document1.docx": "https://documentserver/document1.docx",
    "spreadsheet1.xlsx": "https://documentserver/spreadsheet1.xlsx"
  },
  "end": true
}
```

## Possible error codes and their description

| Error code | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| -1         | Unknown error.                                                 |
| -2         | Generation timeout error.                                      |
| -3         | Document generation error.                                     |
| -4         | Error while downloading the document file to be generated.     |
| -6         | Error while accessing the document generation result database. |
| -8         | Invalid token.                                                 |
