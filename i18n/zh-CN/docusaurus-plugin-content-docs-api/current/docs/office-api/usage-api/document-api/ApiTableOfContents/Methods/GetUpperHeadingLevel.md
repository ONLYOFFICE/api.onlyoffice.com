# GetUpperHeadingLevel

返回目录中包含的最高（最外层）标题级别。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetUpperHeadingLevel();
```

`expression` - 表示 [ApiTableOfContents](../ApiTableOfContents.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

获取目录中包含的最高标题级别。

```javascript editor-docx
// Insert a table of contents that spans the heading levels 2 through 4.

// Read the upper (outermost) heading level of the table of contents.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvlStart": 2, "OutlineLvls": 4}});
let upperLevel = toc.GetUpperHeadingLevel();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Upper heading level: " + upperLevel);
doc.Push(resultParagraph);
```
