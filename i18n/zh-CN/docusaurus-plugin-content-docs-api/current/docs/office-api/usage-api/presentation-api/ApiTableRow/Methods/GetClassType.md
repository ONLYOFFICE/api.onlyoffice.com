# GetClassType

返回 ApiTableRow 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"tableRow"

## 示例

检索表格行对象的类类型。

```javascript editor-pptx
// Create a table and access the first row to get its class type.

// Display the class type identifier in the slide content.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
const classType = row.GetClassType();
paragraph.AddText("Class type: " + classType);
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);
```
