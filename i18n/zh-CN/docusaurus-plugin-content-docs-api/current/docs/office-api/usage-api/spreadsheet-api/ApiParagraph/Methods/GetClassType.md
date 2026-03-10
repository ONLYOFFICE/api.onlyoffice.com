# GetClassType

返回 ApiParagraph 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"paragraph"

## 示例

此示例获取类类型并将其插入到文档中。

```javascript editor-xlsx
// How to get a class type of ApiParagraph.

// Get a class type of ApiParagraph and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let classType = paragraph.GetClassType();
paragraph.AddText("Class Type = " + classType);
```
