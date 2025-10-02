# 发送协作聊天消息

向协同编辑聊天中发送一条消息。

## 语法

```javascript
expression.CoAuthoringChatSendMessage(sText);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **描述** |
| -------- | ------------- | ------------ | ---------- | -------- |
| sText | 必填 | string |  | 消息文本内容。 |

## 返回值

该方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("CoAuthoringChatSendMessage", [Asc.scope.meeting_info], function (isTrue) {
    if (isTrue)
        alert ("Meeting was created");
    else
        alert ("Meeting was create, please update SDK for checking info about created meeting in chat.");
});
```
