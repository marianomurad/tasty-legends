import {fetchEntries} from "./entries";

export async function fetchByContentType(type) {
    const entries = await fetchEntries();
    const products = entries.filter(product => {
            if (product.sys.contentType.sys.id === type) return product;
        }
    )
    return products;
}
