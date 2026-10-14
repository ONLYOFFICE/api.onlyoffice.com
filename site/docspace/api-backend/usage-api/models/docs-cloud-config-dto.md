# DocsCloudConfigDto
Represents the configuration of a Docs Connect tenant.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **tenantName** | **String** | The tenant name. | [optional] [example: `My Portal`] [minLength: 0] [maxLength: 255] [nullable] |
| **security** | [**DocsCloudSecurityConfigDto**](docs-cloud-security-config-dto.md) | The security configuration. | [optional] |
| **server** | [**DocsCloudServerConfigDto**](docs-cloud-server-config-dto.md) | The server configuration. | [optional] |
| **wopi** | [**DocsCloudWopiConfigDto**](docs-cloud-wopi-config-dto.md) | The WOPI configuration. | [optional] |
| **ipFilter** | [**DocsCloudIpFilterConfigDto**](docs-cloud-ip-filter-config-dto.md) | The IP filter configuration. | [optional] |
