# GetColumnsWidths

返回列宽值数组，以点的二十分之一为单位（1/1440 英寸）。

## 语法

```javascript
expression.GetColumnsWidths();
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)[]

## 示例

此示例指定当前节中的所有列具有不同的宽度。

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetNotEqualColumns([1440, 2880, 4320], [720, 480]);
let columnsCount = section.GetColumnsCount();
let columnsWidths = section.GetColumnsWidths();
paragraph.AddText("This is a text split into " + columnsCount + " non-equal columns. ");
paragraph.AddText("The first column is 1 inch wide (" + columnsWidths[0] + " twentieths of a point).");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #2. ");
paragraph.AddText("This column is 2 inches wide (" + columnsWidths[1] + " twentieths of a point). ");
paragraph.AddText("The distance between this column and column #1 is half an inch (720 twentieths of a point).");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #3. ");
paragraph.AddText("This column is 3 inches wide (" + columnsWidths[2] + " twentieths of a point). ");
paragraph.AddText("The distance between this column and column #2 is 1/3 of an inch (480 twentieths of a point).");
```
