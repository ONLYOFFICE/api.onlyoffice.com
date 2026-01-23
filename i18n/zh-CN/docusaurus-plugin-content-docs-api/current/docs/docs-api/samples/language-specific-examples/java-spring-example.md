---
sidebar_position: -6
---

# Java Spring 示例

## 概述

此示例将帮助您将 ONLYOFFICE 文档集成到用 Java with Spring Boot 编写的 Web 应用程序中。

Spring Boot 有很多功能，但它最重要的特性是：依赖管理、自动配置和内置的 servlet 容器。

:::note
它用于测试和演示编辑器的功能。如果没有适当的代码修改，**请不要**在自己的服务器上使用此集成示例。如果您启用了测试示例，请在投入产品之前将其禁用。
:::

## 重要安全信息

在使用测试示例时，请记住以下几方面的安全事项：

- 由于不需要授权，因此无法保护存储免受未经授权的访问。
- 没有检查链接中的参数替换，因为参数是由代码根据预先安排的脚本生成的。
- 在编辑后保存文件的请求中没有数据检查，因为每个测试示例仅适用于来自 ONLYOFFICE 文档的请求。
- 没有禁止使用来自其他网站的测试示例，因为它们用于与来自另一个域的 ONLYOFFICE 文档进行交互。

## 对于 Windows

### 步骤 1. 安装 ONLYOFFICE 文档

下载并安装 ONLYOFFICE 文档（打包为文档服务器）：

[获取 ONLYOFFICE 编辑器](https://www.onlyoffice.com/download-docs.aspx?from=api#docs-developer)

请参阅详细指南以了解如何安装[适用于 Windows](https://helpcenter.onlyoffice.com/installation/docs-developer-install-windows.aspx?from=api_java_example)的 ONLYOFFICE 文档。

### 步骤 2. 下载用于编辑器集成的 Java 代码

从我们的网站下载[Java-Spring 示例](./language-specific-examples.md)。

要将编辑器连接到您的网站，请在 *src/main/resources/application.properties* 文件中指定编辑器安装的路径和存储文件夹的路径：

``` ini
files.storage=
server.port=port
files.docservice.url.site=https://documentserver/
```

其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称，**port** 是任何可用的端口，而 **files.storage** 是创建和存储文件的路径（默认在项目文件夹中）。您可以[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。
您可以设置绝对路径。例如，*D:\\\folder*。请注意，在 Windows 操作系统上，双反斜杠必须用作分隔符。

如果要试验编辑器配置，请修改 *src/main/webapp/editor.jsp* 文件中的[参数](/docs/docs-api/usage-api/advanced-parameters.md)。

### 步骤 3. 安装先决条件

要运行 Java-Spring 示例代码，请安装适用于您的操作系统和框架 **Apache Maven** 的 Java 版本 11：

- **Java**（从 [Oracle官网](https://www.oracle.com/java/technologies/downloads/#java11)下载）；
- **Apache Maven**（从[官网](https://maven.apache.org/download.cgi)下载）。

### 步骤 4. 设置环境变量

1. 在 Windows 上安装 Java 后，将 **JAVA\_HOME** 环境变量设置为指向 Java 安装目录。

   找出 Java 的安装位置。如果您在安装过程中没有更改路径，它将是这样的：

   ``` sh
   C:\Program Files\Java\jdk11
   ```

   在 **Windows 7** 中，右键单击**我的电脑**并选择**属性**，然后单击**高级**。

   在 **Windows 8**中，进入**控制面板**并选择**系统**，然后单击**高级系统设置**。

   单击**环境变量**按钮。

   在**系统变量**，单击**新建**。

   在**变量名称**字段中，如果您安装了**JDK**（Java 开发工具包），请输入 **JAVA\_HOME**；如果您安装了 **JRE**（Java 运行时环境），请输入**JRE\_HOME**。

   在**变量值**字段中，输入您的 **JDK** 或 **JRE** 安装路径，例如 *C:\Program Files\Java\jdk11*。

   检查**命令提示符**中的 **echo** 命令是否成功创建变量：

   ``` sh
   echo %JAVA_HOME%
   ```

2. 设置 **MAVEN_HOME** 环境变量：

   使用 Maven 将下载的压缩文件解压缩到任意目录。它会是这样的：

   ``` sh
   C:\apache-maven-3.8.1
   ```

   在 **Windows 7** 中，右键单击**我的电脑**并选择**属性**，然后单击**高级**。

   在 **Windows 8**中，进入**控制面板**并选择**系统**，然后单击**高级系统设置**。

   单击**环境变量**按钮。

   在**系统变量**，单击**新建**。

   在**变量名称**字段中，输入 **MAVEN_HOME**。

   在**变量值**字段中，输入您的 **JDK** 或 **JRE** 安装路径，例如 *C:\apache-maven-3.8.1*。

   在系统变量中，找到 **PATH**，单击**编辑...**按钮。在**编辑环境变量**对话框中，单击**新建**按钮并将 *C:\apache-maven-3.8.1\bin* 添加到 **PATH** 系统变量。

   检查**命令提示符**中的 **echo** 命令是否成功创建变量：

   ``` sh
   echo %MAVEN_HOME%
   ```

### 步骤 5. 配置 JWT

打开 *src/main/resouces/application.properties* 文件，并与 ONLYOFFICE 文档[指定相同密钥](https://helpcenter.onlyoffice.com/installation/docs-configure-jwt.aspx) 以启用 JWT：

 ``` ini
 docservice.security.key=secret
 ```

### 步骤 6. 使用 Maven 启动应用程序

1. 打开控制台并使用 **cd** 命令转到 *java-spring* 文件夹：

   ``` sh
   cd C:\Program Files\document-server-integration\web\documentserver-example\java-spring
   ```

2. 在打开的控制台中，输入以下命令：

   ``` sh
   mvn clean
   mvn package
   mvn spring-boot:run
   ```

3. 使用 **server.address** 和 **server.port** 打开浏览器：

   ``` sh
   http://server.address:server.port/
   ```

### 步骤 7. 检查可访问性

如果示例和 ONLYOFFICE 文档安装在不同的计算机上，请确保安装了示例的服务器可以访问您指定地址的 ONLYOFFICE 文档，而不是配置文件中的 **documentserver**。确保 ONLYOFFICE 文档能够访问安装了示例的服务器，该示例使用您指定的地址而不是配置文件中的 **example.com**。您可以[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。

## 对于 Linux

### 步骤 1. 安装 ONLYOFFICE 文档

下载并安装 ONLYOFFICE 文档 （打包为文档服务器）：

[获取 ONLYOFFICE 编辑器](https://www.onlyoffice.com/download-docs.aspx?from=api#docs-developer)

请参阅详细指南以了解如何安装[适用于Linux](https://helpcenter.onlyoffice.com/installation/docs-developer-install-ubuntu.aspx?from=api_java_example) 的 ONLYOFFICE 文档。

### 步骤 2. 安装先决条件并使用编辑器运行网站

1. 按照[此处](https://docs.oracle.com/en/java/javase/20/install/installation-jdk-linux-platforms.html#GUID-737A84E4-2EFF-4D38-8E60-3E29D1B884B8)说明安装 **Java**。

2. 获取 Java-Spring 示例的方法有两种：

   - 下载包含 Java-Spring 示例的压缩文件并解压缩：

   ``` sh
   wget https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/Java.Spring.Example.zip
   ```

   ``` sh
   unzip Java.Spring.Example.zip
   ```

  - 克隆 git 仓库，并直接从 [`java-spring`](https://github.com/ONLYOFFICE/document-server-integration/tree/master/web/documentserver-example/java-spring) 文件夹中获取源代码：

   ``` sh
   git clone https://github.com/ONLYOFFICE/document-server-integration.git
   ```

3. 将当前目录更改为项目目录：

   - 在归档中：

   ``` sh
   cd Java\ Spring\ Example/
   ```

   - 在 git 存储库中：

   ``` sh
   cd document-server-integration/web/documentserver-example/java-spring
   ```

4. 编辑 *src/main/resources/application.properties* 配置文件。指定安装了 ONLYOFFICE 文档的本地服务器的名称。

   ``` sh
   nano src/main/resources/application.properties
   ```

   编辑以下行：

   ``` ini
   files.storage=
   server.port=port
   files.docservice.url.site=https://documentserver/
   ```

   其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称，**port** 是任何可用的端口，而 **files.storage** 是创建和存储文件的路径（默认在项目文件夹中）。您可以设置绝对路径。您可以[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。

   与 ONLYOFFICE 文档[指定相同密钥](https://helpcenter.onlyoffice.com/installation/docs-configure-jwt.aspx) 以启用 JWT： 
 
     ``` ini
     docservice.security.key=secret
     ```

5. 安装 **Maven**:

   ``` sh
   sudo apt-get install maven
   ```

6. 构建：

   ``` sh
   mvn package
   ```

7. 启动 Java-Spring 示例：

   ``` sh
   ./mvnw spring-boot:run
   ```

8. 使用 **server.address** 和 **server.port** 打开浏览器：

   ``` sh
   http://server.address:server.port/
   ```

### 步骤 3. 检查可访问性

如果示例和的 ONLYOFFICE 文档安装在不同的计算机上，请确保安装了示例的服务器可以访问您指定地址的的 ONLYOFFICE 文档，而不是配置文件中的 **documentserver**。确保的 ONLYOFFICE 文档能够访问安装了示例的服务器，该示例使用您在配置文件中 指定的地址而不是 **example.com** 安装。

## 对于 Docker

### 步骤1. 安装ONLYOFFICE文档

下载并安装 ONLYOFFICE 文档 （打包为文档服务器）：

[获取 ONLYOFFICE 编辑器](https://www.onlyoffice.com/download-docs.aspx?from=api#docs-developer)

请参阅详细指南以了解如何安装[适用于 Docker](https://helpcenter.onlyoffice.com/installation/docs-developer-install-docker.aspx?from=api_java_example)的 ONLYOFFICE 文档。

### 步骤2. 安装先决条件并使用编辑器运行网站

1. 按照[此处](https://docs.oracle.com/en/java/javase/20/install/installation-jdk-linux-platforms.html#GUID-737A84E4-2EFF-4D38-8E60-3E29D1B884B8)说明安装 **Java**。

2. 有两种方式获取 Java-Spring 示例：

   - 下载包含 Java-Spring 示例的存档并解压它：

   ``` sh
   wget https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/Java.Spring.Example.zip
   ```

   ``` sh
   unzip Java.Spring.Example.zip
   ```

   - 克隆 git 存储库：

   ``` sh
   git clone https://github.com/ONLYOFFICE/document-server-integration.git
   ```

3. 将当前目录更改为项目目录：

   - 在存档中：

   ``` sh
   cd Java\ Spring\ Example/
   ```

   - 在 git 存储库中：

   ``` sh
   cd document-server-integration/web/documentserver-example/java-spring
   ```

4. 编辑 *src/main/resources/application.properties* 配置文件。指定安装了 ONLYOFFICE Docs 的本地服务器的名称：

   ``` sh
   nano src/main/resources/application.properties
   ```

   编辑以下行：

   ``` ini
   files.storage=
   server.port=port
   files.docservice.url.site=https://documentserver/ 
   ```

   其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称，**port** 是任何可用的端口，而 **files.storage** 是创建和存储文件的路径（默认在项目文件夹中）。您可以设置绝对路径。您可以[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。

   与 ONLYOFFICE 文档[指定相同密钥](https://helpcenter.onlyoffice.com/installation/docs-configure-jwt.aspx) 以启用 JWT： 
 
     ``` ini
     docservice.security.key=secret
     ```

5. 在 Java-Spring 示例目录中运行下一个命令：

   ``` sh
   docker-compose up
   ```

6. 使用 **server.address** 和 **server.port** 打开浏览器：

   ``` sh
   http://server.address:server.port/
   ```

### 步骤3. 检查可访问性

如果示例和的 ONLYOFFICE 文档安装在不同的计算机上，请确保安装了示例的服务器可以使用您在配置文件中指定的地址（而不是 **documentserver**）访问的 ONLYOFFICE 文档。确保的 ONLYOFFICE 文档可以访问安装了示例的服务器，该示例的地址是您在配置文件中指定的地址，而不是 **example.com**。
