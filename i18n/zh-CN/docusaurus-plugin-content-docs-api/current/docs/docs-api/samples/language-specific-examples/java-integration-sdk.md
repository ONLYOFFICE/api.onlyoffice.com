---
sidebar_position: -2
---

# Java 集成软件开发工具包（SDK）

[ONLYOFFICE 文档集成 SDK](https://central.sonatype.com/artifact/com.onlyoffice/docs-integration-sdk) 提供通用接口和默认实现，用于将 ONLYOFFICE 文档集成到您自己的 Java 网站或应用程序中。

## 先决条件

- **Java**：版本 11.x 及更高版本（从 [Oracle 官方网站](https://www.oracle.com/java/technologies/downloads/#java11)下载）；
- **Apache Maven**（从[官方网站](https://maven.apache.org/download.cgi)下载）。

## SDK 结构

SDK 由 5 个主要管理器和 4 个服务组成。

### 管理器

| 管理器                                                                                                                                                 | 默认实现                                                                                                                                                           | 描述                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [DocumentManager](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/manager/document/DocumentManager.java) | [DefaultDocumentManager](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/manager/document/DefaultDocumentManager.java) (抽象) | 该管理器用于处理文件和文档格式。       |
| [RequestManager](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/manager/request/RequestManager.java)    | [DefaultRequestManager](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/manager/request/DefaultRequestManager.java)               | 该管理器用于向 ONLYOFFICE 文档发出请求。           |
| [JwtManager](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/manager/security/JwtManager.java)           | [DefaultJwtManager](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/manager/security/DefaultJwtManager.java)                      | 该管理器用于生成和验证授权令牌。 |
| [SettingsManager](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/manager/settings/SettingsManager.java) | [DefaultSettingsManager](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/manager/settings/DefaultSettingsManager.java) (抽象) | 该管理器用于管理集成应用程序设置。        |
| [UrlManager](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/manager/url/UrlManager.java)                | [DefaultUrlManager](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/manager/url/DefaultUrlManager.java)                           | 该管理器用作 URL 提供者。                                 |

### 服务

| 服务                                                                                                                                                                     | 默认实现                                                                                                                                                                    | 描述                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [ConfigService](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/service/documenteditor/config/ConfigService.java)            | [DefaultConfigService](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/service/documenteditor/config/DefaultConfigService.java)            | 该配置生成服务用于打开文档编辑器。 |
| [CallbackService](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/service/documenteditor/callback/CallbackService.java)      | [DefaultCallbackService](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/service/documenteditor/callback/DefaultCallbackService.java)      | 该服务用于处理文档服务器的响应。       |
| [ConvertService](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/service/convert/ConvertService.java)                        | [DefaultConvertService](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/service/convert/DefaultConvertService.java)                        | 该服务用于转换文档。                                 |
| [SettingsValidationService](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/service/settings/SettingsValidationService.java) | [DefaultSettingsValidationService](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/src/main/java/com/onlyoffice/service/settings/DefaultSettingsValidationService.java) | 该服务用于检查文档服务器连接设置。         |

## 用法

让我们看一下[演示示例](https://github.com/ONLYOFFICE/docs-integration-sdk-java/tree/main/demo-example)，它展示了 SDK 如何在经典 Spring Web 应用程序中工作：

1. 实现抽象 **DefaultSettingsManager** 类的方法：

   ``` java
   @Override
   public String getSetting(final String name) {
       return properties.getProperty(name);
   }

   @Override
   public void setSetting(final String name, final String value) {
       properties.setProperty(name, value);
   }
   ```

   完整的示例代码可以在[此处](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/demo-example/src/main/java/com/onlyoffice/demoexample/manager/SettingsManagerImpl.java)找到。

2. 实现抽象 **DefaultDocumentManager** 类的方法：

   ``` java
   @Override
   public String getDocumentKey(final  String fileId, final boolean embedded) {
       return String.valueOf(fileId.hashCode());
   }

   @Override
   public String getDocumentName(final String fileId) {
       return "sample.docx";
   }
   ```

   完整的示例代码可以在[此处](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/demo-example/src/main/java/com/onlyoffice/demoexample/manager/DocumentManagerImpl.java)找到。

3. 实现 **UrlManager** 方法。要在编辑模式下打开编辑器，您需要定义：
   
   ``` java
   @Override
   public String getFileUrl(final String fileId) {
       return getServerUrl() + "/file/download";
   }

   @Override
   public String getCallbackUrl(final String fileId) {
       return getServerUrl() + "/callback";
   }
   ```

   完整的示例代码可以在[此处](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/demo-example/src/main/java/com/onlyoffice/demoexample/manager/UrlMangerImpl.java)找到。

4. 初始化 **JwtManager** 和 **RequestManager** Spring bean 并将它们添加到 DI 容器中。这允许您在应用程序中的任何位置调用注册的 bean：

   ``` java
   @Bean
   public JwtManager jwtManager(final SettingsManager settingsManager) {
       return new DefaultJwtManager(settingsManager);
   }

   @Bean
   public RequestManager requestManager(final UrlManager urlManager, final JwtManager jwtManager, final SettingsManager settingsManager) {
       return new DefaultRequestManager(urlManager, jwtManager, settingsManager);
   }
   ```

   完整的示例代码可以在[此处](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/demo-example/src/main/java/com/onlyoffice/demoexample/DemoExampleApplication.java)找到。

5. 之后，您可以在其默认实现中或通过覆盖和扩展它们来使用所有可用服务：

   - 要使用[回调服务](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/demo-example/src/main/java/com/onlyoffice/demoexample/service/CallbackServiceImpl.java)创建[回调控制器](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/demo-example/src/main/java/com/onlyoffice/demoexample/controllers/CallbackController.java)其中请求正文包装在 *Callback* 模型中，并调用回调服务来处理该模型。
   - 演示[配置服务](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/demo-example/src/main/java/com/onlyoffice/demoexample/service/ConfigServiceImpl.java)工作，*@GetMapping("/editor")* 用于[主控制器](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/demo-example/src/main/java/com/onlyoffice/demoexample/controllers/MainController.java)。当用户打开该地址时，会请求编辑器页面。同时，调用配置服务并生成 *Config* 模型以打开编辑器：

   ``` java
   @GetMapping("/editor")
   public String main(final Model model) throws JsonProcessingException {

       Config config = configService.createConfig("1", Mode.EDIT, Type.DESKTOP);

       model.addAttribute("config", config);
       model.addAttribute("documentServerApiUrl", urlManager.getDocumentServerApiUrl());

       return "editor";
   }
   ```

6. 创建[文件控制器](https://github.com/ONLYOFFICE/docs-integration-sdk-java/blob/main/demo-example/src/main/java/com/onlyoffice/demoexample/controllers/FileController.java)获取要在编辑器中打开的文件。当配置服务生成配置模型时，该模型中指定了下载文件的URL。要打开文档，编辑器向此 URL 发送请求，文件控制器响应此请求并返回文档。
