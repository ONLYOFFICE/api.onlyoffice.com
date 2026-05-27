---
sidebar_position: -12
---

# Security

ONLYOFFICE Docs uses token-based validation to ensure that requests between services have not been tampered with. Every request — whether it comes from the **document editor** initializing with a [`config`](../../usage-api/config/config.md), or passes between the **document storage service** and the **document editing service**, **document command service**, **document conversion service**, or **document builder service** — can carry a cryptographic token that the receiving side verifies before acting on the request.

Tokens are generated using the [JSON Web Token](https://jwt.io/) (JWT) standard and signed with a secret key shared between the integrator's server and ONLYOFFICE Docs. When a token is present, ONLYOFFICE Docs validates it and uses the data from the token payload instead of the corresponding request parameters. If the token is missing or invalid, the request is rejected.

See the [Signature](../../additional-api/signature/signature.md) section for setup instructions and code examples.

:::caution
Local links (URLs pointing to private or internal addresses) always require a token. Include a token when using local links in the following methods: [insertImage](../../usage-api/methods.md#insertimage), [setHistoryData](../../usage-api/methods.md#sethistorydata), [setMailMergeRecipients](../../usage-api/methods.md#setmailmergerecipients), [setReferenceData](../../usage-api/methods.md#setreferencedata), [setReferenceSource](../../usage-api/methods.md#setreferencesource), [setRequestedDocument](../../usage-api/methods.md#setrequesteddocument), [setRequestedSpreadsheet](../../usage-api/methods.md#setrequestedspreadsheet), [setRevisedFile](../../usage-api/methods.md#setrevisedfile). A token is also required when specifying a local URL for [opening](../../usage-api/config/document/document.md#url) or [conversion](../../additional-api/conversion-api/request.md#url).
:::
