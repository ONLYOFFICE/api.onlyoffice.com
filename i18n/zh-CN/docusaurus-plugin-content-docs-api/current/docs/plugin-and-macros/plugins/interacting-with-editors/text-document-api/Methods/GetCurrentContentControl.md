# GetCurrentContentControl

返回所选内容控件的标识符（即鼠标光标当前所在的内容控件）。

## 语法

```javascript
expression.GetCurrentContentControl();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

```javascript
document.getElementById ("buttonIDChangeState").onclick = function () {
    var _Control = [];
    window.buttonIDChangeState_click = true;
    window.Asc.plugin.executeMethod("GetCurrentContentControl");
};
```
