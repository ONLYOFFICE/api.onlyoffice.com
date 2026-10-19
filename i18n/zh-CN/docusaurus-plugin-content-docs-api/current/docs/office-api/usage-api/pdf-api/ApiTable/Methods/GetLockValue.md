# GetLockValue

返回当前绘图的指定锁定类型的锁定值。

继承自 [ApiDrawing.GetLockValue](../../ApiDrawing/Methods/GetLockValue.md)。

## 语法

```javascript
expression.GetLockValue(sType);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [DrawingLockType](../../Enumeration/DrawingLockType.md) |  | 字符串格式的锁定类型。 |

## 返回值

boolean

## 示例

读取 PDF 表单页面上形状的锁定设置。

```javascript editor-pdf
// Query whether a specific lock is applied to a shape before editing it.

// Create a shape, lock it against moving, then read and display that lock value.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetLockValue("noMove", true);
const lockValue = shape.GetLockValue("noMove");
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("This drawing cannot be moved: " + lockValue);
```
