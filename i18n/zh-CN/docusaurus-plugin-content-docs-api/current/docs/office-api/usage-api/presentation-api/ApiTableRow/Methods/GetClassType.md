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

此示例获取类类型并将其粘贴到演示文稿中。

```javascript editor-pptx
// How to get a class type of ApiTableRow.

// Retrieve class type of ApiTableRow object and insert it to the slide.

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
