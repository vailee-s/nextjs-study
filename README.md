## 层级关系
Layout - Template - ErrorBoundary - Suspense - ErrorBoundary - Page 

- loading效用出现 ,主要是page函数是async或者使用react中的 use 钩子
- 如果page组件使用loading.js的话,loading.js会将page.js和下面的children用<Suspense>包裹
- 借助 Page函数的async,捕获promise,从而达到loading组件的效果

- not-found.js 被用于当 notFound 函数被抛出的时候。`import { notFound } from 'next/navigation'` . 所以,当我们请求一个用户的数据时或是请求一篇文章的数据时，如果该数据不存在，就可以直接丢出 notFound 函数，渲染自定义的not-found 界面