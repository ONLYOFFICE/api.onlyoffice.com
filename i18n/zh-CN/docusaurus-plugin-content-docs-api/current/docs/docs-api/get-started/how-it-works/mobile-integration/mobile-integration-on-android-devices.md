---
sidebar_label: Android
---

# 安卓设备上的移动集成

**文档编辑器**可以通过 [WebView](https://developer.android.com/reference/android/webkit/WebView) 组件嵌入到 Android 应用中。完整的演示项目可在 [GitHub](https://github.com/ONLYOFFICE/editors-webview-android) 上获取。

## 基于 ONLYOFFICE 测试示例的集成

本示例演示如何将 ONLYOFFICE 移动端网页编辑器与 ONLYOFFICE [测试或 DMS 示例](../../../samples/language-specific-examples/language-specific-examples.md)集成。

![通过测试示例的 Android 集成](/assets/images/editor/android-test-sample.png)

### 打开 ONLYOFFICE 编辑器

1. 下载并安装ONLYOFFICE文档[企业版](https://www.onlyoffice.com/zh/docs-enterprise.aspx)或[开发者版](https://www.onlyoffice.com/zh/developer-edition.aspx)。

2. 从 [GitHub](https://github.com/ONLYOFFICE/editors-webview-android) 下载 Android 移动演示示例。

3. 使用 [Android Studio](https://developer.android.com/studio) 打开项目。

4. 在模块级 `build.gradle` 文件中，将 `DOCUMENT_SERVER_URL` 属性设置为您的 ONLYOFFICE 文档实例地址：

   ``` groovy
   buildConfigField("String", "DOCUMENT_SERVER_URL", "https://documentserver/")
   ```

   其中 `documentserver` 是已安装 ONLYOFFICE 文档的服务器名称。

   :::tip
   还没有文档服务器？[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)免费的 ONLYOFFICE 文档云，并使用实例的公共 IP 地址或公共 DNS 名称作为 `documentserver`。您可以在云控制台的**实例**部分找到它们。
   :::

   若 `DOCUMENT_SERVER_URL` 为空，应用将显示错误对话框，而非加载**文档管理器**页面：

   ``` kt
   private fun showDialog() {
       AlertDialog.Builder(requireContext())
           .setMessage("Document server url is empty.\nYou must specify the address in build.gradle")
           .setPositiveButton("Ok") { dialog, _ ->
               dialog.dismiss()
               requireActivity().finish()
           }
           .create()
           .show()
   }
   ```

   <img alt="Android error" src="/assets/images/editor/android-error.png" width="260px" />

   <img alt="Android document manager" src="/assets/images/editor/android-managing.png" width="260px" />

5. `MainFragment.kt` 控制器负责从**文档管理器**到**文档编辑器**的导航。当用户点击文档时，控制器拦截 URL，检查是否包含 `"editor"` 字符串，若包含则导航到编辑器 fragment：

   ``` kt
   private class MainWebViewClient(private val navController: NavController) : WebViewClient() {

       override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
           val url = request?.url
           if (url != null) {
               val path = url.path
               if (path?.contains("editor") == true) {
                   navController.navigate(R.id.action_mainFragment_to_editorFragment, Bundle(1).apply {
                       putString("document_url", url.toString())
                   })
                   return true
               }
               return false
           }
           return super.shouldOverrideUrlLoading(view, request)
       }

   }
   ```

   `MainFragment.kt` 完整代码请参见[此处](https://github.com/ONLYOFFICE/editors-webview-android/blob/main/app/src/main/java/ru/mike/florida/MainFragment.kt)。

6. `EditorFragment.kt` 控制器通过 WebView 组件显示**文档编辑器**。按如下方式配置 WebView 设置和布局：

   ``` kt
   @SuppressLint("SetJavaScriptEnabled")
   private fun setSettings() {
       webView?.settings?.apply {
           javaScriptEnabled = true
           javaScriptCanOpenWindowsAutomatically = true
           loadWithOverviewMode = true
           cacheMode = WebSettings.LOAD_NO_CACHE
           domStorageEnabled = true
       }
       webView?.webViewClient = EditorWebViewClient(findNavController())
   }
   ```

   `load()` 方法将 [`type`](../../../usage-api/config/config.md#type) 参数设置为 `"mobile"`，以优化触摸屏的编辑器界面：

   ``` kt
   private fun load() {
       url?.let {
           val loadUrl = it.toString()
           if (it.query?.contains("docxf") == true) {
               webView?.loadUrl(loadUrl)
           } else {
               webView?.loadUrl(loadUrl.replace("type=desktop", "type=mobile"))
           }
       }
   }
   ```

7. 在 Android Studio 工具栏中选择应用和目标设备，然后点击**运行**按钮构建并启动应用。

8. 应用将打开**文档管理器**页面。选择文档即可在**文档编辑器**中打开。

### 关闭 ONLYOFFICE 编辑器

`EditorFragment.kt` 控制器同时负责退出编辑器。当用户离开编辑器（URL 不再包含 `"editor"`）时，控制器将返回**文档管理器**：

``` kt
private class EditorWebViewClient(private val navController: NavController) : WebViewClient() {

    override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
        request?.url?.let { url ->
            if (!url.toString().contains("editor")) {
                navController.popBackStack()
                return true
            }
        }
        return super.shouldOverrideUrlLoading(view, request)
    }

}
```

`EditorFragment.kt` 完整代码请参见[此处](https://github.com/ONLYOFFICE/editors-webview-android/blob/main/app/src/main/java/ru/mike/florida/EditorFragment.kt)。
