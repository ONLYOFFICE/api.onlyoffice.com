---
sidebar_position: -6
sidebar_label: "C#"
---

# C#

The ONLYOFFICE DocSpace SDK for C# is a library that provides tools for integrating and managing DocSpace features within your applications.

It simplifies interaction with the DocSpace API by offering ready-to-use methods and models.

**[ONLYOFFICE C# (.NET) Library on GitHub](https://github.com/ONLYOFFICE/docspace-api-sdk-csharp)**

## Installation

To get started, install the package from [NuGet](https://www.nuget.org/packages/DocSpace.API.SDK/):

### .NET CLI

```bash
dotnet add package DocSpace.API.SDK
```

## Usage

To use the API client with an HTTP proxy, set up a `System.Net.WebProxy` as follows:
```csharp
Configuration c = new Configuration();
System.Net.WebProxy webProxy = new System.Net.WebProxy("http://myProxyUrl:80/");
webProxy.Credentials = System.Net.CredentialCache.DefaultCredentials;
c.Proxy = webProxy;
```

### Connections
Each API class (specifically the API client within it) will create an instance of HttpClient. This instance is used throughout the class lifecycle and is disposed of when the Dispose method is called.

To better manage connections, it is common practice to reuse the HttpClient and HttpClientHandler (see the [Microsoft documentation on HttpClientFactory](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/implement-resilient-applications/use-httpclientfactory-to-implement-resilient-http-requests#issues-with-the-original-httpclient-class-available-in-net) for details). To use your own HttpClient instance, just pass it to the API class constructor:

```csharp
HttpClientHandler yourHandler = new HttpClientHandler();
HttpClient yourHttpClient = new HttpClient(yourHandler);
var api = new RoomsApi(yourHttpClient, yourHandler);
```

If you want to use an HttpClient but do not have access to its handler (for example, when using IHttpClientFactory in the ASP.NET Core DI context), you can create and configure your HttpClient instance separately and then pass it to the API class constructor:

```csharp
HttpClient yourHttpClient = new HttpClient();
var api = new RoomsApi(yourHttpClient);
```

Here is an example of DI setup in a sample web project:

```csharp
services.AddHttpClient<RoomsApi>(httpClient =>
   new RoomsApi(httpClient));
```

## Getting Started

The following example shows how to authenticate and perform a basic operation — creating a folder in your personal section.

```csharp
Configuration config = new Configuration();
config.BasePath = "https://your-docspace.onlyoffice.com";
// Configure Bearer token for authorization: Bearer
config.AccessToken = "YOUR_BEARER_TOKEN";

// create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
HttpClient httpClient = new HttpClient();
HttpClientHandler httpClientHandler = new HttpClientHandler();

var folderInstance = new DocSpace.API.SDK.Api.Files.FoldersApi(httpClient, config, httpClientHandler);
var getFolderMy = await folderInstance.GetMyFolderAsync();

var folderMyId = getFolderMy.Response.Current.Id;

var folderSettings = new CreateFolder("Folder"){};
try
{
    // Create a folder
    var createFolderResult = await folderInstance.CreateFolderAsync(folderMyId, folderSettings);
    Debug.WriteLine(createFolderResult);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FoldersApi.CreateFolderAsync: " + e.Message );
    Debug.Print("Status Code: "+ e.ErrorCode);
    Debug.Print(e.StackTrace);
}

```
