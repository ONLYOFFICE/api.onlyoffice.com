Starting from version 5.6, ONLYOFFICE Desktop Editors offers support for Private Rooms, secure workspace where every symbol you type is encrypted end-to-end even if you co-edit documents in real time. Using ONLYOFFICE Desktop Editors makes it possible to encrypt and decrypt the data on the client, ensuring endpoint security.

## Processing desktop editors commands

Declare the *cloudCryptoCommand* function to process messages from the desktop app:

```
window.cloudCryptoCommand = function (type, params, callback) 
```

Parameters

| Name     | Description                                                                                                                                                                                                                                                                                                                                                                                      | Type   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| type     | Defines the command type:- *encryptionKeys* - to save private and public keys to the parameters,
- *relogin* - to re-enter the portal after unsuccessful keys decryption,
- *getsharingkeys* - to request for the public keys of all the users who have access to the file. The keys will be transferred via callback:

  callback ({"keys": \[{"userId": "78e1e841","publicKey": "yyy"}, ...]}) | string |
| params   | Defines the parameters that are passed to the method.                                                                                                                                                                                                                                                                                                                                            | string |
| callback | Defines the result that the method returns.                                                                                                                                                                                                                                                                                                                                                      | string |

Explore the following pages to find out which commands need to be used for:

* [Key generation](/desktop/addingdms/encryption/keygeneration)
* [Operations with encrypted files](/desktop/addingdms/encryption/operations)
