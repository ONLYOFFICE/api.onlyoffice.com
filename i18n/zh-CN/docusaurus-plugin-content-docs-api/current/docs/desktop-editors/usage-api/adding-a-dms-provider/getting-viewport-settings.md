---
sidebar_position: -2
---

# 获取视口设置

从 8.1 版本开始，您可以获取桌面编辑器的视口设置。此方法用于设置顶部面板和桌面编辑器部件之间的间距。

``` ts
window.AscDesktopEditor.getViewportSettings();
```

该方法返回一个包含以下参数的对象：

``` json
{ 
  "widgetType": "window",
  "captionHeight": 100
}
```

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 参数          | 类型     | 示例值      | 描述                              |
|---------------|----------|-------------|-----------------------------------|
| widgetType    | string   | `"window"`  | 部件类型（*"window"* 或 *"tab"*）。 |
| captionHeight | integer  | `100`       | 标题高度。                        |

```mdx-code-block
</APITable>
```

您还可以订阅 *onViewportSettingsChanged* 事件，该事件在视口设置每次更改时都会被调用：

``` ts
window.AscDesktopEditor.attachEvent("onViewportSettingsChanged", () => {
  console.log("视口设置已更改。");
});
```
