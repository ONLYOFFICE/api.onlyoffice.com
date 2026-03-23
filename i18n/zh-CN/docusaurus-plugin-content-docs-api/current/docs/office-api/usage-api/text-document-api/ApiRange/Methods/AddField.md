# AddField

通过域指令代码向指定范围添加域。
💡 此方法会移除范围内的文本。

## 语法

```javascript
expression.AddField(sCode);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sCode | 必需 | string |  | 域指令代码。 |

## 返回值

boolean

## 示例

此示例通过域指令代码向指定范围添加域。注意：此方法会移除范围内的文本。

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This text for time field");
let range = paragraph.GetRange();
range.AddField('TIME \\@ "dddd, MMMM d, yyyy"');
paragraph = Api.CreateParagraph();
paragraph.AddText("The text within range was replaced by field with TIME instruction field.");
doc.Push(paragraph);
```
