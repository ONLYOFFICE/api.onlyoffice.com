# DocsCloudConfig
Represents the configuration of a Docs Connect tenant.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **tenantName** | **String** | The tenant name. | [optional] [example: `My Portal`] [minLength: 0] [maxLength: 255] [nullable] |
| **security** | [**DocsCloudSecurityConfig**](docs-cloud-security-config.md) | The security configuration. | [optional] |
| **server** | [**DocsCloudServerConfig**](docs-cloud-server-config.md) | The server configuration. | [optional] |
| **wopi** | [**DocsCloudWopiConfig**](docs-cloud-wopi-config.md) | The WOPI configuration. | [optional] |
| **ipFilter** | [**DocsCloudIpFilterConfig**](docs-cloud-ip-filter-config.md) | The IP filter configuration. | [optional] |
