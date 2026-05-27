# GetDrawingsByPlaceholderType

按指定的占位符类型返回绘图数组。

## 语法

```javascript
expression.GetDrawingsByPlaceholderType(sType);
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [PlaceholderType](../../Enumeration/PlaceholderType.md) |  | 占位符类型。 |

## 返回值

[Drawing](../../Enumeration/Drawing.md)[]

## 示例

按占位符类型获取绘图并从幻灯片移除。

```javascript editor-pptx
// Find all drawings with a specific placeholder type using GetDrawingsByPlaceholderType.

// Delete the retrieved drawings from the presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const placeholder = Api.CreatePlaceholder("chart");
shape.SetPlaceholder(placeholder);
slide.AddObject(shape);
const drawingsWithPh = slide.GetDrawingsByPlaceholderType("chart");
for (let i = 0; i < drawingsWithPh.length; i++) {
	drawingsWithPh[i].Delete();
}
```
