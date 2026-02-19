---
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 连接 MCP 服务器

ONLYOFFICE 桌面编辑器 9.2 及更高版本支持连接 MCP（模型上下文协议）服务器，以通过自定义工具和集成扩展 AI 功能。MCP 允许 AI 代理通过标准化协议与各种服务和数据源交互。

## AI 代理功能

桌面编辑器中的 AI 代理提供多项强大功能：

1. **聊天界面** - 与文档和数据进行自然语言交互
2. **网络搜索** - 集成网络搜索功能，获取实时信息
3. **MCP 服务器** - 连接自定义或社区 MCP 服务器以扩展功能
4. **内置工具** - 桌面编辑器包含用于文档操作的原生工具（生成、表单、演示文稿）

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

- **ONLYOFFICE 桌面编辑器** 9.2 或更高版本
- 已配置的 AI 提供商（OpenAI、Anthropic Claude 或其他支持的 LLM）
- MCP 服务器所需的依赖项（例如 Docker、Node.js 或 Python）

**重要提示：** 只有在桌面编辑器中建立 AI 连接后，MCP 服务器选项卡才会显示。

## 配置步骤

按照以下步骤将 MCP 服务器连接到桌面编辑器：

### 步骤 1：访问 MCP 配置

1. 打开 ONLYOFFICE 桌面编辑器
2. 导航到开始窗口
3. 转到 **AI 代理** → **MCP 服务器** 部分
4. 点击 **编辑配置** 打开 JSON 编辑器

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

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 参数          | 类型   | 描述                                                                |
|---------------|--------|---------------------------------------------------------------------|
| mcpServers    | object | 包含所有 MCP 服务器配置的根对象。                                    |
| server-name   | object | MCP 服务器的唯一标识符。替换为您的服务器名称（例如 "onlyoffice-docspace"）。|
| command       | string | 启动 MCP 服务器的命令（例如 "docker"、"node"、"python"）。            |
| args          | array  | 传递给命令的命令行参数数组。                                         |
| env           | object | MCP 服务器所需的环境变量（例如 API 密钥、URL）。                      |

```mdx-code-block
</APITable>
```

## 实际示例

#### ONLYOFFICE DocSpace MCP

连接到 DocSpace 进行文档管理操作：

```json
{
  "mcpServers": {
    "onlyoffice-docspace": {
      "env": {
        "DOCSPACE_BASE_URL": "https://your-docspace-instance.onlyoffice.com",
        "DOCSPACE_API_KEY": "your-api-key-here"
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

#### 本地自定义 MCP 服务器

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

#### 多个 MCP 服务器

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
    "onlyoffice-docspace": {
      "env": {
        "DOCSPACE_BASE_URL": "https://your-docspace-instance.onlyoffice.com",
        "DOCSPACE_API_KEY": "your-api-key-here"
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

1. 输入配置后，点击 **保存**
2. 服务器将出现在您的 MCP 服务器列表中
3. 启用或禁用服务器提供的单个工具
4. 您还可以使用切换控件一次管理所有工具

### 步骤 4：使用 MCP 服务器

连接并启用后：

1. 在桌面编辑器中打开 **AI 代理** 面板
2. 输入与服务器功能相对应的自然语言命令
3. AI 代理将自动使用可用的 MCP 工具
4. 结果直接显示在聊天界面中
5. 您可以复制对话或将其保存为 .docx 文件

## 可用的 MCP 服务器

桌面编辑器支持各种扩展 AI 功能的 MCP 服务器：

- [ONLYOFFICE DocSpace](./docspace-mcp.md) - 连接到 DocSpace 进行文档管理
- 社区 MCP 服务器 - 任何遵循协议规范的 MCP 兼容服务器

## 故障排除

常见问题和解决方案：

- **MCP 服务器选项卡不可见**：确保您首先配置了 AI 提供商连接
- **服务器无法启动**：检查是否安装并运行了所有必需的依赖项
- **身份验证错误**：验证 `env` 部分中的 API 密钥和凭据是否正确
- **工具未显示**：保存配置后重新启动桌面编辑器

## 注意事项

- MCP 服务器支持目前处于预览阶段，在未来版本中可能会发生变化
- 服务器配置存储在您的本地计算机上
- 每个服务器在自己的进程中运行，并通过模型上下文协议进行通信
- 可以同时配置多个 MCP 服务器
