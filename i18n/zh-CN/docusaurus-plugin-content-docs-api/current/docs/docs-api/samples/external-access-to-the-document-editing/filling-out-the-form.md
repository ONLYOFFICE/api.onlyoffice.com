---
sidebar_position: -1
hide_table_of_contents: true
---

import { FormExternalToolbar } from '@site/src/components/BrowserWindow';

# 填写表格

填充表格中的空单元格。

用户可以从列表中选择用户名，表单编辑器中的所有字段都将填充用户联系信息。同时，这些数据显示在自定义界面的输入框中。

当用户在自定义界面中编辑输入数据时，它也会在表单编辑器中自动更新。

文档准备好后，可以通过单击 **Complete & Submit** 按钮来提交表单数据。

<FormExternalToolbar/>

## 它是如何运作的

1. 当用户打开表单文档时，将执行 GetAllContentControls 方法以从文档中收集所有内容控件。之后，执行 GetFormValue 方法来获取内容控件的值，并将其显示在自定义界面中：

  ``` ts
  
  let contentControls = [];

  function onDocumentReady() {
    window.connector = docEditor.createConnector();
    function callbackGetAllContentControls(data) {
      setTimeout(function processContentControls(index) {
        if (index >= data.length) {
          contentControls = data;
          return;
        }
        handleGetFormValue(data, index, (value) => {
          if (data[index].Value === value) {
            data[index].Value = value;
          } else {
            data[index].Value = "";
          }
          if (index === data.length - 1) {
            contentControls = data;
          } else {
            processContentControls(index + 1);
          }
        });
      }, 0);
    }
    function handleGetFormValue(data, index, callbackFn) {
      connector.executeMethod("GetFormValue", [data[index].InternalId], callbackFn);
    }
    connector.executeMethod("GetAllContentControls", null, callbackGetAllContentControls);
  }
  ```

2. 当用户从列表中选择用户名时，将执行 GetFormsByTag 方法，通过其标签收集所有表单，并使用 SetFormValue 方法为其设置相应的值：

``` ts
$("#persons").change(function personChange(e) {
  const postalCode = $(this).val();
  const persons = [
    {
      Title: "Miss",
      Name: "Isabella",
      Phone: "(972)234-8261",
      Email: "Isabella.Robinson@email.com",
      PostalCode: "75061",
    },
    {
      Title: "Mr",
      Name: "Emma",
      Phone: "(972)321-8512",
      Email: "Emma.Smith@email.com",
      PostalCode: "11225",
    },
  ];

  for (const person of persons) {
    if (person["PostalCode"] === postalCode) {
      for (key in person) {
        const value = person[key];
        setFormValue(key, value);
      }
    }
  }

  function setFormValue(tag, value) {
    connector.executeMethod(
      "GetFormsByTag",
      [tag],
      (forms) => {
        connector.executeMethod(
          "SetFormValue",
          [forms[0]["InternalId"], value],
          null,
        );
      },
    );
  }
});
```

3. 当用户编辑表单值时，会触发 [onChangeContentControl](/site/docs/plugin-and-macros/interacting-with-editors/text-document-api/Events/onChangeContentControl.md) 事件，然后执行 GetFormValue 方法以获取更新的表单值并将其显示在自定义界面中：

``` ts
function onDocumentReady() {
  connector.attachEvent("onChangeContentControl", onChangeContentControl);
}
function onChangeContentControl(e) {
  connector.executeMethod("GetFormValue", [e["InternalId"]], (value) => {
    $(`#${e["InternalId"]}`).val(value || "");
  });
}
```

:::note
请注意，该连接器仅适用于 **ONLYOFFICE文档开发者版本**.

此类是一项附加功能，在 ONLYOFFICE文档开发者版中并非默认提供，需要额外付费。 如果您有任何疑问，请通过 [sales@onlyoffice.com](mailto:sales@onlyoffice.com)联系我们的销售团队。
:::
