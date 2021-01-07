const path = require('path');
const webpack = require('webpack');

module.exports = env => {
    const config = {
        entry: path.resolve(__dirname +'/src/components/', 'index.ts'),
        output: {
            library:'csn/react-component-lib',
            libraryTarget: 'umd',
            path: path.resolve(__dirname, 'lib'),
            filename: "index.js",
            publicPath:'/lib/',
            umdNamedDefine: true  
        },
        resolve: {    
            extensions: ['.tsx','.ts', '.js', '.json'],
            mainFields: ['browser', 'module', 'main'],
            alias: {          
              'react': path.resolve(__dirname, './node_modules/react'),
              'react-dom': path.resolve(__dirname, './node_modules/react-dom'),      
              'assets': path.resolve(__dirname, 'assets'),
              'csn/react-component-lib': path.resolve(__dirname, './src/components/index.ts')
            } 
          },
        externals: {      
            // Don't bundle react or react-dom      
            "react": {          
                commonjs: "react",          
                commonjs2: "react",          
                amd: "React",          
                root: "React"      
            },      
            "react-dom": {          
                commonjs: "react-dom",          
                commonjs2: "react-dom",          
                amd: "ReactDOM",          
                root: "ReactDOM"      
            }
        },
        module: {
            rules: [
                {
                    test: [/\.css$/, /\.scss$/],
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' },
                        { loader: 'postcss-loader' }
                    ]
                },
                { 
                    test: /\.(png|jpg|jpeg|gif|svg)$/, 
                    loader: 'url-loader',
                    options:{
                        fallback: "file-loader",
                        name: "[name][md5:hash].[ext]",
                        outputPath: 'assets/',
                        publicPath: '/assets/'
                    }                
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    use: ["file-loader"],
                },
                {   
                    test: /\.(js|.jsx)$/, 
                    exclude: /(node_modules|bower_components)/, 
                    use: [{ loader: 'babel-loader' }] 
                },
                {
                    test: /\.(ts|tsx)$/,
                    use: [{ loader: require.resolve('awesome-typescript-loader')} ]
                }
            ]
        }
    }
    return config;
};