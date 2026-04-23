---
sidebar_position: -6
---

# 证明密钥

要限制公众访问您的数据，必须配置online office和集成商之间的安全请求交换。

集成商必须检查是否从 ONLYOFFICE 文档收到请求。它为此目的使用[证明密钥](https://docs.microsoft.com/en-us/microsoft-365/cloud-storage-partner-program/online/scenarios/proofkeys)。ONLYOFFICE 文档使用私钥对请求进行签名。相应的公钥写在 [WOPI discovery XML](./wopi-discovery.md) 的 proof-key 元素中。集成商使用公钥检查私钥。签名随 **X-WOPI-Proof** 和 **X-WOPI-ProofOld** HTTP 标头中的每个请求一起发送。私钥和公钥通过以下配置参数设置：

## 参数

| 名称            | 类型   | 示例               | 描述                                                                                    |
| --------------- | ------ | --------------------- | ---------------------------------------------------------------------------------------------- |
| wopi.publicKey  | string | "public key example"  | 定义集成商用来检查私钥的公钥。                      |
| wopi.modulus    | string | "modulus example"     | 以 Base64 编码格式定义用于检索公钥的 RSA 模块。  |
| wopi.exponent   | string | "AQAB"                | 以 Base64 编码格式定义用于检索公钥的 RSA 指数。 |
| wopi.privateKey | string | "private key example" | >定义签署文档服务器请求的私钥。                                |

## 示例

``` json
{
  "wopi": {
    "publicKey": "public key example",
    "modulus": "modulus example",
    "exponent": "AQAB",
    "privateKey": "private key example"
  }
}
```

> 默认情况下，证明密钥已设置。它们不会生成，即所有安装都使用相同的密钥。
