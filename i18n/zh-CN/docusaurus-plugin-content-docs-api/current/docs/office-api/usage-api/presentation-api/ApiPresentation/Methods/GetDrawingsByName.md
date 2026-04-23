# GetDrawingsByName

返回按名称筛选的文档内容中绘图对象的集合。

## 语法

```javascript
expression.GetDrawingsByName(ids);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ids | 必需 | string[] |  | 用于筛选的图形名称数组。 |

## 返回值

[Drawing](../../Enumeration/Drawing.md)[]

## 示例

此示例展示如何从当前演示文稿中获取具有指定名称的所有绘图对象。

```javascript editor-pptx
// Get drawings by their names.

// How to retrieve drawings by their names and rotate them.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke1 = Api.CreateStroke(0, Api.CreateNoFill());
const shape1 = Api.CreateShape("rect", 60 * 36000, 35 * 36000, fill1, stroke1);
shape1.SetPosition(0, 2 * 36000);
shape1.SetName("MyShape1");
slide.AddObject(shape1);
const fill2 = Api.CreateSolidFill(Api.RGB(51, 133, 255));
const stroke2 = Api.CreateStroke(0, Api.CreateNoFill());
const shape2 = Api.CreateShape("rect", 60 * 36000, 35 * 36000, fill2, stroke2);
shape2.SetPosition(0, 40 * 36000);
shape2.SetName("MyShape2");
slide.AddObject(shape2);
const fill3 = Api.CreateSolidFill(Api.RGB(61, 255, 111));
const stroke3 = Api.CreateStroke(0, Api.CreateNoFill());
const shape3 = Api.CreateShape("rect", 60 * 36000, 35 * 36000, fill3, stroke3);
shape3.SetPosition(70 * 36000, 2 * 36000);
shape3.SetName("DifferentShape");
slide.AddObject(shape3);
const drawings = presentation.GetDrawingsByName(["MyShape1", "MyShape2"]);
for (let i = 0; i < drawings.length; i++) {
	drawings[i].SetRotation(45);
}

```
