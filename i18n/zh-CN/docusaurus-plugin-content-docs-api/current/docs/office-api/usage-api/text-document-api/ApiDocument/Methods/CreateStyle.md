# CreateStyle

创建具有指定类型和名称的新样式。如果存在同名样式，它将被新样式替换。

## 语法

```javascript
expression.CreateStyle(sStyleName, sType);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStyleName | 必需 | string |  | 将创建的样式的名称。 |
| sType | 可选 | [StyleType](../../Enumeration/StyleType.md) | "paragraph" | 样式将应用于的文档元素。 |

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md)

## 示例

此示例创建具有 "Heading 1" 类型和 "paragraph" 名称的新样式。

```javascript editor-docx
// How to create a paragraph and set its style as a heading.

// Set style of the paragraph.

let doc = Api.GetDocument();
let heading1Style = doc.CreateStyle("Heading 1", "paragraph");
let paraPr = heading1Style.GetParaPr();
paraPr.SetKeepNext(true);
paraPr.SetKeepLines(true);
paraPr.SetSpacingAfter(240);
let textPr = heading1Style.GetTextPr();
textPr.SetColor(Api.HexColor('#FF6800'));
textPr.SetFontSize(40);
textPr.SetFontFamily("Calibri Light");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(heading1Style);
paragraph.AddText("This is a heading with a style created above");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a text.");
doc.Push(paragraph);
```
