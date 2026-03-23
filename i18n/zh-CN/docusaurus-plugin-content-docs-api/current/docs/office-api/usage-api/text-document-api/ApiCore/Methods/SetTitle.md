# SetTitle

设置文档标题。

## 语法

```javascript
expression.SetTitle(sTitle);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | 必需 | string |  | 文档标题。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置当前文档的标题。

```javascript editor-docx
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetTitle("My Document Title");

const title = core.GetTitle();
let paragraph = doc.GetElement(0);
paragraph.AddText("Title: " + title);

```
