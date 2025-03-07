import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Call

Calls the specified Document Builder method. See the [Text document API](../../../../office-api/usage-api/text-document-api/text-document-api.md), [Spreadsheet API](../../../../office-api/usage-api/spreadsheet-api/spreadsheet-api.md), [Presentation API](../../../../office-api/usage-api/presentation-api/presentation-api.md) or [Form API](../../../../office-api/usage-api/form-api/form-api.md) sections for more information which methods are available for various document types.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.Call` method is not used explicitly. The method itself is used instead. See the example below.

## Syntax

```cs
CDocBuilderValue^ Call(String^ sName, CDocBuilderValue^ p1, CDocBuilderValue^ p2, CDocBuilderValue^ p3, CDocBuilderValue^ p4, CDocBuilderValue^ p5, CDocBuilderValue^ p6);
```

## Parameters

| Parameter | Type                                                         | Description                                                        |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------------ |
| sName     | String^                                                      | The name of the Document Builder method.                           |
| p1-p6     | [CDocBuilderValue^](../CDocBuilderValue/CDocBuilderValue.md) | The parameters that the Document Builder method takes as argumens. |

## Example

<Tabs>
    <TabItem value="net" label=".Net">
        ``` cs
        string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
        CDocBuilder.Initialize(workDirectory);
        CDocBuilder oBuilder = new CDocBuilder();
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        CValue oApi = oGlobal["Api"];
        CValue oDocument = oApi.Call("GetDocument");
        CDocBuilder.Destroy();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        const oDocument = Api.GetDocument()
        ```
    </TabItem>
</Tabs>
