---
sidebar_position: 1
---

# DocSpace MCP

ONLYOFFICE DocSpace MCP 服务器允许桌面编辑器中的 AI 代理与您的 DocSpace 实例交互，通过自然语言命令实现文档管理操作。

## 先决条件

在连接 DocSpace MCP 服务器之前，请确保您具有：

- **ONLYOFFICE 桌面编辑器** 9.2 或更高版本
- 访问您的 ONLYOFFICE DocSpace 实例（SaaS 或本地部署）
- DocSpace 的有效 API 密钥
- 在您的计算机上安装并运行 Docker
- 已配置的 AI 提供商（OpenAI、Anthropic Claude 或其他支持的 LLM）

## 获取 DocSpace API 密钥

要从 DocSpace 实例获取 API 密钥：

1. 以管理员身份登录您的 DocSpace 门户
2. 导航到 **设置** → **开发者工具** → **API**
3. 创建新的 API 密钥或使用现有密钥
4. 复制 API 密钥以在配置中使用

## 配置

### 步骤 1：访问 MCP 配置

1. 打开 ONLYOFFICE 桌面编辑器
2. 导航到开始窗口
3. 转到 **AI 代理** → **MCP 服务器**
4. 点击 **编辑配置**

![访问 MCP 配置](/assets/images/desktop/step1.png#gh-light-mode-only)![API keys](/assets/images/desktop/step1.dark.png#gh-dark-mode-only)

### 步骤 2：添加 DocSpace 服务器配置

输入以下 JSON 配置，将占位符值替换为您的 DocSpace 详细信息：

```json
{
  "mcpServers": {
    "onlyoffice-docspace": {
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
        "DOCSPACE_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

### 配置参数

- **DOCSPACE_BASE_URL**：DocSpace 实例的完整 URL（例如 `https://your-company.onlyoffice.com`）
- **DOCSPACE_API_KEY**：从开发者工具部分获取的 DocSpace API 密钥

![添加 DocSpace 服务器配置](/assets/images/desktop/step2.png#gh-light-mode-only)![API keys](/assets/images/desktop/step2.dark.png#gh-dark-mode-only)

### 步骤 3：保存并验证

1. 点击 **保存** 以应用配置
2. DocSpace MCP 服务器应出现在您的服务器列表中
3. 验证服务器状态显示为已连接
4. 启用您想要使用的工具

![保存并验证](/assets/images/desktop/step3.png#gh-light-mode-only)![API keys](/assets/images/desktop/step3.dark.png#gh-dark-mode-only)

## 可用工具

连接后，DocSpace MCP 服务器提供各种文档管理操作工具：

- **文件操作**：列出、读取、创建、更新和删除文件
- **文件夹管理**：浏览文件夹结构，创建和管理文件夹
- **搜索**：在 DocSpace 中查找文档和文件夹
- **共享**：管理文档共享和权限
- **元数据**：访问和修改文档属性

## 使用示例

连接 DocSpace MCP 服务器后，您可以在 AI 代理中使用自然语言命令：

- "列出共享文件夹中的所有文档"
- "在 DocSpace 中创建一个名为 'Q1 报告' 的新文件夹"
- "查找上周修改的所有演示文稿"
- "将文档 'Budget 2026.xlsx' 共享给 john@example.com"
- "显示营销文件夹的内容"

AI 代理将自动使用 DocSpace MCP 工具执行这些命令并显示结果。

## 故障排除

### 服务器无法启动

- 验证 Docker 是否已安装并运行：`docker --version`
- 检查 Docker 守护进程状态
- 确保 Docker 镜像可用：`docker pull onlyoffice/docspace-mcp`

### 身份验证错误

- 验证您的 API 密钥是否正确且未过期
- 检查 DocSpace 实例 URL 是否可从您的计算机访问
- 确保 API 密钥对您尝试执行的操作具有适当的权限

### 连接超时

- 验证您的 DocSpace 实例是否在线且可访问
- 检查可能阻止连接的防火墙设置
- 确保您的网络允许连接到 DocSpace URL

### 工具未显示

- 保存配置后重新启动 ONLYOFFICE 桌面编辑器
- 检查 MCP 服务器状态是否显示为"已连接"
- 查看 Docker 日志：`docker logs <container-id>`

## 注意事项

- DocSpace MCP 服务器目前处于预览阶段，可能会发生变化
- 所有操作都使用您的 API 密钥权限执行
- 需要与 DocSpace 实例的网络连接
- 服务器在 Docker 容器中本地运行，不存储凭据
- 可以使用不同的服务器名称配置多个 DocSpace 实例

## 其他资源

有关 DocSpace MCP 服务器的更多信息：

- [ONLYOFFICE DocSpace API 文档](https://api.onlyoffice.com/docspace)
- [模型上下文协议规范](https://modelcontextprotocol.io)
- [ONLYOFFICE 博客：将 DocSpace MCP 服务器连接到桌面编辑器](https://www.onlyoffice.com/blog/2025/12/connect-onlyoffice-docspace-mcp-server-to-desktop-editors)
