# GetType

返回当前表格条件样式的类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiTableStylePr](../ApiTableStylePr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[TableStyleOverrideType](../../Enumeration/TableStyleOverrideType.md)

## 示例

此示例展示如何获取当前表格条件样式的类型。

```javascript editor-docx
// How to get the table style type and display it in the document.

// Retrieve the type of the style.

let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
tableStyle.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle("topLeftCell");
table.SetStyle(tableStyle);
doc.Push(table);
let tableStylePrType = tableStylePr.GetType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Style type = " + tableStylePrType);
```
