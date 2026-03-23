# ContentControlLock

定义是否可以删除和/或编辑内容控件的值：
**0** - 仅删除
**1** - 禁止删除或编辑
**2** - 仅编辑
**3** - 完全访问

## 类型

枚举

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
