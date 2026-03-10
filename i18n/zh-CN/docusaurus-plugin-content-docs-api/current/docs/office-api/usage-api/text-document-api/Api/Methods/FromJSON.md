# FromJSON

将指定的 JSON 对象转换为相应类型的文档生成器对象。

## 语法

```javascript
expression.FromJSON(message);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| message | 必需 | JSON |  | 要转换的 JSON 对象。 |

## 返回值

object

## 示例

此示例将段落转换为 JSON，然后从 JSON 恢复。

```javascript editor-docx
// Creates a paragraph, converts it to the JSON object, and then converts it back to the ApiParagraph object.

// How to convert the specified JSON object into the Document Builder object of the corresponding type.

let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
let json = paragraph.ToJSON(false, true);
let paragraphFromJSON = Api.FromJSON(json);
paragraphFromJSON.SetBold(true);
Api.GetDocument().AddElement(0, paragraphFromJSON);
```
