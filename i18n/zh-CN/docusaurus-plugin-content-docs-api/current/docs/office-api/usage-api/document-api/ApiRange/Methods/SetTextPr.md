# SetTextPr

为当前范围设置文本属性。

## 语法

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 将应用于当前范围的文本属性。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例为范围设置文本属性。

```javascript editor-docx
// How to get text property from a paragraph and apply it for a range.

// Get a range, add properties like font style to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let textPr = paragraph.GetTextPr();
textPr.SetItalic(true);
let range = doc.GetRange(0, 24);
range.SetTextPr(textPr);
```
