# CreateShd

创建可应用于文本、段落、表格或表格单元格的底纹。

## 语法

```javascript
expression.CreateShd(type, color);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [ShdType](../../Enumeration/ShdType.md) |  | 底纹类型：**“nil”** - 无底纹，**“clear”** - 纯色填充。 |
| color | 可选 | [ApiColor](../../ApiColor/ApiColor.md) |  | 底纹颜色。对于 **"clear"** 类型为必需项。 |

## 返回值

[ApiShd](../../ApiShd/ApiShd.md)

## 示例

创建底纹对象并将其应用于电子表格中形状的文本。

```javascript editor-xlsx
// Build the shading once with Api.CreateShd and pass it to the SetShd method of a text run in a spreadsheet.

// Shade the text of a shape with a light yellow background in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.Color('#F2F2F2'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape('rect', 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

const shd = Api.CreateShd('clear', Api.Color('#FFF2CC'));
const paragraph = shape.GetContent().GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.SetFill(Api.CreateSolidFill(Api.Color('#000000')));
run.SetShd(shd);
run.AddText('This text has a light yellow shading.');
paragraph.AddElement(run);
```
