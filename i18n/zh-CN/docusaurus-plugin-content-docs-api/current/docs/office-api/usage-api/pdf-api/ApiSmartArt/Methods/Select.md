# Select

选择当前图形对象。

继承自 [ApiDrawing.Select](../../ApiDrawing/Methods/Select.md)。

## 语法

```javascript
expression.Select(isReplace);
```

`expression` - 表示 [ApiSmartArt](../ApiSmartArt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isReplace | 可选 | boolean | false | 指定选择是否应替换当前选择（true）还是添加到当前选择（false）。 |

## 返回值

boolean

## 示例

在 PDF 表单的页面上选择一个或多个绘图对象。

```javascript editor-pdf
// Combine replace mode and additive mode to control which shapes stay selected.

// Create three shapes, replace the selection with each of the first two, then add the third to it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke1 = Api.CreateStroke(0, Api.CreateNoFill());
const drawing1 = Api.CreateShape("rect", 60 * 36000, 35 * 36000, fill1, stroke1);
page.AddObject(drawing1);
drawing1.SetPosition(0, 0);
const fill2 = Api.CreateSolidFill(Api.RGB(51, 133, 255));
const stroke2 = Api.CreateStroke(0, Api.CreateNoFill());
const drawing2 = Api.CreateShape("rect", 60 * 36000, 35 * 36000, fill2, stroke2);
page.AddObject(drawing2);
drawing2.SetPosition(70 * 36000, 0);
const fill3 = Api.CreateSolidFill(Api.RGB(61, 255, 111));
const stroke3 = Api.CreateStroke(0, Api.CreateNoFill());
const drawing3 = Api.CreateShape("rect", 60 * 36000, 35 * 36000, fill3, stroke3);
page.AddObject(drawing3);
drawing3.SetPosition(140 * 36000, 0);
drawing1.Select(true);
drawing2.Select(true);
drawing3.Select();
```
