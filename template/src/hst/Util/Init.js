export default class Init {


    initializeApp(initialConfig) {

        if (initialConfig && initialConfig.store) {
            document.store = initialConfig.store
        }

        // Array Functions
        Array.prototype.$forEach = function (callback, thisArg) {
            return new Promise((resolve, reject) => {
                if (this == null) {
                    throw new TypeError("Array.prototype.$forEach called on null or undefined")
                }
                var T, k
                let data = []
                var O = Object(this)
                var len = O.length >>> 0
                if (typeof callback !== "function") {
                    throw new TypeError(callback + " is not a function")
                }
                if (arguments.length > 1) {
                    T = thisArg
                }
                k = 0
                let next = (a) => {
                    data.push(a);
                    if (k == len) {
                        data.shift();
                        resolve(data)
                    } else {
                        var kValue
                        if (k in O) {
                            kValue = O[k]
                            k++
                            callback.call(T, kValue, k - 1, O, next)
                        }
                    }
                }
                next()
            })
        }
    }

}