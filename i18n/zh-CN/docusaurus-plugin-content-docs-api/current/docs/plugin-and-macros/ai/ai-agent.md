---
sidebar_position: -2
---

# AI 助手（测试版）

从 2.4.2 版本开始，AI 插件带来了全新的 AI 助手功能。

AI 嵌入式助手是集成到 ONLYOFFICE 编辑器中的上下文助手。它可通过悬浮面板访问，目前作为 AI 插件的测试版功能提供。

AI 助手具有以下特点：

- 提供自然语言交互，无需浏览菜单即可执行常见编辑任务。
- 包含一系列简单的预定义[函数](custom-ai-functions.md)，适用于每个编辑器的常见任务。
- 保存对话历史，支持迭代优化和多步骤请求。

## AI 助手能做什么 {#functions}

- **文本生成与改写**。直接在编辑器中创建新文本或增强现有内容。通过自然语言命令生成摘要、拓展思路、改写句子，或调整语气和风格。
- **智能格式化**。无需查找菜单即可应用格式。只需请求格式更改，编辑器就会自动更新文档。
- **数据分析与可视化**。在电子表格中汇总、排序和筛选数据，并从选定范围或整个工作表生成可视化表示。根据简单的文字描述创建图表和幻灯片图像。

## 如何安装 AI 助手 {#installation}

要安装 AI 助手，请按照以下步骤操作：

1. 转到**插件**选项卡并打开**插件管理器**。找到**AI 插件**，如果尚未安装则点击**安装**，如果已安装则点击**更新**。

   ![AI 插件](/assets/images/plugins/install-ai-plugin.png#gh-light-mode-only)![AI 插件](/assets/images/plugins/install-ai-plugin.dark.png#gh-dark-mode-only)

2. 点击**后台插件**按钮，激活**AI**开关。

    ![激活 AI](/assets/images/plugins/activate-ai.png#gh-light-mode-only)![激活 AI](/assets/images/plugins/activate-ai.dark.png#gh-dark-mode-only)

3. 在 ONLYOFFICE 编辑器的顶部工具栏中找到新的**AI**选项卡。
4. 点击**设置**打开配置窗口。
5. 选择**编辑 AI 模型**，然后点击![Plus icon](/assets/images/plugins/plus.svg#gh-light-mode-only)![Plus icon](/assets/images/plugins/plus.dark.svg#gh-dark-mode-only)。
6. 从列表中选择一个 AI 提供商，或通过输入 API 密钥添加新的 AI 模型。
7. 在图标行中，选择模型的用途：*文本*、*图像*、*嵌入*、*音频处理*、*内容审核*、*实时任务*、*编码帮助*、*视觉分析*。
8. 点击**确定**保存设置并完成连接过程。

    ![AI 设置](/assets/images/plugins/ai-settings.png#gh-light-mode-only)![AI 设置](/assets/images/plugins/ai-settings.dark.png#gh-dark-mode-only)

9. 返回**设置**，为**聊天机器人**设置模型。

AI 助手现已安装完毕，可以开始使用了。

## 如何使用 AI 助手 {#usage}

要调用 AI 助手：

1. 在任何编辑器中按 `Ctrl + /` 打开 AI 助手输入框。

   ![commentText execution](/assets/images/plugins/inline-ai-agent.png#gh-light-mode-only)![commentText execution](/assets/images/plugins/inline-ai-agent.dark.png#gh-dark-mode-only)

2. 输入您的请求并按 `Enter` 立即获得响应。

编辑器支持请求历史记录，因此您可以继续对话，逐步给出指令。

要重置历史记录，请按 `Ctrl + Alt + /`。

要禁用助手，请使用 `Esc`。
