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

此示例设置当前样式的名称。

```javascript editor-docx
// Rename the table style.

// How to change the name of the created table style.

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
