# SetShd

指定应用于表格单元格内容的底纹。

继承自 [ApiTableCellPr.SetShd](../../ApiTableCellPr/Methods/SetShd.md)。

## 语法

```javascript
expression.SetShd(sType, r, g, b, isAuto);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [ShdType](../../Enumeration/ShdType.md) |  | 将应用于当前表格单元格内容的底纹类型。 |
| r | 必需 | [byte](../../Enumeration/byte.md) |  | 红色分量值。 |
| g | 必需 | [byte](../../Enumeration/byte.md) |  | 绿色分量值。 |
| b | 必需 | [byte](../../Enumeration/byte.md) |  | 蓝色分量值。 |
| isAuto | 可选 | boolean | false | true 值禁用表格单元格内容的底纹。 |

## 返回值

boolean

## 示例

在文档中为表格单元格添加彩色底纹。

```javascript editor-docx
// How do I apply a background shading to a specific table cell in a document?

// Highlight a table cell with a solid fill to make it stand out in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add an orange shading to cell #1:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.SetShd("clear", Api.HexColor('#FF6F3D'));
table.SetStyle(tableStyle);
doc.Push(table);
```
