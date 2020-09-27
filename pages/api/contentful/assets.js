import { client } from '../../../lib/utils/contentful/createClient'

export async function fetchHeroAssets() {
    const hero = await client.getAssets();
    if (hero.items) return hero.items
    console.log(`Error getting Entries for ${contentType.name}.`)
}
