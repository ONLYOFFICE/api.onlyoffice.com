---
sidebar_position: -7
---

# 准备工作

在开始开发插件之前，您需要完成以下准备步骤。

## 第 1 步. 先决条件

安装所有必要的软件包和程序：

- 本地部署的 ONLYOFFICE DocSpace。

  [获取 ONLYOFFICE DocSpace](https://www.onlyoffice.com/download-developer.aspx#docspace-developer)

  要在本地服务器上安装，请按照 ONLYOFFICE 帮助中心的[说明](https://helpcenter.onlyoffice.com/docspace/installation/developer?from=api)进行操作。

- *@onlyoffice/docspace-plugin-sdk* npm 包

  要全局安装 *@onlyoffice/docspace-plugin-sdk* npm 包，请使用以下命令：

  ``` sh
  npm i -g @onlyoffice/docspace-plugin-sdk
  ```

## 第 2 步. 草案

设计您的插件的工作方式：

1. 选择能够为您的 DocSpace 添加所需功能的服务。

   例如，[AssemblyAI](https://www.assemblyai.com/)、[ConvertAPI](https://www.convertapi.com/)、[Draw.io](https://www.drawio.com/)。

   :::tip
   请确保服务文档可用，并检查其许可证、API 方法的可用性等。对于某些服务，用户必须先获取 API 密钥才能开始使用插件。
   :::

2. 思考在哪里实现插件、插件的结构将是什么、用户将如何与插件组件交互等。根据此信息列出所需的插件类型和条目。有关更多信息，请阅读插件 SDK 文档的[插件类型](coding-plugin/plugin-types/plugin-types.md)和[插件条目](coding-plugin/plugin-items/plugin-items.md)部分。

3. 构思插件的结构。所有必需的文件说明见[此处](plugin-structure.md)。

4. 为插件选择名称并为其撰写描述。
