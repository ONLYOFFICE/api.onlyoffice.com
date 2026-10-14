# SetCaption

设置生成图表目录所依据的题注标签（例如，"Figure"）。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetCaption(sCaption);
```

`expression` - 表示 [ApiTableOfFigures](../ApiTableOfFigures.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sCaption | 必需 | string |  | 题注标签。 |

## 返回值

boolean

## 示例

更改图表目录所基于的题注标签。

```javascript editor-docx
// Add a captioned table and a table of figures built from the "Figure" label.

// Rebuild the table of figures so it collects entries by the "Table" caption label instead.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
doc.Push(table);
table.AddCaption(" - Sample tables", "Table", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.SetCaption("Table");
```
