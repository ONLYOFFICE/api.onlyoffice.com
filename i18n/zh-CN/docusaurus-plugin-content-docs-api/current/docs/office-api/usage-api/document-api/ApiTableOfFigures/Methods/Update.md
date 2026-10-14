# Update

更新图表目录。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Update(bOnlyPageNumbers);
```

`expression` - 表示 [ApiTableOfFigures](../ApiTableOfFigures.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bOnlyPageNumbers | 可选 | boolean | false | 未提供描述。 |

## 返回值

boolean

## 示例

在文档内容更改后刷新图表目录。

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Rebuild the table of figures so it reflects the current captions and page numbers.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.Update();
```
