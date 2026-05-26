---
sidebar_position: -7
---

# 发送通知

桌面应用可以发送文本消息给用户显示。为此，需声明以下函数：

```ts
window.onSystemMessage = function onSystemMessage(e) {};
```

`e` 对象具有以下结构：

```json
{
  "type": "operation",
  "opMessage": "加载中...",
  "opType": 1
}
```

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 参数        | 类型   | 描述                                                                                                                     |
|-------------|--------|-------------------------------------------------------------------------------------------------------------------------|
| e           | object  | 消息参数。                                                                                                           |
| e.type      | string  | 检查消息类型是否为 *operation*。如果不是，则不向用户显示任何消息。                                                           |
| e.opMessage | string  | 将向用户显示的消息。                                                                                                  |
| e.opType    | integer | 如果 `opMessage` 参数未定义，则根据操作类型确定消息。设置为 **0** 用于通知用户文件上传，设置为 **1** 用于通知用户文件加密。     |

```mdx-code-block
</APITable>
```

## 示例

```ts
window.onSystemMessage({type: "operation", opType: 1});
```

## 更新文件状态

桌面应用可以发送关于文件编辑完成的通知。

声明以下全局函数：

```ts
window.DesktopUpdateFile = function DesktopUpdateFile() {};
```
