import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SetProperty

为 `CDocBuilderValue` 对象设置属性。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.SetProperty` 方法。

## 语法

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

## 参数

<Tabs groupId="lang">
    <TabItem value="python" label="Python">
        | 名称  | 类型                                    | 描述                                 |
        | ----- | --------------------------------------- | ------------------------------------ |
        | name  | str                                     | `CDocBuilderValue` 对象属性的名称。  |
        | value | [CDocBuilderValue](CDocBuilderValue.md) | `CDocBuilderValue` 对象属性的值。    |
    </TabItem>
    <TabItem value="cpp" label="C++">
        | 名称   | 类型                                    | 描述                                 |
        | ------ | --------------------------------------- | ------------------------------------ |
        | sName  | const wchar_t*                          | `CDocBuilderValue` 对象属性的名称。  |
        | sValue | [CDocBuilderValue](CDocBuilderValue.md) | `CDocBuilderValue` 对象属性的值。    |
    </TabItem>
    <TabItem value="com" label="COM">
        | 名称  | 类型                                        | 描述                                 |
        | ----- | ------------------------------------------- | ------------------------------------ |
        | name  | BSTR                                        | `CDocBuilderValue` 对象属性的名称。  |
        | value | [I_DOCBUILDER_VALUE**](CDocBuilderValue.md) | `CDocBuilderValue` 对象属性的值。    |
    </TabItem>
    <TabItem value="java" label="Java">
        | 名称  | 类型   | 描述                                 |
        | ----- | ------ | ------------------------------------ |
        | name  | String | `CDocBuilderValue` 对象属性的名称。  |
        | value | Object | `CDocBuilderValue` 对象属性的值。    |
    </TabItem>
    <TabItem value="net" label=".Net">
        | 名称   | 类型                                     | 描述                                 |
        | ------ | ---------------------------------------- | ------------------------------------ |
        | sName  | String^                                  | `CDocBuilderValue` 对象属性的名称。  |
        | sValue | [CDocBuilderValue^](CDocBuilderValue.md) | `CDocBuilderValue` 对象属性的值。    |
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

## 设置属性的替代方法

还有两种方法可以为 `CDocBuilderValue` 对象设置属性：

### 1. 使用 Set 方法

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

### 2. 使用索引运算符

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
