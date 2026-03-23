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

此示例展示如何使用 'dk1' 标识符创建方案颜色。

```javascript editor-docx
// Creates a complex color scheme using the 'dk1' scheme identifier.

// How to create the ApiSchemeColor object and use it as a background for the ApiShape object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateSchemeColor("dk1"));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("curvedUpArrow", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(shape);
```
