# 移动至审阅修订

移动到下一个审阅修订。

## 语法

```javascript
expression.MoveToNextReviewChange(isForward);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isForward | 选填 | boolean | true | 指定是否导航到下一个（**true**）或上一个（**false**）审阅修订。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("MoveToNextReviewChange", [true]);
```
