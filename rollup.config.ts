import loaderPlugin from '@betit/rollup-plugin-webpack-loader';
import renameExtensions from '@betit/rollup-plugin-rename-extensions';

import fastGlob from 'fast-glob';

export default {
    input: fastGlob.sync(['./src/**/*.ts{,x}', '!./src/**/*.d.ts']).map((item) => {
        return item.toString();
    }),
    output: {
        dir: './dist',
        format: 'esm',
    },
    preserveModules: true,
    plugins: [
        loaderPlugin({
            include: /\.tsx?$/,
            exclude: /\.d\.ts$/,
            use: [
                {
                    loader: 'ts-loader',
                }
            ],
            webpackOptions:  {
                resolve: {
                    symlinks: true,
                    extensions: ['.tsx', '.ts', '.js'],
                },
            },
        }),
        renameExtensions({
            include: ['**/*.ts', '**/*.tsx'],
            mappings: {
                '.ts': '.js',
                '.tsx': '.js',
            },
        })
    ],
};