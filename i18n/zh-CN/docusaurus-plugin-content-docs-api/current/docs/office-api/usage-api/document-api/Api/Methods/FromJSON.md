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

从 JSON 表示恢复段落并将其插入到文档中。

```javascript editor-docx
// How do I recreate a paragraph from a JSON object in a document?

// Save a paragraph as JSON and then rebuild it as a bold paragraph in a document.

let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
let json = paragraph.ToJSON(false, true);
let paragraphFromJSON = Api.FromJSON(json);
paragraphFromJSON.SetBold(true);
Api.GetDocument().AddElement(0, paragraphFromJSON);
```
