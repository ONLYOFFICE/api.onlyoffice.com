---
sidebar_position: -1
hide_table_of_contents: true
---

import { FormExternalToolbar } from '@site/src/components/BrowserWindow';

# 填写表格

使用自动化 API 从外部 UI 填写表单字段 — 从下拉列表中选择一个人员，编辑器和自定义界面中的所有字段都会自动更新。

:::info
文档以可填写的 PDF 表单打开。您的代码调用 `connector.executeMethod()` 来读取和写入表单值。更改在编辑器和外部界面之间实时双向同步。
:::

<FormExternalToolbar/>

## 它是如何运作的

1. 当用户打开表单文档时，将执行 [GetAllContentControls](/docs/plugin-and-macros/interacting-with-editors/document-api/Methods/GetAllContentControls.md) 方法以从文档中收集所有内容控件。之后，执行 [GetFormValue](/docs/plugin-and-macros/interacting-with-editors/form-api/Methods/GetFormValue.md) 方法来获取内容控件的值，并将其显示在自定义界面中：

    ``` ts
    let contentControls = [];

    const onDocumentReady = () => {
      window.connector = docEditor.createConnector();

      connector.executeMethod("GetAllContentControls", null, (data) => {
        for (let i = 0; i < data.length; i++) {
          connector.executeMethod("GetFormValue", [data[i]["InternalId"]], (value) => {
            data[i].Value = value || "";
            if (i === data.length - 1) {
              contentControls = data;
            }
          });
        }
      });
    };
    ```

2. 当用户从列表中选择用户名时，将执行 [GetFormsByTag](/docs/plugin-and-macros/interacting-with-editors/form-api/Methods/GetFormsByTag.md) 方法，通过其标签收集所有表单，并使用 [SetFormValue](/docs/plugin-and-macros/interacting-with-editors/form-api/Methods/SetFormValue.md) 方法为其设置相应的值：

    ``` ts
    document.getElementById("persons").addEventListener("change", function () {
      const person = persons.find((p) => p["PostalCode"] === this.value);
      for (const key in person) {
        const value = person[key];
        setFormValue(key, value);
      }
    });

    const setFormValue = (tag, value) => {
      connector.executeMethod("GetFormsByTag", [tag], (forms) => {
        connector.executeMethod("SetFormValue", [forms[0]["InternalId"], value], null);
      });
    };
    ```

3. 当用户编辑表单值时，会触发 [onChangeContentControl](/docs/plugin-and-macros/interacting-with-editors/document-api/Events/onChangeContentControl.md) 事件，然后执行 [GetFormValue](/docs/plugin-and-macros/interacting-with-editors/form-api/Methods/GetFormValue.md) 方法以获取更新的表单值并将其显示在自定义界面中：

    ``` ts
    const onDocumentReady = () => {
      connector.attachEvent("onChangeContentControl", (e) => {
        connector.executeMethod("GetFormValue", [e["InternalId"]], (value) => {
          const element = document.getElementById(e["InternalId"]);
          if (element.classList.contains("content-control-radio")) {
            element.checked = value;
          } else {
            element.value = value || "";
          }
        });
      });
    };
    ```

:::note
请注意，该连接器仅适用于 **ONLYOFFICE 文档开发者版本**.

此类是一项附加功能，在 ONLYOFFICE 文档开发者版中并非默认提供，需要额外付费。 如果您有任何疑问，请通过 [sales@onlyoffice.com](mailto:sales@onlyoffice.com)联系我们的销售团队。
:::
