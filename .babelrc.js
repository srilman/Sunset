const main = {
    presets: [
        "@babel/react",
        [
            "@babel/env", {
                modules: false,
                useBuiltIns: "usage",
                debug: true,
            },
        ],
    ],
    plugins: process.env.NODE_ENV === "development"
    ? ([
        "react-hot-loader/babel"
    ])
    : ([]),
}
