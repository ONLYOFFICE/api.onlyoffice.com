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

如何获取 ApiTable 的类类型。

```javascript editor-pdf
// Retrieve class type of ApiTable object and insert it to the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
const classType = table.GetClassType();
paragraph.AddText("Class type: " + classType);
content.Push(paragraph);

page.AddObject(table);

```
