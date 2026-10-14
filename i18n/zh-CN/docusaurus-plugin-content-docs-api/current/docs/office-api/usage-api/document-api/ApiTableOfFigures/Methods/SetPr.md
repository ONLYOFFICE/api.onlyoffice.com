# SetPr

将指定属性应用于图表目录并重新生成图表目录。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetPr(oTofPr);
```

`expression` - 表示 [ApiTableOfFigures](../ApiTableOfFigures.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTofPr | 必需 | [TofPr](../../Enumeration/TofPr.md) |  | 图表目录属性。 |

## 返回值

boolean

## 示例

将图表目录属性应用到现有图表目录。

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Update the page numbers, leader, caption label, and style of the table of figures at once.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.SetPr({"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dash", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": false, "TofStyle": "classic"});
```
