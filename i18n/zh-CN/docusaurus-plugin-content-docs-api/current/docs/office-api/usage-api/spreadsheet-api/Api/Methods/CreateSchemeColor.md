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

此示例从可用方案中选择一个来创建复杂配色方案。

```javascript editor-xlsx
// Get a color scheme using its name.

// How to create a color from the schemes.

let worksheet = Api.GetActiveSheet();
let schemeColor = Api.CreateSchemeColor("dk1");
let fill = Api.CreateSolidFill(schemeColor);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("curvedUpArrow", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
