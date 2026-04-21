# CreateSchemeColor

从可用的配色方案中选择创建复杂配色方案。

## 语法

```javascript
expression.CreateSchemeColor(schemeColorId);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| schemeColorId | 必需 | [SchemeColorId](../../Enumeration/SchemeColorId.md) |  | 配色方案标识符。 |

## 返回值

[ApiSchemeColor](../../ApiSchemeColor/ApiSchemeColor.md)

## 示例

在 PDF 文档中创建标识符为 'dk1' 的配色方案颜色。

```javascript editor-pdf
// How to create a new scheme color in a PDF document.

// Add a scheme color to create a solid fill in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const schemeColor = Api.CreateSchemeColor("dk1");
const fill = Api.CreateSolidFill(schemeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("curvedUpArrow", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);
```
