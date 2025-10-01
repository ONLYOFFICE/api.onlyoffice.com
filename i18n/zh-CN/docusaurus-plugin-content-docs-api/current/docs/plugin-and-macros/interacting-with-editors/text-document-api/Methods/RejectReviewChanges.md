# 拒绝审阅修订

拒绝审阅修订。

## 语法

```javascript
expression.RejectReviewChanges(isAll);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAll | 选填 | boolean | false | 指定是否拒绝所有修订（**true**），还是仅拒绝当前选中的修订（**false**）。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("RejectReviewChanges", [true]);
```
