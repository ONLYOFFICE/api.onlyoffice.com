# GetClassType

返回 ApiTable 对象的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"table"

## 示例

获取演示文稿中表格的类类型。

```javascript editor-pptx
// How to identify the class type of a table in a presentation?

// Obtain the class type identifier of a table object in a presentation.

const presentation = Api.GetPresentation();

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
const classType = table.GetClassType();
paragraph.AddText("Class type: " + classType);
content.Push(paragraph);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(table);
```
