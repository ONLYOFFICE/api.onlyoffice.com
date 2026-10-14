# GetClassType

返回 ApiTableOfFigures 类的类型。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTableOfFigures](../ApiTableOfFigures.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"tableOfFigures"

## 示例

获取图表目录对象的类类型。

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Read the class type string that identifies the table of figures.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let classType = tof.GetClassType();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Class type: " + classType);
doc.Push(resultParagraph);
```
