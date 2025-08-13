# Retrieve Billing and Payment Information

This example demonstrates how to read billing-related information in ONLYOFFICE DocSpace via the API: customer profile, balance by currency, current quota, available quotas, auto top-up settings, and supported currencies.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>

``` py
import requests

API_HOST = 'https://yourportal.onlyoffice.com'
API_KEY = 'your_api_key'

HEADERS = {'Authorization': API_KEY}

def get_customer_info():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/customerinfo', headers=HEADERS)
    print("Customer Info:", r.json().get('response', {}))

def get_customer_balance():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/customer/balance', headers=HEADERS)
    balance = r.json().get('response', {})
    print("Balance:")
    for sub in balance.get('subAccounts', []):
        print(f"- {sub.get('currency')}: {sub.get('amount')}")

def get_current_quota():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/quota', headers=HEADERS)
    quota = r.json().get('response', {})
    print(f"Current Quota: {quota.get('title')}, Trial: {quota.get('trial')}, Due: {quota.get('dueDate')}")

def get_available_quotas():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/quotas', headers=HEADERS)
    print("Available Quotas:")
    for q in r.json().get('response', []):
        price = q.get('price', {})
        print(f"- {q.get('title')} - {price.get('value')} {price.get('isoCurrencySymbol')}")

def get_topup_settings():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/topupsettings', headers=HEADERS)
    settings = r.json().get('settings', {})
    print("Auto Top-Up Settings:")
    print(f"- Enabled: {settings.get('enabled')}")
    print(f"- Min Balance: {settings.get('minBalance')}")
    print(f"- Up To: {settings.get('upToBalance')}")
    print(f"- Currency: {settings.get('currency')}")
    print(f"- Last Modified: {settings.get('lastModified')}")

def get_supported_currencies():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/currencies', headers=HEADERS)
    print("Supported Currencies:")
    for c in r.json().get('response', []):
        print(f"- {c.get('isoCurrencySymbol')} - {c.get('currencyNativeName')}")

if __name__ == '__main__':
    get_customer_info()
    get_customer_balance()
    get_current_quota()
    get_available_quotas()
    get_topup_settings()
    get_supported_currencies()
```

</details>

## Step 1: Retrieve customer information

A GET request is sent to [/api/2.0/portal/payment/customerinfo](/docspace/api-backend/usage-api/get-customer-info).

- The API response includes:
- Basic customer profile details.
- Billing-related contact information.

``` py
def get_customer_info():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/customerinfo', headers=HEADERS)
    print("Customer Info:", r.json().get('response', {}))
```

## Step 2: Retrieve customer balance

A GET request is sent to [/api/2.0/portal/payment/customer/balance](/docspace/api-backend/usage-api/get-customer-balance).

The API response includes:

- Account balances per currency.
- Amount available in each subaccount.

``` py
def get_customer_balance():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/customer/balance', headers=HEADERS)
    balance = r.json().get('response', {})
    print("Balance:")
    for sub in balance.get('subAccounts', []):
        print(f"- {sub.get('currency')}: {sub.get('amount')}")
```

## Step 3: Retrieve current quota

A GET request is sent to [/api/2.0/portal/payment/quota](/docspace/api-backend/usage-api/get-quota-payment-information).

The API response includes:

- Current plan title.
- Trial status.
- Due date for renewal or expiration.

``` py
def get_current_quota():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/quota', headers=HEADERS)
    quota = r.json().get('response', {})
    print(f"Current Quota: {quota.get('title')}, Trial: {quota.get('trial')}, Due: {quota.get('dueDate')}")
```

## Step 4: Retrieve available quotas

A GET request is sent to [/api/2.0/portal/payment/quotas](/docspace/api-backend/usage-api/delete-file).

The API response includes:

- List of available plans.
- Price and currency for each plan.

``` py
def get_available_quotas():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/quotas', headers=HEADERS)
    print("Available Quotas:")
    for q in r.json().get('response', []):
        price = q.get('price', {})
        print(f"- {q.get('title')} - {price.get('value')} {price.get('isoCurrencySymbol')}")
```

## Step 5: Retrieve auto top-up settings

A GET request is sent to [/api/2.0/portal/payment/topupsettings](/docspace/api-backend/usage-api/get-tenant-wallet-settings).

- The API response includes:
- Auto top-up activation status.
- Minimum balance threshold.
- Target balance after top-up.
- Currency and last modification date.

``` py
def get_topup_settings():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/topupsettings', headers=HEADERS)
    settings = r.json().get('settings', {})
    print("Auto Top-Up Settings:")
    print(f"- Enabled: {settings.get('enabled')}")
    print(f"- Min Balance: {settings.get('minBalance')}")
    print(f"- Up To: {settings.get('upToBalance')}")
    print(f"- Currency: {settings.get('currency')}")
    print(f"- Last Modified: {settings.get('lastModified')}")

```

## Step 6: Retrieve supported currencies

A GET request is sent to [/api/2.0/portal/payment/currencies](/docspace/api-backend/usage-api/get-payment-currencies).

The API response includes:

- Supported ISO currency symbols.
- Native currency names.

``` py
def get_supported_currencies():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/currencies', headers=HEADERS)
    print("Supported Currencies:")
    for c in r.json().get('response', []):
        print(f"- {c.get('isoCurrencySymbol')} - {c.get('currencyNativeName')}")
```