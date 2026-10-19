# GetClassType

返回 ApiTablePr 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTablePr](../ApiTablePr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"tablePr"

## 示例

在演示文稿中检查表格属性对象的类类型。

```javascript editor-pptx
// The class type is "tablePr" for any table properties object.

// Read the class type of the table style properties and write it into the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
table.SetStyle(style);
const tablePr = style.GetTablePr();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + tablePr.GetClassType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
