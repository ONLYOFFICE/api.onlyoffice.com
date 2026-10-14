# CreateGroup

将绘图对象数组组合在一起。

:::note
绘图对象不得已添加到文档中。要组合文档中已有的绘图对象，请使用 [ApiDocument#GroupDrawings](../../ApiDocument/Methods/GroupDrawings.md) 方法。
:::

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

将多个形状组合在一起，使其在文档中作为一个单元移动和调整大小。

```javascript editor-docx
// How do I combine several shapes into a single group in a document?

// Keep two shapes aligned by bundling them into one grouped object in a document.

let doc = Api.GetDocument();
let fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 60 * 36000, 40 * 36000, fill1, stroke);
shape1.SetWrappingStyle("inFront");
shape1.SetHorPosition("page", 30 * 36000);
shape1.SetVerPosition("page", 40 * 36000);
let shape2 = Api.CreateShape("rect", 60 * 36000, 40 * 36000, fill2, stroke);
shape2.SetWrappingStyle("inFront");
shape2.SetHorPosition("page", 100 * 36000);
shape2.SetVerPosition("page", 90 * 36000);
let group = Api.CreateGroup([shape1, shape2]);
let para = Api.CreateParagraph();
para.AddDrawing(group);
doc.Push(para);
```
