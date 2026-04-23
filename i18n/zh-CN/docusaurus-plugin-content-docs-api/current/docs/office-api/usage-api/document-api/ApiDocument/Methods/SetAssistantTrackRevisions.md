# SetAssistantTrackRevisions

在文档中启用或禁用 AI 辅助修订跟踪。

## 语法

```javascript
expression.SetAssistantTrackRevisions(isTrack, assistantName);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isTrack | 必需 | boolean |  | 指定修订跟踪模式是否已设置。 |
| assistantName | 必需 | string |  | AI 助手名称。 |

## 返回值

boolean