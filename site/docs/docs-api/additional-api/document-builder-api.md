import APITable from '@site/src/components/APITable/APITable';

# Document Builder API

For the interaction with the **web document builder service** the POST requests are used. The request parameters are entered in JSON format in the request body. The requests are sent to the `https://documentserver/docbuilder` address where `documentserver` is the name of the server with the ONLYOFFICE Docs installed.

:::tip
Starting from version 8.1, it is recommended to add the [shardkey](../get-started/configuration/shard-key.md) parameter to the query string with the `key` value in it. For example, `?shardkey=Khirz6zTPdfd7`. This allows you to load balance requests.
:::

## Request parameters

```mdx-code-block
<APITable>
```

| Parameter | Type    | Presence                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------- | ------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| argument  | object  | optional                  | The arguments to pass to the created document. See [supported properties](../../document-builder/builder-framework/CDocBuilder/SetProperty.md#--argument) for details on how the argument is used.                                                                                                                                                                                                                                                                                                                                      |
| async     | boolean | optional                  | The type of the request to the **document builder service**: asynchronous or not. When `true`, the response is formed instantly with a `key` in the response. You must then poll by sending requests with this `key` until document generation is finished (when `end` becomes `true`). The default value is `false`.                                                                                                                                                                                                                   |
| key       | string  | conditional               | The request identifier used to unambiguously identify the request. The key is formed on the **document builder service** side and is returned as the response to the first request. When the asynchronous request is used (the `async` parameter is set to `true`) the key is not present in the first request, but must be present in all the following requests which will be sent before the generation is complete. When the synchronous request is used (the `async` parameter is set to `false`), this parameter is not required. |
| token     | string  | required by configuration | The encrypted signature added to the **ONLYOFFICE Docs** config in the form of a [token](./signature/request/token-in-body.md#document-builder).                                                                                                                                                                                                                                                                                                                                                                     |
| url       | string  | required                  | The absolute URL to the `.js` script file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

```mdx-code-block
</APITable>
```

The `.js` script file is a JavaScript file that uses the [Office JavaScript API](../../office-api/get-started/overview.md) to generate output document files (documents, spreadsheets, or presentations). It uses `builder.CreateFile()` to create a document, the Office API classes to manipulate content, `builder.SaveFile()` to specify the output format and name, and `builder.CloseFile()` to finalize. You can find more information about the script file syntax [here](../../document-builder/using-cli/script-file.md). Once document generation is complete, the response with the absolute URL to the resulting file will be returned (see below).

:::note
The `.js` script file can contain several output files as a result. The URL to them all will be returned in the response to the request once the file generation is finished.
:::

:::caution
When using `builder.OpenFile()` in your script, you must provide an absolute URL to the file (e.g., `https://example.com/document.docx`), not a local path. The Document Server needs to download the file from a publicly accessible location.
:::

## Response parameters

The request result is returned in JSON format.

```mdx-code-block
<APITable name="response">
```

| Parameter | Type    | Example                                         | Description                                                                                                                                                                                                                                                                                                                                     |
| --------- | ------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| end       | boolean | `true`                                          | Whether the document generation is completed or not. When `false`, the task is still being processed and the `urls` parameter is not included in the response. When `true`, the task is complete and the `urls` parameter will be present.                                                                                                   |
| error     | integer | `-8`                                            | An error that occurred during document generation. Possible error codes can be found [below](#possible-error-codes-and-their-description).                                                                                                                                                                                              |
| key       | string  | `af86C7e71Ca8`                                  | The unique identifier of the document generation task. If the `key` parameter was provided in the request, the same value is returned. If the `key` parameter was not provided in the first asynchronous request, a new key is generated by the **document builder service**. Use this value in all subsequent polling requests.        |
| urls      | object  | `{"output.docx": "https://documentserver/..."}` | An object containing the absolute URLs to the generated output files. The object keys are the output file names as specified in the `.js` script. This parameter is present only when the `end` value is `true`.                                                                                                                        |

```mdx-code-block
</APITable>
```

## Sample script

Below is a simple `.js` script that creates a document with "Hello World!" text:

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
In the examples below, `example.com` represents the server where your **document storage service** is installed and `.js` files are served from. See the [How it works](../get-started/how-it-works/how-it-works.md) section to learn more about ONLYOFFICE Docs service client-server interactions.
:::

### Asynchronous request

**Step 1.** Send the initial request with the `.js` script file URL:

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "async": true,
    "url": "https://example.com/url-to-example-script.js"
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
    "url": "https://example.com/url-to-example-script.js"
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
    "url": "https://example.com/url-to-example-script.js",
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

A `.js` script can generate multiple files. For example:

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
    "url": "https://example.com/url-to-example-script.js"
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

<!--
### Comparing documents

You can compare two documents and generate a result file with tracked changes. The script uses [OpenTmpFile](../../document-builder/using-cli/overview.md#opentmpfile) to open the second document for comparison:

``` js
builderJS.OpenFile("https://example.com/file1.docx");
const file = builderJS.OpenTmpFile("https://example.com/file2.docx");
AscCommonWord.CompareDocuments(Api, file, null);
file.Close();
builderJS.SaveFile("docx", "Result.docx");
builderJS.CloseFile();
```

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "async": false,
    "url": "https://example.com/compare.js"
  }'
```

**Response:**

``` json
{
  "key": "Khirz6zTPdfd7",
  "urls": {
    "Result.docx": "https://documentserver/Result.docx"
  },
  "end": true
}
```

See [Comparing documents](../../document-builder/using-cli/comparing-documents.md) for more details about document comparison.
-->

## Possible error codes and their description

| Error code | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| -1         | Unknown error.                                                 |
| -2         | Generation timeout error.                                      |
| -3         | Document generation error.                                     |
| -4         | Error while downloading the document file to be generated.     |
| -6         | Error while accessing the document generation result database. |
| -8         | Invalid token.                                                 |
