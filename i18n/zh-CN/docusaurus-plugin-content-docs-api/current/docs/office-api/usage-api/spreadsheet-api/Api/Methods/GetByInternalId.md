# GetByInternalId

根据内部 ID 返回对象。

## 语法

```javascript
expression.GetByInternalId(id);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | 必需 | string |  | 对象的内部 ID。 |

## 返回值

[ApiDrawing](../../ApiDrawing/ApiDrawing.md) \| [ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) \| [ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## 示例

在电子表格中通过内部 ID 查找绘图。

```javascript editor-xlsx
// Useful for returning to a drawing whose internal ID was saved earlier.

// Add a shape, find it again by its internal ID, recolor it and write its name and sheet to a cell.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.HexColor('#5B9BD5'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape('rect', Api.MillimetersToEmus(60), Api.MillimetersToEmus(30), fill, stroke, 1, 0, 2, 0);
const internalId = shape.GetInternalId();

const drawing = Api.GetByInternalId(internalId);
drawing.SetFill(Api.CreateSolidFill(Api.HexColor('#ED7D31')));
worksheet.GetRange('A1').SetValue('Found ' + drawing.GetName() + ' on the sheet ' + drawing.GetParentSheet().GetName());
```
