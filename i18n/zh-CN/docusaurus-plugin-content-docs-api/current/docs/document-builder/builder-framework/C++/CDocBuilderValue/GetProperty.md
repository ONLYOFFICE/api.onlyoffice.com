# GetProperty（获取属性）

返回 `CDocBuilderValue` 对象的属性。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.GetProperty` 方法。

## 语法

```cpp
CDocBuilderValue GetProperty(const wchar_t* sName);
```

## 参数

| **名称** | **数据类型**   | **描述**                               |
| -------- | -------------- | -------------------------------------- |
| sName    | const wchar_t* | `CDocBuilderValue` 对象属性的名称。    |

## 示例

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

获取 `CDocBuilderValue` 对象的属性还有另外两种方式：

1. 使用 `Get` 方法，该方法接受 UTF8 或 Unicode 格式的参数：

   ```cpp
   CDocBuilderValue Get(const char* name);
   CDocBuilderValue Get(const wchar_t* name);
   ```

   ## 示例

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

2. 使用 `operator[]` 后缀表达式，该表达式接受 UTF8 或 Unicode 格式的参数：

   ```cpp
   CDocBuilderValue operator[](const char* name);
   CDocBuilderValue operator[](const wchar_t*  name);
   ```

   ## 示例

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