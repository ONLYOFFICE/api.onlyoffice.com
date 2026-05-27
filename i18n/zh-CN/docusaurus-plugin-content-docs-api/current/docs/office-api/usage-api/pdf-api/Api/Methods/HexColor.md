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

在 PDF 中用十六进制代码定义的颜色填充形状。

```javascript editor-pdf
// How do I apply a hex color to a shape in a PDF?

// Create a color from a hex value and use it to fill a rectangle in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const color = Api.HexColor('#DECADE');
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
const shape = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);
```
