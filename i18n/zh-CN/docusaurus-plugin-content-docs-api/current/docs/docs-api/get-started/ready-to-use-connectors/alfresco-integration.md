---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/alfresco.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Alfresco 集成

这个[插件](https://github.com/ONLYOFFICE/onlyoffice-alfresco)支持您在[Alfresco](https://www.alfresco.com/)Share中用ONLYOFFICE文档编辑办公文档。

该插件在官方[Alfresco附加组件目录](https://connect.hyland.com/t5/alfresco-forum/onlyoffice-connector-for-alfresco/m-p/4606)获取。

## 功能特性

- 目前，使用该插件可打开并编辑的文档格式有：DOCX、XLSX、PPTX、DOCXF、OFORM。

- 该插件会在文档库中为办公文档添加**在ONLYOFFICE中编辑**选项。

  ![在OnlyOffice中编辑](/assets/images/editor/alfresco.png)

  这使多个用户能够实时协作，并将更改保存回Alfresco。

- 若要将ODT、ODP、ODS、DOC、XLS、PPT文件转换为对应的OOXML格式文件，请选择**使用ONLYOFFICE转换**选项。转换后的文件将放置在同一文件夹中。您还可以为文件夹配置规则，使其在上传或更改时自动转换文件。具体细节可在此处找到：[这里](https://docs.alfresco.com/content-services/latest/using/content/rules/)。

- 若要创建新文档，请打开您想要创建文档的文件夹，然后点击**创建...**按钮。[创建...](/assets/images/editor/alfresco-create.png)。

## 安装ONLYOFFICE文档

您需要一个ONLYOFFICE文档（文档服务器）实例，该实例必须能从Alfresco和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的[ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还必须能够直接向Chamilo发送POST请求。

使用[Docker](https://github.com/onlyoffice/Docker-DocumentServer)是启动ONLYOFFICE文档实例的最简单方法。

## 安装ONLYOFFICE Alfresco模块包

要在Alfresco中使用ONLYOFFICE文档，对于Ubuntu14.04系统，请按照以下步骤操作：

1. 根据您的Alfresco安装情况，将已编译的 **\*.amp**包上传到相应的目录：

   - 对于Alfresco存储库，将*onlyoffice-alfresco/repo/target/*中的文件上传到*/usr/local/tomcat/amps/*目录
   - 对于Share，将*onlyoffice-alfresco/share/target/*中的文件上传到*/usr/local/tomcat/amps\_share/*目录。
   > 您可以在此处下载已编译的包文件，并将它们放置到相应的目录中：[此处](https://github.com/onlyoffice/onlyoffice-alfresco/releases)。

2. 使用**模块管理工具(MMT)**安装模块，运行以下命令：

   <Tabs>
      <TabItem value="alfresco" label="Alfresco">
         ``` sh
         java -jar /usr/local/tomcat/alfresco-mmt/alfresco-mmt.jar install /usr/local/tomcat/amps/onlyoffice-integration-repo.amp /usr/local/tomcat/webapps/alfresco
         ```
      </TabItem>
      <TabItem value="share" label="Share">
         ``` sh
         java -jar /usr/local/tomcat/alfresco-mmt/alfresco-mmt.jar install /usr/local/tomcat/amps_share/onlyoffice-integration-share.amp /usr/local/tomcat/webapps/share
         ```
      </TabItem>
   </Tabs>

   有关使用MMT的更多详细信息，请访问以下地址：`https://docs.alfresco.com/content-services/latest/install/zip/amp/`。

1. 确保ONLYOFFICE文档能够向Alfresco发送POST请求。

   您可能需要在alfresco-global.properties中更改以下行，或者您可以使用**配置页面**进行设置：[配置页面](#configuring-onlyoffice-alfresco-module-package):

   ``` ini
   alfresco.host=<hostname>
   alfresco.port=443
   alfresco.protocol=https
   
   share.host=<hostname>
   share.port=443
   share.protocol=https
   ```

   > 该文件可能位于 */usr/local/tomcat/shared/classes/alfresco-global.properties*。

2. 重启Alfresco:

   ``` sh
   sudo ./alfresco.sh stop
   sudo ./alfresco.sh start
   ```

您可以在Alfresco的管理员工具中，通过 */share/page/console/admin-console/module-package*检查该模块。

## 配置ONLYOFFICE Alfresco模块包

模块配置可以在**Alfresco管理控制台**中找到，或者直接导航到*http\://\<alfrescohost>/alfresco/s/onlyoffice/onlyoffice-config*。

> 您也可以将*onlyoffice.url*添加到**alfresco-global.properties**中。通过设置页面进行的配置将覆盖**alfresco-global.properties**中的设置。

从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障安全性和数据完整性。在Alfresco配置页面指定您自己的**密钥**，或者通过在**alfresco-global.properties**中添加*onlyoffice.jwtsecret*来设置。在ONLYOFFICE文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

## 编译ONLYOFFICE Alfresco模块包

如果您计划自行编译ONLYOFFICE Alfresco模块包（例如，编辑源代码然后进行编译），请按照以下步骤操作：

1. 成功编译需要最新的稳定版**Oracle Java**版本。如果未安装，可使用以下命令安装 Oracle Java 8：

   ``` sh
   sudo apt-get update
   sudo apt-get install openjdk-8-jdk
   ```

2. 安装最新版的**Maven**。安装过程可参考：[这里](https://maven.apache.org/install.html)。

3. 下载ONLYOFFICE Alfresco模块包的源代码：

   ``` sh
   git clone https://github.com/ONLYOFFICE/onlyoffice-alfresco.git
   ```

4. 获取子模块：

   ``` sh
   git submodule update --init --recursive
   ```

5. 在*repo*和*share*目录中编译包：

   ``` sh
   cd onlyoffice-alfresco/
   mvn clean install
   ```

另一种构建ONLYOFFICE Alfresco模块包的方法是使用**docker-compose**文件。

在项目目录中使用以下命令：

``` sh
docker-compose up
```

## 工作原理

ONLYOFFICE集成遵循此处记录的API规范：[这里](../basic-concepts.md)。

1. 您在Alfresco Share中导航到一个文档，并选择**在ONLYOFFICE中编辑**菜单选项。

2. Alfresco Share向存储库端发出请求(URL格式为：*/parashift/onlyoffice/prepare?nodeRef=\{nodeRef\}*)。

3. Alfresco存储库端为Share准备一个包含以下属性的JSON对象：

   - **url**：ONLYOFFICE文档用于下载文档的URL(包含当前用户的*alf\_ticket*);
   - **callbackUrl**：ONLYOFFICE文档用于通知文档编辑状态的URL；
   - **onlyofficeUrl**：客户端需要回复给ONLYOFFICE文档的URL（由*onlyoffice.url*属性提供）；
   - **key**：用于指示ONLYOFFICE文档是否需要重新下载文档的*UUID+修改时间戳*；
   - **title**：文档标题（名称）。

4. Alfresco Share获取该对象，并从freemarker模板构建一个页面，填充所有这些值，以便您的浏览器可以加载编辑器。

5. 您的浏览器向ONLYOFFICE文档的JavaScript库发出请求，并将包含上述属性的DocEditor配置发送给ONLYOFFICE文档。

6. 然后，ONLYOFFICE文档从Alfresco下载文档，您开始编辑。

7. ONLYOFFICE文档向*callbackUrl*发送POST请求，通知Alfresco您正在编辑文档。

8. Alfresco锁定文档，但仍允许具有写入权限的其他用户通过保留相关操作，与ONLYOFFICE文档进行实时协作。

9. 当所有用户和浏览器完成编辑后，关闭编辑窗口。

10. 在[10秒](../how-it-works/saving-file.md#save-delay)无操作后，ONLYOFFICE文档向*callbackUrl*发送POST请求，告知Alfresco客户端已完成文档编辑并关闭了窗口。

11. Alfresco下载文档的新版本，替换旧版本。

在此处下载ONLYOFFICE Alfresco模块包：[这里](https://github.com/ONLYOFFICE/onlyoffice-alfresco)。
