const path = require('path');

/**
 * 确定基础路径
 * @param {*} newPath 
 * __dirname: node全局变量，当前路径
 */ 
const resolve = newPath => path.resolve(path.resolve(__dirname, '../'), newPath);

let cfg = {
    // 入口文件
    entry: {
        'index': resolve('./src/index.js'),
    },
    //导出
    output: {
        // 输出路径
        path: resolve('dist'), 
        // 输出的入口文件名称
        filename: '[name].js',
        // 输出的非入口文件输出的名称
        chunkFilename: '[name].[chunkhash].min.js',
        // 对外暴露的变量名称，需要和libraryTarget配合使用
        library: 'UNCLE',
        // 对外模块的类型，commonjs,amd,umd,
        libraryTarget: 'umd',
        /**
         * 通过webpack加载静态资源时的基础路径，
         * 也可以在在js运行时通过 __webpack_public_path__ 来动态设置 publicPath
         */
        publicPath: '/'
    },
    // 模块处理
    module: {
        // 处理条件，规则
        rules: [
            /*
            {   
                // loader的种类，pre：前置执行，post：后置执行，没有则为普通类型
                enforce: 'pre || post', 
                test: /\.js$/, // 匹配的文件类型，正则
                use: [ // 使用哪些loader
                    {
                        // 用哪个loader
                        loader: 'loader-name',
                        // loader 选项
                        options: {
                            
                        }
                    }
                ],
                // 包含哪些文件
                include: [
                    resolve('src'),
                ],
                // 排除哪些文件
                exclude: [
                    resolve('node_modules'),
                ],
            },
            */

            // {
            //     enforce: 'pre',
            //     test: /\.(js)$/,
            //     use: [
            //         'eslint-loader'
            //     ],
            //     exclude: [
            //         resolve('node_modules'),
            //     ]
            // },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                include: [
                    resolve('src'),
                ]
            },
            /*
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            // 导入的全局文件
                            resources: [
                                resolve('src/style/base.scss'),
                            ]
                        },
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            // img
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10240, // 小于10kb才会转成base,
                    name: resolve('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: resolve('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            */
        ]
    },
    devtool: 'eval-source-map',
    // 解析
    resolve: {
        //别名，确保模块引入变得更简单
        alias: {
            '@': resolve('./src/')
        },
        // 自动填充文件类型
        extensions: ['.js'],
        // 解析目录时要使用的文件名
        mainFiles: ["index"],
        // 文件搜索目录
        modules: [
            resolve('./node_modules'),
            resolve('./src'),
        ],
    }
}

module.exports = cfg;