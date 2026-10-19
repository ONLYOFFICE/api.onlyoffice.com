# RemoveElement

使用指定的位置移除元素。

继承自 [ApiDocumentContent.RemoveElement](../../ApiDocumentContent/Methods/RemoveElement.md)。

## 语法

```javascript
expression.RemoveElement(nPos);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 元素在文档中或其他元素内部的编号（位置）。 |

## 返回值

boolean

## 示例

在文档中移除指定位置的段落。

```javascript editor-docx
// How do I delete a specific paragraph by its index in a document?

// Target and drop one paragraph out of several without affecting the rest in a document.

let doc = Api.GetDocument();
let paragraph0 = doc.GetElement(0);
paragraph0.AddText("This is paragraph #1.");
for (let i = 0; i < 4; ++i) {
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("This is paragraph #" + (i + 2) + ".");
	doc.Push(paragraph);
}
doc.RemoveElement(2);
let paragraph = Api.CreateParagraph();
paragraph.AddText("We removed paragraph #3, check that out above.");
doc.Push(paragraph);
```
