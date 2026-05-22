# CreateStyle

使用指定的类型和名称创建新样式。如果已存在具有指定名称的样式，将返回该样式而不创建新样式。

## 语法

```javascript
expression.CreateStyle(styleName, type);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| styleName | 必需 | string |  | 将创建的样式的名称。 |
| type | 可选 | [StyleType](../../Enumeration/StyleType.md) | "paragraph" | 样式将应用于的文档元素。 |

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md)

## 示例

在文档中定义具有特定字体、颜色和间距的自定义段落样式。

```javascript editor-docx
// How do I create a reusable heading style and apply it to a paragraph in a document?

// Give a heading a unique color and size so it stands out visually from body text in a document.

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
