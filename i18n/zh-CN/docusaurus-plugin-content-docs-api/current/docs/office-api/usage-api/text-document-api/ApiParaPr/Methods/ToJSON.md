# ToJSON

将 ApiParaPr 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(bWriteStyles);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteStyles | 必需 | boolean |  | 指定使用的样式是否将写入 JSON 对象。 |

## 返回值

JSON

## 示例

此示例将 ApiParaPr 对象转换为 JSON 对象。

```javascript editor-docx
// How to get a JSON from the paragraph properties.

// Convert the paragraph properties to json and add it to the paragraph.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetLeftBorder("single", 24, 0, 0, 255, 0);
let json = paraPr.ToJSON(true);
let paraPrFromJSON = Api.FromJSON(json);
let type = paraPrFromJSON.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class type = " + type);
```
