# Color

从通用输入创建 ApiColor。该方法识别多种调用签名，并委托给更具体的工厂方法或直接构造 ApiColor。
- **数值分量**：“Api.Color(r, g, b)”或“Api.Color(r, g, b, a)”从字节分量 (0-255) 创建 RGB 或 RGBA 颜色。
- **打包整数**：“Api.Color(0xRRGGBB)”从 24 位整数创建 RGB 颜色。
- **完整十六进制字符串**：“Api.Color('#RRGGBB')”或“Api.Color('RRGGBB')”创建十六进制颜色；前导“#”是可选的。
- **简短十六进制字符串**：“Api.Color('#RGB')”通过重复每个数字进行扩展，因此“#F0A”变为“#FF00AA”。
- **主题颜色名称**：“Api.Color('accent1')”创建主题颜色；接受 SchemeColorId 的任何值。
- **预设颜色名称**：“Api.Color('aliceBlue')”将 PresetColor 的任何值解析为其 RGB 等效值。
- **自动颜色**：“Api.Color('auto')”创建自动颜色。
对于单个字符串参数，解析优先级为：“auto”、以“#”开头的字符串、主题名称、预设名称、不带前缀的 6 位十六进制字符串。主题和预设调色板不重叠。3 位简写仅在带有前导“#”时接受。
不支持的输入（对象、数组、已有的 ApiColor、未知字符串、无参数）返回黑色 (#000000)。

## 语法

```javascript
expression.Color(r, g, b, a);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | 必需 | number \| string \| [byte](../../Enumeration/byte.md) \| [SchemeColorId](../../Enumeration/SchemeColorId.md) \| [PresetColor](../../Enumeration/PresetColor.md) |  | 通用颜色输入。当使用三个或四个参数时，为红色分量 (0-255)。 |
| g | 可选 | [byte](../../Enumeration/byte.md) |  | 绿色分量 (0-255)。仅在 (r, g, b) 和 (r, g, b, a) 形式中使用。 |
| b | 可选 | [byte](../../Enumeration/byte.md) |  | 蓝色分量 (0-255)。仅在 (r, g, b) 和 (r, g, b, a) 形式中使用。 |
| a | 可选 | [byte](../../Enumeration/byte.md) |  | 透明度分量 (0-255)。仅在 (r, g, b, a) 形式中使用。 |

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

使用每种支持的输入格式应用 Api.Color 来填充工作表上的各个形状。

```javascript editor-xlsx
// How do I create colors from byte components, packed integers, HEX strings, theme names, and color names in a spreadsheet?

// Place separate shapes filled with each color produced by Api.Color on the worksheet.

const worksheet = Api.GetActiveSheet();
const colors = [
    Api.Color(220, 50, 50),
    Api.Color(50, 200, 50, 180),
    Api.Color(0x0066CC),
    Api.Color('#FF6600'),
    Api.Color('#F0A'),
    Api.Color('accent1'),
    Api.Color('blue'),
];
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
for (let idx = 0; idx < colors.length; idx++) {
    const fill = Api.CreateSolidFill(colors[idx]);
    worksheet.AddShape("rect", 60 * 36000, 30 * 36000, fill, stroke, 0, idx * 2 * 36000, 0, 36000);
}
```
