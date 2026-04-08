# GetType

返回当前样式的类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[StyleType](../../Enumeration/StyleType.md)

## 示例

此示例展示如何获取当前样式的类型。

```javascript editor-docx
// How to get type of the table style.

// Display the name of the table style.

let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
tableStyle.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let tableStyleType = tableStyle.GetType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Style type = " + tableStyleType);
```
