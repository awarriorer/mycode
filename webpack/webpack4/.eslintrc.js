module.exports = {
    // 执行环境
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 2017,
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: "./",
    },
    plugins: [
        "typescript"
    ],
    /**
     * 规则书写
     * "规则名": [规则值, 规则配置]
     * "off" || 0, 关闭规则关闭
     * "warn" || 1, 在打开的规则作为警告（不影响退出代码）
     * "error" || 2, 把规则作为一个错误（退出代码触发时为1）
     */ 
    rules: {
        // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
        'eqeqeq': [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ],
        // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
        'typescript/class-name-casing': 'error',
        /**
         * 变量声明和使用
         * 语法限制
         */

        // 禁止修改const声明的变量
        "no-const-assign": 2,
        // 不能有声明后未被使用的变量或参数
        "no-unused-vars": 2,
        // 不能有未定义的变量
        "no-undef": 1,
        // 禁用var，用let和const代替
        "no-var": 0,
        // 强制驼峰法命名
        // "camelcase": 2,
        // 禁止给类赋值
        "no-class-assign": 2,
        // 在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-dupe-keys": 2,
        // 禁止重复的函数声明
        "no-func-assign": 2,
        // 禁止在条件中使用常量表达式 if(true) if(1)
        "no-constant-condition": 2,
        //switch中的case标签不能重复
        "no-duplicate-case": 2,
        // 块语句中的内容不能为空
        "no-empty": 2,
        // 禁止无效的this，只能用在构造器，类，对象字面量
        "no-invalid-this": 2,
        // 禁止else语句内只有if语句
        "no-lonely-if": 2,
        // 箭头函数用小括号括起来
        "arrow-parens": 0,
        // =>的前/后括号
        "arrow-spacing": 0,
        // switch语句最后必须有default
        "default-case": 2,

        /**
         * 方法使用限制
         */
        "no-alert": 0,
        // "no-console": 2,


        /**
         * 编码风格 
         */
        // 字符串引号类型
        quotes: [2, "single"],
        //语句强制分号结尾
        "semi": [2, "always"],
        // 缩进
        indent: [2, 4], 
        // 关闭禁止混用tab和空格
        "no-mixed-spaces-and-tabs": [2, false],

    }
}