# CreateGroup

将一组绘图对象进行分组。

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

此示例展示如何创建绘图对象组。

```javascript editor-docx
// Creates two "rect" shapes in the current document and groups them.

// How to create the ApiGroup object from an array of drawings.

let doc = Api.GetDocument();
let fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill1, stroke);
let shape2 = Api.CreateShape("rect", 75 * 36000, 40 * 36000, fill2, stroke);
shape1.SetWrappingStyle("inFront");
shape2.SetWrappingStyle("inFront");
let group = Api.CreateGroup([shape1, shape2]);
let para = Api.CreateParagraph();
para.AddDrawing(group);
doc.Push(para);
```
