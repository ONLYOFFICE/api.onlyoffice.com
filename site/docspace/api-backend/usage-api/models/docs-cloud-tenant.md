# DocsCloudTenant
Represents a Docs Connect tenant of a portal.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **dedicatedResourceExId** | **Integer** (int32) | The external ID of the dedicated resource the tenant is hosted on. | [optional] [example: `12345`] |
| **alias** | **String** | The tenant alias. | [optional] [example: `my-portal`] [nullable] |
| **name** | **String** | The tenant name. | [optional] [example: `My Portal`] [nullable] |
| **modifiedDate** | **Date** (date-time) | The date and time when the tenant was last modified. | [optional] [example: `2024-01-15T10:30:00Z`] |
| **customerId** | **String** | The customer ID. | [optional] [example: `CustomerId`] [nullable] |
| **customerName** | **String** | The customer name. | [optional] [example: `CustomerName`] [nullable] |
| **endDate** | **Date** (date-time) | The date and time when the tenant subscription ends. | [optional] [example: `2024-01-15T10:30:00Z`] |
| **resourceType** | **Integer** (int32) | The resource type. | [optional] [example: `1`] |
| **isActive** | **Boolean** | Whether the tenant is active (the end date is in the future). | [optional] [example: `false`] |
| **address** | **String** | The tenant address. | [optional] [example: `https://my-portal.onlyoffice.com`] [nullable] |
| **payment** | [**DocsCloudPayment**](docs-cloud-payment.md) | The tenant payment information. | [optional] |
