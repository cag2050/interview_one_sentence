module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint",
    },
    // add your custom rules here
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        indent: ["error", 4, { SwitchCase: 1 }], // 缩进宽度4个空格
        //强制不使用分号结尾
        // semi: ['error', 'never'],
        semi: "off", // 允许使用分号
        "comma-dangle": "off", // 允许行末逗号
    },
}
