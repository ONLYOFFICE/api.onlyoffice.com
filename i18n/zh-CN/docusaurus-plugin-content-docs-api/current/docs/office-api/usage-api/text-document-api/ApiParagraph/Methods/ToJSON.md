# ToJSON

将 ApiParagraph 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(bWriteNumberings, bWriteStyles);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | 必需 | boolean |  | 指定使用的编号是否将写入 JSON 对象。 |
| bWriteStyles | 必需 | boolean |  | 指定使用的样式是否将写入 JSON 对象。 |

## 返回值

JSON

## 示例

此示例将 ApiParagraph 对象转换为 JSON 对象。

```javascript editor-docx
// How to get a JSON from the inline text control.

// Convert the inline text control to json and add it to the paragraph.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
let json = paragraph.ToJSON(false, true);
let paragraphFromJSON = Api.FromJSON(json);
paragraphFromJSON.SetBold(true);
doc.AddElement(0, paragraphFromJSON);
```
