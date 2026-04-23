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

此示例获取类类型并将其粘贴到演示文稿中。

```javascript editor-pptx
// How to get a class type of ApiTable.

// Retrieve class type of ApiTable object and insert it to the slide.

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
