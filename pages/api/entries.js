import {ContentfulHelperStrings} from "../../lib/utils/contentful/helpers";

const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})


export async function fetchProducts() {
    const entries = await fetchEntries();
    const products = entries.filter(product => {
            if (product.sys.contentType.sys.id === ContentfulHelperStrings.contentTypes.product) return product;
        }
    )
    return products;
}

export async function fetchEntries() { // fetches all content.
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchHeroAssets() {
    const hero = await client.getAssets()
    if (hero.items) return hero.items
    console.log(`Error getting Entries for ${contentType.name}.`)
}
