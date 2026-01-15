# LNG计量撬产品宣传网站

## 项目简介

这是一个为南京天梯能源科技打造的LNG计量撬产品宣传网站，突出展示了其"世界第一，中国第一"的品牌定位。网站包含项目背景、核心技术优势、双第一定位、应用价值、未来展望和支撑材料等板块。

## 技术栈

- React 18+
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion (动画效果)
- Recharts (数据可视化)

## 快速开始

### 安装依赖

```bash
# 使用npm
npm install

# 或使用pnpm
pnpm install
```

### 开发模式

```bash
# 使用npm
npm run dev

# 或使用pnpm
pnpm dev
```

打开浏览器访问 http://localhost:3000

### 构建项目

```bash
# 使用npm
npm run build

# 或使用pnpm
pnpm build
```

构建产物将生成在 `dist` 目录中

## 部署到GitHub Pages

### 前提条件

1. 确保您已拥有GitHub账号
2. 在GitHub上创建一个新的仓库
3. 安装Node.js和npm/pnpm

### 部署步骤

1. 修改 `package.json` 文件中的 `homepage` 字段，将 `[YOUR_GITHUB_USERNAME]` 替换为您的GitHub用户名，`[YOUR_REPOSITORY_NAME]` 替换为您的仓库名称：

   ```json
   "homepage": "https://[YOUR_GITHUB_USERNAME].github.io/[YOUR_REPOSITORY_NAME]"
   ```

2. 安装依赖并构建项目：

   ```bash
   npm install
   npm run build
   ```

3. 部署到GitHub Pages：

   ```bash
   npm run deploy
   ```

4. 部署完成后，访问 `https://[YOUR_GITHUB_USERNAME].github.io/[YOUR_REPOSITORY_NAME]` 即可查看您的网站

### 注意事项

- 首次部署可能需要一些时间来处理
- 确保GitHub Pages设置正确（在仓库的Settings > Pages中）
- 如果遇到路由问题，确保您的React Router配置正确处理了GitHub Pages的路径

## 项目结构

```
src/
├── App.tsx                 # 应用入口组件
├── components/             # 可复用组件
├── contexts/               # React Context
├── hooks/                  # 自定义hooks
├── lib/                    # 工具函数
├── pages/                  # 页面组件
│   └── Home.tsx            # 首页
├── index.css               # 全局样式
└── main.tsx                # 应用入口文件
```

## License

MIT