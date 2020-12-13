const endpoint = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&?apikey=6ccfcc7c18aa8c9a843472090f99f174349d955a89cbfc6a69b0f78f3ace71c5`;

export async function getCoins(coins){
    const response = await fetch(endpoint);
    if (response.ok) return response.json;
    throw response;
}