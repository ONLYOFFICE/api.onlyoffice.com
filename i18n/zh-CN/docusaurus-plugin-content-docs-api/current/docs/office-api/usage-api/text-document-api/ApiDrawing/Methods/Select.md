# Select

选择当前图形对象。

## 语法

```javascript
expression.Select(isReplace);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isReplace | 可选 | boolean | true | 指定选择是否应替换当前选择（true）还是添加到当前选择（false）。 |

## 返回值

boolean

## 示例

此示例选择当前图形对象。

```javascript editor-docx
// How to select drawing objects with the cursor.

// Create three shapes, select the first one,
// then select the second shape with isReplace=true (replacing the selection),
// and finally select the third shape without isReplace parameter (adding to selection).

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke1 = Api.CreateStroke(0, Api.CreateNoFill());
let drawing1 = Api.CreateShape("rect", 3212465, 963295*4, fill1, stroke1);
paragraph.AddDrawing(drawing1);
drawing1.SetWrappingStyle("inFront");
drawing1.SetHorPosition("page", 0);
drawing1.SetVerPosition("page", 0);
let fill2 = Api.CreateSolidFill(Api.RGB(51, 133, 255));
let stroke2 = Api.CreateStroke(0, Api.CreateNoFill());
let drawing2 = Api.CreateShape("rect", 3212465, 963295*2, fill2, stroke2);
paragraph.AddDrawing(drawing2);
drawing2.SetWrappingStyle("inFront");
drawing2.SetHorPosition("page", 4000000);
drawing2.SetVerPosition("page", 0);
let fill3 = Api.CreateSolidFill(Api.RGB(61, 255, 111));
let stroke3 = Api.CreateStroke(0, Api.CreateNoFill());
let drawing3 = Api.CreateShape("rect", 3212465, 963295, fill3, stroke3);
paragraph.AddDrawing(drawing3);
drawing3.SetWrappingStyle("inFront");
drawing3.SetHorPosition("page", 0);
drawing3.SetVerPosition("page", 4500000);
drawing1.Select(true);
drawing2.Select(true);
drawing3.Select();
```
