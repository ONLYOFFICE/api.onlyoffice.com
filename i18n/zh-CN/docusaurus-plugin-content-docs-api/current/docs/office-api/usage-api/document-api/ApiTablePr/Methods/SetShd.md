# SetShd

指定应用于当前表格范围的底纹。

## 语法

```javascript
expression.SetShd(shd);
```

`expression` - 表示 [ApiTablePr](../ApiTablePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shd | 必需 | [ApiShd](../../ApiShd/ApiShd.md) |  | 使用 Api.CreateShd 方法创建的底纹。 |

## 返回值

boolean

## 示例

在文档中用颜色填充整个表格的背景。

```javascript editor-docx
// How do I apply a background shade to a whole table in a document?

// Give a table a colored backdrop to highlight it visually in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We added an orange shading to the table:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
tablePr.SetShd(Api.CreateShd("clear", Api.HexColor('#FF6F3D')));
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
