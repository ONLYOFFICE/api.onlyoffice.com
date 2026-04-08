# GetThemeName

如果颜色是主题颜色，则获取主题颜色名称。

## 语法

```javascript
expression.GetThemeName();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[SchemeColorId](../../Enumeration/SchemeColorId.md) \| null

## 示例

此示例展示如何获取形状填充中使用的主题颜色名称。

```javascript editor-pdf
const doc = Api.GetDocument();
const page = doc.GetPage(0);

const themeColor = Api.ThemeColor('accent1');
const fill = Api.CreateSolidFill(themeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('Theme name: ' + themeColor.GetThemeName());
paragraph.AddElement(run);
page.AddObject(shape);

```
