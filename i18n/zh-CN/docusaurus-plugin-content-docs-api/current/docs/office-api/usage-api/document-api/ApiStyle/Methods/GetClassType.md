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

识别文档中样式所属的对象类型。

```javascript editor-docx
// How do I find out what category a style object falls into in a document?

// Read and display the classification label assigned to a style in a document.

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
