# GetInternalId

返回当前绘图的内部 ID。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

继承自 [ApiDrawing.GetInternalId](../../ApiDrawing/Methods/GetInternalId.md)。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiSmartArt](../ApiSmartArt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取 PDF 中绘图对象的内部标识符。

```javascript editor-pdf
// Useful for retrieving a drawing object's internal ID.

// Create a shape and print its internal ID.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 50 * 36000, 60 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);

console.log(`Drawing internal ID is: ${drawing.GetInternalId()}`);
```
