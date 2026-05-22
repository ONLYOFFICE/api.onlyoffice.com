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

确定文档中样式是为何种内容设计的。

```javascript editor-docx
// How do I find out whether a style applies to tables, paragraphs, or characters in a document?

// Read and display the purpose category of a style in a document.

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
