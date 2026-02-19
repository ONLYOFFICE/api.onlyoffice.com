---
sidebar_label: Android
---

# 安卓设备上的移动集成

本节我们将通过 [WebView](https://developer.android.com/reference/android/webkit/WebView) 使用 Android 移动演示示例（可在 [GitHub](https://github.com/ONLYOFFICE/editors-webview-android) 获取）展示集成流程。

## 基于 ONLYOFFICE 测试示例的集成

本示例演示如何将 ONLYOFFICE 移动端网页编辑器与 ONLYOFFICE [测试或 DMS 示例](../../../samples/language-specific-examples/language-specific-examples.md)集成。

![通过测试示例的 Android 集成](/assets/images/editor/android-test-sample.png)

### 打开 ONLYOFFICE 编辑器

1. 下载并安装ONLYOFFICE文档[企业版](https://www.onlyoffice.com/zh/docs-enterprise.aspx)或[开发者版](https://www.onlyoffice.com/zh/developer-edition.aspx)。

2. 从 [GitHub](https://github.com/ONLYOFFICE/editors-webview-android)下载 Android 移动演示示例。

3. 使用 [Android Studio](https://developer.android.com/studio) 打开顶层的 *build.gradle* 文件，修改示例代码片段以适配您的 DMS 系统。

4. 在模块级 *build.gradle* 文件中，通过设置 **DOCUMENT\_SERVER\_URL** 属性值指定 ONLYOFFICE 文档网页界面地址来显示 DMS 主页：

   ``` groovy
   buildConfigField("String", "DOCUMENT_SERVER_URL", "https://documentserver/")
   ```

   其中 **documentserver** 是已安装 ONLYOFFICE 文档的服务器名称。您可以[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。

   若未指定 **DOCUMENT\_SERVER\_URL**，将出现错误提示：

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

   <img alt="Android managing" src="/assets/images/editor/android-managing.png" width="260px" />

5. 使用 **MainFragment.kt** 控制器实现 Android 设备上通过 WebView 正确打开编辑器。在该控制器中定义通过 WebView 组件打开文档的函数，检测 URL 是否包含标识文档打开的 *"editor"* 字符串：

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

   **MainFragment.kt** 完整代码请参见[此处](https://github.com/ONLYOFFICE/editors-webview-android/blob/fd8f9809441fab9653140cf2e51a1303e2edd774/app/src/main/java/ru/mike/florida/MainFragment.kt)。

6. 在 **EditorFragment.kt** 控制器中配置 WebView 及布局，通过 WebView 组件在移动设备显示 ONLYOFFICE 编辑器：

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

7. 在 Android Studio 工具栏中选择应用和设备，点击项目工具栏中的**运行**按钮构建并运行代码。

8. 应用将展示 ONLYOFFICE 移动网页编辑器与测试/DMS 示例的集成效果。

### 关闭 ONLYOFFICE 编辑器

使用 **EditorFragment.kt** 控制器退出编辑器：

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

**EditorFragment.kt** 完整代码请参见[此处](https://github.com/ONLYOFFICE/editors-webview-android/blob/fd8f9809441fab9653140cf2e51a1303e2edd774/app/src/main/java/ru/mike/florida/EditorFragment.kt)。
