# ThemeColor

创建主题颜色。

## 语法

```javascript
expression.ThemeColor(name);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 可选 | [SchemeColorId](../../Enumeration/SchemeColorId.md) | "tx1" | 主题颜色名称。如果提供的名称不受支持，将使用 'tx1' 颜色。 |

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

使用主题强调色作为电子表格中形状的背景填充。

```javascript editor-xlsx
// How do I fill a shape with one of the document's built-in theme colors in a spreadsheet?

// Draw a rectangle filled with a coordinated theme color to maintain consistent styling in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const color = Api.ThemeColor('accent6');
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
```
