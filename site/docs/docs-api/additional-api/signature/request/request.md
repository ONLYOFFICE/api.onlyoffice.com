# Request

When performing the HTTP requests from or to ONLYOFFICE Docs, the token is added to the parameters to validate the data. The token can be sent:

- [in body](token-in-body.md);
- [in header](token-in-header.md).

Starting from version 5.2, it is possible to use the token in body parameters with ONLYOFFICE Docs. To enable it, set the [services.CoAuthoring.token.inbox.inBody](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-token-inbox-inBody) and [services.CoAuthoring.token.outbox.inBody](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-token-outbox-inBody) in configuration file to `true`.

Starting from version 7.1, the incoming requests use the token in body if it exists. Otherwise, the header token is taken. To specify what is used next to validate the data, [services.CoAuthoring.server.tokenRequiredParams](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-server-tokenRequiredParams) must be added to the `local.json` configuration file. If it is `true`, only the token data is used. Otherwise, the opened request part is merged with the token data.

The outgoing requests use both the token in body and token in header. They can be different. For example, the information about version history can be removed from the header token because of the size limit of the token in header.

:::note
[Token in body](token-in-body.md) is used for POST requests only. For the GET requests, [token in header](token-in-header.md) is used.
:::

## Operation

Starting from version 10.0, a token can state which operation it is issued for. The operation is specified in the `operation` field at the top level of the token payload.

### Incoming requests

Add the `operation` field to the token of an incoming request:

| Request                                                        | `operation`    |
| -------------------------------------------------------------- | -------------- |
| [Document command service](../../command-service/command-service.md) (`/command`) | `"command"`    |
| [Document conversion service](../../conversion-api/request.md) (`/converter`)     | `"converter"`  |
| [Document builder service](../../document-builder-api.md) (`/docbuilder`)         | `"docbuilder"` |

For the [token in header](token-in-header.md), place the `operation` field next to the `payload` object, not inside it. A token with the `operation` field inside the `payload` object is rejected.

How ONLYOFFICE Docs checks the incoming tokens depends on the [services.CoAuthoring.token.purposeCheck](../../../get-started/configuration/server-config/server-config.md#services.CoAuthoring.token.purposeCheck) server parameter:

- `validate` (default): the `operation` field is optional. If it is specified and doesn't match the request, the token is rejected. A token that contains the editor [configuration](../../../usage-api/config/config.md) fields, such as the `document` or `editorConfig` objects, is rejected, so the token from the editor configuration can't be used for these requests. A token without the `operation` field for the document command service or the document builder service can contain only the parameters of this request.
- `strict`: the same checks as in the `validate` mode, and the `operation` field is required.
- `off`: the `operation` field value and the editor configuration fields are not checked.

The `"callback"` and `"download"` values are reserved for the outgoing requests. An incoming token with these values or with the `operation` field inside the `payload` object is rejected in all modes.

A rejected token is processed as an invalid token: the request returns the same error as for a token with a wrong signature.

The tokens of the client-side [browser requests](../browser.md) don't use the `operation` field. In the `validate` and `strict` modes, a browser token with this field is rejected.

### Outgoing requests

ONLYOFFICE Docs adds the `operation` field to the tokens of its outgoing requests:

- `"callback"`: the requests to the [callbackUrl](../../../usage-api/config/editor/editor.md#callbackurl) address;
- `"download"`: the requests for downloading files from the **document storage service**.

Check this field to make sure that the token was issued for the request that you are processing.
