# TableWidth

宽度属性的单位可能值由特定的表格或表格单元格宽度属性定义。
- **“auto”** - 将表格或表格单元格宽度设置为自动宽度。
- **“twips”** - 将表格或表格单元格宽度设置为以缇为单位测量。
- **“nul”** - 将表格或表格单元格宽度设置为零值。
- **“percent”** - 将表格或表格单元格宽度设置为相对于父容器的百分比。

## 类型

枚举

## 值

- "auto"
- "twips"
- "nul"
- "percent"

## 示例

将表格单元格的宽度设置为 100 磅（2000 缇）。

```javascript editor-docx
// How to change a table cell width using twips.

// Resize a cell by setting its width to 2000 twips.

tableCell.SetWidth("twips", 2000);
```
