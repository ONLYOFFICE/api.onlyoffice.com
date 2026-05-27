# GetClassType

返回 ApiBullet 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiBullet](../ApiBullet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"bullet"

## 示例

读取电子表格中文本形状中使用的项目符号的类型标签。

```javascript editor-xlsx
// How do I find out what kind of bullet object I am working with in a spreadsheet?

// Distinguish a numbering bullet from other list styles by checking its type identifier in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let bullet = Api.CreateNumbering("ArabicParenR", 1);
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");
paragraph = Api.CreateParagraph();
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");
docContent.Push(paragraph);
let classType = bullet.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
docContent.Push(paragraph);
```
