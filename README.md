## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## 项目瘦身

## icon title

## 目录创建

## css 样式重置 normalize.css reset.css common.css(公共样式)

index.css 作为文件的出口,导入至 main.js 中

## 路由配置 导入 createRouter, createWebHashHistory -> hash 和另外一个路由的区别是什么

填路由

## 可以使用代码片段创建每个页面

## Q: jsconfig 里面的东西是?

让提示更加智能

## 将 tabbar 的资源单独抽到一个文件夹中

## 拿图片地址的时候不能这样直接拿，如果是 webpack 可以使用 require()拿但是 vite 不支持

```js
 <img :src="item.image" alt="" />
```

解决方案：写一个或者在网上 copy 一个加载静态图片的工具

```js
export const getAssetsURL = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
```

```js
  <img :src="getAssetsURL(item.image)" alt="" />
```

## "&"符号引用上一级选择器

```css
.tab-bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.active {
    color: #ff9854;
  }
}
```
