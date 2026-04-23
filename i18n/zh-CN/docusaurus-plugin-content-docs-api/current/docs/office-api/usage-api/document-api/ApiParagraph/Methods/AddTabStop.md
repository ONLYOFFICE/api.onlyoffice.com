# AddTabStop

向当前段落添加制表位。

## 语法

```javascript
expression.AddTabStop();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

此示例向段落添加一个制表位。

```javascript editor-docx
// How to separate two texts with tabs.

// Insert tabs to the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. After it three tab stops will be added.");
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("This is the text which starts after the tab stops.");
```
