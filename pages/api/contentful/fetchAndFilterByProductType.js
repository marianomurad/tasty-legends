import {fetchEntries} from "./entries";

export async function fetchByContentTypeFilterByProductType(type, productType) {
    const entries = await fetchEntries();
    const products = entries.filter(product => {
            if (product.sys.contentType.sys.id === type && product.fields.productType === productType) return product;
        }
    )
    return products;
}
