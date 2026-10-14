# GetLockAspect

返回绘图对象的纵横比是否已锁定。

继承自 [ApiDrawing.GetLockAspect](../../ApiDrawing/Methods/GetLockAspect.md)。

## 语法

```javascript
expression.GetLockAspect();
```

`expression` - 表示 [ApiSmartArt](../ApiSmartArt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在演示文稿中返回绘图对象的纵横比是否已锁定。

```javascript editor-pptx
// Useful for getting the lock aspect ratio state of a shape in a presentation.

// Create a shape, lock its aspect ratio and display the result.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetLockAspect(true);
let docContent = drawing.GetContent();
let lockAspect = drawing.GetLockAspect();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Aspect ratio locked: " + lockAspect);
slide.AddObject(drawing);
```
