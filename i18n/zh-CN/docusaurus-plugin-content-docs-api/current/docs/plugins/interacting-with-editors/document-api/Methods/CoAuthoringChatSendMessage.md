# CoAuthoringChatSendMessage

向协作聊天发送消息。

## 语法

```javascript
expression.CoAuthoringChatSendMessage(sText);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 消息文本。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("CoAuthoringChatSendMessage", [Asc.scope.meeting_info], function (isTrue) {
    if (isTrue)
        alert ("Meeting was created");
    else
        alert ("Meeting was create, please update SDK for checking info about created meeting in chat.");
});
```
