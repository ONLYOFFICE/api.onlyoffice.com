# GetDrawingsByName

从工作簿返回具有指定名称的绘图。

## 语法

```javascript
expression.GetDrawingsByName(ids);
```

`expression` - 表示 [ApiWorkbook](../ApiWorkbook.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ids | 必需 | string[] |  | 绘图名称数组。 |

## 返回值

[Drawing](../../Enumeration/Drawing.md)[]

## 示例

按名称在工作簿中查找特定形状并在电子表格中对其应用更改。

```javascript editor-xlsx
// How do I find shapes by their names and modify them all at once in a spreadsheet?

// Rotate only the named shapes while leaving other drawings untouched in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke1 = Api.CreateStroke(0, Api.CreateNoFill());
const shape1 = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill1, stroke1, 0, 2 * 36000, 0, 3 * 36000);
shape1.SetName("MyShape1");
const fill2 = Api.CreateSolidFill(Api.RGB(51, 133, 255));
const stroke2 = Api.CreateStroke(0, Api.CreateNoFill());
const shape2 = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill2, stroke2, 10, 2 * 36000, 2, 3 * 36000);
shape2.SetName("MyShape2");
const fill3 = Api.CreateSolidFill(Api.RGB(61, 255, 111));
const stroke3 = Api.CreateStroke(0, Api.CreateNoFill());
const shape3 = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill3, stroke3, 20, 2 * 36000, 4, 3 * 36000);
shape3.SetName("DifferentShape");
const drawings = workbook.GetDrawingsByName(["MyShape1", "MyShape2"]);
for (let i = 0; i < drawings.length; i++) {
	drawings[i].SetRotation(45);
}
```
