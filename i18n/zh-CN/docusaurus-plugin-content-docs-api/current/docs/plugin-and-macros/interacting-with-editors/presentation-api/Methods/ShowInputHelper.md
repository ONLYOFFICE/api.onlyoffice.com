# ShowInputHelper

显示输入助手。

## 语法

```javascript
expression.ShowInputHelper(guid, w, h, isKeyboardTake);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| guid | 必需 | string |  | 指定插件标识符的字符串值，必须是 *asc.&#123;UUID&#125;* 类型。 |
| w | 必需 | number |  | 指定窗口宽度的数值，以毫米为单位。 |
| h | 必需 | number |  | 指定窗口高度的数值，以毫米为单位。 |
| isKeyboardTake | 必需 | boolean |  | 定义是否捕获键盘（**true**）或不捕获（**false**）。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("ShowInputHelper", ["asc.{UUID}", 70, 70, true]);
```
