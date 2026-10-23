---
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import APITable from '@site/src/components/APITable/APITable';

# 连接 MCP 服务器

ONLYOFFICE 桌面编辑器支持连接 MCP（模型上下文协议）服务器，以通过自定义工具和集成扩展 AI 功能。MCP 允许 AI 代理通过标准化协议与各种服务和数据源交互。

桌面编辑器从 9.2 版本开始支持 MCP 服务器，但仅限于桌面聊天。10.0 版本推出了 AI 工具附加组件，将 MCP 支持扩展到编辑器中。本指南介绍 10.0 及更高版本中的配置方法。

## AI 聊天功能

桌面编辑器中的 AI 聊天提供多项强大功能：

1. **聊天界面**：与文档和数据进行自然语言交互
2. **网络搜索**：集成网络搜索功能，获取实时信息
3. **MCP 服务器**：连接自定义或社区 MCP 服务器以扩展功能
4. **内置工具**：桌面编辑器包含用于文档操作的原生工具（生成、表单、演示文稿）

### 查看可用工具

要查看所有可用工具（包括内置工具和 MCP）：

**方法 1：控制台命令**

在桌面编辑器中打开浏览器控制台并执行：

```javascript
JSON.parse(AscDesktopEditor.getToolFunctions());
```

这将返回一个包含所有可用函数描述的对象。

**方法 2：源代码**

在[桌面 SDK 存储库](https://github.com/ONLYOFFICE/desktop-sdk/blob/master/ChromiumBasedEditors/lib/tools/functions)中查看内置工具定义。

每个文件夹（`internal` 除外）都包含一个带有函数描述的 JSON 文件。

## 先决条件

在连接 MCP 服务器之前，请确保您具有：

- **ONLYOFFICE 桌面编辑器** 10.0 或更高版本
- 已安装 AI 工具，并至少连接了一个 AI 模型（OpenAI、Anthropic Claude 或其他支持的 LLM）
- MCP 服务器所需的依赖项（例如 Docker、Node.js 或 Python）

**重要提示：** 在桌面编辑器中至少添加一个 AI 模型之前，**MCP 服务器**设置不可用。

## 配置步骤

按照以下步骤将 MCP 服务器连接到桌面编辑器：

### 步骤 1：访问 MCP 配置

1. 打开 ONLYOFFICE 桌面编辑器
2. 在左侧面板中点击 **AI 工具**。如果尚未安装 AI 工具，请点击**接受并安装**，然后重新启动应用程序
3. 连接 AI 模型。在 **AI 聊天**面板中选择提供商，输入其 API 密钥，选择模型，然后点击**添加模型**。您也可以稍后在**设置** → **AI 模型**中完成此操作
4. 在左侧面板中点击**设置**，然后转到 **MCP 服务器**
5. 点击**编辑配置**打开 JSON 编辑器

### 步骤 2：添加服务器配置

以 JSON 格式输入您的 MCP 服务器配置。配置结构取决于服务器的启动方式：

<Tabs>
  <TabItem value="docker" label="Docker">
    ```json
    {
      "mcpServers": {
        "server-name": {
          "command": "docker",
          "args": [
            "run",
            "--interactive",
            "--rm",
            "--env", "VARIABLE_NAME",
            "--env", "API_KEY",
            "docker-image-name"
          ],
          "env": {
            "VARIABLE_NAME": "value",
            "API_KEY": "your-api-key"
          }
        }
      }
    }
    ```

    :::note
    必须安装并运行 Docker。
    :::

  </TabItem>
  <TabItem value="node" label="Node.js">
    ```json
    {
      "mcpServers": {
        "server-name": {
          "command": "node",
          "args": ["/path/to/server/index.js"],
          "env": {
            "API_KEY": "your-api-key"
          }
        }
      }
    }
    ```
  </TabItem>
  <TabItem value="python" label="Python">
    ```json
    {
      "mcpServers": {
        "server-name": {
          "command": "python",
          "args": ["-m", "mcp_server_package"],
          "env": {
            "API_KEY": "your-api-key"
          }
        }
      }
    }
    ```
  </TabItem>
  <TabItem value="npx" label="npx">
    ```json
    {
      "mcpServers": {
        "server-name": {
          "command": "npx",
          "args": ["--yes", "package-name"],
          "env": {
            "API_KEY": "your-api-key"
          }
        }
      }
    }
    ```

    :::note
    使用 npx 运行包而无需全局安装。`--yes` 标志会在包不存在时自动安装。
    :::

  </TabItem>
</Tabs>

### 配置参数

<APITable>

| 参数          | 类型   | 描述                                                                |
|---------------|--------|---------------------------------------------------------------------|
| mcpServers    | object | 包含所有 MCP 服务器配置的根对象。                                    |
| server-name   | object | MCP 服务器的唯一标识符。替换为您的服务器名称（例如 "onlyoffice-apps"）。|
| command       | string | 启动 MCP 服务器的命令（例如 "docker"、"node"、"python"）。            |
| args          | array  | 传递给命令的命令行参数数组。                                         |
| env           | object | MCP 服务器所需的环境变量（例如 API 密钥、URL）。                      |

</APITable>

## 实际示例

### ONLYOFFICE Apps MCP

连接到 ONLYOFFICE Apps 进行文档管理操作：

```json
{
  "mcpServers": {
    "onlyoffice-apps": {
      "env": {
        "DOCSPACE_BASE_URL": "https://your-docspace-instance.onlyoffice.com",
        "DOCSPACE_API_KEY": "your-api-key"
      },
      "command": "npx",
      "args": [
        "--yes",
        "@onlyoffice/docspace-mcp"
      ]
    }
  }
}
```

### 本地自定义 MCP 服务器

从本地计算机运行自定义 Node.js MCP 服务器：

```json
{
  "mcpServers": {
    "mcp_local": {
      "command": "node",
      "args": [
        "D:/MCP_EXAMPLE/index.js"
      ]
    }
  }
}
```

:::tip
创建自己的自定义 MCP 服务器：
1. 在系统上安装 Node.js
2. 为 MCP 服务器创建新目录
3. 运行 `npm install` 安装依赖项
4. 按照 MCP 协议实现自定义工具
5. 在配置中引用服务器入口点的路径
:::

### 多个 MCP 服务器

同时配置多个服务器：

```json
{
  "mcpServers": {
    "mcp_local": {
      "command": "node",
      "args": [
        "D:/MCP_EXAMPLE/index.js"
      ]
    },
    "onlyoffice-apps": {
      "env": {
        "DOCSPACE_BASE_URL": "https://your-docspace-instance.onlyoffice.com",
        "DOCSPACE_API_KEY": "your-api-key"
      },
      "command": "npx",
      "args": [
        "--yes",
        "@onlyoffice/docspace-mcp"
      ]
    }
  }
}
```

:::note
配置多个服务器时，用逗号分隔每个服务器配置。
:::

### 步骤 3：保存并启用工具

1. 输入配置后，点击**保存**
2. 服务器将自动启动并显示在**权限**部分中
3. 确保服务器名称旁边的开关已打开
4. 要启用或禁用单个工具，请展开服务器条目并使用工具旁边的开关

### 步骤 4：使用 MCP 服务器

连接并启用后：

1. 在桌面编辑器中打开 **AI 聊天**面板
2. 输入与服务器功能相对应的自然语言命令
3. AI 聊天将自动使用可用的 MCP 工具
4. 结果直接显示在聊天界面中
5. 您可以复制对话或将其保存为 .docx 文件

## 可用的 MCP 服务器

桌面编辑器支持各种扩展 AI 功能的 MCP 服务器：

- [ONLYOFFICE Apps](./docspace-mcp.md)：连接到 ONLYOFFICE Apps 进行文档管理
- 社区 MCP 服务器：任何遵循协议规范的 MCP 兼容服务器

## 故障排除

常见问题和解决方案：

- **MCP 服务器设置不可用**：确保您首先至少添加了一个 AI 模型
- **服务器无法启动**：检查是否安装并运行了所有必需的依赖项
- **身份验证错误**：验证 `env` 部分中的 API 密钥和凭据是否正确
- **工具未显示**：保存配置后重新启动桌面编辑器

## 注意事项

- MCP 服务器支持目前处于预览阶段，在未来版本中可能会发生变化
- 服务器配置存储在您的本地计算机上
- 每个服务器在自己的进程中运行，并通过模型上下文协议进行通信
- 可以同时配置多个 MCP 服务器
