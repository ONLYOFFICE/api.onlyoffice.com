# 内容控件锁定

一个用于定义是否允许删除和/或编辑内容控件的值：\
**0** - 仅允许删除\
**1** - 禁止删除和编辑\
**2** - 仅允许编辑\
**3** - 完全访问

## 类型

枚举类型（Enumeration）

## 值

- 0
- 1
- 2
- 3


## 示例

```javascript
let documents = [{
    "Props": {
        "Id": 100,
        "Tag": "CC_Tag",
        "Lock": 3
    },
    "Script": "var oParagraph = Api.CreateParagraph();oParagraph.AddText('Hello world!');Api.GetDocument().InsertContent([oParagraph]);"
}];
window.Asc.plugin.executeMethod("InsertAndReplaceContentControls", [documents]);
```
