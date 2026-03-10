# GetIdentifier

返回文档标识符。

## 语法

```javascript
expression.GetIdentifier();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例演示如何使用 ApiCore 获取当前文档的标识符。

```javascript editor-docx
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetIdentifier("#ID42");

const identifier = core.GetIdentifier();
let paragraph = doc.GetElement(0);
paragraph.AddText("Identifier: " + identifier);

```
