# GetParent

返回包含该目录的文档。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiTableOfContents](../ApiTableOfContents.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDocument](../../ApiDocument/ApiDocument.md) \| null

## 示例

获取包含目录的文档。

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Return the parent document of the table of contents.

	let doc = Api.GetDocument();
	let style = doc.GetStyle("Heading 1");
	let paragraph = doc.GetElement(0);
	paragraph.SetStyle(style);
	paragraph.AddText("Chapter 1");
	let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
	let parent = toc.GetParent();
	let resultParagraph = Api.CreateParagraph();
	resultParagraph.AddText("Parent class type: " + parent.GetClassType());
	doc.Push(resultParagraph);
```
