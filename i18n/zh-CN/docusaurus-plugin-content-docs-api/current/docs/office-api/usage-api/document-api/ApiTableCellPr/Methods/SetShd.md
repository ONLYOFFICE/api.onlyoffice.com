# SetShd

指定应用于表格单元格内容的底纹。

## 语法

```javascript
expression.SetShd(sType, r, g, b, isAuto);
```

`expression` - 表示 [ApiTableCellPr](../ApiTableCellPr.md) 类的变量。

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

在文档中为表格单元格应用背景颜色。

```javascript editor-docx
// How do I fill a table cell with a specific background color in a document?

// Highlight a table cell by giving it a colored background in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add add an orange shading to all cells:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetShd("clear", Api.HexColor('#FF6F3D'));
table.SetStyle(tableStyle);
doc.Push(table);
```
