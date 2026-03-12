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
| async     | boolean | optional                  | Defines the type of the request to the **document builder service**: asynchronous or not. When `true`, the response is formed instantly, and you must send requests without changing parameters until document generation is finished. The default value is `false`.                                                                                                                                    |
| key       | string  | required                  | Defines the request identifier used to unambiguously identify the request. The key is formed on the **document builder service** side and is returned as the response to the first request. When the asynchronous request is used (the `async` parameter is set to `true`) the key is not present in the first request, but must be present in all the following requests which will be sent before the generation is complete. When the synchronous request is used (the `async` parameter is set to `false`), this parameter is not required. |
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

## Examples

### First asynchronous request

Sample of JSON object sent to the **document builder service** for the first asynchronous request:

``` json
{
  "async": true,
  "url": "https://example.com/url-to-example-script.docbuilder"
}
```

Where `example.com` is the name of the server where **document storage service** are installed. See the [How it works](../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

Response format:

``` json
{
  "key": "af86C7e71Ca8",
  "end": false
}
```

### Following asynchronous requests

Sample of JSON object sent to the **document builder service** for the following asynchronous requests:

``` json
{
  "async": true,
  "key": "Khirz6zTPdfd7"
}
```

Response format:

``` json
{
  "key": "Khirz6zTPdfd7",
  "urls": {
    "SampleText.docx": "https://documentserver/SampleText.docx",
    "SampleText2.docx": "https://documentserver/SampleText2.docx"
  },
  "end": true
}
```

### Synchronous request

Sample of JSON object sent to the **document builder service** for the synchronous request:

``` json
{
  "async": false,
  "url": "https://example.com/url-to-example-script.docbuilder"
}
```

Where `example.com` is the name of the server where **document storage service** are installed. See the [How it works](../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

Response example:

``` json
{
  "key": "af86C7e71Ca8",
  "urls": {
    "SampleText.docx": "https://documentserver/SampleText.docx",
    "SampleText2.docx": "https://documentserver/SampleText2.docx"
  },
  "end": true
}
```

### Asynchronous request with token

Sample of JSON object containing the JSON Web Token sent to the **document builder service** for the first asynchronous request:

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhc3luYyI6dHJ1ZSwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1zY3JpcHQuZG9jYnVpbGRlciJ9.dzoTbRzSMa95Fpg34CjnF3ZUPdGA2CnBedFL_qOOxAs"
}
```

Response format:

``` json
{
  "error": -8
}
```

:::info
This example demonstrates the error response when the token is invalid. See the [error codes](#possible-error-codes-and-their-description) section for more details.
:::

### Synchronous request with arguments

Sample of JSON object containing the arguments sent to the **document builder service** for the first synchronous request:

``` json
{
  "async": false,
  "url": "https://example.com/url-to-example-script.docbuilder",
  "argument": {"key": "string",
    "key2": "string2"}
}
```

Where `example.com` is the name of the server where **document storage service** are installed. See the [How it works](../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

Response format:

``` json
{
  "key": "af86C7e71Ca8",
  "urls": {
    "SampleText.docx": "https://documentserver/SampleText.docx",
    "SampleText2.docx": "https://documentserver/SampleText2.docx"
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
