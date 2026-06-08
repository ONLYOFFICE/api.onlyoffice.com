# GetInstalledPlugins

返回所有已安装的插件。

## 语法

```javascript
expression.GetInstalledPlugins();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[PluginData](../Enumeration/PluginData.md)[]

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetInstalledPlugins", null, function (result) {
    postMessage (JSON.stringify ({type: 'InstalledPlugins', data: result }));
});
```
