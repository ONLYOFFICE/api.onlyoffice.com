---
sidebar_position: -1
---

# 云文档加密

在线编辑和协作在文件安全性方面存在相关漏洞——体现在实时数据传输和授权共享环节。克服现有 加密方案的核心目标是克服先前存在的个人文档保护的这些局限性。

ONLYOFFICE 采用的双层加密模型包括：

- 使用 **AES-256 算法** 对文档进行对称加密；
- 使用 **RSA 非对称加密** 对授权共享和协作所需的文档密码进行加密。

通过当前的加密模型，可以实现以下目标：

- **加密数据的隐私性**。与静态数据加密不同，私人空间中的端到端文档加密处理的是每个用户或用户组的活动数据，不受中央管理。
- **抗攻击性**。AES-256 算法确保，无论使用多大的计算能力，暴力破解密码的方法都无法对文档安全构成有效威胁。
- **安全的密钥共享模型**。只要用户妥善保管私钥，RSA 算法的基于消息的原理就被认为是管理加密数据的认证访问的最可靠模型。它还允许对分区数据执行操作，以在实时处理数据时保持相同级别的保护。

## 密钥生成与管理

1. 每个用户首次从其应用实例登录系统时，会获得一对加密密钥，即私钥和公钥。这对个人密钥是非对称层文档加密和解密机制的必要元素。

2. 如果文档管理系统（DMS）中没有密钥，则使用 *NSOpenSSL::RSA\_GenerateKeys* 方法生成：

   ```cpp
   if (!bIsServerPrivateKeyExist)
   {
        unsigned char* publicKey = NULL;
        unsigned char* privateKey = NULL;
        NSOpenSSL::RSA_GenerateKeys(publicKey, privateKey);
   }
   ```

3. 为了在将私钥保存到数据库之前对其进行加密，ONLYOFFICE 使用基于 AES-256 密码块链（Cipher Block Chaining）的 *NSOpenSSL::AES_Encrypt_desktop* 算法：

   ```cpp
   std::string privateEnc;
   NSOpenSSL::AES_Encrypt_desktop(U_TO_UTF8(tmpInfo->m_sPassword), sPrivate, privateEnc, CAscRendererProcessParams::getInstance().GetProperty("user"));
   info.PrivateKeyEnc = NSFile::CUtf8Converter::GetUnicodeFromCharPtr(privateEnc);
   ```

4. 当需要解密同步的临时文件副本进行编辑时，会对私钥进行解密。解密密钥使用 *NSOpenSSL::AES_Decrypt_desktop* 算法：

   ```cpp
   std::string privateKey;
   if (nServerPrivateKeyVersion == 2)
       NSOpenSSL::AES_Decrypt_desktop_GCM(U_TO_UTF8(tmpInfo->m_sPassword), privateKeyEnc, privateKey, CAscRendererProcessParams::getInstance().GetProperty("user"), nServerPrivateKeyVersionOffset);
   else
       NSOpenSSL::AES_Decrypt_desktop(U_TO_UTF8(tmpInfo->m_sPassword), privateKeyEnc, privateKey, CAscRendererProcessParams::getInstance().GetProperty("user"));
   info.PrivateKey = NSFile::CUtf8Converter::GetUnicodeFromCharPtr(privateKey);
   ```

## 加密文件操作

为了执行加密文件的相关操作（包括文件加密、解密、创建、编辑和共享），ONLYOFFICE 使用用户的个人凭据（RSA 密钥对）和文档密码（文档加密密钥）。

加密文件除了密文本身外，还包含所有用户的公钥数组以及用这些公钥加密的文档密码。这使得建立对文件的集体访问成为可能，从而实现加密文档的共享和协作。

使用 *NSOpenSSL::RSA\_EncryptPublic\_desktop* 算法用每个授权用户的公钥对文件密码进行加密：

```cpp
std::string sKey = arguments[0]->GetStringValue().ToString();
NSStringUtils::string_replaceA(sKey, "
", "\n");
std::string sMessage = arguments[1]->GetStringValue().ToString();
std::string sOut;
NSOpenSSL::RSA_EncryptPublic_desktop((unsigned char*)sKey.c_str(), sMessage, sOut);
retval = CefV8Value::CreateString(sOut);
return true;
```

使用对应的 *NSOpenSSL::RSA\_DecryptPrivate\_desktop* 算法，通过用户的私钥对文件进行解密：

```cpp
std::string sKey = arguments[0]->GetStringValue().ToString();
std::string sMessage = arguments[1]->GetStringValue().ToString();
std::string sOut;
NSOpenSSL::RSA_DecryptPrivate_desktop((unsigned char*)sKey.c_str(), sMessage, sOut);
retval = CefV8Value::CreateString(sOut);
return true;
```

访问加密文件时，在应用程序开始解密之前，文件会先发送到用户的机器上。

### 加密协同编辑

以下步骤解释了在 ONLYOFFICE Docs 中协同编辑加密文档的过程。

1. 用户 1 和用户 2 在 **文档编辑器** 中打开同一个文档。
2. 用户 1 对打开的文档进行修改。
3. 编辑器使用基于 AES-256 CBC 的 *NSOpenSSL::AES_Encrypt_desktop* 算法对修改内容进行加密。
4. 所有保存的修改都发送到门户。
5. 用户 2 接收加密的修改内容，其机器使用 *NSOpenSSL::AES_Decrypt_desktop* 方法对其进行解密。

## 数据位置

ONLYOFFICE 利用云存储和用户本地存储之间的文档和加密数据存储来维持所应用的方案。数据分布如下：

| 项目 | 实例内位置 | 设备上位置 |
| ---------------------------- | ---------------------------------------------------------- | ------------------------------- |
| 私钥 | 加密存储在数据库中 | - |
| 公钥 | 数据库和加密文件内（文件系统中） | - |
| 文件加密密钥 | 加密存储在加密文件内（文件系统中） | - |
| 用户密码 | - | - |
| 静态加密文件 | 服务器上 | - |
| 编辑时的加密文件 | - | 机器上的临时文件夹中 |

## 移除密钥

桌面应用程序存储所有已读取的密钥。要重置它们并添加新密钥，请执行以下操作：

- 删除文档管理系统（DMS）数据库中的密钥；
- 从 *sdkjs-plugins* 目录中删除 *cloud_crypto.xml* 文件。文件夹路径取决于所使用的操作系统：
  - Linux 系统 - *home/\<username>/.local/share/onlyoffice/desktopeditors/sdkjs-plugins/*
  - Windows 系统 - *C:\Users\\\<username>\AppData\Local\ONLYOFFICE\DesktopEditors\data\sdkjs-plugins\\*
