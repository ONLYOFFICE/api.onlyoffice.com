# SetParaPr

设置当前样式的段落属性。

## 语法

```javascript
expression.SetParaPr(paraPr);
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paraPr | 必需 | [ApiParaPr](../../ApiParaPr/ApiParaPr.md) |  | 将要设置的段落属性。 |

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md)

## 示例

将段落设置应用于文档中的指定样式。

```javascript editor-docx
// Create a paragraph, add a text to it, and set the line spacing and justify in a document.

// Specify the text properties object and apply its settings to the style object in a document.

let doc = Api.GetDocument();
let normalStyle = doc.GetDefaultStyle("paragraph");
let paraPr = Api.CreateParaPr();
paraPr.SetSpacingLine(480, "auto");
paraPr.SetJc("both");
normalStyle.SetParaPr(paraPr);

let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the line spacing, text justification and indent set using the paragraph style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide paragraph styles are applied.");
doc.Push(paragraph);
```
