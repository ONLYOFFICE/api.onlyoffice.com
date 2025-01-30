---
sidebar_position: -11
---

To prevent the substitution of important parameters in ONLYOFFICE Docs requests an encrypted signature is added to it in the form of **token**.

The **token** is added in the configuration when initializing **Document Editor** and during the exchange of commands between **document storage service** and **document editing service**, **document command service**, **document conversion service** and **document builder service**.

The **token** is generated using the *JWT* ([JSON Web Tokens](https://jwt.io/)) standard. The tokens are signed by the server's key, so the client is able to verify that the token is legitimate.

*JSON Web Tokens* consist of three parts separated by dots (.), which are: *header*, *payload*, *signature*. The *header* consists of two parts: the type of the token (*JWT*), and the hashing algorithm (*HMAC SHA256*). The second part of the token is the *payload*, which contains the claims in JSON format. To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

**ONLYOFFICE Docs** validates the **token**. The data from the *payload* is considered valid and is used instead of the corresponding data from the main parameters. If the **token** is invalid, the command is not executed.

See the [Signature](../../Additional%20API/Signature/Signature.md) configuration section to find more.

> Please note that using the **local links** by the integrator requires the *JWT* in the config. Otherwise, an error will occur.
> 
> Be sure to add a token when using local links in the following methods: [insertImage](../../Usage%20API/Methods.md#insertimage), [setHistoryData](../../Usage%20API/Methods.md#sethistorydata), [setMailMergeRecipients](../../Usage%20API/Methods.md#setmailmergerecipients), [setReferenceData](../../Usage%20API/Methods.md#setreferencedata), [setReferenceSource](../../Usage%20API/Methods.md#setreferencesource), [setRequestedDocument](../../Usage%20API/Methods.md#setrequesteddocument), [setRequestedSpreadsheet](../../Usage%20API/Methods.md#setrequestedspreadsheet), [setRevisedFile](../../Usage%20API/Methods.md#setrevisedfile). Moreover, it is necessary when defining the local url for [opening](../../Usage%20API/Config/Document/Document.md#url) or [conversion](../../Additional%20API/Conversion%20API/Request.md#url).
