# SetName

设置当前样式的名称。

## 语法

```javascript
expression.SetName(sStyleName);
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStyleName | 必需 | string |  | 将用于当前样式的名称。 |

## 返回值

boolean

## 示例

为文档中的现有表格样式分配自定义名称。

```javascript editor-docx
// How do I rename a table style so it appears under a different label in a document?

// Give a built-in table style a new identifying name to distinguish it in a document.

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
