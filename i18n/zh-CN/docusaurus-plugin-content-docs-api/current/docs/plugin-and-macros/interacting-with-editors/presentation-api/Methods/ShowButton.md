# 按钮显示

在标题栏中显示或隐藏按钮。

## 语法

```javascript
expression.ShowButton(id, bShow, align);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | 必填 | string |  | 按钮的 ID。 |
| bShow | 必填 | boolean |  | 指定按钮是否显示的标志（**true** 为显示，**false** 为隐藏）。 |
| align | 必填 | string |  | 参数指示按钮显示在窗口的右侧还是左侧。默认值为左侧。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("ShowButton", ["back", false, "right"]);
```
