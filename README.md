# Product Alert module for Magento PWA Studio


## What is this?




## Requirements

- Magento version 2.4.* or >= 2.3.5
- Got [Mageplaza Product Alerts extension](https://www.mageplaza.com/magento-2-product-alerts/) and [Product Alerts GraphQL](https://github.com/mageplaza/magento-2-product-alerts-graphql) installed

## Installation

### 1. Init project
```
git clone https://github.com/Simicart/simi-studio --branch release/3.0.0
cd simi-studio
```

### 2. Start the project

From the root directory of the project you created above, clone the repository:

```
  git clone https://github.com/Simicart/productalert-module-pwa-studio ./@simicart/productalert
```

### 3. Modify .env

Change the .env MAGENTO_BACKEND_URL with your Magento site URL, or use our demo URL:

```
  MAGENTO_BACKEND_URL=https://mpmed.pwa-commerce.com/
```
### 4. Modify package.json

Modify the dependencies of your project to add Shop By Brand extension.

```
  "dependencies": {
    ...
    "@simicart/productalert": "link:./@simicart/productalert",
    ...
  },
```

### 5. Install lib and Start Project

```
  yarn install && yarn watch
```

## Contribution

[SimiCart Team](https://www.simicart.com/pwa.html/) & [Mageplaza Team](https://www.mageplaza.com/)
