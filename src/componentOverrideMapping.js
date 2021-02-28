/**
 * Mappings for overwrites
 * example: [`@magento/venia-ui/lib/components/Main/main.js`]: './lib/components/Main/main.js'
 */
module.exports = componentOverride = {
    [`@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js`]: '@simicart/testension/src/override/ProductDetail/productFullDetail.js',
    [`@magento/venia-ui/lib/components/Gallery/item.js`]: '@simicart/testension/src/override/ProductListing/GalleryItem.js',
    ['@magento/venia-ui/lib/components/AccountMenu/accountMenuItems.js']: '@simicart/testension/src/override/MyAccount/AccountMenuItems.js'
};
