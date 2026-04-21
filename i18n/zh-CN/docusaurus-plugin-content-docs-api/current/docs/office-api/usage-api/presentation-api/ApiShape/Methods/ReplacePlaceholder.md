# ReplacePlaceholder

用幻灯片上的绘图替换占位符。

继承自 [ApiDrawing.ReplacePlaceholder](../../ApiDrawing/Methods/ReplacePlaceholder.md)。

## 示例

在幻灯片上用绘图对象替换占位符。

```javascript editor-pptx
// How can I replace placeholder using a drawing object in a presentation?

// Replace placeholder for a drawing object in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateNoFill();
const stroke = Api.CreateStroke(0, Api.CreateNoFill);
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(174), Api.MillimetersToEmus(38), fill, stroke);

const placeholder = Api.CreatePlaceholder('body');
placeholder.SetType('picture');
shape.SetPlaceholder(placeholder);
slide.AddObject(shape);

const shapeCopy = shape.Copy();
shapeCopy.SetPosition(0, Api.MillimetersToEmus(48));
slide.AddObject(shapeCopy);

const image = Api.CreateImage('https://api.onlyoffice.com/img/logo.svg', Api.MillimetersToEmus(200), Api.MillimetersToEmus(100));
shapeCopy.ReplacePlaceholder(image);
```
