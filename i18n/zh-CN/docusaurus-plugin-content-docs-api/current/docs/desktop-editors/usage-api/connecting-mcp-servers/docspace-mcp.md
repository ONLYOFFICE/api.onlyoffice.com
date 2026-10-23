---
sidebar_position: 1
---

# ONLYOFFICE Apps MCP

ONLYOFFICE Apps MCP 服务器允许桌面编辑器中的 AI 聊天与您的 ONLYOFFICE Apps 实例交互，通过自然语言命令实现文档管理操作。

## 先决条件

在连接 ONLYOFFICE Apps MCP 服务器之前，请确保您具有：

- **ONLYOFFICE 桌面编辑器** 10.0 或更高版本
- 访问您的 ONLYOFFICE Apps 实例（SaaS 或本地部署）
- ONLYOFFICE Apps 的有效 API 密钥
- 在您的计算机上安装并运行 Docker
- 已安装 AI 工具，并至少连接了一个 AI 模型（OpenAI、Anthropic Claude 或其他支持的 LLM）

## 获取 ONLYOFFICE Apps API 密钥

要从 ONLYOFFICE Apps 实例获取 API 密钥：

1. 以管理员身份登录您的 ONLYOFFICE Apps 门户
2. 单击左侧面板底部的**开发者工具**，然后选择 **API 密钥**
3. 创建新的 API 密钥或使用现有密钥
4. 复制 API 密钥以在配置中使用

## 配置

:::note
以下步骤适用于 10.0 之前的 ONLYOFFICE 桌面编辑器版本。从 10.0 版本开始，MCP 服务器在 **AI Tools** → **Settings** → **MCP Servers** 中配置。有关最新步骤，请参阅[连接到 ONLYOFFICE 桌面编辑器](/docspace/mcp-server/getting-started/clients#connect-to-onlyoffice-desktop-editors)。
:::

### 步骤 1：访问 MCP 配置

1. 打开 ONLYOFFICE 桌面编辑器
2. 在左侧面板中点击 **AI 工具**。如果尚未安装 AI 工具，请点击**接受并安装**，然后重新启动应用程序
3. 连接 AI 模型。在 **AI 聊天**面板中选择提供商，输入其 API 密钥，选择模型，然后点击**添加模型**。您也可以稍后在**设置** → **AI 模型**中完成此操作。在至少添加一个 AI 模型之前，**MCP 服务器**设置不可用
4. 在左侧面板中点击**设置**，然后转到 **MCP 服务器**
5. 点击**编辑配置**

![访问 MCP 配置](/assets/images/desktop/step1.png#gh-light-mode-only)![访问 MCP 配置](/assets/images/desktop/step1.dark.png#gh-dark-mode-only)

### 步骤 2：添加 ONLYOFFICE Apps 服务器配置

输入以下 JSON 配置，将占位符值替换为您的 ONLYOFFICE Apps 详细信息：

```json
{
  "mcpServers": {
    "onlyoffice-apps": {
      "command": "docker",
      "args": [
        "run",
        "--interactive",
        "--rm",
        "--env", "DOCSPACE_BASE_URL",
        "--env", "DOCSPACE_API_KEY",
        "onlyoffice/docspace-mcp"
      ],
      "env": {
        "DOCSPACE_BASE_URL": "https://your-instance.onlyoffice.com",
        "DOCSPACE_API_KEY": "your-api-key"
      }
    }
  }
}
```

### 配置参数

- **DOCSPACE_BASE_URL**：ONLYOFFICE Apps 实例的完整 URL（例如 `https://your-company.onlyoffice.com`）
- **DOCSPACE_API_KEY**：从开发者工具部分获取的 ONLYOFFICE Apps API 密钥

![添加 ONLYOFFICE Apps 服务器配置](/assets/images/desktop/step2.png#gh-light-mode-only)![添加 ONLYOFFICE Apps 服务器配置](/assets/images/desktop/step2.dark.png#gh-dark-mode-only)

### 步骤 3：保存并验证

1. 点击**保存**。服务器将自动启动并显示在**权限**部分中
2. 确保 **onlyoffice-apps** 开关已打开
3. 要启用或禁用单个工具，请展开服务器条目并使用工具旁边的开关

现在您可以在 **AI 聊天**中使用 ONLYOFFICE Apps 工具。

![保存并验证](/assets/images/desktop/step3.png#gh-light-mode-only)![保存并验证](/assets/images/desktop/step3.dark.png#gh-dark-mode-only)

## 可用工具

连接后，ONLYOFFICE Apps MCP 服务器提供各种文档管理操作工具：

- **文件操作**：列出、读取、创建、更新和删除文件
- **文件夹管理**：浏览文件夹结构，创建和管理文件夹
- **搜索**：在 ONLYOFFICE Apps 中查找文档和文件夹
- **共享**：管理文档共享和权限
- **元数据**：访问和修改文档属性

## 使用示例

连接 ONLYOFFICE Apps MCP 服务器后，您可以在 AI 聊天中使用自然语言命令：

- “列出共享文件夹中的所有文档”
- “在 ONLYOFFICE Apps 中创建一个名为‘Q1 报告’的新文件夹”
- “查找上周修改的所有演示文稿”
- “将文档‘Budget 2026.xlsx’共享给 john@example.com”
- “显示营销文件夹的内容”

AI 聊天将自动使用 ONLYOFFICE Apps MCP 工具执行这些命令并显示结果。

## 故障排除

### 服务器无法启动

- 验证 Docker 是否已安装并运行：`docker --version`
- 检查 Docker 守护进程状态
- 确保 Docker 镜像可用：`docker pull onlyoffice/docspace-mcp`

### 身份验证错误

- 验证您的 API 密钥是否正确且未过期
- 检查 ONLYOFFICE Apps 实例 URL 是否可从您的计算机访问
- 确保 API 密钥对您尝试执行的操作具有适当的权限

### 连接超时

- 验证您的 ONLYOFFICE Apps 实例是否在线且可访问
- 检查可能阻止连接的防火墙设置
- 确保您的网络允许连接到 ONLYOFFICE Apps URL

### 工具未显示

- 保存配置后重新启动 ONLYOFFICE 桌面编辑器
- 检查**权限**部分中服务器旁边是否没有错误图标。展开服务器条目可查看连接日志
- 查看 Docker 日志：`docker logs <container-id>`

## 注意事项

- ONLYOFFICE Apps MCP 服务器目前处于预览阶段，可能会发生变化
- 所有操作都使用您的 API 密钥权限执行
- 需要与 ONLYOFFICE Apps 实例的网络连接
- 服务器在 Docker 容器中本地运行，不存储凭据
- 可以使用不同的服务器名称配置多个 ONLYOFFICE Apps 实例

## 其他资源

有关 ONLYOFFICE Apps MCP 服务器的更多信息：

- [ONLYOFFICE Apps API 文档](/docspace)
- [模型上下文协议规范](https://modelcontextprotocol.io)
- [ONLYOFFICE 博客：将 DocSpace MCP 服务器连接到桌面编辑器](https://www.onlyoffice.com/blog/2025/12/connect-onlyoffice-docspace-mcp-server-to-desktop-editors?from=api)
