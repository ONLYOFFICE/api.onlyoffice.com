import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# GetProperty

Returns a property of the `CDocBuilderValue` object.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.GetProperty` method is not used.

## Syntax

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def GetProperty(self, name: str) -> CDocBuilderValue
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderValue GetProperty(const wchar_t* sName);
        ```
    </TabItem>
    <TabItem value="com" label="COM">
        ```cpp
        HRESULT GetProperty([in] BSTR name, [out, retval] I_DOCBUILDER_VALUE** result);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderValue getProperty(String name);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        CDocBuilderValue^ GetProperty(String^ sName);
        ```
    </TabItem>
</Tabs>

## Parameters

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | Name | Type | Description                                         |
        | ---- | ---- | --------------------------------------------------- |
        | name | str  | The name of the `CDocBuilderValue` object property. |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | Name  | Type           | Description                                         |
        | ----- | -------------- | --------------------------------------------------- |
        | sName | const wchar_t* | The name of the `CDocBuilderValue` object property. |
    </TabItem>
    <TabItem value="com" label="COM">
        | Name   | Type                                        | Description                                         |
        | ------ | ------------------------------------------- | --------------------------------------------------- |
        | name   | BSTR                                        | The name of the `CDocBuilderValue` object property. |
        | result | [I_DOCBUILDER_VALUE**](CDocBuilderValue.md) | The returned object property.                       |
    </TabItem>
    <TabItem value="java" label="Java">
        | Name | Type   | Description                                         |
        | ---- | ------ | --------------------------------------------------- |
        | name | String | The name of the `CDocBuilderValue` object property. |
    </TabItem>
    <TabItem value="net" label=".Net">
        | Name  | Type    | Description                                         |
        | ----- | ------- | --------------------------------------------------- |
        | sName | String^ | The name of the `CDocBuilderValue` object property. |
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
        docPr = document.GetProperty("color")
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
        CValue oDocPr = oDocument.GetProperty("color");
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
        oBuilder->Initialize();
        oBuilder->GetContext(&oContext);
        oContext->GetGlobal(&oGlobal);
        oGlobal->GetProperty(_bstr_t("Api"), &oApi);
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
        CDocBuilderValue docPr = doc.getProperty("color");
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
        CValue oDocPr = oDocument.GetProperty("color");
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>

## Alternative ways to get a property

There are two more ways to get a property of the `CDocBuilderValue` object:

### 1. Using the Get method

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        def Get(self, name: str) -> CDocBuilderValue
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderValue Get(const char* name);
        CDocBuilderValue Get(const wchar_t* name);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        CDocBuilderValue get(String name);
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        CDocBuilderValue^ Get(String^ name);
        ```
    </TabItem>
</Tabs>

#### Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        globalObj = context.GetGlobal()
        api = globalObj["Api"]
        document = api.Call("GetDocument")
        docPr = document.Get("color")
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
        CValue oDocPr = oDocument.Get("color");
        CDocBuilder::Dispose();
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
        CDocBuilderValue docPr = doc.get("color");
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
        CValue oDocPr = oDocument.Get("color");
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>

### 2. Using the index operator

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        value["property_name"]
        ```
    </TabItem>
    <TabItem value="cpp" label="C++">
        ```cpp
        CDocBuilderValue operator[](const char* name);
        CDocBuilderValue operator[](const wchar_t* name);
        ```
    </TabItem>
    <TabItem value="java" label="Java">
        ```java
        value["property_name"]
        ```
    </TabItem>
    <TabItem value="net" label=".Net">
        ```cs
        property CDocBuilderValue^ default[String^]
        ```
    </TabItem>
</Tabs>

#### Example

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        ```py
        builder = docbuilder.CDocBuilder()
        context = builder.GetContext()
        globalObj = context.GetGlobal()
        api = globalObj["Api"]
        document = api.Call("GetDocument")
        docPr = document["color"]
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
        CValue oDocPr = oDocument["color"];
        CDocBuilder::Dispose();
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
        CDocBuilderValue docPr = doc["color"];
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
        CValue oDocPr = oDocument["color"];
        CDocBuilder.Destroy();
        ```
    </TabItem>
</Tabs>
