# SetUseHyperlinks

指定是否将条目设置为超链接格式。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetUseHyperlinks(isUseHyperlinks);
```

`expression` - 表示 [ApiTableOfFigures](../ApiTableOfFigures.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUseHyperlinks | 必需 | boolean |  | 未提供描述。 |

## 返回值

boolean

## 示例

将图表目录条目设置为超链接格式。

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Enable hyperlinks so each entry links to its caption.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.SetUseHyperlinks(true);
```
