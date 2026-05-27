# ToJSON

将 ApiRange 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(bWriteNumberings, bWriteStyles);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | 必需 | boolean |  | 指定使用的编号是否将写入 JSON 对象。 |
| bWriteStyles | 必需 | boolean |  | 指定使用的样式是否将写入 JSON 对象。 |

## 返回值

JSON

## 示例

将文本范围保存为文档中可重用的数据快照。

```javascript editor-docx
// How do I preserve a formatted text range for later reuse in a document?

// Capture a portion of text so it can be restored or duplicated elsewhere in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = Api.CreateRange(paragraph, 0, 9);
range.SetBold(true);
let json = range.ToJSON(false, true);
let rangeFromJSON = Api.FromJSON(json);
doc.Push(rangeFromJSON[0]);
```
