---
sidebar_position: -3
---

# Go 示例

## 概述​

此示例将指导您如何将 ONLYOFFICE 文档集成到使用 Go 编写的网页应用中。

> 示例仅供测试和演示编辑器功能。**请勿**在未进行适当代码调整的情况下直接用于生产环境。如果启用了测试示例，请确保在上线前将其禁用。

## 重要安全信息​

使用测试示例时，请注意以下安全事项：

- 因为无需授权，存储内容未受到未授权访问的保护。  
- 参数由代码按固定脚本生成，链接中不执行参数替换检查。  
- 测试示例仅用于响应 ONLYOFFICE 文档的请求，因此保存文件时未进行数据校验。  
- 由于测试示例设计为与跨域的 ONLYOFFICE 文档交互，因此未限制来自其他站点的访问。

## 步骤 1. 安装 ONLYOFFICE 文档

下载并安装 ONLYOFFICE 文档（文档服务器版本）。

[获取 ONLYOFFICE 文档](https://www.onlyoffice.com/zh/download-docs.aspx?from=api#docs-developer)

请参阅详细指南，了解如何为 [Windows](https://helpcenter.onlyoffice.com/installation/docs-developer-install-windows.aspx) 安装文档服务器。

## 步骤 2. 下载用于编辑器集成的 Go 代码​

从我们的网站下载 [Go 示例](https://api.onlyoffice.com/editors/demopreview)。

要将编辑器连接到您的网站，请在 *configuration.env* 文件中指定编辑器的安装路径、服务器协议、地址和端口：

``` ini
SERVER_ADDRESS=http(s)://address (optional)
SERVER_PORT=port

DOC_SERVER_HOST=http://documentserver/

JWT_IS_ENABLED=flag
JWT_SECRET=secret
JWT_HEADER=Authorization
```

其中，**documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称。
**address** 是服务器的地址，**port** 是服务器端口。

若要试验编辑器配置，请修改 *templates/editor.html* 文件中的[参数](https://api.onlyoffice.com/editors/advanced)。

## 步骤 3. 安装必要软件​
要运行 Go 示例代码，请安装 Go 编译器：

* Go（从 [Go lang 网站](https://golang.org/)下载）

## 步骤 4. 设置环境变量​

安装编译器后，更新 Golang 环境变量：

``` ini
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
export PATH=$PATH:/usr/local/go/bin
```

## 步骤 5. 配置 JWT​

打开 *config/configuration.json* 文件并启用 JWT：

``` json
{
    "JWT_IS_ENABLED" : true,
}
```

另外，指定与 ONLYOFFICE 文档中使用的[相同的密钥](https://helpcenter.onlyoffice.com/installation/docs-configure-jwt.aspx)：

``` json
{
    "JWT_SECRET" : "secret",
}
```

## 步骤 6. 启动应用程序​

1. 前往项目根目录。
2. 运行：

    ``` sh 
    go run main.go
    ```

3. 在浏览器中转到 **server.address** 和 **server.port**。

## 步骤 7. 检查可访问性

如果示例与 ONLYOFFICE 文档分别部署在不同服务器上，请确保示例所在服务器能通过配置文件中指定的地址（而非默认的 **documentserver**）访问 ONLYOFFICE 文档。
