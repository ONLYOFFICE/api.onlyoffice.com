# ToJSON

将 ApiDocument 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(bWriteDefaultTextPr, bWriteDefaultParaPr, bWriteTheme, bWriteSectionPr, bWriteNumberings, bWriteStyles);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteDefaultTextPr | 必需 | boolean |  | 指定是否将默认文本属性写入 JSON 对象。 |
| bWriteDefaultParaPr | 必需 | boolean |  | 指定是否将默认段落属性写入 JSON 对象。 |
| bWriteTheme | 必需 | boolean |  | 指定是否将文档主题写入 JSON 对象。 |
| bWriteSectionPr | 必需 | boolean |  | 指定是否将文档节属性写入 JSON 对象。 |
| bWriteNumberings | 必需 | boolean |  | 指定是否将文档编号写入 JSON 对象。 |
| bWriteStyles | 必需 | boolean |  | 指定是否将文档样式写入 JSON 对象。 |

## 返回值

JSON

## 示例

将文档对象序列化为 JSON 表示。

```javascript editor-docx
// How do I convert a document to JSON so its structure can be reused in a document?

// Export a document as JSON and then reconstruct its elements to insert shapes or other objects into a new context.

let doc = Api.GetDocument();
let json = doc.ToJSON(true, true, true, true, true, true);
let docFromJSON = Api.FromJSON(json);
let paragraph = docFromJSON[0];
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing1 = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing1);
let drawing2 = Api.CreateShape("wave", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing2);
let drawings = docFromJSON[0].GetAllShapes();
paragraph = doc.GetElement(0);
paragraph.AddDrawing(drawings[0]);
paragraph.AddLineBreak();
paragraph.AddText("This is the first shape from the JSON document.");
```
