# ONLYOFFICE DocSpace Portal API

The browsable version of this reference, with a request builder and code samples, is published at
[https://api.onlyoffice.com/docspace/api-backend/usage-api/](https://api.onlyoffice.com/docspace/api-backend/usage-api/).

All URIs are relative to *https://yourportal.onlyoffice.com*, where the host is the address of your DocSpace instance.

## Guests

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getGuestSharingLink**](guests/get-guest-sharing-link.md) | **GET** /api/2.0/people/guests/\{userid\}/share | Get a guest sharing link |

## Payment

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**calculateWalletPayment**](payment/calculate-wallet-payment.md) | **PUT** /api/2.0/portal/payment/calculatewallet | Calculate the wallet payment amount |
| [**changeTenantWalletServiceState**](payment/change-tenant-wallet-service-state.md) | **POST** /api/2.0/portal/payment/servicestate | Switch a wallet service |
| [**createCustomerMonthlyUsageReport**](payment/create-customer-monthly-usage-report.md) | **POST** /api/2.0/portal/payment/customer/usage/monthly/report | Start the monthly usage report |
| [**createCustomerOperationsReport**](payment/create-customer-operations-report.md) | **POST** /api/2.0/portal/payment/customer/operationsreport | Start the operations report |
| [**createCustomerServiceUsageReport**](payment/create-customer-service-usage-report.md) | **POST** /api/2.0/portal/payment/customer/usage/report | Start the service usage report |
| [**getAccountingServicePrices**](payment/get-accounting-service-prices.md) | **GET** /api/2.0/portal/payment/accounting/prices/\{serviceName\} | Get the service prices from the accounting service |
| [**getActiveServices**](payment/get-active-services.md) | **GET** /api/2.0/portal/payment/activeservices | Get the active wallet services |
| [**getAiPrices**](payment/get-ai-prices.md) | **GET** /api/2.0/portal/payment/ai-prices | Get AI model prices |
| [**getCheckoutSetupUrl**](payment/get-checkout-setup-url.md) | **GET** /api/2.0/portal/payment/checkoutsetupurl | Get the checkout setup page URL |
| [**getCustomerBalance**](payment/get-customer-balance.md) | **GET** /api/2.0/portal/payment/customer/balance | Get the customer balance |
| [**getCustomerInfo**](payment/get-customer-info.md) | **GET** /api/2.0/portal/payment/customerinfo | Get the customer information |
| [**getCustomerMonthlyUsage**](payment/get-customer-monthly-usage.md) | **GET** /api/2.0/portal/payment/customer/usage/monthly | Get the customer monthly usage |
| [**getCustomerMonthlyUsageReport**](payment/get-customer-monthly-usage-report.md) | **GET** /api/2.0/portal/payment/customer/usage/monthly/report | Get the monthly usage report status |
| [**getCustomerOperations**](payment/get-customer-operations.md) | **GET** /api/2.0/portal/payment/customer/operations | Get the wallet operations |
| [**getCustomerOperationsReport**](payment/get-customer-operations-report.md) | **GET** /api/2.0/portal/payment/customer/operationsreport | Get the operations report status |
| [**getCustomerServiceUsage**](payment/get-customer-service-usage.md) | **GET** /api/2.0/portal/payment/customer/usage | Get the customer service usage |
| [**getCustomerServiceUsageReport**](payment/get-customer-service-usage-report.md) | **GET** /api/2.0/portal/payment/customer/usage/report | Get the service usage report status |
| [**getPaymentAccount**](payment/get-payment-account.md) | **GET** /api/2.0/portal/payment/account | Get the billing account page |
| [**getPaymentCurrencies**](payment/get-payment-currencies.md) | **GET** /api/2.0/portal/payment/currencies | Get the billing currencies |
| [**getPaymentQuotas**](payment/get-payment-quotas.md) | **GET** /api/2.0/portal/payment/quotas | Get the purchasable quotas |
| [**getPaymentUrl**](payment/get-payment-url.md) | **PUT** /api/2.0/portal/payment/url | Get the payment page URL |
| [**getPortalPrices**](payment/get-portal-prices.md) | **GET** /api/2.0/portal/payment/prices | Get the product prices |
| [**getQuotaPaymentInformation**](payment/get-quota-payment-information.md) | **GET** /api/2.0/portal/payment/quota | Get the current plan and limits |
| [**getRestrictedAiModels**](payment/get-restricted-ai-models.md) | **GET** /api/2.0/portal/payment/ai-model/restrictions | Get restricted AI models |
| [**getSubscriptionBalanceInfo**](payment/get-subscription-balance-info.md) | **GET** /api/2.0/portal/payment/subscription/balance | Get the subscription balance information |
| [**getTenantWalletServiceSettings**](payment/get-tenant-wallet-service-settings.md) | **GET** /api/2.0/portal/payment/servicessettings | Get the wallet service settings |
| [**getTenantWalletSettings**](payment/get-tenant-wallet-settings.md) | **GET** /api/2.0/portal/payment/topupsettings | Get the auto top-up settings |
| [**getWalletService**](payment/get-wallet-service.md) | **GET** /api/2.0/portal/payment/walletservice | Get a wallet service |
| [**getWalletServices**](payment/get-wallet-services.md) | **GET** /api/2.0/portal/payment/walletservices | Get wallet services |
| [**moveSubscriptionToWallet**](payment/move-subscription-to-wallet.md) | **POST** /api/2.0/portal/payment/subscription/movetowallet | Move the subscription to the wallet |
| [**sendPaymentRequest**](payment/send-payment-request.md) | **POST** /api/2.0/portal/payment/request | Contact the sales team |
| [**setRestrictedAiModels**](payment/set-restricted-ai-models.md) | **PUT** /api/2.0/portal/payment/ai-model/restrictions | Set restricted AI models |
| [**setTenantWalletSettings**](payment/set-tenant-wallet-settings.md) | **POST** /api/2.0/portal/payment/topupsettings | Set the auto top-up settings |
| [**terminateCustomerMonthlyUsageReport**](payment/terminate-customer-monthly-usage-report.md) | **DELETE** /api/2.0/portal/payment/customer/usage/monthly/report | Terminate the monthly usage report |
| [**terminateCustomerOperationsReport**](payment/terminate-customer-operations-report.md) | **DELETE** /api/2.0/portal/payment/customer/operationsreport | Terminate the operations report |
| [**terminateCustomerServiceUsageReport**](payment/terminate-customer-service-usage-report.md) | **DELETE** /api/2.0/portal/payment/customer/usage/report | Terminate the service usage report |
| [**topUpDeposit**](payment/top-up-deposit.md) | **POST** /api/2.0/portal/payment/deposit | Top up the wallet |
| [**updatePayment**](payment/update-payment.md) | **PUT** /api/2.0/portal/payment/update | Change the subscription quantity |
| [**updateWalletPayment**](payment/update-wallet-payment.md) | **PUT** /api/2.0/portal/payment/updatewallet | Change a wallet service quantity |

## Quota

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getPortalQuota**](quota/get-portal-quota.md) | **GET** /api/2.0/portal/quota | Get the portal quota |
| [**getPortalTariff**](quota/get-portal-tariff.md) | **GET** /api/2.0/portal/tariff | Get the portal tariff |
| [**getPortalUsedSpace**](quota/get-portal-used-space.md) | **GET** /api/2.0/portal/usedspace | Get the portal used space |
| [**getRightQuota**](quota/get-right-quota.md) | **GET** /api/2.0/portal/quota/right | Get the recommended quota |
| [**getUpcomingPayments**](quota/get-upcoming-payments.md) | **GET** /api/2.0/portal/tariff/upcoming | Get upcoming payments |

## Settings

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**continuePortal**](settings/continue-portal.md) | **PUT** /api/2.0/portal/continue | Restore a portal |
| [**deletePortal**](settings/delete-portal.md) | **DELETE** /api/2.0/portal/delete | Delete a portal |
| [**getPortalInformation**](settings/get-portal-information.md) | **GET** /api/2.0/portal | Get portal information |
| [**getPortalPath**](settings/get-portal-path.md) | **GET** /api/2.0/portal/path | Get a path to the portal |
| [**sendDeleteInstructions**](settings/send-delete-instructions.md) | **POST** /api/2.0/portal/delete | Send removal instructions |
| [**sendSuspendInstructions**](settings/send-suspend-instructions.md) | **POST** /api/2.0/portal/suspend | Send suspension instructions |
| [**suspendPortal**](settings/suspend-portal.md) | **PUT** /api/2.0/portal/suspend | Deactivate a portal |

## Users

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**createInvitationLink**](users/create-invitation-link.md) | **POST** /api/2.0/portal/users/invitationlink | Create an invitation link |
| [**deleteInvitationLink**](users/delete-invitation-link.md) | **DELETE** /api/2.0/portal/users/invitationlink | Delete an invitation link |
| [**getInvitationLink**](users/get-invitation-link.md) | **GET** /api/2.0/portal/users/invite/\{employeeType\} | Get a legacy invitation link |
| [**getInvitationLinkByEmployeeType**](users/get-invitation-link-by-employee-type.md) | **GET** /api/2.0/portal/users/invitationlink/\{employeeType\} | Get an invitation link by role |
| [**getPortalUsersCount**](users/get-portal-users-count.md) | **GET** /api/2.0/portal/userscount | Get a number of portal users |
| [**getUserById**](users/get-user-by-id.md) | **GET** /api/2.0/portal/users/\{userID\} | Get a portal user |
| [**markGiftMessageAsRead**](users/mark-gift-message-as-read.md) | **POST** /api/2.0/portal/present/mark | Mark a gift message as read |
| [**sendCongratulations**](users/send-congratulations.md) | **POST** /api/2.0/portal/sendcongratulations | Send congratulations |
| [**updateInvitationLink**](users/update-invitation-link.md) | **PUT** /api/2.0/portal/users/invitationlink | Update an invitation link |

## Authorization

### cookieAuth
- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: 

### bearerAuth

- **Type**: HTTP Bearer Token authentication

### asc_auth_key
- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: 

### Basic

- **Type**: HTTP basic authentication

### Bearer

- **Type**: HTTP Bearer Token authentication (JWT)

### ApiKeyBearer
- **Type**: API key
- **API key parameter name**: ApiKeyBearer
- **Location**: HTTP header

### OAuth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: 
- **Scopes**: 
  - read: Read access to protected resources
  - write: Write access to protected resources

### OpenId

### x-signature
- **Type**: API key
- **API key parameter name**: x-signature
- **Location**: 

