# AddTabStop

向当前运行添加制表位。

## 语法

```javascript
expression.AddTabStop();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例向运行添加制表位。

```javascript editor-docx
// How to start a sentence after a tab stop.

// Break two lines of a text with a tab. 

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. After it three tab stops will be added.");
run.AddTabStop();
run.AddTabStop();
run.AddTabStop();
run.AddText("This is the text which starts after the tab stops.");
paragraph.AddElement(run);
```
