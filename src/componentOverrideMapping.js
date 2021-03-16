/**
 * Mappings for overwrites
 * example: [`@magento/venia-ui/lib/components/Main/main.js`]: './lib/components/Main/main.js'
 */
module.exports = componentOverride = {
    [`@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js`]: '@simicart/productalert/src/override/ProductDetail/productFullDetail.js',
    [`@magento/venia-ui/lib/components/Gallery/item.js`]: '@simicart/productalert/src/override/ProductListing/GalleryItem.js',
    ['@magento/venia-ui/lib/components/AccountMenu/accountMenuItems.js']: '@simicart/productalert/src/override/MyAccount/AccountMenuItems.js'
};
