# GetColor

返回底纹颜色。

## 语法

```javascript
expression.GetColor();
```

`expression` - 表示 [ApiShd](../ApiShd.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null \| undefined

## 示例

检索电子表格中底纹对象的颜色。

```javascript editor-xlsx
// Read back the color stored in a shading object in a spreadsheet.

// Shade the text of a shape and write the shading color into it.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.Color('#F2F2F2'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape('rect', 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

const shd = Api.CreateShd('clear', Api.Color('#FCE4D6'));
const paragraph = shape.GetContent().GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.SetFill(Api.CreateSolidFill(Api.Color('#000000')));
run.SetShd(shd);
run.AddText('Shading color = ' + shd.GetColor().GetHex());
paragraph.AddElement(run);
```
