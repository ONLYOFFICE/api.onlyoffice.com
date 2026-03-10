# CreateGroup

创建绘图组。

## 语法

```javascript
expression.CreateGroup(drawings);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| drawings | 必需 | [DrawingForGroup](../../Enumeration/DrawingForGroup.md)[] |  | 要分组的绘图对象数组。 |

## 返回值

[ApiGroup](../../ApiGroup/ApiGroup.md)

## 示例

此示例演示如何创建组。

```javascript editor-pptx
// How to create a group of drawings.

// Group the specified list of shapes.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill1, stroke);
let shape2 = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill2, stroke);
shape1.SetPosition(608400, 1267200);
shape2.SetPosition(3100000, 1867200);
let group = Api.CreateGroup([shape1, shape2]);
slide.AddObject(group);

```
