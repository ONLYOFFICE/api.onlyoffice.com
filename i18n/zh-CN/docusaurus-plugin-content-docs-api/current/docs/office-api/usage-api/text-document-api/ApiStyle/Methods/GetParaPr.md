# GetParaPr

返回当前样式的段落属性。

## 语法

```javascript
expression.GetParaPr();
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParaPr](../../ApiParaPr/ApiParaPr.md)

## 示例

此示例展示如何获取当前样式的段落属性。

```javascript editor-docx
// How to get properties of the paragraph.

// Display the table properties from the default paragraph style.

let doc = Api.GetDocument();
let normalStyle = doc.GetDefaultStyle("paragraph");
let paraPr = normalStyle.GetParaPr();
paraPr.SetSpacingLine(480, "auto");
paraPr.SetJc("both");
paraPr.SetIndFirstLine(720);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the line spacing, text justification and indent set using the paragraph style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide paragraph styles are applied.");
```
