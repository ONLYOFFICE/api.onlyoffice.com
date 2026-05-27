# GetDefaultParaPr

返回当前文档中的默认段落属性集。

## 语法

```javascript
expression.GetDefaultParaPr();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParaPr](../../ApiParaPr/ApiParaPr.md)

## 示例

读取并修改文档中的默认段落格式属性。

```javascript editor-docx
// How do I change the default line spacing and paragraph spacing for all paragraphs in a document?

// Adjust justification and spacing at the style level so every new paragraph inherits the settings in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = doc.GetDefaultParaPr();
paraPr.SetSpacingLine(276, "auto");
paraPr.SetSpacingAfter(200);
let normalStyle = doc.GetDefaultStyle("paragraph");
paraPr = normalStyle.GetParaPr();
paraPr.SetSpacingLine(240, "auto");
paraPr.SetJc("both");
paragraph.AddText("This is just a text.");
```
