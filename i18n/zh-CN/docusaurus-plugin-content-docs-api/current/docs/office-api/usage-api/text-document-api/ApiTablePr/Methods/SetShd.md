# SetShd

指定应用于当前表格范围的底纹。

## 语法

```javascript
expression.SetShd(sType, r, g, b, isAuto);
```

`expression` - 表示 [ApiTablePr](../ApiTablePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [ShdType](../../Enumeration/ShdType.md) |  | 应用于当前表格范围的底纹类型。 |
| r | 必需 | [byte](../../Enumeration/byte.md) |  | 红色分量值。 |
| g | 必需 | [byte](../../Enumeration/byte.md) |  | 绿色分量值。 |
| b | 必需 | [byte](../../Enumeration/byte.md) |  | 蓝色分量值。 |
| isAuto | 可选 | boolean | false | true 值禁用 SetShd 方法的使用。 |

## 返回值

boolean

## 示例

此示例指定应应用于表格范围的底纹。

```javascript editor-docx
// How to add shading to the paragraph.

// Apply the clear shading to the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We added an orange shading to the table:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
tablePr.SetShd("clear", Api.HexColor('#FF6F3D'));
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
