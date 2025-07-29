---
sidebar_position: -1
---

# 按钮

要处理插件变体中指定的 [buttons](../structure/manifest/manifest.md#variationsbuttons)（不包括模态窗口或面板中的按钮），请使用 **button** 方法。点击任意插件按钮时，该函数都会被调用。

## 参数 

| 名称       | 类型   | 描述                                                                                                                                                                                                                                                                     |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id       | number | 指定该按钮在 *config.json* 文件的 [buttons](../structure/manifest/manifest.md#variationsbuttons) 数组中的索引。如果 *id == -1*，则表示插件认为点击了窗口的**关闭（Close）** 按钮，或操作被某种方式中断。 |
| windowId | number | 指定模态窗口中按钮的索引。                                                                                                                                                                                                                           |

## 示例

``` ts
Asc.plugin.button = (id, windowId) => {
  if (!windowId) {
    return
  }

  if (windowId === newWindow.id) {
    console.log("Plugin button")
  }
}
```
