# SetHeight

设置当前表格的总高度，并将其平均分配给各表格行。该值作为每行的最小高度应用，因此如果行内容需要更多空间，行可以更高。

## 语法

```javascript
expression.SetHeight(nValue);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的表格高度。 |

## 返回值

[EMU](../../Enumeration/EMU.md) \| null

## 示例

设置文档中表格的总高度。

```javascript editor-docx
// Distribute the requested height proportionally among the table rows.

// Create a table and set its overall height to 60 millimeters.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetHeight(Api.MillimetersToEmus(60));
```
