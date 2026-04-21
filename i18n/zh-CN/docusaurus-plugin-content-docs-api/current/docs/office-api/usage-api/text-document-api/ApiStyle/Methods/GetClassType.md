# GetClassType

返回 ApiStyle 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"style"

## 示例

获取文档中样式对象的类类型。

```javascript editor-docx
// How can I get the class type of a style in a document?

// Get the class type of a style and display it in the document.

let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
tableStyle.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tableStyle.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
