# SetLockAspect

设置是否锁定绘图对象的纵横比。

## 语法

```javascript
expression.SetLockAspect(bAspect);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bAspect | 必需 | boolean |  | 指定是否锁定此绘图对象的纵横比。 |

## 返回值

boolean

## 示例

在演示文稿中设置是否锁定绘图对象的纵横比。

```javascript editor-pptx
// Useful for locking the aspect ratio of a shape in a presentation.

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
