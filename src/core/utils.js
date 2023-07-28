function getDynamicUUID(uuidArray) {
    const randomIndex = Math.floor(Math.random() * uuidArray.length);
    return uuidArray[randomIndex];
}


module.exports = {
    getDynamicUUID
}