# 宏

一个包含文档中所有宏相关数据的对象。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| current | number | 当前宏的索引。 |
| macrosArray | string[] | 宏代码数组（格式：*[&#123;"name": "Macros1", "value": "&#123;macrosCode&#125;"&#125;]*）。 |
## 类型

Object（对象）



## 示例

```javascript
let macros = {
    "macrosArray": [
        {
            "name": "Macros 1",
            "value": "(function()\n{oDocument = Api.GetDocument();\noParagraph = Api.CreateParagraph();\noParagraph.AddText(\"This is a new paragraph\");\noDocument.Push(oParagraph);\n})();"
        },
        {
            "name": "Macros 2",
            "value": "(function()\n{oDocument = Api.GetDocument();\noParagraph = oDocument.GetElement(0);\noParagraph.AddText(\"ONLYOFFICE Document Builder\");\noRange = oDocument.GetRange(0, 24);\noRange.SetBold(true);\n})();"
        }
    ],
    "current": 1
};
window.Asc.plugin.executeMethod("SetMacros", [macros]);
```
