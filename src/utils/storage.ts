const KEY = "APP_CONFIG";


function setStorage(obj: { [key: string]: any }) {
    const targetObj = _getItem(KEY);
    const newObj = Object.assign(targetObj, obj);
    window.localStorage.setItem(KEY, JSON.stringify(newObj))
}



function getStorage(key: string) {
    const targetObj = _getItem(KEY);
    return targetObj[key] || null;
}

const TOKEN = "ACCESS_TOKEN";
function getTokenByStorage() {
    return window.localStorage.getItem(TOKEN);
}
function setTokenByStorage(val: string) {
    return window.localStorage.setItem(TOKEN,val);
}

function clearStorage() {
    window.localStorage.clear()
}


function _getItem(key: string) {
    const t = (window.localStorage.getItem(key)) as any || ""
    const targetObj = JSON.parse(t);
    return targetObj;
}



export {
    setStorage,
    getStorage,
    getTokenByStorage,
    setTokenByStorage, clearStorage
}

