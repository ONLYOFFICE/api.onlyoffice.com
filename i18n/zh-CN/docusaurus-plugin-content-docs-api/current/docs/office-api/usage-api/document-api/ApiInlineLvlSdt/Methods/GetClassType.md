# GetClassType

返回 ApiInlineLvlSdt 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"inlineLvlSdt"

## 示例

此示例获取类类型并将其插入到文档中。

```javascript editor-docx
// How to get a class type of ApiInlineLvlSdt.

// Retrieve class type of ApiInlineLvlSdt object and insert it to the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
let classType = inlineLvlSdt.GetClassType();
paragraph.AddLineBreak();
paragraph.AddText("Class Type = " + classType);
```
