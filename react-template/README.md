### 创建项目

```bash
npm init react-app project-name
```

### 定制化 webpack 配置

有多种方法, 这里采用 eject

```bash
yarn eject
```

这时候会输出以下文件:

- `/config` webpack 的配置文件
- `/scripts` 构建和开发校本
- `/src/react-app-env.d.ts` ts 申明文件

### 添加 less

```bash
npm i less less-loader -D
```

在 `/config/webpack.config.js` 中加入 less 配置

```js
// 命名正则
const lessRegex = /\.less$/; // 新增less配置
const lessModuleRegex = /\.module\.less&/; // 新增less配置

// 在 webpack module.rules 中添加
{
  test: lessRegex,
  exclude: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 1,
      sourceMap: isEnvProduction && shouldUseSourceMap,
    },
    'less-loader'
  ),
  sideEffects: true,
},
{
  test: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 1,
      sourceMap: isEnvProduction && shouldUseSourceMap,
    },
    'less-loader',
  ),
},
```

在声名文件中添加

```js
declare module '*.less' {
  const classes: Record<string, string>;
  export default classes;
}
```

### 添加 tslint

在根目录添加 `.tslint.json` 文件, 并添加代码

```json
{
  "extends": ["tslint-react"],
  "rules": {
    /* 自己添加的特殊规则 */
  }
}
```

### 添加 stylelint

在根目录添加 `.stylelintrc` 文件, 并添加代码

```json
{
  "extends": "stylelint-config-standard",
  "rules": {
    /* 自己添加的特殊规则 */
  }
}
```

### 添加 react-router

浏览器中直接安装 `react-router-dom`

```bash
npm i react-router-dom -S
npm i @types/react-router-dom -D
```

### 按需引入 antd

```bash
npm i antd -S
npm i babel-plugin-import -D
```

在 `/config/webpack.config.js` 中编辑 module.rules.oneOf, `test: /\.(js|mjs|jsx|ts|tsx)$/` 的 options.plugins 中添加

```js
[
  'import',  // 导入插件
  {
    libraryName: 'antd',  // 库名
    style: 'css',  // 直接编译成行内样式
  }
]
```

### 引入 react-redux
