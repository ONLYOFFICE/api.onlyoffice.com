# ShowButton

显示或隐藏页眉中的按钮。

## 语法

```javascript
expression.ShowButton(id, bShow, align);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | 必需 | string |  | 按钮 ID。 |
| bShow | 必需 | boolean |  | 该标志指定按钮是显示（**true**）还是隐藏（**false**）。 |
| align | 必需 | string |  | 该参数指示按钮是显示在窗口的右侧还是左侧。默认值为 "left"。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("ShowButton", ["back", false, "right"]);
```
