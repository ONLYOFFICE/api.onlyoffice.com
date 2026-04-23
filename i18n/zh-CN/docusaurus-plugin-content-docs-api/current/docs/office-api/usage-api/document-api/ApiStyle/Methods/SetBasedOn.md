# SetBasedOn

指定此样式在样式层次结构中继承的父样式的引用。

## 语法

```javascript
expression.SetBasedOn(oStyle);
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | 必需 | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | 样式继承属性的父样式。 |

## 返回值

boolean

## 示例

此示例指定此样式在样式层次结构中继承的父样式的引用。

```javascript editor-docx
// How to get the specific style from the document and create table style based on it.

// Inherit bordered style of the document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
```
