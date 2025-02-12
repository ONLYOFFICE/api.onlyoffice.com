# Command service

For the interaction with the **document command service** the POST requests are used. The request parameters are entered in JSON format in the request body. The requests are sent to the `https://documentserver/command` address where the **documentserver** is the name of the server with the ONLYOFFICE Docs installed.

> Please note that prior to version 8.2, the `https://documentserver/coauthoring/CommandService.ashx` address was used to send requests.

Starting from version 8.1, it is recommended to add the [shardkey](../../get-started/how-it-works/how-it-works.md#shard-key) parameter to the URL *QueryString* with the *key* value in it. For example, *?shardkey=Khirz6zTPdfd7*. This allows you to load balance requests.

> In **ONLYOFFICE Docs** prior to version 4.2 the GET request with the parameters in the *QueryString* were used.

See the available command types below to find more about them.

## Command types

| Command                                       | Description                                                                                                                        |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [deleteForgotten](deleteforgotten.md)   | This command allows to delete a forgotten file.                                                                                    |
| [drop](drop.md)                         | This command allows to disconnect the specified users from the document editing service.                                           |
| [forcesave](forcesave.md)               | This command allows to forcibly save the document being edited without closing it.                                                 |
| [getForgotten](getforgotten.md)         | This command allows to request a forgotten file.                                                                                   |
| [getForgottenList](getforgottenlist.md) | This command allows to request a list of the forgotten files.                                                                      |
| [info](info.md)                         | This command allows to request a document status and the list of the identifiers of the users who opened the document for editing. |
| [license](license.md)                   | This command allows to request the license from ONLYOFFICE Docs with information about the server and user quota.                  |
| [meta](meta.md)                         | This command allows to update the meta information of the document for all collaborative editors.                                  |
| [version](version.md)                   | This command allows to request the current version number of ONLYOFFICE Docs.                                                      |

The JSON Web Token should be sent in the JSON object format to **document command service**. It is used to receive the status of the document with the key specified.

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjIjoiaW5mbyIsImtleSI6IktoaXJ6NnpUUGRmZDcifQ.r_6sThjFABsHMNHhkVdHDSz4jwkbXRQNYdvawkBGJgg"
}
```

## Parameters

| Name  | Type   | Presence                  | Description                                                                                                                                                                    |
| ----- | ------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| token | string | required by configuration | Defines the encrypted signature added to the **ONLYOFFICE Docs** config in the form of a [token](../../additional-api/signature/request/token-in-body.md#command). |

The **document editing service** informs the **document storage service** about the result caused by command and sends the response with all the necessary data via the [callback handler](../../usage-api/callback-handler.md).

## Possible error codes and their description

| Error code | Description                                                                            |
| ---------- | -------------------------------------------------------------------------------------- |
| 0          | No errors.                                                                             |
| 1          | Document key is missing or no document with such key could be found.                   |
| 2          | Callback url not correct.                                                              |
| 3          | Internal server error.                                                                 |
| 4          | No changes were applied to the document before the **forcesave** command was received. |
| 5          | Command not correct.                                                                   |
| 6          | Invalid token.                                                                         |
