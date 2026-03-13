import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# GetProperty

返回 `CDocBuilderValue` 对象的属性。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.GetProperty` 方法。

## 语法

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

## 参数

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | 名称 | 类型 | 描述                                 |
        | ---- | ---- | ------------------------------------ |
        | name | str  | `CDocBuilderValue` 对象属性的名称。  |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | 名称  | 类型           | 描述                                 |
        | ----- | -------------- | ------------------------------------ |
        | sName | const wchar_t* | `CDocBuilderValue` 对象属性的名称。  |
    </TabItem>
    <TabItem value="com" label="COM">
        | 名称   | 类型                                        | 描述                                 |
        | ------ | ------------------------------------------- | ------------------------------------ |
        | name   | BSTR                                        | `CDocBuilderValue` 对象属性的名称。  |
        | result | [I_DOCBUILDER_VALUE**](CDocBuilderValue.md) | 返回的对象属性。                     |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称 | 类型   | 描述                                 |
        | ---- | ------ | ------------------------------------ |
        | name | String | `CDocBuilderValue` 对象属性的名称。  |
    </TabItem>
    <TabItem value="net" label=".Net">
        | 名称  | 类型    | 描述                                 |
        | ----- | ------- | ------------------------------------ |
        | sName | String^ | `CDocBuilderValue` 对象属性的名称。  |
    </TabItem>
</Tabs>

## 示例

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

## 获取属性的替代方法

还有两种方法可以获取 `CDocBuilderValue` 对象的属性：

### 1. 使用 Get 方法

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

#### 示例

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

### 2. 使用索引运算符

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

#### 示例

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
