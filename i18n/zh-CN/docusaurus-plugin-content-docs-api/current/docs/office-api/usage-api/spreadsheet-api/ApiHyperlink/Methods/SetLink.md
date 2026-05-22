# SetLink

设置超链接地址。

## 语法

```javascript
expression.SetLink(sLink);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | 必需 | string |  | 超链接地址。 |

## 返回值

boolean

## 示例

更改电子表格中现有超链接的目标 URL。

```javascript editor-xlsx
// How do I update the address a hyperlink points to in a spreadsheet?

// Replace the web address on a hyperlink so it navigates to a new location in a spreadsheet.

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

const hyperlink = run.AddHyperlink('https://api.onlyoffice.com', 'ONLYOFFICE for developers');

hyperlink.SetLink('https://helpcenter.onlyoffice.com');
worksheet.GetRange('A1').SetValue('New link: ' + hyperlink.GetLinkedText());
```
