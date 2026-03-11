# onBlurContentControl

用于显示哪个内容控件已失去焦点的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| control | [Event_ContentControl](../Enumeration/Event_ContentControl.md) | 定义已失去焦点的内容控件。 |

```javascript
window.Asc.plugin.attachEditorEvent("onBlurContentControl", (oPr) => {
    if (oPr && "BankBIC" === oPr["Tag"]) {
        window.Asc.plugin.executeMethod("GetFormValue", [oPr["InternalId"]], function(value) {
            if ("12345678" !== value) {
                return;
            }

            window.Asc.plugin.executeMethod.executeMethod("GetFormsByTag", ["BankAccount"], function(forms) {
                for (let i = 0; i < forms.length; ++i) {
                    connector.executeMethod("SetFormValue", [forms[i]["InternalId"], "10101110100000000123"], null);
                }
            });

            window.Asc.plugin.executeMethod.executeMethod("GetFormsByTag", ["BankName"], function(forms) {
                for (let i = 0; i < forms.length; ++i) {
                    connector.executeMethod("SetFormValue", [forms[i]["InternalId"], "OnlyOffice BANK"], null);
                }
            });

            window.Asc.plugin.executeMethod.executeMethod("GetFormsByTag", ["BankPlace"], function(forms) {
                for (let i = 0; i < forms.length; ++i) {
                    connector.executeMethod("SetFormValue", [forms[i]["InternalId"], "Himalayas"], null);
                }
            });
        });
    }
    console.log("event: onBlurContentControl");
});
```

