---
sidebar_label: Android
---

# Mobile integration on Android devices

The **document editor** can be embedded in an Android application using the [WebView](https://developer.android.com/reference/android/webkit/WebView) component. A complete demo project is available on [GitHub](https://github.com/ONLYOFFICE/editors-webview-android).

## Integration based on the ONLYOFFICE test sample

This example shows how to integrate ONLYOFFICE mobile web editors with the ONLYOFFICE [test or DMS sample](../../../samples/language-specific-examples/language-specific-examples.md).

![Android integration via test sample](/assets/images/editor/android-test-sample.png)

### Opening ONLYOFFICE editors

1. Download and install ONLYOFFICE Docs [Enterprise](https://www.onlyoffice.com/docs-enterprise.aspx) or [Developer](https://www.onlyoffice.com/developer-edition.aspx).

2. Download the mobile demo sample for Android from [GitHub](https://github.com/ONLYOFFICE/editors-webview-android).

3. Open the project with [Android Studio](https://developer.android.com/studio).

4. In the module-level `build.gradle` file, set the `DOCUMENT_SERVER_URL` property to the address of your ONLYOFFICE Docs instance:

   ``` groovy
   buildConfigField("String", "DOCUMENT_SERVER_URL", "https://documentserver/")
   ```

   Where `documentserver` is the name of the server where ONLYOFFICE Docs is installed.

   :::tip
   Don't have a document server yet? [Register](https://www.onlyoffice.com/docs-registration.aspx?from=api) for a free ONLYOFFICE Docs Cloud and use the public IP address or public DNS name of your instance as `documentserver`. You can find them in the **Instances** section of the cloud console.
   :::

   If `DOCUMENT_SERVER_URL` is empty, the app displays an error dialog instead of loading the **document manager** page:

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

5. The `MainFragment.kt` controller handles navigation from the **document manager** to the **document editor**. When the user taps a document, the controller intercepts the URL, checks whether it contains the `"editor"` string, and — if so — navigates to the editor fragment:

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

   The full code for `MainFragment.kt` can be found [here](https://github.com/ONLYOFFICE/editors-webview-android/blob/main/app/src/main/java/ru/mike/florida/MainFragment.kt).

6. The `EditorFragment.kt` controller displays the **document editor** via the WebView component. Configure WebView settings and layout as follows:

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

   The `load()` method sets the [`type`](../../../usage-api/config/config.md#type) parameter to `"mobile"` so the editor UI is optimized for touch screens:

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

7. In the Android Studio toolbar, select your application and the target device, then click **Run** to build and launch the app.

8. The app opens the **document manager** page. Select a document to open it in the **document editor**.

### Closing ONLYOFFICE editors

The `EditorFragment.kt` controller also handles exiting the editor. When the user navigates away from the editor (the URL no longer contains `"editor"`), the controller pops back to the **document manager**:

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

The full code for `EditorFragment.kt` can be found [here](https://github.com/ONLYOFFICE/editors-webview-android/blob/main/app/src/main/java/ru/mike/florida/EditorFragment.kt).
