# GetClassType

返回 ApiTableOfContents 类的类型。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTableOfContents](../ApiTableOfContents.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"tableOfContents"

## 示例

获取目录对象的类类型。

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Read the class type string that identifies the table of contents.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
let classType = toc.GetClassType();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Class type: " + classType);
doc.Push(resultParagraph);
```
