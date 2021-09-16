TypeScript "react-bootstrap" Custom Theme Demo
=================================

可以通常给出新的全局css变量来改变全局样式
- Bootstrap css variables: https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss

推荐直接写css来覆盖：
https://react-bootstrap.github.io/getting-started/theming/

为了避免冲突，可以使用`ThemeProvider`或者`bsPrefix`属性来自定义前缀，或者通过`varient`属性，给一个不同的后缀。
通常不需要这么做，因为会丢失bootstrap自己的样式（除非自己重新配置并编译css)

查看：`src/theme.css`

- react-bootstrap: https://react-bootstrap.netlify.app/getting-started
- components: https://react-bootstrap.netlify.app/components
- Theming: https://react-bootstrap.github.io/getting-started/theming
- Bootstrap 5 cheatsheet: https://bootstrap-cheatsheet.themeselection.com/


```
npm install
npm run demo
```

It will open page on browser automatically.
