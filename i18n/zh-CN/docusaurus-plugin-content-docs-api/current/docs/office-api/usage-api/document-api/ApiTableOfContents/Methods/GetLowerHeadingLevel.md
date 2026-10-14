# GetLowerHeadingLevel

返回目录中包含的最低（最内层）标题级别。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetLowerHeadingLevel();
```

`expression` - 表示 [ApiTableOfContents](../ApiTableOfContents.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

获取目录中包含的最低标题级别。

```javascript editor-docx
// Insert a table of contents that spans the heading levels 1 through 3.

// Read the lower (innermost) heading level of the table of contents.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvlStart": 1, "OutlineLvls": 3}});
let lowerLevel = toc.GetLowerHeadingLevel();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Lower heading level: " + lowerLevel);
doc.Push(resultParagraph);
```
