# GetName

返回当前样式的名称。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何获取当前样式的名称。

```javascript editor-docx
// How to get name of the table style.

// Display the table style name.

let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
tableStyle.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let tableStyleName = tableStyle.GetName();
let paragraph = doc.GetElement(0);
paragraph.AddText("Table style name = " + tableStyleName);
```
