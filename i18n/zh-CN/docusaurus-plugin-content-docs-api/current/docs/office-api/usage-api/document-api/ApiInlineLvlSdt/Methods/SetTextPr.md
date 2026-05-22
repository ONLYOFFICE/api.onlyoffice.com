# SetTextPr

将文本设置应用于内容控件的内容。

## 语法

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 将设置到内容控件内容的属性。 |

## 返回值

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## 示例

在文档中为内联内容控件应用文本格式。

```javascript editor-docx
// How do I set font size and bold style on an inline content control in a document?

// Style an inline text field with custom typography to highlight it visually in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control with the font size set to 30 and the font weight set to bold.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
inlineLvlSdt.SetTextPr(textPr);
```
