# ToJSON

将 ApiInlineLvlSdt 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(bWriteStyles);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteStyles | 必需 | boolean |  | 指定使用的样式是否将写入 JSON 对象。 |

## 返回值

JSON

## 示例

此示例将 ApiInlineLvlSdt 对象转换为 JSON 对象。

```javascript editor-docx
// How to get a JSON from the inline text control.

// Convert the inline text control to json and add it to the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.SetAlias("№1");
let json = inlineLvlSdt.ToJSON(true);
let inlineLvlSdtFromJSON = Api.FromJSON(json);
paragraph.AddInlineLvlSdt(inlineLvlSdtFromJSON);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdtFromJSON.AddElement(run, 0);
```
