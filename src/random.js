function getRandomNumber() {
    return Math.round(10000 * Math.random())
}

/**
 * 
 * @param {Number} id 
 * @param {Array} arr 
 */
function checkIdExists(id, arr) {
    arr.forEach(item => {
        if (item.id == id) {
            return true
        }
    })

    return false
}

/**
 * 
 * @param {Array} arr 
 */
function generateRandomId(arr) {
    let id = getRandomNumber();

    if (checkIdExists(id, arr)) {
        generateRandomId(arr)
    }

    else {
        return id
    }
}

export default generateRandomId