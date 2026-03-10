# SetText

设置批注文本。

## 语法

```javascript
expression.SetText(text);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 批注的新文本。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置批注文本。

```javascript editor-xlsx
// How to change a comment text.

// Replace a comment text with a new text.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.SetText("New comment text");
```
