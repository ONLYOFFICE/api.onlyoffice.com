To check if the desktop app supports encryption, call the following command:

```
typeof window.AscDesktopEditor.cloudCryptoCommand === "function"
```

The steps below explain the process of document encryption in ONLYOFFICE.

1. Log in to the cloud and pass the **Encryption** plugin ID:

   ```
   window.AscDesktopEditor.execCommand("portal:login", JSON.stringify({
       "encryptionKeys": {
           "cryptoEngineId": "{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}"
       },
       ...
   }));
   ```

2. To monitor the password from the login page, send the desktop editors the *portal:checkpwd* command through the [execCommand](/desktop/execcommand) method. Parameters are specified in the format of a string with the serialized *json* as follows:

   ```
   {
       "domain": "domain name",
       "emailInput": "user@email.addr",
       "pwdInput": "pwd"
   }
   ```

   Parameters

   | Name       | Description                                       | Type   | Example                      |
   | ---------- | ------------------------------------------------- | ------ | ---------------------------- |
   | domain     | Defines the cloud name and the cloud entry point. | string | "https\://exampledomain.com" |
   | emailInput | Defines the user email entered on the login page. | string | "john\@example.com"          |
   | pwdInput   | Defines the password entered on the login page.   | string | "123456"                     |

   Example

   ```
   window.AscDesktopEditor.execCommand("portal:checkpwd", JSON.stringify({
       "domain": "https://exampledomain.com",
       "emailInput": "john@example.com",
       "pwdInput": "123456"
   }));
   ```

   When the command is sent, the DMS provider transfers the information about the password from the login page to the desktop app. ONLYOFFICE Desktop Editors remembers the password and uses it for the key encryption and decryption.

3. Pass the encrypted private and public keys with the login from the DMS provider to the desktop application with the following parameters:

   ```
   "encryptionKeys": {
       "cryptoEngineId": "guid",
       "privateKeyEnc": "private key",
       "publicKey": "public key"
   }
   ```

   Parameters

   | Name           | Description                           | Type   | Example                                  |
   | -------------- | ------------------------------------- | ------ | ---------------------------------------- |
   | cryptoEngineId | Defines the **Encryption** plugin ID. | string | "{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}" |
   | privateKeyEnc  | Defines the encrypted private key.    | string | "xxx"                                    |
   | publicKey      | Defines the public key.               | string | "yyy"                                    |

   Example

   ```
   window.AscDesktopEditor.execCommand("portal:login", JSON.stringify({
       "encryptionKeys": {
           "cryptoEngineId": "{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}",
           "privateKeyEnc": "xxx",
           "publicKey": "yyy"
       },
       ...
   }));
   ```

   You can also do it in the editor initialization config:

   ```
   new DocsAPI.DocEditor("placeholder", {
       "editorConfig": {
           "encryptionKeys": {
               "cryptoEngineId": "{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}",
               "privateKeyEnc": "xxx",
               "publicKey": "yyy"
           },
           ...
       },
       ...
   });
   ```

4. Send the generated keys to the cloud through the *cloudCryptoCommand* method with the *encryptionKeys* type:

   ```
   window.AscDesktopEditor.cloudCryptoCommand(
       "encryptionKeys",
       {
           "cryptoEngineId": "{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}",
           "privateKeyEnc": "xxx",
           "publicKey": "yyy"
       },
   callback)
   ```
