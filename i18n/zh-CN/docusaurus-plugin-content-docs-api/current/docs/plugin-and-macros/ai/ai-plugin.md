---
sidebar_position: -4
---

# 入门指南

AI 是一个后台插件，它将 AI 提供商（例如 OpenAI、DeepSeek）与 ONLYOFFICE 编辑器相连接，能够实现智能文本生成、编辑、摘要提取以及自动宏创建等功能。

**支持的编辑器**：文档、电子表格、演示文稿、PDF。

**GitHub 仓库**：[ai](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/ai)。

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="oQbH8JIe3eE"/>
```

## 安装

从 9.0.4 版本开始，AI 插件已添加到带有 ONLYOFFICE 品牌标识的服务器和桌面发行版中。

如果需要手动添加该插件，请从 [ONLYOFFICE 应用目录](https://www.onlyoffice.com/app-directory/en/ai) 下载插件，并按照 [桌面版](/docs/plugin-and-macros/tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署版](/docs/plugin-and-macros/tutorials/installing/onlyoffice-docs-on-premises.md) 或 [云版](/docs/plugin-and-macros/tutorials/installing/onlyoffice-cloud.md) 的安装说明进行安装。

插件的 guid 是 `{9DC93CDB-B576-4F0C-B55E-FCC9C48DD007}`。

## 配置 {#configuring}

要开始使用该插件，需要设置 AI 提供商：

1. 打开 **插件** 选项卡，点击 **插件管理器** 图标。找到 **AI 插件**，如果尚未安装则点击 **安装**，如果已安装则点击 **更新**。
2. 点击 **后台插件** 按钮，激活 **AI** 开关。
3. 进入 **AI** 选项卡，点击 **设置** 打开配置窗口。
4. 选择 **编辑 AI 模型**，然后点击 ![Plus icon](/assets/images/plugins/plus.svg#gh-light-mode-only)![Plus icon](/assets/images/plugins/plus.dark.svg#gh-dark-mode-only)。
5. 从列表中选择一个 AI 提供商，或者通过输入 API 密钥添加新的 AI 模型。
6. 在图标行中，选择该模型的用途：*文本*、*图像*、*嵌入*、*音频处理*、*内容审核*、*实时任务*、*编码帮助*、*视觉分析*。
7. 点击 **确定** 保存设置并完成连接过程。

有关添加自定义提供商的详细信息，请参考此 [说明](custom-providers.md)。

## 使用

要开始使用 AI 插件：

1. 在 ONLYOFFICE 编辑器的顶部工具栏中打开 **AI** 选项卡。
2. 选择以下按钮之一：
   - **设置**：配置面板，用于选择 AI 提供商、输入 API 密钥以及选择其模型之一；
   - **聊天机器人**：与 AI 开始对话，以提问、重写文本、集思广益等；
   - **摘要提取**：自动总结输入的文本并选择插入结果的方式；
   - **翻译**：使用配置的 AI 服务翻译选中的文本。
3. 可以对选中的文本使用该插件。操作方法为：选中文本，右键单击，在 AI 菜单中选择以下选项之一：**摘要提取**、**文本分析**、**翻译**、**图像** 或 **聊天机器人**。
4. 插件将根据配置的 AI 模型做出响应。
5. 将响应插入文档或根据需要使用。

## 支持

如果想请求该插件的新功能或报告相关漏洞，请使用 [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 上的问题反馈区。
