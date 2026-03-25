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

此示例创建 RGB 颜色，设置红色、绿色和蓝色分量的适当值。

```javascript editor-xlsx
// How to create color using RGB values.

// Use RGB color to change object colors.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
```
