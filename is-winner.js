function isWinner(country) {
    return new Promise(async function (resolve, reject) {
        country = await db.getWinner(country).catch(() => {
            resolve(country + ' never was a winner')
        })

    }