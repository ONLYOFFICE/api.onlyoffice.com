# GetParent

返回包含该图表目录的文档。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiTableOfFigures](../ApiTableOfFigures.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDocument](../../ApiDocument/ApiDocument.md) \| null

## 示例

获取包含图表目录的文档。

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Return the parent document of the table of figures.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let parent = tof.GetParent();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Parent class type: " + parent.GetClassType());
doc.Push(resultParagraph);
```
