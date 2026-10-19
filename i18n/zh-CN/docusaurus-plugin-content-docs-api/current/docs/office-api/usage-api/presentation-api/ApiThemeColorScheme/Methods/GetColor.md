# GetColor

返回主题配色方案中的颜色。

## 语法

```javascript
expression.GetColor(position);
```

`expression` - 表示 [ApiThemeColorScheme](../ApiThemeColorScheme.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | 必需 | number |  | 配色方案中的颜色位置，与 ChangeColor 方法中的相同：0-5 - accent1-accent6，6 - dk1，7 - dk2，8 - folHlink，9 - hlink，10 - lt1，11 - lt2。 |

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null \| undefined

## 示例

使用演示文稿主题的强调色填充形状。

```javascript editor-pptx
// Read the colors of a theme color scheme to reuse them on a slide.

// Get each accent color of the color scheme, fill a shape with it and write its HEX value inside.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const colorScheme = presentation.GetMaster(0).GetTheme().GetColorScheme();
for (let position = 0; position < 6; position++) {
	const color = colorScheme.GetColor(position);
	const shape = Api.CreateShape("rect", 45 * 36000, 30 * 36000, Api.CreateSolidFill(color), Api.CreateStroke(0, Api.CreateNoFill()));
	shape.SetPosition((10 + position * 50) * 36000, 60 * 36000);
	shape.GetContent().GetElement(0).AddText(color.GetHex());
	slide.AddObject(shape);
}
```
