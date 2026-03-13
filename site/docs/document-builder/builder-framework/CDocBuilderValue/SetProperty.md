import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SetProperty

Sets a property to the `CDocBuilderValue` object.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.SetProperty` method is not used.

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def SetProperty(self, name: str, value: CDocBuilderValue) -> None
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        void SetProperty(const wchar_t* sName, CDocBuilderValue sValue);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT SetProperty([in] BSTR name, [in] I_DOCBUILDER_VALUE** value);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        void setProperty(String name, Object value);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        void SetProperty(String^ sName, CDocBuilderValue^ sValue);
        ```
    </TabItem>
</Tabs>

## Parameters

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | Name  | Type                                    | Description                                          |
        | ----- | --------------------------------------- | ---------------------------------------------------- |
        | name  | str                                     | The name of the `CDocBuilderValue` object property.  |
        | value | [CDocBuilderValue](CDocBuilderValue.md) | The value of the `CDocBuilderValue` object property. |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | Name   | Type                                    | Description                                          |
        | ------ | --------------------------------------- | ---------------------------------------------------- |
        | sName  | const wchar_t*                          | The name of the `CDocBuilderValue` object property.  |
        | sValue | [CDocBuilderValue](CDocBuilderValue.md) | The value of the `CDocBuilderValue` object property. |
    </TabItem>
    <TabItem value="com" label="COM">
        | Name  | Type                                        | Description                                          |
        | ----- | ------------------------------------------- | ---------------------------------------------------- |
        | name  | BSTR                                        | The name of the `CDocBuilderValue` object property.  |
        | value | [I_DOCBUILDER_VALUE**](CDocBuilderValue.md) | The value of the `CDocBuilderValue` object property. |
    </TabItem>
    <TabItem value="java" label="Java">
        | Name  | Type   | Description                                          |
        | ----- | ------ | ---------------------------------------------------- |
        | name  | String | The name of the `CDocBuilderValue` object property.  |
        | value | Object | The value of the `CDocBuilderValue` object property. |
    </TabItem>
    <TabItem value="net" label=".Net">
        | Name   | Type                                     | Description                                          |
        | ------ | ---------------------------------------- | ---------------------------------------------------- |
        | sName  | String^                                  | The name of the `CDocBuilderValue` object property.  |
        | sValue | [CDocBuilderValue^](CDocBuilderValue.md) | The value of the `CDocBuilderValue` object property. |
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
        document.SetProperty("color", colorValue)
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
        oDocument.SetProperty("color", colorValue);
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
        oDocument->SetProperty("color", colorValue);
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
        doc.setProperty("color", colorValue);
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
        oDocument.SetProperty("color", colorValue);
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>

## Alternative ways to set a property

There are two more ways to set a property to the `CDocBuilderValue` object:

### 1. Using the Set method

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def Set(self, name: str, value: CDocBuilderValue) -> None
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        void Set(const wchar_t* name, CDocBuilderValue value);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        void set(String name, Object value);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        void Set(String^ name, CDocBuilderValue^ value);
        ```
    </TabItem>
</Tabs>

### 2. Using the index operator

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        document["property_name"] = value
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        document["property_name"] = value;
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        document["property_name"] = value;
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        document["property_name"] = value;
        ```
    </TabItem>
</Tabs>
