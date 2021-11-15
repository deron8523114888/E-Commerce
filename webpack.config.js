//引用path模組
const path = require('path');
module.exports = {
    //這個 webpack 要打包的對象
    entry: {
        index: './index.js'
    },
    output: {
        // 打包後的檔案名稱
        filename: 'bundle.js',
        // 打包後的路徑，這裡使用 path 模組的 resolve() 取得絕對位置，也就是目前專案的根目錄
        path: path.resolve('./'),
    }
};