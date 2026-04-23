# SetName

设置当前绘图的名称。
如果已存在同名的另一个绘图，该绘图的名称将重置为默认的自动生成名称。

## 语法

```javascript
expression.SetName(name);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 将设置到当前绘图的名称。 |

## 返回值

boolean

## 示例

此示例展示如何设置绘图的名称。

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.RGB(80, 120, 160));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('ellipse', Api.MillimetersToEmus(60), Api.MillimetersToEmus(50), fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetName('BlueEllipse');

const content = drawing.GetContent();
const shapeParagraph = content.GetElement(0);
shapeParagraph.AddText('The name of this drawing:');
shapeParagraph.AddLineBreak();
const nameRun = Api.CreateRun();
nameRun.AddText(drawing.GetName());
nameRun.SetBold(true);
shapeParagraph.AddElement(nameRun);

```
