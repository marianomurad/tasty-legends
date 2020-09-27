import { client } from '../../../lib/utils/contentful/createClient'

export async function fetchEntries() { // fetches all content.
    const entries = await client.getEntries();
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
}

