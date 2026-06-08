# MouseMoveWindow

当鼠标按钮在插件 iframe 内移动时向插件发送事件。

## 语法

```javascript
expression.MouseMoveWindow(frameId, x, y);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| frameId | 必需 | string |  | 框架 ID。 |
| x | 必需 | number |  | X 坐标。 |
| y | 必需 | number |  | Y 坐标。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("MouseMoveWindow", ["iframe_asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}", 70, 40]);
```
