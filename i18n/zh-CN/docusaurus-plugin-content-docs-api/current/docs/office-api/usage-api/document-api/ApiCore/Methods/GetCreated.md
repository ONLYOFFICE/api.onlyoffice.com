# GetCreated

返回文档创建日期。

## 语法

```javascript
expression.GetCreated();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Date

## 示例

此示例演示如何获取当前文档的创建日期。

```javascript editor-docx
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCreated(new Date('20 January 2000'));

const createdDate = core.GetCreated().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Created: " + createdDate);

```
