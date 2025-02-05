# GetProperty

Returns a property of the `CDocBuilderValue` object.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.GetProperty` method is not used.

## Syntax

```cpp
CDocBuilderValue GetProperty(const wchar_t* sName);
```

## Parameters

| **Name** | **Data type**  | **Description**                                     |
| -------- | -------------- | --------------------------------------------------- |
| sName    | const wchar_t* | The name of the `CDocBuilderValue` object property. |

## Example

### C++

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

There are two more ways to get a property of the `CDocBuilderValue` object:

1. use the `Get` method that takes the arguments both in the UTF8 or Unicode formats:

   ```cpp
   CDocBuilderValue Get(const char* name);
   CDocBuilderValue Get(const wchar_t* name);
   ```

   ## Example

   ### C++

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

2. use the `operator[]` postfix expression that takes the arguments both in the UTF8 or Unicode formats:

   ```cpp
   CDocBuilderValue operator[](const char* name);
   CDocBuilderValue operator[](const wchar_t*  name);
   ```

   ## Example

   ### C++

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
