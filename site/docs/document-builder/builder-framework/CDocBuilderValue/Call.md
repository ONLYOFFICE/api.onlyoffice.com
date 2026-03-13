import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Call

Calls the specified Document Builder method. See the [Text document API](/docs/office-api/usage-api/text-document-api/text-document-api.md), [Spreadsheet API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md), [Presentation API](/docs/office-api/usage-api/presentation-api/presentation-api.md), or [Form API](/docs/office-api/usage-api/form-api/form-api.md) sections for more information which methods are available for various document types.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.Call` method is not used explicitly. The method itself is used instead. See the example below.

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def Call(self, name: str, *args) -> CDocBuilderValue
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderValue Call(const wchar_t* sName, CDocBuilderValue p1, CDocBuilderValue p2, CDocBuilderValue p3, CDocBuilderValue p4, CDocBuilderValue p5, CDocBuilderValue p6);
        CDocBuilderValue Call(const char* sName, CDocBuilderValue p1, CDocBuilderValue p2, CDocBuilderValue p3, CDocBuilderValue p4, CDocBuilderValue p5, CDocBuilderValue p6);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT Call([in] BSTR name, [in, optional] VARIANT val1, [in, optional] VARIANT val2, [in, optional] VARIANT val3, [in, optional] VARIANT val4, [in, optional] VARIANT val5, [in, optional] VARIANT val6, [out, retval] I_DOCBUILDER_VALUE** result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderValue call(String name, Object p1, Object p2, Object p3, Object p4, Object p5, Object p6);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        CDocBuilderValue^ Call(String^ sName, CDocBuilderValue^ p1, CDocBuilderValue^ p2, CDocBuilderValue^ p3, CDocBuilderValue^ p4, CDocBuilderValue^ p5, CDocBuilderValue^ p6);
        ```
    </TabItem>
</Tabs>

## Parameters

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | Name  | Type                                      | Description                                                         |
        | ----- | ----------------------------------------- | ------------------------------------------------------------------- |
        | name  | str                                       | The name of the Document Builder method.                            |
        | *args | [CDocBuilderValue](CDocBuilderValue.md)   | The parameters that the Document Builder method takes as arguments. |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | Name  | Type                                      | Description                                                        |
        | ----- | ----------------------------------------- | ------------------------------------------------------------------ |
        | sName | const wchar_t* \| const char*             | The name of the Document Builder method in Unicode or UTF8 format. |
        | p1-p6 | [CDocBuilderValue](CDocBuilderValue.md)   | The parameters that the Document Builder method takes as arguments. |
    </TabItem>
    <TabItem value="com" label="COM">
        | Name      | Type                                      | Description                                                         |
        | --------- | ----------------------------------------- | ------------------------------------------------------------------- |
        | name      | BSTR                                      | The name of the Document Builder method.                            |
        | val1-val6 | VARIANT                                   | The parameters that the Document Builder method takes as arguments. |
        | result    | [I_DOCBUILDER_VALUE**](CDocBuilderValue.md) | The returned method value.                                        |
    </TabItem>
    <TabItem value="java" label="Java">
        | Name  | Type                                      | Description                                                         |
        | ----- | ----------------------------------------- | ------------------------------------------------------------------- |
        | name  | String                                    | The name of the Document Builder method.                            |
        | p1-p6 | Object                                    | The parameters that the Document Builder method takes as arguments. |
    </TabItem>
    <TabItem value="net" label=".Net">
        | Name  | Type                                       | Description                                                         |
        | ----- | ------------------------------------------ | ------------------------------------------------------------------- |
        | sName | String^                                    | The name of the Document Builder method.                            |
        | p1-p6 | [CDocBuilderValue^](CDocBuilderValue.md)   | The parameters that the Document Builder method takes as arguments. |
    </TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        globalObj = context.GetGlobal()
        api = globalObj["Api"]
        document = api.Call("GetDocument")
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        CValue oApi = oGlobal["Api"];
        CValue oDocument = oApi.Call("GetDocument");
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderContext* oContext = NULL;
        IONLYOFFICEDocBuilderValue* oGlobal = NULL;
        IONLYOFFICEDocBuilderValue* oApi = NULL;
        IONLYOFFICEDocBuilderValue* oDocument = NULL;
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->GetGlobal(&oGlobal);
        oGlobal->GetProperty(_bstr_t("Api"), &oApi);
        oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilder.initialize("");
        CDocBuilder builder = new CDocBuilder();
        CDocBuilderContext context = builder.getContext();
        CDocBuilderValue global = context.getGlobal();
        CDocBuilderValue api = global.get("Api");
        CDocBuilderValue doc = api.call("GetDocument");
        CDocBuilder.dispose();
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
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
        let doc = Api.GetDocument();
        ```
    </TabItem>
</Tabs>
