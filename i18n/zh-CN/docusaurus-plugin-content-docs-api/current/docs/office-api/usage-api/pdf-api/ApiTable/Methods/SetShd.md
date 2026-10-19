# SetShd

指定应用于当前表格范围的底纹。

## 语法

```javascript
expression.SetShd(shd);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shd | 必需 | [ApiShd](../../ApiShd/ApiShd.md) |  | 使用 Api.CreateShd 方法创建的底纹。 |

## 返回值

boolean

## 示例

在 PDF 中为表格应用背景颜色底纹。

```javascript editor-pdf
// How do I add color to the background of a table in a PDF?

// Set the background fill color for your entire table in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetShd(Api.CreateShd("clear", Api.Color(255, 111, 61)));

page.AddObject(table);
```
