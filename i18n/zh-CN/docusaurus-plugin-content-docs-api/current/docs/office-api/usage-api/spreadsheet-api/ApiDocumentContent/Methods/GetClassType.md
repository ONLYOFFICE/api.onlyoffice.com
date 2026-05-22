# GetClassType

返回 ApiDocumentContent 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"documentContent"

## 示例

识别电子表格中附加到形状的文本内容对象的类型名称。

```javascript editor-xlsx
// How do I find out what kind of content object a shape's text area returns in a spreadsheet?

// Confirm the content category of a shape by reading its type label in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 200 * 36000, 60 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let classType = content.GetClassType();
let paragraph = content.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
```
