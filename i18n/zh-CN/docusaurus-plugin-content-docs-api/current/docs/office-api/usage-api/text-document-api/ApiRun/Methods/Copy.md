# Copy

创建当前运行的副本。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

此示例创建运行的副本。

```javascript editor-docx
// How to create a duplicate of the text.

// Create a copy of the run and insert it to the paragraph. 

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is just a sample text that was copied. ");
paragraph.AddElement(run1);
let run2 = run1.Copy();
paragraph.AddElement(run2);
```
