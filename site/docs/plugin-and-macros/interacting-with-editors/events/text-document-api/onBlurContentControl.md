# onBlurContentControl

The function called to show which content control has been blurred.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| control | [ContentControl](Enumeration/ContentControl.md) | Defines the content control that has been blurred. |

```javascript
window.Asc.plugin.attachEditorEvent("onBlurContentControl", (oPr) => {
    if (oPr && "BankBIC" === oPr["Tag"])
    {
        window.Asc.plugin.executeMethod("GetFormValue", [oPr["InternalId"]], function(value)
        {
            if ("12345678" !== value)
                return;

            window.Asc.plugin.executeMethod.executeMethod("GetFormsByTag", ["BankAccount"], function(forms)
            {
                for (let i = 0; i < forms.length; ++i)
                {
                    connector.executeMethod("SetFormValue", [forms[i]["InternalId"], "10101110100000000123"], null);
                }
            });

            window.Asc.plugin.executeMethod.executeMethod("GetFormsByTag", ["BankName"], function(forms)
            {
                for (let i = 0; i < forms.length; ++i)
                {
                    connector.executeMethod("SetFormValue", [forms[i]["InternalId"], "OnlyOffice BANK"], null);
                }
            });

            window.Asc.plugin.executeMethod.executeMethod("GetFormsByTag", ["BankPlace"], function(forms)
            {
                for (let i = 0; i < forms.length; ++i)
                {
                    connector.executeMethod("SetFormValue", [forms[i]["InternalId"], "Himalayas"], null);
                }
            });
        });
    }
    console.log("event: onBlurContentControl");
});
```

