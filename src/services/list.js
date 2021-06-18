export function getNFTs16() {
    return fetch('http://167.71.76.105/server/root.php?f=home')
        .then(res => res.json())
}
export function getNFTs() {
    return fetch('http://167.71.76.105/server/root.php?f=buy')
        .then(res => res.json())
}
export function myNFTs() {
    return fetch('http://167.71.76.105/server/root.php?f=myNFTs')
        .then(res => res.json())
}
export function bids() {
    return fetch('http://167.71.76.105/server/root.php?f=bids')
        .then(res => res.json())
}

export function getNFTs1(item) {
    return fetch('http://localhost:3333/list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item })
    })
        .then(data => data.json())
}