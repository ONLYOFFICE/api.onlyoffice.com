---
sidebar_position: 4
---

# AI 智能体（测试版）

AI 智能体最早在 AI 插件（现为 AI 工具）的 2.4.2 版本中推出。

AI 嵌入式智能体是集成到 ONLYOFFICE 编辑器中的上下文智能体。它可通过悬浮面板访问，目前作为 AI 工具的测试版功能提供。

AI 智能体具有以下特点：

- 提供自然语言交互，无需浏览菜单即可执行常见编辑任务。
- 包含一系列简单的预定义工具，适用于每个编辑器的常见任务。
- 保存对话历史，支持迭代优化和多步骤请求。

## AI 智能体能做什么 {#functions}

- **文本生成与改写**。直接在编辑器中创建新文本或增强现有内容。通过自然语言命令生成摘要、拓展思路、改写句子，或调整语气和风格。
- **智能格式化**。无需查找菜单即可应用格式。只需请求格式更改，编辑器就会自动更新文档。
- **数据分析与可视化**。在电子表格中汇总、排序和筛选数据，并从选定范围或整个工作表生成可视化表示。根据简单的文字描述创建图表和幻灯片图像。

## 如何启用 AI 智能体 {#installation}

AI 智能体是 AI 工具的测试版功能。请先添加 AI 模型。如果 AI 工具不可用，请参阅[安装](ai-plugin.md#installing)，然后参阅[配置](ai-plugin.md#configuring)。

要启用 AI 智能体：

1. 在**插件**选项卡上点击**后台插件**，确认 **AI Tools** 开关已启用（默认处于启用状态）。
2. 打开 **AI 工具**选项卡并点击**设置**。
3. 在 **Model Assignment** 选项卡上为 *AI Chat* 分配模型，或保留 **Default model**。AI 智能体（`Ctrl + /`）使用 *AI Chat* 的模型分配。

AI 智能体现已启用，可以开始使用了。

## 如何使用 AI 智能体 {#usage}

要调用 AI 智能体：

1. 在任何编辑器中按 `Ctrl + /` 打开 AI 智能体输入框。

   ![AI 智能体](/assets/images/plugins/inline-ai-agent.png#gh-light-mode-only)![AI 智能体](/assets/images/plugins/inline-ai-agent.dark.png#gh-dark-mode-only)

2. 输入您的请求并按 `Enter`。**AI 聊天**面板将打开并显示响应。

编辑器支持请求历史记录，因此您可以继续对话，逐步给出指令。

要重置历史记录，请按 `Ctrl + Alt + /`。

要禁用智能体，请使用 `Esc`。

## 如何创建快速 AI 操作 {#create-quick-ai-action}

**创建快速 AI 操作**用于对所选文本执行一次性 AI 任务。操作的显示位置取决于 **Access from** 设置。

要创建新操作：

1. 打开 **AI 工具**选项卡并点击**创建快速 AI 操作**，将打开 **Create Quick AI Action** 对话框。

   ![创建快速 AI 操作](/assets/images/plugins/create-quick-ai-action.png#gh-light-mode-only)![创建快速 AI 操作](/assets/images/plugins/create-quick-ai-action.dark.png#gh-dark-mode-only)

2. 您可以在 **Start with a template** 下选择一个模板，例如 *Translate*、*Change Tone*、*Professional Rewrite*、*Bullet Summary*、*Simplify Text*、*Expand Text*、*Fix Grammar*、*Make Shorter* 或 *Make Longer*。模板会自动为您填写各字段。

3. 或者手动填写以下字段：
   - **Name**：快速操作的简短名称。
   - **What should the action do?**：发送给 AI 的指令，例如“修正语法”或“以正式语气改写”。
   - **Apply result as**：结果应用到文档的方式。例如，**Replace** 会用 AI 结果替换所选文本。
   - **Access from**：操作的访问方式，可选 **Available from the right-click menu** 或 **Quick access from the editor toolbar**。

4. 您还可以打开 **Show advanced settings**：
   - **AI Model**：该操作使用的模型。保留 **Default scheme** 即使用 **Model Assignment** 选项卡上分配的模型，也可以选择特定模型。
   - **Output style**：结果的详细程度（*Concise*、*Standard* 或 *Detailed*）。

5. 点击 **Create**。

新操作的显示位置取决于 **Access from** 设置：

- **Available from the right-click menu**：该操作列在上下文菜单的**快速 AI 操作**子菜单中。**快速 AI 操作**是一个独立的菜单项，位于 **AI 工具**旁边。
- **Quick access from the editor toolbar**：该操作以按钮形式显示在 **AI 工具**选项卡上，位于**翻译**之后、**创建 AI 助手**之前。

## 如何创建 AI 助手 {#create-ai-assistant}

“创建 AI 助手”功能让您可以将重复性文本任务转变为专用工具栏按钮。助手可以持续工作并响应文档更改。

要创建新的助手：

1. 打开 **AI 工具**选项卡并点击**创建 AI 助手**，将打开 **Create a new assistant** 对话框。

   ![创建 AI 助手](/assets/images/plugins/create-ai-assistant.png#gh-light-mode-only)![创建 AI 助手](/assets/images/plugins/create-ai-assistant.dark.png#gh-dark-mode-only)

2. 您可以在 **Start with a template** 下选择一个模板，例如 *Proofreading*、*AI Content Indicator*、*Text Optimizer*、*Fact Check*、*Professional Rewrite*、*Logic & Argumentation Review* 或 *Beautify Text*。模板会自动为您填写各字段。

3. 或者手动填写以下字段：
   - **Name**：助手的简短名称，在工具栏上显示为按钮标签。
   - **Action**：助手对所选文本执行的操作。例如，**Replace** 会用 AI 结果替换所选文本。
   - **Prompt**：发送给 AI 的指令，例如“查找事实错误”或“总结”。
   - **Explanatory comment**：选中后，助手会添加一条解释结果的批注。

4. 您还可以打开 **Show advanced settings**：
   - **AI Model**：助手使用的模型。保留 **Default scheme** 即使用 **Model Assignment** 选项卡上分配的模型，也可以选择特定模型。
   - **Verbosity**：响应的详细程度（*Low*、*Medium* 或 *High*）。
   - **Strictness**：助手遵循提示词的严格程度（*Lenient*、*Balanced* 或 *Strict*）。

5. 点击 **Create**。

助手将以按钮形式显示在 **AI 工具**选项卡的末尾，可在文档中使用。

:::note
如果助手无法执行请求的操作（例如，当提示词与文本编辑无关时），将显示警告并停止操作。
:::

## AI 助手示例 {#create-ai-assistant-example}

以下示例展示了使用此提示词创建的 **Text Optimizer** 助手：

:::tip
Optimize the text to improve clarity, readability, and conciseness. Reduce redundancy, refine sentence structure, and enhance flow while preserving the original meaning and intent.
:::

1. 打开**创建 AI 助手**，选择起始模板 **Text Optimizer**，然后点击 **Create**。
2. 选择要优化的文本。
3. 点击 **Text Optimizer** 按钮。

   ![Text Optimizer](/assets/images/plugins/create-ai-assistant-example.png#gh-light-mode-only)![Text Optimizer](/assets/images/plugins/create-ai-assistant-example.dark.png#gh-dark-mode-only)

4. 您可以在以下任一位置查看建议：
   - 在左侧的 **AI assistant** 面板中，逐条接受或忽略建议，或者点击 **Accept all** 或 **Ignore all**。
   - 点击高亮文本打开 **Match** 对话框，然后点击 **Accept** 或 **Ignore**。

   <div className="side-by-side-images">
     <div>
       <img alt="AI assistant 面板" src="/assets/images/plugins/ai-assistant-panel.png#gh-light-mode-only" />
       <img alt="AI assistant 面板" src="/assets/images/plugins/ai-assistant-panel.dark.png#gh-dark-mode-only" />
     </div>
     <div>
       <img alt="Match 对话框" src="/assets/images/plugins/ai-assistant-match-dialog.png#gh-light-mode-only" />
       <img alt="Match 对话框" src="/assets/images/plugins/ai-assistant-match-dialog.dark.png#gh-dark-mode-only" />
     </div>
   </div>
