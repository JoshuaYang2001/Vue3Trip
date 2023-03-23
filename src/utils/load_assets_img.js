// 加载图片资源
export const getAssetsURL = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
