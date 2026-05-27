# HexColor

从十六进制字符串创建颜色。

## 语法

```javascript
expression.HexColor(hexString);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| hexString | 必需 | string |  | 表示颜色的十六进制字符串。 |

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

从十六进制代码定义颜色并将其作为电子表格中的形状填充应用。

```javascript editor-xlsx
// How do I use a hex color code to fill a shape in a spreadsheet?

// Paint a shape with a custom hex color in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const color = Api.HexColor('#DECADE');
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
```
