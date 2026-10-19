# SetLockAspect

设置是否锁定绘图对象的纵横比。

继承自 [ApiDrawing.SetLockAspect](../../ApiDrawing/Methods/SetLockAspect.md)。

## 语法

```javascript
expression.SetLockAspect(bAspect);
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bAspect | 必需 | boolean |  | 指定是否锁定此绘图对象的纵横比。 |

## 返回值

boolean

## 示例

在 PDF 表单的页面上锁定形状的纵横比。

```javascript editor-pdf
// Keep width and height proportional so resizing preserves the shape's proportions.

// Create a shape, lock its aspect ratio, and display the applied lock state.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetLockAspect(true);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Aspect ratio locked: " + shape.GetLockAspect());
```
