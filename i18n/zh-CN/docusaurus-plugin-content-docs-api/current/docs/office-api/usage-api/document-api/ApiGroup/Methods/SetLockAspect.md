# SetLockAspect

设置是否锁定绘图对象的纵横比。

继承自 [ApiDrawing.SetLockAspect](../../ApiDrawing/Methods/SetLockAspect.md)。

## 语法

```javascript
expression.SetLockAspect(bAspect);
```

`expression` - 表示 [ApiGroup](../ApiGroup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bAspect | 必需 | boolean |  | 指定是否锁定此绘图对象的纵横比。 |

## 返回值

boolean

## 示例

在文档中设置是否锁定绘图对象的纵横比。

```javascript editor-docx
// Useful for locking the aspect ratio of a shape in a text document.

// Create a shape, lock its aspect ratio and display the result.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
drawing.SetLockAspect(true);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetContent();
let lockAspect = drawing.GetLockAspect();
let innerParagraph = Api.CreateParagraph();
innerParagraph.AddText("Aspect ratio locked: " + lockAspect);
docContent.AddElement(0, innerParagraph);
```
