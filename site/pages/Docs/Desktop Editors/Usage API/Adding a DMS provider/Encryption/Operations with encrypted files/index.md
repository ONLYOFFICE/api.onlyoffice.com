To perform operations with encrypted files, including file encryption, decryption, creation, editing and sharing, ONLYOFFICE uses the individual credentials of users (RSA key pair) and a document password (document encryption key). The processes of uploading and sharing encrypted files are described here.

**Uploading encrypted documents**

To upload encrypted files in the desktop app, replace the standard *input type = file* call with the *cloudCryptoCommand* function with the *upload* type. The *params* object has the following values:

Parameters

| Name                                                                                     | Description                                       | Type   | Example                                  |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------- | ------ | ---------------------------------------- |
| cryptoEngineId                                                                           | Defines the **Encryption** plugin ID.             | string | "{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}" |
| filter                                                                                   | Defines the document types that can be encrypted. | string | "\*.docx \*.xlsx \*.pptx"                |
| Currently, it is possible to encrypt only OOXML formats, which are DOCX, XLSX, and PPTX. |                                                   |        |                                          |

Example

```
window.AscDesktopEditor.cloudCryptoCommand("upload", {
    "cryptoEngineId": "{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}",
    "filter": "*.docx *.xlsx *.pptx"
},
callback)
```

After the user chooses the files, they will be encrypted in a loop and transferred to *callback*:

```
callback({
    "bytes": [...],
    "name": "Example Document Title.docx",
    "isCrypto": true
})
```

**Sharing encrypted documents**

To share the encrypted document, call the *cloudCryptoCommand* function with the *share* type. The *params* object has the following values:

Parameters

| Name           | Description                                               | Type   | Example                                             |
| -------------- | --------------------------------------------------------- | ------ | --------------------------------------------------- |
| cryptoEngineId | Defines the **Encryption** plugin ID.                     | string | "{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}"            |
| file           | Defines the absolute url to the document.                 | string | "https\://example.com/url-to-example-document.docx" |
| keys           | Defines the pairs of user ids and associated public keys. | array  | \[{"userId":"78e1e841","publicKey":"yyy"}, ...]     |

Example

```
window.AscDesktopEditor.cloudCryptoCommand("share",
{
    "cryptoEngineId": "{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}",
    "file": ["https://example.com/url-to-example-document.docx" ],
    "keys":[{"userId":"78e1e841","publicKey":"yyy"}, ...]
}, 
callback)
```

The file is uploaded by the desktop app and encrypted. The access rights to the file are transferred to it with keys. After that, it is transmitted to *callback*:

```
callback({
    "bytes": [...],
    "isCrypto": true
})
```
