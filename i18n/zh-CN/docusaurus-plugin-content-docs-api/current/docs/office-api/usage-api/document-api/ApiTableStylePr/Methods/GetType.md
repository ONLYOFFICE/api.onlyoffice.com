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

读取文档中分配给表格样式的条件区域标识符。

```javascript editor-docx
// How do I find out which part of a table a style condition targets in a document?

// Identify the area of the table that a conditional formatting rule applies to in a document.

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
