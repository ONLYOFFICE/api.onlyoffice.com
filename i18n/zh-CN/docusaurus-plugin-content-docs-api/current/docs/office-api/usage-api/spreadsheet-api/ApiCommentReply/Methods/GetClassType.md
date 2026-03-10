# GetClassType

返回 ApiCommentReply 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"commentReply"

## 示例

此示例获取类类型并将其插入到表格中。

```javascript editor-xlsx
// How to get a class type of ApiCommentReply.

// Get a class type of ApiCommentReply and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
let type = reply.GetClassType();
worksheet.GetRange("A3").SetValue("Type: " + type);
```
