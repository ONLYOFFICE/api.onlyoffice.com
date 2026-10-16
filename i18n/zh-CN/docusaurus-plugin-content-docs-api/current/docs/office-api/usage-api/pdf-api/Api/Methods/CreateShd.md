# CreateShd

创建可应用于文本、段落、表格或表格单元格的底纹。

## 语法

```javascript
expression.CreateShd(type, color);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [ShdType](../../Enumeration/ShdType.md) |  | 底纹类型：**“nil”** - 无底纹，**“clear”** - 纯色填充。 |
| color | 可选 | [ApiColor](../../ApiColor/ApiColor.md) |  | 底纹颜色。对于 **"clear"** 类型为必需项。 |

## 返回值

[ApiShd](../../ApiShd/ApiShd.md)

## 示例

创建底纹对象并将其应用于 PDF 中的表格单元格。

```javascript editor-pdf
// Build the shading once with Api.CreateShd and reuse it for several table cells in a PDF.

// Shade the first row of a new table with the accent1 theme color in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const shd = Api.CreateShd('clear', Api.Color('accent1'));
const row = table.GetRow(0);
for (let i = 0; i < 3; i++) {
    row.GetCell(i).SetShd(shd);
}

page.AddObject(table);
```
