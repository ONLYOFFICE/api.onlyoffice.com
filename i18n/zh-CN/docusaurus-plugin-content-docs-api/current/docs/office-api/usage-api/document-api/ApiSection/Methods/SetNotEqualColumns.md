# SetNotEqualColumns

指定当前节中的所有列具有不同的宽度。列数等于
aWidth 数组的长度。aSpaces 数组的长度必须等于 (aWidth.length - 1)。

## 语法

```javascript
expression.SetNotEqualColumns(aWidths, aSpaces);
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aWidths | 必需 | [twips](../../Enumeration/twips.md)[] |  | 列宽值数组，以点的二十分之一为单位（1/1440 英寸）。 |
| aSpaces | 必需 | [twips](../../Enumeration/twips.md)[] |  | 列之间的距离值数组，以点的二十分之一为单位（1/1440 英寸）。 |

## 返回值

boolean

## 示例

此示例指定当前节中的所有列具有不同的宽度。

```javascript editor-docx
// How to split the text into 3 columns with different sizes.

// Get the final section and divide it to columns.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetNotEqualColumns([1440, 2880, 4320], [720, 480]);
paragraph.AddText("This is a text split into 3 non-equal columns. ");
paragraph.AddText("The first column is 1 inch wide (1440 twentieths of a point).");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #2. ");
paragraph.AddText("This column is 2 inches wide (2880 twentieths of a point). ");
paragraph.AddText("The distance between this column and column #1 is half an inch (720 twentieths of a point).");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #3. ");
paragraph.AddText("This column is 3 inches wide (4320 twentieths of a point). ");
paragraph.AddText("The distance between this column and column #2 is 1/3 of an inch (480 twentieths of a point).");
```
