# SetIncludeLabel

指定图表目录条目中是否包含题注标签和编号。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetIncludeLabel(isInclude);
```

`expression` - 表示 [ApiTableOfFigures](../ApiTableOfFigures.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isInclude | 必需 | boolean |  | 未提供描述。 |

## 返回值

boolean

## 示例

从图表目录条目中排除题注标签和编号。

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Rebuild the table of figures so the entries show only the caption text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.SetIncludeLabel(false);
```
