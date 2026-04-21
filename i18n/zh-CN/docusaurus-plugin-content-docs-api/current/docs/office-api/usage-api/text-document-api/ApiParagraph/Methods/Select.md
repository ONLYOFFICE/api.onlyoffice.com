# Select

选择当前段落。

## 语法

```javascript
expression.Select();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中选中段落。

```javascript editor-docx
// How to select the paragraph in a document.

// Select a paragraph with a cursor in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let result = paragraph.Select();
if (result === true) {
	paragraph.SetItalic(true);
}
```
