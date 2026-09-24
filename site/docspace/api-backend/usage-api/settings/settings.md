# ONLYOFFICE DocSpace Settings API

The browsable version of this reference, with a request builder and code samples, is published at
[https://api.onlyoffice.com/docspace/api-backend/usage-api/](https://api.onlyoffice.com/docspace/api-backend/usage-api/).

All URIs are relative to *https://yourportal.onlyoffice.com*, where the host is the address of your DocSpace instance.

## Access to DevTools

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getTenantAccessDevToolsSettings**](access-to-devtools/get-tenant-access-dev-tools-settings.md) | **GET** /api/2.0/settings/devtoolsaccess | Get the Developer Tools access settings |

## Authorization

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getAuthServices**](authorization/get-auth-services.md) | **GET** /api/2.0/settings/authservice | Get the authorization services |
| [**saveAuthKeys**](authorization/save-auth-keys.md) | **POST** /api/2.0/settings/authservice | Save the authorization keys |
| [**testExternalDatabaseConnection**](authorization/test-external-database-connection.md) | **POST** /api/2.0/settings/authservice/externaldb/test | Test external database connection |

## Banners visibility

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getTenantBannerSettings**](banners-visibility/get-tenant-banner-settings.md) | **GET** /api/2.0/settings/banner | Get the banners visibility |

## Common settings

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**closeAdminHelper**](common-settings/close-admin-helper.md) | **PUT** /api/2.0/settings/closeadminhelper | Close the admin helper |
| [**completeWizard**](common-settings/complete-wizard.md) | **PUT** /api/2.0/settings/wizard/complete | Complete the Wizard settings |
| [**configureDeepLink**](common-settings/configure-deep-link.md) | **POST** /api/2.0/settings/deeplink | Configure the deep link settings |
| [**deletePortalColorTheme**](common-settings/delete-portal-color-theme.md) | **DELETE** /api/2.0/settings/colortheme | Delete a color theme |
| [**getDeepLinkSettings**](common-settings/get-deep-link-settings.md) | **GET** /api/2.0/settings/deeplink | Get the deep link settings |
| [**getPaymentSettings**](common-settings/get-payment-settings.md) | **GET** /api/2.0/settings/payment | Get the payment settings |
| [**getPortalColorTheme**](common-settings/get-portal-color-theme.md) | **GET** /api/2.0/settings/colortheme | Get a color theme |
| [**getPortalHostname**](common-settings/get-portal-hostname.md) | **GET** /api/2.0/settings/machine | Get the portal hostname |
| [**getPortalLogo**](common-settings/get-portal-logo.md) | **GET** /api/2.0/settings/logo | Get a portal logo |
| [**getPortalSettings**](common-settings/get-portal-settings.md) | **GET** /api/2.0/settings | Get the portal settings |
| [**getSocketSettings**](common-settings/get-socket-settings.md) | **GET** /api/2.0/settings/socket | Get the socket settings |
| [**getSupportedCultures**](common-settings/get-supported-cultures.md) | **GET** /api/2.0/settings/cultures | Get supported languages |
| [**getTenantAiAccessSettings**](common-settings/get-tenant-ai-access-settings.md) | **GET** /api/2.0/settings/ai-access | Get the AI access settings |
| [**getTenantUserInvitationSettings**](common-settings/get-tenant-user-invitation-settings.md) | **GET** /api/2.0/settings/invitationsettings | Get the user invitation settings |
| [**getTimeZones**](common-settings/get-time-zones.md) | **GET** /api/2.0/settings/timezones | Get time zones |
| [**saveDefaultFolder**](common-settings/save-default-folder.md) | **PUT** /api/2.0/settings/defaultfolder | Set the default folder |
| [**saveDnsSettings**](common-settings/save-dns-settings.md) | **PUT** /api/2.0/settings/dns | Save the DNS settings |
| [**saveMailDomainSettings**](common-settings/save-mail-domain-settings.md) | **POST** /api/2.0/settings/maildomainsettings | Save the mail domain settings |
| [**savePortalColorTheme**](common-settings/save-portal-color-theme.md) | **PUT** /api/2.0/settings/colortheme | Save a color theme |
| [**setTenantAiAccessSettings**](common-settings/set-tenant-ai-access-settings.md) | **POST** /api/2.0/settings/ai-access | Set the AI access settings |
| [**updateEmailActivationSettings**](common-settings/update-email-activation-settings.md) | **PUT** /api/2.0/settings/emailactivation | Update the email activation settings |
| [**updateInvitationSettings**](common-settings/update-invitation-settings.md) | **PUT** /api/2.0/settings/invitationsettings | Update the user invitation settings |

## Cookies

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getCookieSettings**](cookies/get-cookie-settings.md) | **GET** /api/2.0/settings/cookiesettings | Get the cookie lifetime settings |
| [**updateCookieSettings**](cookies/update-cookie-settings.md) | **PUT** /api/2.0/settings/cookiesettings | Update the cookie lifetime settings |

## DocsCloud

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**calculateDevPack**](docscloud/calculate-dev-pack.md) | **POST** /api/2.0/settings/docscloud/calculatedevpack | Calculate the Docs Connect Dev Pack switch cost |
| [**createTenantQuotaReport**](docscloud/create-tenant-quota-report.md) | **POST** /api/2.0/settings/docscloud/tenant/quota/report | Start the Docs Connect quota report |
| [**getTenant**](docscloud/get-tenant.md) | **GET** /api/2.0/settings/docscloud/tenant | Get the Docs Connect tenant |
| [**getTenantConfig**](docscloud/get-tenant-config.md) | **GET** /api/2.0/settings/docscloud/tenant/config | Get the Docs Connect tenant configuration |
| [**getTenantInfo**](docscloud/get-tenant-info.md) | **GET** /api/2.0/settings/docscloud/tenant/info | Get the Docs Connect tenant information |
| [**getTenantQuota**](docscloud/get-tenant-quota.md) | **GET** /api/2.0/settings/docscloud/tenant/quota | Get the Docs Connect tenant quota |
| [**getTenantQuotaReport**](docscloud/get-tenant-quota-report.md) | **GET** /api/2.0/settings/docscloud/tenant/quota/report | Get the Docs Connect quota report status |
| [**getTenantUsage**](docscloud/get-tenant-usage.md) | **GET** /api/2.0/settings/docscloud/tenant/usage | Get the Docs Connect tenant usage |
| [**startDocsCloudTrial**](docscloud/start-docs-cloud-trial.md) | **POST** /api/2.0/settings/docscloud/trial | Start the Docs Connect trial |
| [**switchToDevPack**](docscloud/switch-to-dev-pack.md) | **POST** /api/2.0/settings/docscloud/switchtodevpack | Switch Docs Connect to Docs Connect Dev Pack |
| [**terminateTenantQuotaReport**](docscloud/terminate-tenant-quota-report.md) | **DELETE** /api/2.0/settings/docscloud/tenant/quota/report | Terminate the Docs Connect quota report |
| [**updateTenantConfig**](docscloud/update-tenant-config.md) | **PUT** /api/2.0/settings/docscloud/tenant/config | Update the Docs Connect tenant configuration |

## Encryption

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getStorageEncryptionProgress**](encryption/get-storage-encryption-progress.md) | **GET** /api/2.0/settings/encryption/progress | Get the storage encryption progress |
| [**getStorageEncryptionSettings**](encryption/get-storage-encryption-settings.md) | **GET** /api/2.0/settings/encryption/settings | Get the storage encryption settings |
| [**startStorageEncryption**](encryption/start-storage-encryption.md) | **POST** /api/2.0/settings/encryption/start | Start the storage encryption |

## Greeting settings

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getGreetingSettings**](greeting-settings/get-greeting-settings.md) | **GET** /api/2.0/settings/greetingsettings | Get greeting settings |
| [**getIsDefaultGreetingSettings**](greeting-settings/get-is-default-greeting-settings.md) | **GET** /api/2.0/settings/greetingsettings/isdefault | Check the default greeting settings |
| [**restoreGreetingSettings**](greeting-settings/restore-greeting-settings.md) | **POST** /api/2.0/settings/greetingsettings/restore | Restore the greeting settings |
| [**saveGreetingSettings**](greeting-settings/save-greeting-settings.md) | **POST** /api/2.0/settings/greetingsettings | Save the greeting settings |

## IP restrictions

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getIpRestrictions**](ip-restrictions/get-ip-restrictions.md) | **GET** /api/2.0/settings/iprestrictions | Get IP restrictions |
| [**readIpRestrictionsSettings**](ip-restrictions/read-ip-restrictions-settings.md) | **GET** /api/2.0/settings/iprestrictions/settings | Get IP restriction settings |
| [**saveIpRestrictions**](ip-restrictions/save-ip-restrictions.md) | **PUT** /api/2.0/settings/iprestrictions | Save IP restrictions |
| [**updateIpRestrictionsSettings**](ip-restrictions/update-ip-restrictions-settings.md) | **PUT** /api/2.0/settings/iprestrictions/settings | Update IP restriction settings |

## License

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**acceptLicense**](license/accept-license.md) | **POST** /api/2.0/settings/license/accept | Activate a license |
| [**getIsLicenseRequired**](license/get-is-license-required.md) | **GET** /api/2.0/settings/license/required | Check if a license is required |
| [**refreshLicense**](license/refresh-license.md) | **GET** /api/2.0/settings/license/refresh | Refresh the license |
| [**uploadLicense**](license/upload-license.md) | **POST** /api/2.0/settings/license | Upload a license |

## Login settings

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getLoginSettings**](login-settings/get-login-settings.md) | **GET** /api/2.0/settings/security/loginsettings | Get login settings |
| [**setDefaultLoginSettings**](login-settings/set-default-login-settings.md) | **DELETE** /api/2.0/settings/security/loginsettings | Reset login settings |
| [**updateLoginSettings**](login-settings/update-login-settings.md) | **PUT** /api/2.0/settings/security/loginsettings | Update login settings |

## Messages

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**enableAdminMessageSettings**](messages/enable-admin-message-settings.md) | **POST** /api/2.0/settings/messagesettings | Enable or disable administrator messages |
| [**sendAdminMail**](messages/send-admin-mail.md) | **POST** /api/2.0/settings/sendadmmail | Send a message to the administrator |
| [**sendJoinInviteMail**](messages/send-join-invite-mail.md) | **POST** /api/2.0/settings/sendjoininvite | Send an invitation email |

## Notifications

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getNotificationChannels**](notifications/get-notification-channels.md) | **GET** /api/2.0/settings/notification/channels | Get notification channels |
| [**getNotificationSettings**](notifications/get-notification-settings.md) | **GET** /api/2.0/settings/notification/\{type\} | Check notification availability |
| [**getRoomsNotificationSettings**](notifications/get-rooms-notification-settings.md) | **GET** /api/2.0/settings/notification/rooms | Get muted rooms |
| [**setNotificationSettings**](notifications/set-notification-settings.md) | **POST** /api/2.0/settings/notification | Set notification status |
| [**setRoomsNotificationStatus**](notifications/set-rooms-notification-status.md) | **POST** /api/2.0/settings/notification/rooms | Mute or unmute a room |

## Owner

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**sendOwnerChangeInstructions**](owner/send-owner-change-instructions.md) | **POST** /api/2.0/settings/owner | Start the portal owner change |
| [**updatePortalOwner**](owner/update-portal-owner.md) | **PUT** /api/2.0/settings/owner | Confirm the portal owner change |

## Quota

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getUserQuotaSettings**](quota/get-user-quota-settings.md) | **GET** /api/2.0/settings/userquotasettings | Get the user quota settings |
| [**saveAiAgentQuotaSettings**](quota/save-ai-agent-quota-settings.md) | **POST** /api/2.0/settings/aiagentquotasettings | Save the AI Agent quota settings |
| [**saveRoomQuotaSettings**](quota/save-room-quota-settings.md) | **POST** /api/2.0/settings/roomquotasettings | Save the room quota settings |
| [**setTenantQuotaSettings**](quota/set-tenant-quota-settings.md) | **PUT** /api/2.0/settings/tenantquotasettings | Save the tenant quota settings |

## Rebranding

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**deleteAdditionalWhiteLabelSettings**](rebranding/delete-additional-white-label-settings.md) | **DELETE** /api/2.0/settings/rebranding/additional | Delete the additional white label settings |
| [**deleteCompanyWhiteLabelSettings**](rebranding/delete-company-white-label-settings.md) | **DELETE** /api/2.0/settings/rebranding/company | Delete the company white label settings |
| [**getAdditionalWhiteLabelSettings**](rebranding/get-additional-white-label-settings.md) | **GET** /api/2.0/settings/rebranding/additional | Get the additional white label settings |
| [**getCompanyWhiteLabelSettings**](rebranding/get-company-white-label-settings.md) | **GET** /api/2.0/settings/rebranding/company | Get the company white label settings |
| [**getEnableWhitelabel**](rebranding/get-enable-whitelabel.md) | **GET** /api/2.0/settings/enablewhitelabel | Check the white label availability |
| [**getIsDefaultWhiteLabelLogoText**](rebranding/get-is-default-white-label-logo-text.md) | **GET** /api/2.0/settings/whitelabel/logotext/isdefault | Check the default logo text |
| [**getIsDefaultWhiteLabelLogos**](rebranding/get-is-default-white-label-logos.md) | **GET** /api/2.0/settings/whitelabel/logos/isdefault | Check the default white label logos |
| [**getLicensorData**](rebranding/get-licensor-data.md) | **GET** /api/2.0/settings/companywhitelabel | Get the licensor data |
| [**getWhiteLabelLogoText**](rebranding/get-white-label-logo-text.md) | **GET** /api/2.0/settings/whitelabel/logotext | Get the white label logo text |
| [**getWhiteLabelLogos**](rebranding/get-white-label-logos.md) | **GET** /api/2.0/settings/whitelabel/logos | Get the white label logos |
| [**restoreWhiteLabelLogoText**](rebranding/restore-white-label-logo-text.md) | **PUT** /api/2.0/settings/whitelabel/logotext/restore | Restore the white label logo text |
| [**restoreWhiteLabelLogos**](rebranding/restore-white-label-logos.md) | **PUT** /api/2.0/settings/whitelabel/logos/restore | Restore the white label logos |
| [**saveAdditionalWhiteLabelSettings**](rebranding/save-additional-white-label-settings.md) | **POST** /api/2.0/settings/rebranding/additional | Save the additional white label settings |
| [**saveCompanyWhiteLabelSettings**](rebranding/save-company-white-label-settings.md) | **POST** /api/2.0/settings/rebranding/company | Save the company white label settings |
| [**saveWhiteLabelLogoText**](rebranding/save-white-label-logo-text.md) | **POST** /api/2.0/settings/whitelabel/logotext/save | Save the white label logo text |
| [**saveWhiteLabelSettings**](rebranding/save-white-label-settings.md) | **POST** /api/2.0/settings/whitelabel/logos/save | Save the white label logos |
| [**saveWhiteLabelSettingsFromFiles**](rebranding/save-white-label-settings-from-files.md) | **POST** /api/2.0/settings/whitelabel/logos/savefromfiles | Save the logos from files |

## SSO

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getDefaultSsoSettingsV2**](sso/get-default-sso-settings-v-2.md) | **GET** /api/2.0/settings/ssov2/default | Get the default SSO settings |
| [**getSsoSettingsV2**](sso/get-sso-settings-v-2.md) | **GET** /api/2.0/settings/ssov2 | Get the SSO settings |
| [**getSsoSettingsV2Constants**](sso/get-sso-settings-v-2-constants.md) | **GET** /api/2.0/settings/ssov2/constants | Get the SSO settings constants |
| [**resetSsoSettingsV2**](sso/reset-sso-settings-v-2.md) | **DELETE** /api/2.0/settings/ssov2 | Reset the SSO settings |
| [**saveSsoSettingsV2**](sso/save-sso-settings-v-2.md) | **POST** /api/2.0/settings/ssov2 | Save the SSO settings |

## Security

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getEnabledModules**](security/get-enabled-modules.md) | **GET** /api/2.0/settings/security/modules | Get enabled modules |
| [**getIsProductAdministrator**](security/get-is-product-administrator.md) | **GET** /api/2.0/settings/security/administrator | Check product administrator |
| [**getPasswordSettings**](security/get-password-settings.md) | **GET** /api/2.0/settings/security/password | Get password settings |
| [**getProductAdministrators**](security/get-product-administrators.md) | **GET** /api/2.0/settings/security/administrator/\{productid\} | Get product administrators |
| [**getWebItemSecurityInfo**](security/get-web-item-security-info.md) | **GET** /api/2.0/settings/security/\{id\} | Check module availability |
| [**getWebItemSettingsSecurityInfo**](security/get-web-item-settings-security-info.md) | **GET** /api/2.0/settings/security | Get module access settings |
| [**setAccessToWebItems**](security/set-access-to-web-items.md) | **PUT** /api/2.0/settings/security/access | Set access to modules in bulk |
| [**setProductAdministrator**](security/set-product-administrator.md) | **PUT** /api/2.0/settings/security/administrator | Set product administrator |
| [**setWebItemSecurity**](security/set-web-item-security.md) | **PUT** /api/2.0/settings/security | Set module access |
| [**updatePasswordSettings**](security/update-password-settings.md) | **PUT** /api/2.0/settings/security/password | Update password settings |

## Statistics

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getSpaceUsageStatistics**](statistics/get-space-usage-statistics.md) | **GET** /api/2.0/settings/statistics/spaceusage/\{id\} | Get the space usage statistics |

## Storage

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getAllBackupStorages**](storage/get-all-backup-storages.md) | **GET** /api/2.0/settings/storage/backup | Get the backup storages |
| [**getAllCdnStorages**](storage/get-all-cdn-storages.md) | **GET** /api/2.0/settings/storage/cdn | Get the CDN storages |
| [**getAllStorages**](storage/get-all-storages.md) | **GET** /api/2.0/settings/storage | Get the portal storages |
| [**getAmazonS3Regions**](storage/get-amazon-s-3-regions.md) | **GET** /api/2.0/settings/storage/s3/regions | Get the Amazon S3 regions |
| [**getStorageProgress**](storage/get-storage-progress.md) | **GET** /api/2.0/settings/storage/progress | Get the storage migration progress |
| [**resetCdnToDefault**](storage/reset-cdn-to-default.md) | **DELETE** /api/2.0/settings/storage/cdn | Reset the CDN storage settings |
| [**resetStorageToDefault**](storage/reset-storage-to-default.md) | **DELETE** /api/2.0/settings/storage | Reset the storage settings |
| [**updateCdnStorage**](storage/update-cdn-storage.md) | **PUT** /api/2.0/settings/storage/cdn | Update the CDN storage |
| [**updateStorage**](storage/update-storage.md) | **PUT** /api/2.0/settings/storage | Switch the portal storage |

## TFA settings

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getTfaAppCodes**](tfa-settings/get-tfa-app-codes.md) | **GET** /api/2.0/settings/tfaappcodes | Get the TFA backup codes |
| [**getTfaConfirmData**](tfa-settings/get-tfa-confirm-data.md) | **GET** /api/2.0/settings/tfaapp/confirm | Get TFA confirmation data |
| [**getTfaSettings**](tfa-settings/get-tfa-settings.md) | **GET** /api/2.0/settings/tfaapp | Get the TFA settings |
| [**tfaAppGenerateSetupCode**](tfa-settings/tfa-app-generate-setup-code.md) | **GET** /api/2.0/settings/tfaapp/setup | Generate the TFA setup code |
| [**tfaValidateAuthCode**](tfa-settings/tfa-validate-auth-code.md) | **POST** /api/2.0/settings/tfaapp/validate | Validate the TFA code |
| [**unlinkTfaApp**](tfa-settings/unlink-tfa-app.md) | **PUT** /api/2.0/settings/tfaappnewapp | Unlink the TFA application |
| [**updateTfaAppCodes**](tfa-settings/update-tfa-app-codes.md) | **PUT** /api/2.0/settings/tfaappnewcodes | Regenerate the TFA backup codes |
| [**updateTfaSettings**](tfa-settings/update-tfa-settings.md) | **PUT** /api/2.0/settings/tfaapp | Update the TFA settings |
| [**updateTfaSettingsLink**](tfa-settings/update-tfa-settings-link.md) | **PUT** /api/2.0/settings/tfaappwithlink | Update TFA settings with a link |

## Telegram

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**checkTelegram**](telegram/check-telegram.md) | **GET** /api/2.0/settings/telegram/check | Check the Telegram connection |
| [**linkTelegram**](telegram/link-telegram.md) | **GET** /api/2.0/settings/telegram/link | Get the Telegram link |
| [**unlinkTelegram**](telegram/unlink-telegram.md) | **DELETE** /api/2.0/settings/telegram/link | Unlink Telegram |

## Webhooks

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**createWebhook**](webhooks/create-webhook.md) | **POST** /api/2.0/settings/webhook | Create a webhook |
| [**enableWebhook**](webhooks/enable-webhook.md) | **PUT** /api/2.0/settings/webhook/enable | Switch a webhook on or off |
| [**getTenantWebhooks**](webhooks/get-tenant-webhooks.md) | **GET** /api/2.0/settings/webhook | Get the portal webhooks |
| [**getWebhookTriggers**](webhooks/get-webhook-triggers.md) | **GET** /api/2.0/settings/webhook/triggers | Get the webhook triggers |
| [**getWebhooksLogs**](webhooks/get-webhooks-logs.md) | **GET** /api/2.0/settings/webhooks/log | Get the webhook delivery log |
| [**removeWebhook**](webhooks/remove-webhook.md) | **DELETE** /api/2.0/settings/webhook/\{id\} | Remove a webhook |
| [**retryWebhook**](webhooks/retry-webhook.md) | **PUT** /api/2.0/settings/webhook/\{id\}/retry | Retry a webhook delivery |
| [**retryWebhooks**](webhooks/retry-webhooks.md) | **PUT** /api/2.0/settings/webhook/retry | Retry webhook deliveries |
| [**updateWebhook**](webhooks/update-webhook.md) | **PUT** /api/2.0/settings/webhook | Update a webhook |

## Webplugins

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**addWebPluginFromFile**](webplugins/add-web-plugin-from-file.md) | **POST** /api/2.0/settings/webplugins | Add a web plugin |
| [**deleteWebPlugin**](webplugins/delete-web-plugin.md) | **DELETE** /api/2.0/settings/webplugins/\{name\} | Delete a web plugin |
| [**getWebPlugin**](webplugins/get-web-plugin.md) | **GET** /api/2.0/settings/webplugins/\{name\} | Get a web plugin by name |
| [**getWebPlugins**](webplugins/get-web-plugins.md) | **GET** /api/2.0/settings/webplugins | Get web plugins |
| [**updateWebPlugin**](webplugins/update-web-plugin.md) | **PUT** /api/2.0/settings/webplugins/\{name\} | Update a web plugin |

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

