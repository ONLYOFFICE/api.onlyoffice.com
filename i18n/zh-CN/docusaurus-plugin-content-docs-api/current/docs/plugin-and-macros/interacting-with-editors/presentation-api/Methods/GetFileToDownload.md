# 获取待下载文件

以指定格式返回当前待下载的文件。

## 语法

```javascript
expression.GetFileToDownload(format);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| -------- | ------------- | ------------ | ---------- | -------- |
| format | 选填 | string | " " | 指定下载文件的格式。 |

## 返回值

string（字符串）

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetFileToDownload", ["pdf"], function (res) {
    console.log (res)
});
```
