# GetReplies

获取此批注的回复。

## 语法

```javascript
expression.GetReplies();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextAnnotation](../../ApiTextAnnotation/ApiTextAnnotation.md)[]

## 示例

This example creates a square annotation and gets its replies.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetContents("Annot contents");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);

let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
textAnnot.SetContents("Annot reply");
squareAnnot.AddReply(textAnnot);

let replies = squareAnnot.GetReplies();
replies.forEach((reply, idx) => {
	console.log(`Reply with idx ${idx}: "${reply.GetContents()}"`);
});

```
