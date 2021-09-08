const path = require('path');
// importuję bibliotękę [path] z [node.js]
const HtmlWebpackPlugin = require('html-webpack-plugin');
// importuję odpowiedni plugin
module.exports = {
    entry: './src/app.js',
    // definiuje plik wejściowy
    output: {
        path: path.resolve(__dirname, 'build'),
        // definiuje ścieżką wyjściową
        filename: 'app.min.js',
        // definiuję nazwę pliku wyjściowego
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // określam jakie pliki
                // będą brane pod uwagę
                exclude: /node_modules/,
                // określam wykluczenia
                use: ['babel-loader', 'eslint-loader'],
                // określam jaki [loader]
                // ma być wykorzystany
                // tym razem wykorzystujemy kilka
                // najpierw będzie to [eslint-loader]
                // potem dopiero [babel-loader]
            },
        ],
        // obecnie brak dodatkowych ustawień
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // wskazuje plik źródłowy
            filename: 'index.html',
            // określan nazwę dla pliku
        }),
    ],
};
// eksportuję ustawienia dla webpack-a
