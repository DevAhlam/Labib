
async function get(){
    const response = await fetch(/Users/ahlamalmutiri/Downloads/10000-riyadh-from-api.json)
    const data = await response.json()
}
get()