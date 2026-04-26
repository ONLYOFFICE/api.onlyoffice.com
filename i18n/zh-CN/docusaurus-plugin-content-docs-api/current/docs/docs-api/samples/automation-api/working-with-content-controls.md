---
sidebar_position: 0
hide_table_of_contents: true
---

import { ContentControlsExternalToolbar } from '@site/src/components/BrowserWindow';

# 处理内容控件

使用自动化 API 从外部 UI 添加不同类型的内容控件并检查其属性。

:::info
点击内容控件类型标签将其插入文档。使用 **List** 按钮切换所有内容控件的列表。在编辑器中点击任何内容控件，即可在面板中查看其属性和 JSON 表示。
:::

<ContentControlsExternalToolbar/>

## 它是如何运作的

1. 当用户打开文档时，将执行 [GetAllContentControls](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/GetAllContentControls.md) 方法来获取内容控件的总数：

    ``` ts
    connector.executeMethod("GetAllContentControls", null, (data) => {
      allControls = data;
    });
    ```

2. 当用户点击类型标签时，将根据类型调用相应的方法：

    - [AddContentControl](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AddContentControl.md) — 用于纯文本（块或内联）
    - [AddContentControlDatePicker](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AddContentControlDatePicker.md) — 用于日期选择器
    - [AddContentControlPicture](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AddContentControlPicture.md) — 用于图片
    - [AddContentControlList](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AddContentControlList.md) — 用于组合框或下拉列表
    - [AddContentControlCheckBox](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AddContentControlCheckBox.md) — 用于复选框

    ``` ts
    // 示例：添加块内容控件
    connector.executeMethod("AddContentControl", [1, { Lock: 0 }]);

    // 示例：添加复选框
    connector.executeMethod("AddContentControlCheckBox", [
      { Checked: false },
      { Lock: 0 },
    ]);
    ```

3. 当内容控件获得焦点时，将触发 [onFocusContentControl](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Events/onFocusContentControl.md) 事件，并执行 [GetCurrentContentControlPr](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/GetCurrentContentControlPr.md) 方法获取其属性（Id、Tag、Lock、Appearance、Color）。当失去焦点时，[onBlurContentControl](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Events/onBlurContentControl.md) 事件隐藏面板：

    ``` ts
    connector.attachEvent("onFocusContentControl", (control) => {
      selectedId = control["InternalId"];
      connector.executeMethod("GetCurrentContentControlPr", ["none"], (props) => {
        // 显示属性和 JSON
      });
    });

    connector.attachEvent("onBlurContentControl", () => {
      selectedId = null;
      // 隐藏详情面板
    });

    connector.attachEvent("onChangeContentControl", () => {
      // 刷新列表和属性
    });
    ```

4. 当用户编辑 Tag、Lock、Appearance 或 Color 并点击 **Apply changes** 时，通过 `connector.callCommand` 使用 Document Builder API 更新属性：

    ``` ts
    Asc.scope.ccProps = { internalId, tag, lock, appearance, r, g, b };
    connector.callCommand(() => {
      const p = Asc.scope.ccProps;
      const doc = Api.GetDocument();
      const controls = doc.GetAllContentControls();
      for (let i = 0; i < controls.length; i++) {
        const cc = controls[i];
        if (cc.GetInternalId() === p.internalId) {
          cc.SetTag(p.tag);
          cc.SetLock(p.lock);
          cc.SetAppearance(p.appearance);
          const color = Api.RGBA(p.r, p.g, p.b, 255);
          cc.SetBackgroundColor(color);
          cc.SetBorderColor(color);
          break;
        }
      }
    });
    ```

5. 当用户点击 **Remove** 时，将执行 [RemoveContentControl](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/RemoveContentControl.md) 方法删除当前选中的内容控件：

    ``` ts
    connector.executeMethod("RemoveContentControl", [selectedId]);
    ```

:::note
请注意，该连接器仅适用于 **ONLYOFFICE 文档开发者版本**。

此类是一项附加功能，默认情况下不包含在ONLYOFFICE 文档开发者版中，需要额外付费。 如果您有任何疑问，请通过 [sales@onlyoffice.com](mailto:sales@onlyoffice.com)联系我们的销售团队。
:::
