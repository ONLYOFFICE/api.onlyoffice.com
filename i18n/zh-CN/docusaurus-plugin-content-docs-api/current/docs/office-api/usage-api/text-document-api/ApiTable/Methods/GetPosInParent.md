# GetPosInParent

返回表格在其父元素中的位置。

## 语法

```javascript
expression.GetPosInParent();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

此示例展示如何获取表格在其父元素中的位置。

```javascript editor-docx
// How to find out the location of the table in its parent one.

// Get the position index of the table.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let run = Api.CreateRun();
run.AddText("Number of paragraph elements at this point: ");
run.AddTabStop();
run.AddText("" + paragraph.GetElementsCount());
run.AddLineBreak();
paragraph.AddElement(run);
run.AddText("Number of paragraph elements after we added a text run: ");
run.AddTabStop();
run.AddText("" + paragraph.GetElementsCount());
doc.AddElement(0, paragraph);
let table = Api.CreateTable(3, 3);
doc.AddElement(0, table);
let position = table.GetPosInParent();
table = doc.GetElement(position);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
table.SetStyle(tableStyle);
```
