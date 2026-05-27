# CreateBullet

使用 sSymbol 参数指定的字符或符号为段落创建项目符号。

## 语法

```javascript
expression.CreateBullet(sSymbol);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSymbol | 必需 | string |  | 将用于为段落创建项目符号的字符或符号。 |

## 返回值

[ApiBullet](../../ApiBullet/ApiBullet.md)

## 示例

在电子表格中为形状内的段落添加项目符号标记。

```javascript editor-xlsx
// How do I add a custom bullet symbol to a paragraph in a spreadsheet?

// Mark a paragraph with a bullet character to create a list item in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");
```
