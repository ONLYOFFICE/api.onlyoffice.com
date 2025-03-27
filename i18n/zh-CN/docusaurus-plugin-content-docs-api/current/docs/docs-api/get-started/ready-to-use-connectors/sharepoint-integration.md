---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/sharepoint.svg
---

# SharePoint 集成

该[解决方案](https://github.com/ONLYOFFICE/onlyoffice-sharepoint) 可让用户借助ONLYOFFICE文档在SharePoint中编辑办公文档。

## 功能特性

- 目前，可编辑的文档格式有：DOCX、XLSX、PPTX。
- 仅支持查看的文档格式如下：PDF、DJVU、TXT、CSV、ODT、ODS、ODP、DOC、XLS、PPT、PPS、EPUB、RTF、HTML、HTM、MHT、XPS。
- 该插件会在Office文档的文件上下文菜单和功能区中新增一个**在ONLYOFFICE中编辑**的菜单项。这支持多个用户实时协作，并将更改保存回SharePoint。

## 安装ONLYOFFICE文档

您需要一个ONLYOFFICE文档（文档服务器）实例，该实例必须能从SharePoint和任何终端客户端解析并连接。如果无法满足此要求，请参考官方[ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还必须能够直接向SharePoint发送POST请求。

使用[Docker](https://github.com/ONLYOFFICE/Docker-DocumentServer)是启动ONLYOFFICE文档实例的最简单方法。

## 安装ONLYOFFICE SharePoint集成解决方案

要在SharePoint中使用ONLYOFFICE文档，必须执行以下步骤：

1. 点击**开始**，指向**所有程序**，选择**管理工具**，然后点击**服务**。确保**SharePoint管理**服务已启动。

2. 点击**开始->SharePoint管理外壳**，进入包含 *.wsp*文件的目录

3. 运行*Install.ps1*脚本：

   ``` sh
   PS> .\Install.ps1
   ```

4. 输入您的SharePoint网站地址：

    ``` sh
   https://<yoursharepointsite>
   ```

   > 除了步骤**3**和**4**，您也可以输入以下命令：
   >
   >   ``` ps1
   >   Add-SPSolution -LiteralPath<SolutionPath>/onlyoffice.wsp
   >   ```
   >   
   >在**SharePoint中央管理**主页上，点击**系统设置->场管理->管理场解决方案**。在**解决方案管理**页面，点击**onlyoffice.wsp->部署解决方案**。

5. 在**SharePoint中央管理**主页的**应用程序管理**下，点击**管理Web应用程序**。

6. 确保选择了您的网站，然后点击**身份验证提供程序**图标。

7. 在**身份验证提供程序**弹出窗口中，点击**默认区域**。

8. 在**编辑身份验证**下，勾选**启用匿名访问**，然后点击**保存**。

9. 返回**Web应用程序管理**，点击**匿名策略**图标。

10. 在**匿名访问限制**下，选择您的**区域**，将**权限**设置为**无–>无策略**，然后点击**保存**。

## 配置SharePoint ONLYOFFICE集成解决方案

在SharePoint中，打开包含管理设置的 */\_layouts/15/Onlyoffice/Settings.aspx*页面。输入以下地址来连接ONLYOFFICE文档：

``` sh
https://<documentserver>/
```

其中，**文档服务器地址**是安装了**ONLYOFFICE文档**的服务器名称，该地址必须能被用户浏览器和SharePoint服务器访问。SharePoint服务器地址也必须能被**ONLYOFFICE文档**访问，以确保正常工作。

> 请注意，如果您使用SharePoint设置了子网站，为确保功能正常，您需要为每个子网站额外配置ONLYOFFICE文档连接。进入每个子网站的设置，在相应字段中输入ONLYOFFICE文档地址。

从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障安全性和数据完整性。在SharePoint管理设置中指定您自己的**密钥**。在ONLYOFFICE文档[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

如果启用了JWT保护，由于SharePoint安全策略会阻止外部的**Authorization**标头，因此需要指定一个自定义标头名称。该标头也应在ONLYOFFICE文档的签名设置中指定。有关签名的更多信息，请参见此处[这里](../../additional-api/signature/signature.md)。

## 编译ONLYOFFICE SharePoint集成解决方案

编译ONLYOFFICE SharePoint集成解决方案有两种方法：

1. 使用**MS Visual Studio**：

   1. 进入SharePoint服务器，在Visual Studio中打开该项目。
   2. 在**解决方案资源管理器**中，打开项目的快捷菜单，然后选择**发布**。
   3. 在**发布**对话框中，选择**发布到文件系统**选项按钮。
   4. 点击**发布**按钮。发布过程完成后，将创建解决方案文件。
   5. 将生成的文件复制到包含Install.ps1文件的文件夹中（默认是BuildAndInstall文件夹）。

2. 借助提供的*build.bat*文件中：

   1. 进入**BuildAndInstall**文件夹。
   2. 运行*build.bat*文件。
   3. 生成的解决方案 *.wsp* 文件将被创建并放置在BuildAndInstall文件夹中。

## 工作原理

ONLYOFFICE集成遵循此处记录的API规范[此处](../basic-concepts.md)。

1. 用户在SharePoint中导航到一个文档，然后在上下文菜单或功能区中选择**在 ONLYOFFICE 中编辑**操作。

2. SharePoint向编辑器页面发出请求(URL格式为： */\_layouts/15/Onlyoffice/editorPage.aspx?SPListItemId=\{ItemId\}\&SPListURLDir=\{ListUrlDir\}\&action=track*)。

3. SharePoint准备一个包含以下属性的JSON对象：

   - **url**-ONLYOFFICE文档用于下载文档的URL；
   - **callbackUrl**-ONLYOFFICE文档用于通知文档编辑状态的URL；
   - **DocumentSeverHost**-客户端需要回复给ONLYOFFICE文档的URL（可在设置页面设置）；
   - **Key**-来自SharePoint的文件标识符；
   - **FileName**-文档标题（名称）；
   - **CurrentUserId**-用户标识；
   - **CurrentUserName**-用户名。

4. SharePoint构建一个页面，填充所有这些值，以便客户端浏览器可以加载编辑器。

5. 客户端浏览器向ONLYOFFICE文档的JavaScript库发出请求，并将包含上述属性的DocEditor配置发送给ONLYOFFICE文档。

6. 然后，ONLYOFFICE文档从SharePoint下载文档，用户开始编辑。

7. 当所有用户和客户端浏览器完成编辑后，他们关闭编辑窗口。

8. 在[10秒](../how-it-works/saving-file.md#save-delay)无操作后，ONLYOFFICE文档会向*callbackUrl*发送POST请求，告知SharePoint ONLYOFFICE解决方案客户端已完成文档编辑并关闭了它。

9. SharePoint下载文档的新版本，替换旧版本。

在此处下载ONLYOFFICE SharePoint集成解决方案：[此处](https://github.com/ONLYOFFICE/onlyoffice-sharepoint)。
