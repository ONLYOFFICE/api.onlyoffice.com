---
order: -1
---

Online editing and collaboration have the related gaps in file security - in real-time data transfer and authorized sharing. Overcoming these limitations of previously existing individual document protection is the key objective of the encryption scheme in question.

Two-layer encryption model used in ONLYOFFICE involves:

- symmetric encryption of documents using **AES-256 algorithm**;
- **RSA asymmetric encryption** of document passwords necessary for authorized sharing and collaboration.

With current model of encryption, it is possible to achieve the following:

- **Privacy of the encrypted data**. Unlike data encryption at rest, end-to-end document encryption in Private Rooms deals with active data of each user or group of users and is not subject to central administration.
- **Attack-tolerance**. AES-256 algorithm ensures that brute force approach to password cracking will not be effective against the document security regardless of the applied computational power.
- **Secure key sharing model**. Message-based principle of the RSA algorithm appears to be the most reliable model for managing authenticated access to the encrypted data as long the private keys are not mishandled by the users. It also allows carrying out operations with partitioned data to maintain the same level of protection while processing data in real time.

## Key generation and management

1. Each user obtains a pair of encryption keys, private and public, when they first log in to the system from their application instance. This personal pair of keys is a necessary element in the asymmetric layer of document encryption and decryption mechanisms.

2. If there are no keys in the DMS, they are generated with the *NSOpenSSL::RSA\_GenerateKeys* method:

   ``` cpp
   if (!bIsServerPrivateKeyExist)
   {
        unsigned char* publicKey = NULL;
        unsigned char* privateKey = NULL;
        NSOpenSSL::RSA_GenerateKeys(publicKey, privateKey);
   }
   ```

3. To encrypt the private key before saving it to the database, ONLYOFFICE uses the *NSOpenSSL::AES\_Encrypt\_desktop* algorithm based on AES-256 Cipher Block Chaining:

   ``` cpp
   std::string privateEnc;
   NSOpenSSL::AES_Encrypt_desktop(U_TO_UTF8(tmpInfo->m_sPassword), sPrivate, privateEnc, CAscRendererProcessParams::getInstance().GetProperty("user"));
   info.PrivateKeyEnc = NSFile::CUtf8Converter::GetUnicodeFromCharPtr(privateEnc);
   ```

4. The private key decryption is performed when a synchronised temporary file copy needs to be decrypted when editing it. To decrypt the key, the *NSOpenSSL::AES\_Decrypt\_desktop* algorithm is used:

   ``` cpp
   std::string privateKey;
   if (nServerPrivateKeyVersion == 2)
       NSOpenSSL::AES_Decrypt_desktop_GCM(U_TO_UTF8(tmpInfo->m_sPassword), privateKeyEnc, privateKey, CAscRendererProcessParams::getInstance().GetProperty("user"), nServerPrivateKeyVersionOffset);
   else
       NSOpenSSL::AES_Decrypt_desktop(U_TO_UTF8(tmpInfo->m_sPassword), privateKeyEnc, privateKey, CAscRendererProcessParams::getInstance().GetProperty("user"));
   info.PrivateKey = NSFile::CUtf8Converter::GetUnicodeFromCharPtr(privateKey);
   ```

## Operations with encrypted files

To perform operations with encrypted files, including file encryption, decryption, creation, editing and sharing, ONLYOFFICE uses the individual credentials of users (RSA key pair) and a document password (document encryption key).

The encrypted files, besides the ciphertext itself, contain the arrays of public keys of all users and the document passwords encrypted with these keys. This makes it possible to establish collective access to the file, and therefore enable sharing and collaboration on the encrypted documents.

To encrypt the file password with each authorized user's public key, the *NSOpenSSL::RSA\_EncryptPublic\_desktop* algorithm is used:

``` cpp
std::string sKey = arguments[0]->GetStringValue().ToString();
NSStringUtils::string_replaceA(sKey, "
", "\n");
std::string sMessage = arguments[1]->GetStringValue().ToString();
std::string sOut;
NSOpenSSL::RSA_EncryptPublic_desktop((unsigned char*)sKey.c_str(), sMessage, sOut);
retval = CefV8Value::CreateString(sOut);
return true;
```

The reverse *NSOpenSSL::RSA\_DecryptPrivate\_desktop* algorithm is used to decrypt the file using the user's private key:

``` cpp
std::string sKey = arguments[0]->GetStringValue().ToString();
std::string sMessage = arguments[1]->GetStringValue().ToString();
std::string sOut;
NSOpenSSL::RSA_DecryptPrivate_desktop((unsigned char*)sKey.c_str(), sMessage, sOut);
retval = CefV8Value::CreateString(sOut);
return true;
```

When accessing the encrypted file, it is first is sent to the user's machine before the application begins the decryption.

### Encrypted co-editing

The steps below explain the process of co-editing an encrypted document in ONLYOFFICE Docs.

1. User 1 and user 2 open one and the same document in **document editor**.
2. User 1 makes changes to the opened document.
3. The editor encrypts the changes using the *NSOpenSSL::AES\_Encrypt\_desktop* algorithm based on AES-256 CBC.
4. All saved changes are sent to the portal.
5. User 2 receives the encrypted changes and the user's machine decrypts them using the *NSOpenSSL::AES\_Decrypt\_desktop* method.

## Data location

ONLYOFFICE leverages data storage for documents and the encrypted data between the cloud storage and the user's local storage to maintain the applied scheme. The distribution of data looks as follows:

| Item                         | Location within the instance                               | Location on device              |
| ---------------------------- | ---------------------------------------------------------- | ------------------------------- |
| Private key                  | Encrypted, in the Database                                 | -                               |
| Public key                   | Database and within encrypted files (in the file system)   | -                               |
| File encryption key          | Encrypted, within the encrypted files (in the file system) | -                               |
| User password                | -                                                          | -                               |
| Encrypted files at rest      | On the server                                              | -                               |
| Encrypted files when editing | -                                                          | On machine, in temporary folder |

## Removing keys

The desktop application stores all the read keys. To reset them and add new ones, please do the following:

- delete keys in the DMS database;
- delete the *cloud\_crypto.xml* file from the *sdkjs-plugins* directory. The path to the folder depends on the operating system you use:
  - For Linux - *home/\<username>/.local/share/onlyoffice/desktopeditors/sdkjs-plugins/*
  - For Windows - *C:\Users\\\<username>\AppData\Local\ONLYOFFICE\DesktopEditors\data\sdkjs-plugins\\*
