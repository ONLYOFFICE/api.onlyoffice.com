# GetFileToDownload

以指定格式返回要下载的当前文件。

## 语法

```javascript
expression.GetFileToDownload(format);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | 可选 | string | " " | 需要下载文件的格式。 |

## 返回值

string

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetFileToDownload", ["pdf"], function (res) {
    console.log (res)
});
```
