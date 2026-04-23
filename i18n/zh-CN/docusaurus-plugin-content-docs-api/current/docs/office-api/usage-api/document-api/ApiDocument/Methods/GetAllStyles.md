# GetAllStyles

返回当前文档的所有样式。

## 语法

```javascript
expression.GetAllStyles();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md)[]

## 示例

此示例展示如何获取当前文档的所有样式。

```javascript editor-docx
// Get all styles added to the document.

// How to retrieve all styles and display their names.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Document styles:");
paragraph.SetBold(true);
let styles = doc.GetAllStyles();
for (let i = 0; i < styles.length; i++) {
	paragraph = Api.CreateParagraph();
	paragraph.AddText(styles[i].GetName());
	doc.AddElement(i + 1, paragraph);
}
```
