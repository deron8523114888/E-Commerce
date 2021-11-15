//引用path模組
const path = require('path');
module.exports = {
    //這個 webpack 要打包的對象
    entry: ['./index.js', './app.jsx'],
    output: {
        // 打包後的檔案名稱
        filename: 'bundle.js',
        // 打包後的路徑，這裡使用 path 模組的 resolve() 取得絕對位置，也就是目前專案的根目錄
        path: path.resolve(__dirname, './'),
    },
    module: {
        rules: [
            //第一個loader編譯JSX
            { 
                test: /.jsx$/, 
                exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader', 
                    options: { 
                        presets: ['@babel/preset-react', "@babel/preset-env"] 
                    } 
                } 
            },
            //第二個loader編譯ES6
            { 
                test: /.js$/, 
                exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader', 
                    options: { 
                        presets: ['@babel/preset-env'] 
                    } 
                } 
            }
        ]
    }
};