# ToJSON

将 ApiDocumentContent 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(isWriteNumberings, isWriteStyles);
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isWriteNumberings | 必需 | boolean |  | 指定使用的编号是否将写入 JSON 对象。 |
| isWriteStyles | 必需 | boolean |  | 指定使用的样式是否将写入 JSON 对象。 |

## 返回值

JSON

## 示例

将形状的文档内容序列化为 JSON 并在文档中恢复。

```javascript editor-docx
// How do I convert document content to JSON and recreate it from that data in a document?

// Round-trip a shape's content through JSON to verify the class type of the reconstructed object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph = docContent.GetElement(0);
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
let json = docContent.ToJSON(false, true);
let docContentFromJSON = Api.FromJSON(json);
let type = docContentFromJSON.GetClassType();
docContentFromJSON.RemoveAllElements();
paragraph = docContentFromJSON.GetElement(0);
paragraph.AddText("Class type = " + type);
Api.ReplaceDocumentContent(docContentFromJSON);
```
