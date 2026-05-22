# CreateColorFromRGB

通过设置红、绿、蓝颜色分量的适当值来创建 RGB 颜色。

## 语法

```javascript
expression.CreateColorFromRGB(r, g, b);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | 必需 | [byte](../../Enumeration/byte.md) |  | 红色分量值。 |
| g | 必需 | [byte](../../Enumeration/byte.md) |  | 绿色分量值。 |
| b | 必需 | [byte](../../Enumeration/byte.md) |  | 蓝色分量值。 |

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

从红、绿、蓝值定义自定义颜色以应用于电子表格中的元素。

```javascript editor-xlsx
// How do I build a specific color using red, green, and blue numbers in a spreadsheet?

// Color text or shapes with a precise tone by mixing three numeric channel values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
```
