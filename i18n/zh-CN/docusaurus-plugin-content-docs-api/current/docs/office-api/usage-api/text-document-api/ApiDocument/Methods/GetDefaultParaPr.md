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

此示例展示如何获取当前文档中的默认段落属性集。

```javascript editor-docx
// How to update the default paragraph properties such as spacing, justification, etc.

// Display the paragraph text after changing its default properties.

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
