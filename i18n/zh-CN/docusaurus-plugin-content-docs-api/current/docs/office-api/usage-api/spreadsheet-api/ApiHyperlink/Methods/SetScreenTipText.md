# SetScreenTipText

设置超链接的屏幕提示文本。

## 语法

```javascript
expression.SetScreenTipText(sScreenTipText);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sScreenTipText | 必需 | string |  | 超链接的屏幕提示文本。 |

## 返回值

boolean

## 示例

此示例展示如何为形状内的超链接设置工具提示。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(160, 100, 130));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const run = Api.CreateRun();
run.AddText('Visit ONLYOFFICE for developers');
paragraph.AddElement(run, 0);

const hyperlink = run.AddHyperlink('https://api.onlyoffice.com', 'NO SCREEN TIP');

hyperlink.SetScreenTipText('ONLYOFFICE for developers');
worksheet.GetRange('A1').SetValue('Screen tip: ' + hyperlink.GetScreenTipText());

```
