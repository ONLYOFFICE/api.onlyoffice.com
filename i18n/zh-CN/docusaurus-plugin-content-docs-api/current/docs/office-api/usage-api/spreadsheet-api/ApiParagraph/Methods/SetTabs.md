# SetTabs

指定将用于当前段落中任何制表符的自定义制表位序列。

:::warning
aPos 和 aVal 数组的长度必须相等。
:::

继承自 [ApiParaPr.SetTabs](../../ApiParaPr/Methods/SetTabs.md)。

## 语法

```javascript
expression.SetTabs(aPos, aVal);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aPos | 必需 | [twips](../../Enumeration/twips.md)[] |  | 相对于当前页面边距的自定义制表位位置数组，以二十分之一磅（1/1440 英寸）为单位。 |
| aVal | 必需 | [TabJc](../../Enumeration/TabJc.md)[] |  | 自定义制表位样式数组，用于确定制表位的行为以及在当前自定义制表位处输入的文本所应用的对齐方式。 |

## 返回值

boolean

## 示例

在电子表格中为形状内的段落设置自定义制表位。

```javascript editor-xlsx
// How do I control where text jumps when I press Tab in a paragraph in a spreadsheet?

// Place left, center, and right tab stops at specific positions to align paragraph text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 150 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.SetTabs([1440, 2880, 4320], ["left", "center", "right"]);
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 1 inch left");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 2 inches center");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 3 inches right");
```
