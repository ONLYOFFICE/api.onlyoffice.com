# ContentControlType

指定内容控件类型的数值：
-**1** - 块内容控件
-**2** - 内联内容控件
-**3** - 行内容控件
-**4** - 单元格内容控件

## 类型

枚举

## 值

- 1
- 2
- 3
- 4


## 示例

```javascript
let contentControlType = 1;
window.Asc.plugin.executeMethod ("AddContentControl", [contentControlType, {"Id" : 7, "Tag" : "{tag}", "Lock" : 0}]);
```
