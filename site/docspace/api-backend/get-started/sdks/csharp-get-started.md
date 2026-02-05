---
sidebar_position: -3
---

# CSharp

The ONLYOFFICE DocSpace SDK for C# is a library that provides tools for integrating and managing DocSpace features within your applications.

It simplifies interaction with the DocSpace API by offering ready-to-use methods and models.

**[ONLYOFFICE C# (.NET) Library on GitHub](https://github.com/ONLYOFFICE/docspace-api-sdk-csharp)**

<a id="installation"></a>
## Installation

To get started, install the package from NuGet

```
dotnet add package DocSpace.API.SDK
```

<a id="usage"></a>
## Usage

To use the API client with a HTTP proxy, set up a `System.Net.WebProxy` as follows:
```csharp
Configuration c = new Configuration();
System.Net.WebProxy webProxy = new System.Net.WebProxy("http://myProxyUrl:80/");
webProxy.Credentials = System.Net.CredentialCache.DefaultCredentials;
c.Proxy = webProxy;
```

### Connections
Each API class (specifically the API client within it) will create an instance of HttpClient. This instance is used throughout the class lifecycle and is disposed of when the Dispose method is called.

To better manage connections, it is common practice to reuse the HttpClient and HttpClientHandler (see [here](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/implement-resilient-applications/use-httpclientfactory-to-implement-resilient-http-requests#issues-with-the-original-httpclient-class-available-in-net) for details). To use your own HttpClient instance, just pass it to the API class constructor:

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
If you want to use an HttpClient but do not have access to its handler (for example, when using IHttpClientFactory in the ASP.NET Core DI context), you can create and configure your HttpClient instance separately and then pass it to the API class constructor:

Here is an example of DI setup in a sample web project:

```csharp
services.AddHttpClient<RoomsApi>(httpClient =>
   new RoomsApi(httpClient));
```


<a id="getting-started"></a>
## Getting Started

```csharp

Configuration config = new Configuration();
config.BasePath = "https://your-docspace.onlyoffice.com";
// Configure Bearer token for authorization: Bearer
config.AccessToken = "YOUR_BEARER_TOKEN";

// create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
HttpClient httpClient = new HttpClient();
HttpClientHandler httpClientHandler = new HttpClientHandler();
var apiInstance = new ApiKeysApi(httpClient, config, httpClientHandler);
var createApiKeyRequestDto = new CreateApiKeyRequestDto?(); // CreateApiKeyRequestDto? | The request parameters for creating a new API key. (optional) 

try
{
    // Create a user API key
    ApiKeyResponseWrapper result = apiInstance.CreateApiKey(createApiKeyRequestDto);
    Debug.WriteLine(result);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ApiKeysApi.CreateApiKey: " + e.Message );
    Debug.Print("Status Code: "+ e.ErrorCode);
    Debug.Print(e.StackTrace);
}

```
