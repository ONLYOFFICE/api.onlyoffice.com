# 接受审阅修订

接受审阅修订。

## 语法

```javascript
expression.AcceptReviewChanges(isAll);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAll | 选填 | boolean | false | 指定是否接受所有修订：接受全部（**true**），或仅接受当前选中的修订（**false**）。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("AcceptReviewChanges", [true]);
```
