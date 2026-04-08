# InsertInContentControl

用内容控件包装当前表格对象。

## 语法

```javascript
expression.InsertInContentControl(nType);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nType | 必需 | number |  | 定义此方法是返回 ApiBlockLvlSdt（nType === 1）还是 ApiTable（除 1 以外的任何值）对象。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| [ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## 示例

此示例用内容控件包装当前表格对象。

```javascript editor-docx
// How to add the table to the block level control.

// Create a table and then insert it to the another content control.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let blockLvlSdt = table.InsertInContentControl(1);
doc.AddElement(0, blockLvlSdt);
```
