# AddElement

向当前段落添加元素。

## 语法

```javascript
expression.AddElement(oElement, nPos);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | 必需 | [ParagraphContent](../../Enumeration/ParagraphContent.md) |  | 将在当前位置添加的文档元素。如果段落不支持 oElement 类型，则返回 false。 |
| nPos | 可选 | number |  | 将添加当前元素的位置。如果未指定此值，则元素将添加到当前段落的末尾。 |

## 返回值

boolean

## 示例

此示例向段落添加一个 Run。

```javascript editor-xlsx
// How to add text to the paragraph.

// Get the paragraph from the shape and change its text.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text run. Nothing special.");
paragraph.AddElement(run);
```
