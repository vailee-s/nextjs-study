

/**
 * 当用户在共享一个模板的路由间跳转的时候，将会重新挂载组件实例，
 * 重新创建 DOM 元素，不保留状态
 * 
 * */ 
export default function Template({children}){
    return <div>{children}</div>
}