# Copy

复制当前绘图组。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiGroup](../ApiGroup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiGroup](../../ApiGroup/ApiGroup.md)

## 示例

复制绘图组并将副本添加到文档中的同一段落。

```javascript editor-docx
// How do I make a copy of a grouped set of objects in a document?

// Clone a group of shapes so that the duplicate appears alongside the original in a document.

let doc = Api.GetDocument();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 60 * 36000, 60 * 36000, fill, stroke);
let shape2 = Api.CreateShape("ellipse", 60 * 36000, 60 * 36000, fill, stroke);
shape1.SetWrappingStyle("inFront");
shape2.SetWrappingStyle("inFront");
let group = Api.CreateGroup([shape1, shape2]);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(group);

let copyGroup = group.Copy();
paragraph.AddDrawing(copyGroup);
```
