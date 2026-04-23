# SetOutlineLvl

设置指定属性的大纲级别。

## 语法

```javascript
expression.SetOutlineLvl(nLvl);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLvl | 可选 | Number |  | 大纲级别。可能的值：1-9。如果需要设置无大纲级别，请不带参数使用此方法。 |

## 返回值

boolean

## 示例

此示例演示如何通过段落属性设置和获取指定段落的大纲级别。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const paraPr = paragraph.GetParaPr();

const levelBefore = paraPr.GetOutlineLvl();
paraPr.SetOutlineLvl(8);
const levelAfter = paraPr.GetOutlineLvl();
let text =  'Outline level (index) for this paragraph is currently set to ' + levelAfter;
text += ',\nbut originally was set to ' + levelBefore;
paragraph.AddText(text);

```
