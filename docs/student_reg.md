## 注册模块

### 三种接口

* rest 接口  
`<UserRest url=""/>`

* api 接口  
`<User api=""/>`

* function 接口  
`<UserLogin login={function login(name,passowrd){}}/>`


### 解释

一个模块应当使用上述三种接口中的一种。  
最底层的模块使用function接口
较为复杂的模块使用api接口，api是一系列function的集合，例如：
```
api={
    login,
    reg
}
```

对于某些和rest服务配对的ui,可以封装为rest接口，传入一个url,然后由url生成api,再调用api接口的组件。
```
const UserRest=(props)=><User api={genAPI(props.url)}}/>
```