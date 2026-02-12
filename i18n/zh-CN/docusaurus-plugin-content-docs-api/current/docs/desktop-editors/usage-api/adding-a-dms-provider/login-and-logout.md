---
sidebar_position: -5
---

# 登录和登出

在开始处理存储在云盘中的文档之前，您需要先登录到云盘。

## 登录 {#login}

使用 [execCommand](./execcommand.md) 方法在**已连接的云盘**列表中显示云盘。当发送 *portal:login* 命令时，云盘将被注册并显示在**已连接的云盘**页面上。在登录云盘后可访问的所有页面上调用此命令。参数以包含序列化 *json* 的字符串格式指定，如下所示：

```json
{
  "displayName": "用户名",
  "email": "用户邮箱地址",
  "domain": "域名",
  "provider": "提供商",
  "uiTheme": "主题",
  "userId": "用户ID"
}
```

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```
| 参数        | 类型   | 示例                        | 描述                                                                                                                                                                                                   |
| ----------- | ------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| displayName | string | `"John Smith"`              | 定义在*已连接的云盘*页面上显示的用户名。**此字段为必填项。**                                                                                                                                            |
| email       | string | `"john@example.com"`        | 定义在*已连接的云盘*页面上显示的用户邮箱。                                                                                                                                                              |
| domain      | string | `"https://exampledomain.com"` | 定义云盘名称和云盘入口点。**此字段为必填项。**                                                                                                                                                          |
| provider    | string | `"onlyoffice"`              | 定义用于在 JavaScript 命令中引用桌面应用的提供商 ID（与 [配置](adding-a-dms-provider.md) 中的相同）。**此字段为必填项。**                                                                                     |
| uiTheme     | string | `"theme-dark"`              | 定义编辑器主题设置。可以通过两种方式设置：<br /><br />• **主题 ID** – 用户通过主题 ID 设置主题参数（*theme-light、theme-classic-light、theme-dark、theme-contrast-dark*）。<br /><br />• **默认主题** – 将设置默认的深色或浅色主题值（*default-dark、default-light*）。<br /><br />默认的浅色主题是 *theme-classic-light*。第一种方式优先级更高。<br /><br />除了可用的编辑器主题外，用户还可以自定义应用界面的颜色主题。 |
| userId      | string | `"78e1e841"`                | 定义用户 ID。**此字段为必填项。**                                                                                                                                                                       |

```mdx-code-block
</APITable>
```

#### 示例

```ts
const params = {
  displayName: "John Smith",
  email: "john@example.com",
  domain: "https://exampledomain.com",
  provider: "onlyoffice",
  uiTheme: "theme-dark",
  userId: "78e1e841",
};
window.AscDesktopEditor.execCommand("portal:login", JSON.stringify(params));
```

## 登出 {#logout}

使用 [execCommand](./execcommand.md) 方法从**已连接的云盘**列表中移除云盘。当发送 *portal:logout* 命令时，该云盘将从**已连接的云盘**页面的列表中移除。此域名的 Cookie 将被清除。参数以包含序列化 *json* 的字符串格式指定，如下所示：

```json
{
  "domain": "域名"
}
```

```mdx-code-block
<APITable>
```

| 参数   | 类型   | 示例                        | 描述                      |
|--------|--------|-----------------------------|---------------------------|
| domain | string | `https://exampledomain.com` | 定义云盘名称和云盘入口点。 |

```mdx-code-block
</APITable>
```

#### 示例

```ts
window.AscDesktopEditor.execCommand("portal:logout", JSON.stringify({
  domain: "https://exampledomain.com",
}));
```
