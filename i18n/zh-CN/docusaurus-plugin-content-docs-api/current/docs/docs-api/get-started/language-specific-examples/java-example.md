---
sidebar_position: -7
---

# Java 示例

## 概述

此示例将帮助您将 ONLYOFFICE 文档集成到用 Java 编写的 Web 应用程序中。

> 它用于测试和演示编辑器的功能。如果没有适当的代码修改，**请不要**在自己的服务器上使用此集成示例。I如果您启用了测试示例，请在投入产品之前将其禁用。

## 重要安全信息

在使用测试示例时，请记住以下几方面的安全事项：

- 由于不需要授权，因此无法保护存储免受未经授权的访问。
- 没有检查链接中的参数替换，因为参数是由代码根据预先安排的脚本生成的。
- 在编辑后保存文件的请求中没有数据检查，因为每个测试示例仅适用于来自 ONLYOFFICE 文档的请求。
- 没有禁止使用来自其他网站的测试示例，因为它们用于与来自另一个域的 ONLYOFFICE 文档进行交互。

## 对于 Windows

### 步骤 1. 安装 ONLYOFFICE 文档

下载并安装 ONLYOFFICE 文档（打包为文档服务器）：

[获取 ONLYOFFIC E文档](https://www.onlyoffice.com/download-docs.aspx?from=api#docs-developer)

请参阅详细指南以了解如何安装[适用于 Windows](https://helpcenter.onlyoffice.com/installation/docs-developer-install-windows.aspx?from=api_java_example) 的 ONLYOFFICE 文档。

### 步骤 2. 下载用于编辑器集成的 Java 代码

从我们的网站下载 [Java 示例](./language-specific-examples.md)。

要将编辑器连接到您的网站，请在 *src/main/resources/settings.properties* 文件中指定编辑器安装的路径和存储文件夹的路径：

``` ini
storage-folder = app_data
files.docservice.url.site=https://documentserver/
```

其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称，**storage-folder** 是创建和存储文件的路径。您可以设置绝对路径。例如，*D:\\\folder*。请注意，在 Windows 操作系统上，双反斜杠必须用作分隔符。

如果要试验编辑器配置，请修改 *src/main/webapp/editor.jsp* 文件中的[参数](../../usage-api/advanced-parameters.md)。

### 步骤 3. 安装的先决条件

要运行 Java 示例代码，请安装适用于您的操作系统和 Web 服务器 **Apache Tomcat** 的 Java 版本：

- **Java**（从 [Oracle 官网](https://www.java.com/en/download/manual.jsp)下载）；
- **Apache Tomcat**：9.0.x 版（从[官网](https://tomcat.apache.org/download-90.cgi)下载）。

### 步骤 4. 运行 Apache Tomcat

1. 在 Windows 上安装 Java 后，将 **JAVA\_HOME** 环境变量设置为指向 Java 安装目录。

   找出 Java 的安装位置。如果您在安装过程中没有更改路径，它将是这样的：

   ``` sh
   C:\Program Files\Java\jdk1.8.0_65
   ```

   在 **Windows 7** 中，右键单击**我的电脑**并选择**属性**，然后单击**高级**。

   在 **Windows 8**中，进入**控制面板**并选择**系统**，然后单击**高级系统设置**。

   单击**环境变量**按钮。

   在**系统变量**，单击**新建**。

   在**变量名称**字段中，如果您安装了**JDK**（Java 开发工具包），请输入 **JAVA\_HOME**；如果您安装了 **JRE**（Java 运行时环境），请输入**JRE\_HOME**。

   在**变量值**字段中，输入您的 **JDK** 或 **JRE** 安装路径，例如 *C:\Program Files\Java\jdk1.8.0\_65*。

   <img alt="Add new environment variable" src="/assets/images/java/make-var.png" width="832px" />

   检查**命令提示符**中的 **echo** 命令是否成功创建变量：

   ``` sh
   echo %JAVA_HOME%
   ```

2. 运行**命令提示符**更改 **Apache Tomcat** 安装目录的当前目录：

   ``` sh
   cd /d C:\Apache Tomcat\apache-tomcat-7.0.67\bin
   ```

3. 使用 *startup.bat* 脚本启动 Apache Tomcat：

   ``` sh
   startup.bat
   ```

   您将看到显示的新 **Tomcat** 控制台窗口，其中提供有关 Tomcat 启动的信息和消息：

   <img alt="Tomcat console window" src="/assets/images/java/tomcat-cmd.jpg" width="832px" />

   使用 Web 浏览器中的地址测试 Tomcat 安装：

   ``` sh
   http://localhost:8080
   ```

   如果一切正确，您将在浏览器中看到 Tomcat 网页，如下所示。

### 步骤 5. 运行 Java 代码

1. 通过单击 **Manager App:** 打开 Tomcat Web Application Manager：

   <img alt="Manager app" src="/assets/images/java/manager.jpg" width="832px" />

2. Tomcat Web Application Manager 将请求 **username** 和 **password:**

   <img alt="Sign in to Tomcat app" src="/assets/images/java/author.jpg" width="300px" />

   在 Apache Tomcat 安装文件夹中的 *tomcat-users.xml* 文件中指定用户数据。定义 **manager-gui** 用户角色，指定 **user name** 和 **password** 的值：

   ``` xml
   <tomcat-users>
       <role rolename="manager-gui"/>
       <user username="tomcat" password="tomcat" roles="manager-gui"/>
   </tomcat-users>
   ```

3. 在 Tomcat Web Application Manager中上传 Java 项目。为此，单击 **WAR file to deploy** 部分中的 **Choose File** 并在 Java 项目文件夹中找到*.war* 文件，然后单击 **Deploy**。

   <img alt="Deploy WAR file" src="/assets/images/java/upload-app.jpg" width="700px" />
   <img alt="Choose WAR file" src="/assets/images/java/war-file.jpg" width="700px" />

4. 您将在 **Application 列表**中看到该项目：

   <img alt="Application list" src="/assets/images/java/manager-app.jpg" width="832px" />

5. 单击应用程序名来运行它。

### 步骤 6. 检查可访问性

如果示例和 ONLYOFFICE 文档安装在不同的计算机上，请确保安装了示例的服务器可以访问您指定地址的 ONLYOFFICE 文档，而不是配置文件中的 **documentserver**。确保 ONLYOFFICE 文档能够访问安装了示例的服务器，该示例使用您在配置文件中 指定的地址而不是 **example.com** 安装。

## 对于 Linux

### 步骤 1. 安装 ONLYOFFICE 文档

下载并安装 ONLYOFFICE 文档（打包为文档服务器）：

[获取 ONLYOFFICE 文档](https://www.onlyoffice.com/download-docs.aspx?from=api#docs-developer)

请参阅详细指南以了解如何安装[适用于Linux](https://helpcenter.onlyoffice.com/installation/docs-developer-install-ubuntu.aspx?from=api_java_example)的 ONLYOFFICE 文档。

### 步骤 2. 安装的先决条件及使用编辑器运行网站

1. 按照[此处](https://docs.oracle.com/en/java/javase/20/install/installation-jdk-linux-platforms.html#GUID-737A84E4-2EFF-4D38-8E60-3E29D1B884B8)说明安装 **Java**。

2. 下载包含 Java 示例的存档并解压缩存档：

   ``` sh
   wget https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/Java.Example.zip
   ```

   ``` sh
   unzip Java.Example.zip
   ```

3. 将当前目录更改为项目目录：

   ``` sh
   cd Java\ Example/
   ```

4. 编辑 *src/main/resources/settings.properties* 配置文件。指定安装了 ONLYOFFICE 文档的本地服务器的名称。

   ``` sh
   nano src/main/resources/settings.properties
   ```

   编辑以下行：

   ``` ini
   storage-folder = app_data
   files.docservice.url.site=https://documentserver/
   ```

   其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称，**storage-folder** 是创建和存储文件的路径。请注意，您必须具有对该文件夹的读取和写入权限。如果您没有它们，请使用下一个命令：

   ``` sh
   sudo chmod -R ugo+rw /{path}
   ```

5. 安装 **Maven**:

   ``` sh
   sudo apt-get install maven
   ```

6. 构建：

   ``` sh
   mvn package
   ```

7. 使用管理页面安装 **Tomcat**：

   ``` sh
   sudo apt-get install tomcat8 tomcat8-admin
   ```

8. 在 Tomcat 上配置管理员用户：

   ``` sh
   sudo nano /var/lib/tomcat8/conf/tomcat-users.xml
   ```

   插入以下行：

   ``` xml
   <role rolename="manager-gui"/>
   <user username="USERNAME" password="PASSWORD" roles="manager-gui"/>
   ```

   其中 **USERNAME** 和 **PASSWORD** 是您自己的凭据数据。

   重启 Tomcat:

   ``` sh
   systemctl restart tomcat8
   ```

9. 使用管理员用户凭据在浏览器中打开 Tomcat 管理页面：

   ``` sh
   http://localhost:8080/manager/html
   ```

10. 从 *target/OnlineEditorsExampleJava-1.0.war* 选择要上传的 WAR 文件。

11. 使用地址在浏览器中查看结果：

    ``` sh
    http://localhost:8080/OnlineEditorsExampleJava-1.0/
    ```

### 步骤 3. 检查可访问性

如果示例和ONLYOFFICE 文档安装在不同的计算机上，请确保安装了示例的服务器可以访问您指定地址的 ONLYOFFICE 文档，而不是配置文件中的 **documentserver**。确保 ONLYOFFICE 文档能够访问安装了示例的服务器，该示例使用您在配置文件中 指定的地址而不是 **example.com** 安装。

## 对于 Docker

### 步骤 1. 安装 ONLYOFFICE 文档

下载并安装 ONLYOFFICE 文档（打包为文档服务器）：

[获取 ONLYOFFICE 文档](https://www.onlyoffice.com/download-docs.aspx?from=api#docs-developer)

请参阅详细指南以了解如何安装[适用于Docker](https://helpcenter.onlyoffice.com/installation/docs-developer-install-docker.aspx?from=api_java_example)的 ONLYOFFICE 文档。

### 步骤 2. 安装先决条件并使用编辑器运行网站

1. 按照[此处](https://docs.oracle.com/en/java/javase/20/install/installation-jdk-linux-platforms.html#GUID-737A84E4-2EFF-4D38-8E60-3E29D1B884B8)说明安装 **Java**。

2. 下载包含 Java 示例的存档并解压存档：

   ``` sh
   wget https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/Java.Example.zip
   ```
   
   ``` sh
   unzip Java.Example.zip
   ```

3. 将当前目录更改为项目目录：

   ``` sh
   cd Java\ Example/
   ```

4. 编辑 *src/main/resources/settings.properties* 配置文件。指定安装了 ONLYOFFICE 文档的本地服务器的名称：

   ``` sh
   nano src/main/resources/settings.properties
   ```

   编辑以下行：

   ``` ini
   storage-folder = app_data
   files.docservice.url.site=https://documentserver/
   ```

   其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称，**storage-folder** 是创建和存储文件的路径。

5. 在 Java 示例目录中运行下一个命令：

   ``` sh
   docker-compose up
   ```

6. 之后，所有的 *bin* 文件将被传递到 *./target* 文件夹。

### 步骤 3. 检查可访问性

如果示例和 ONLYOFFICE 文档安装在不同的计算机上，请确保安装了示例的服务器可以使用您在配置文件中指定的地址（而不是 **documentserver** ）访问ONLYOFFICE 文档。确保 ONLYOFFICE 文档可以访问安装了示例的服务器，该示例的地址是您在配置文件中指定的地址，而不是 **example.com**。
