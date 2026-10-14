# SetLockValue

设置当前绘图的指定锁定类型的锁定值。

继承自 [ApiDrawing.SetLockValue](../../ApiDrawing/Methods/SetLockValue.md)。

## 语法

```javascript
expression.SetLockValue(sType, bValue);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [DrawingLockType](../../Enumeration/DrawingLockType.md) |  | 字符串格式的锁定类型。 |
| bValue | 必需 | boolean |  | 指定是否将指定的锁定应用于当前绘图。 |

## 返回值

boolean

## 示例

在 PDF 表单的页面上防止形状被移动。

```javascript editor-pdf
// Apply a lock so the shape cannot be repositioned by the user.

// Create a shape, lock it against moving, and display the applied lock state.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetLockValue("noMove", true);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("This drawing cannot be moved: " + shape.GetLockValue("noMove"));
```
