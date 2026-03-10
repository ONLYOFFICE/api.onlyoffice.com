# AddPageBreak

添加分页符，并从新页开始下一个元素。

## 语法

```javascript
expression.AddPageBreak();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例添加分页符，并从新页开始下一个元素。

```javascript editor-docx
// How to start a sentence from the new page.

// Break two lines of a text run with a page break. 

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is the text for the first page. After it a page break will be added. Scroll down to the second page to see the text there.");
run.AddPageBreak();
run.AddText("This is the text which starts from the beginning of the second page. ");
run.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
paragraph.AddElement(run);
```
