# SetIncludePageNumbers

指定是否在图表目录中显示页码。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetIncludePageNumbers(isInclude);
```

`expression` - 表示 [ApiTableOfFigures](../ApiTableOfFigures.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isInclude | 必需 | boolean |  | 未提供描述。 |

## 返回值

boolean

## 示例

隐藏图表目录中的页码。

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Turn page numbers off for the table of figures entries.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.SetIncludePageNumbers(false);
```
