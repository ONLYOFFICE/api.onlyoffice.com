# 内容控件复选框属性

内容控件复选框属性。

## 属性

| 名称 | 类型 | 说明 |
| ---- | ---- | ---- |
| Checked | boolean | 定义内容控件复选框是否被选中。 |
| CheckedSymbol | number | 当复选框被选中时使用的 HTML 代码格式符号。 |
| UncheckedSymbol | number | 当复选框未被选中时使用的 HTML 代码格式符号。 |
## 类型

object（对象）



## 示例

```javascript
let controlCheckBoxPr = {
    "Checked" : false,
    "CheckedSymbol" : 9756,
    "UncheckedSymbol" : 9744
};
window.Asc.plugin.executeMethod ("AddContentControlCheckBox", [controlCheckBoxPr, {"Id" : 7, "Tag" : "{tag}", "Lock" : 0}]);
```
