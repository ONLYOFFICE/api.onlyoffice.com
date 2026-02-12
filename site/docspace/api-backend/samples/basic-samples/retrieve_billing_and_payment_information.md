import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Retrieve billing and payment information

This example demonstrates how to read billing-related information in ONLYOFFICE DocSpace via the API: customer profile, balance by currency, current quota, available quotas, auto top-up settings, and supported currencies.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Config
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  const HEADERS = { Authorization: API_KEY };

  // Step 1: Customer info
  async function getCustomerInfo() {
    const res = await fetch(`${API_HOST}/api/2.0/portal/payment/customerinfo`, { headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get customer info: ${res.status} - ${t}`);
      return null;
    }
    const data = await res.json();
    const info = data?.response ?? {};
    console.log('Customer Info:', info);
    return info;
  }

  // Step 2: Customer balance
  async function getCustomerBalance() {
    const res = await fetch(`${API_HOST}/api/2.0/portal/payment/customer/balance`, { headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get balance: ${res.status} - ${t}`);
      return null;
    }
    const data = await res.json();
    const balance = data?.response ?? {};
    console.log('Balance:');
    for (const sub of balance.subAccounts ?? []) {
      console.log(`- ${sub.currency}: ${sub.amount}`);
    }
    return balance;
  }

  // Step 3: Current quota
  async function getCurrentQuota() {
    const res = await fetch(`${API_HOST}/api/2.0/portal/payment/quota`, { headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get current quota: ${res.status} - ${t}`);
      return null;
    }
    const data = await res.json();
    const q = data?.response ?? {};
    console.log(`Current Quota: ${q.title}, Trial: ${q.trial}, Due: ${q.dueDate}`);
    return q;
  }

  // Step 4: Available quotas
  async function getAvailableQuotas() {
    const res = await fetch(`${API_HOST}/api/2.0/portal/payment/quotas`, { headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get available quotas: ${res.status} - ${t}`);
      return null;
    }
    const data = await res.json();
    const list = data?.response ?? [];
    console.log('Available Quotas:');
    for (const q of list) {
      const price = q.price ?? {};
      console.log(`- ${q.title} - ${price.value} ${price.isoCurrencySymbol}`);
    }
    return list;
  }

  // Step 5: Auto Top-Up settings
  async function getTopupSettings() {
    const res = await fetch(`${API_HOST}/api/2.0/portal/payment/topupsettings`, { headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get topup settings: ${res.status} - ${t}`);
      return null;
    }
    const data = await res.json();
    const settings = data?.settings ?? data?.response ?? {};
    console.log('Auto Top-Up Settings:');
    console.log(`- Enabled: ${settings.enabled}`);
    console.log(`- Min Balance: ${settings.minBalance}`);
    console.log(`- Up To: ${settings.upToBalance}`);
    console.log(`- Currency: ${settings.currency}`);
    console.log(`- Last Modified: ${settings.lastModified}`);
    return settings;
  }

  // Step 6: Supported currencies
  async function getSupportedCurrencies() {
    const res = await fetch(`${API_HOST}/api/2.0/portal/payment/currencies`, { headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get currencies: ${res.status} - ${t}`);
      return null;
    }
    const data = await res.json();
    const list = data?.response ?? [];
    console.log('Supported Currencies:');
    for (const c of list) {
      console.log(`- ${c.isoCurrencySymbol} - ${c.currencyNativeName}`);
    }
    return list;
  }

  // Run
  (async () => {
    await getCustomerInfo();
    await getCustomerBalance();
    await getCurrentQuota();
    await getAvailableQuotas();
    await getTopupSettings();
    await getSupportedCurrencies();
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

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

  </TabItem>
</Tabs>
</details>

## Step 1: Retrieve customer information

A GET request is sent to [/api/2.0/portal/payment/customerinfo](/docspace/api-backend/usage-api/get-customer-info).

The API response includes:

- Basic customer profile details.
- Billing-related contact information.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getCustomerInfo() {
    const res = await fetch(`${API_HOST}/api/2.0/portal/payment/customerinfo`, { headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get customer info: ${res.status} - ${t}`);
      return null;
    }
    const data = await res.json();
    const info = data?.response ?? {};
    console.log('Customer Info:', info);
    return info;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_customer_info():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/customerinfo', headers=HEADERS)
    print("Customer Info:", r.json().get('response', {}))
  ```

  </TabItem>
</Tabs>

## Step 2: Retrieve customer balance

A GET request is sent to [/api/2.0/portal/payment/customer/balance](/docspace/api-backend/usage-api/get-customer-balance).

The API response includes:

- Account balances per currency.
- Amount available in each subaccount.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getCustomerBalance() {
    const res = await fetch(`${API_HOST}/api/2.0/portal/payment/customer/balance`, { headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get balance: ${res.status} - ${t}`);
      return null;
    }
    const data = await res.json();
    const balance = data?.response ?? {};
    console.log('Balance:');
    for (const sub of balance.subAccounts ?? []) {
      console.log(`- ${sub.currency}: ${sub.amount}`);
    }
    return balance;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_customer_balance():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/customer/balance', headers=HEADERS)
    balance = r.json().get('response', {})
    print("Balance:")
    for sub in balance.get('subAccounts', []):
      print(f"- {sub.get('currency')}: {sub.get('amount')}")
  ```

  </TabItem>
</Tabs>

## Step 3: Retrieve current quota

A GET request is sent to [/api/2.0/portal/payment/quota](/docspace/api-backend/usage-api/get-quota-payment-information).

The API response includes:

- Current plan title.
- Trial status.
- Due date for renewal or expiration.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getCurrentQuota() {
    const res = await fetch(`${API_HOST}/api/2.0/portal/payment/quota`, { headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get current quota: ${res.status} - ${t}`);
      return null;
    }
    const data = await res.json();
    const q = data?.response ?? {};
    console.log(`Current Quota: ${q.title}, Trial: ${q.trial}, Due: ${q.dueDate}`);
    return q;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_current_quota():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/quota', headers=HEADERS)
    quota = r.json().get('response', {})
    print(f"Current Quota: {quota.get('title')}, Trial: {quota.get('trial')}, Due: {quota.get('dueDate')}")
  ```

  </TabItem>
</Tabs>

## Step 4: Retrieve available quotas

A GET request is sent to [/api/2.0/portal/payment/quotas](/docspace/api-backend/usage-api/get-payment-quotas).

The API response includes:

- List of available plans.
- Price and currency for each plan.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getAvailableQuotas() {
    const res = await fetch(`${API_HOST}/api/2.0/portal/payment/quotas`, { headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get available quotas: ${res.status} - ${t}`);
      return null;
    }
    const data = await res.json();
    const list = data?.response ?? [];
    console.log('Available Quotas:');
    for (const q of list) {
      const price = q.price ?? {};
      console.log(`- ${q.title} - ${price.value} ${price.isoCurrencySymbol}`);
    }
    return list;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_available_quotas():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/quotas', headers=HEADERS)
    print("Available Quotas:")
    for q in r.json().get('response', []):
      price = q.get('price', {})
      print(f"- {q.get('title')} - {price.get('value')} {price.get('isoCurrencySymbol')}")
  ```

  </TabItem>
</Tabs>

## Step 5: Retrieve auto top-up settings

A GET request is sent to [/api/2.0/portal/payment/topupsettings](/docspace/api-backend/usage-api/get-tenant-wallet-settings).

- The API response includes:
- Auto top-up activation status.
- Minimum balance threshold.
- Target balance after top-up.
- Currency and last modification date.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getTopupSettings() {
    const res = await fetch(`${API_HOST}/api/2.0/portal/payment/topupsettings`, { headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get topup settings: ${res.status} - ${t}`);
      return null;
    }
    const data = await res.json();
    
    const settings = data?.settings ?? data?.response ?? {};
    console.log('Auto Top-Up Settings:');
    console.log(`- Enabled: ${settings.enabled}`);
    console.log(`- Min Balance: ${settings.minBalance}`);
    console.log(`- Up To: ${settings.upToBalance}`);
    console.log(`- Currency: ${settings.currency}`);
    console.log(`- Last Modified: ${settings.lastModified}`);
    return settings;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

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

  </TabItem>
</Tabs>

## Step 6: Retrieve supported currencies

A GET request is sent to [/api/2.0/portal/payment/currencies](/docspace/api-backend/usage-api/get-payment-currencies).

The API response includes:

- Supported ISO currency symbols.
- Native currency names.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getSupportedCurrencies() {
    const res = await fetch(`${API_HOST}/api/2.0/portal/payment/currencies`, { headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get currencies: ${res.status} - ${t}`);
      return null;
    }
    const data = await res.json();
    const list = data?.response ?? [];
    console.log('Supported Currencies:');
    for (const c of list) {
      console.log(`- ${c.isoCurrencySymbol} - ${c.currencyNativeName}`);
    }
    return list;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_supported_currencies():
    r = requests.get(f'{API_HOST}/api/2.0/portal/payment/currencies', headers=HEADERS)
    print("Supported Currencies:")
    for c in r.json().get('response', []):
      print(f"- {c.get('isoCurrencySymbol')} - {c.get('currencyNativeName')}")
  ```

  </TabItem>
</Tabs>