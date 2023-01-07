---
# nav: 指南
#   order: -1
group:
  title: 基础
order: 6
---

# Markdown 增强

我们在 **dumi** 现有的 **markdown** 内置组件中增加了一些常用的组件

## SettingPanel

一个可以全局调试主题色的设置面板组件. 你可以使用该组件预览内置的所有色系的适配样式

```markdown
<SettingPanel />
```

渲染效果可查看文档右侧的悬浮设置按钮

## Alert

用来传达影响系统、功能或页面的状态.

### Status

- **error**

```markdown
<Alert status='error'>
  There was an error processing your request
</Alert>
```

<br />
<Alert status='error'>
  There was an error processing your request
</Alert>
<br />

- **success**

```markdown
<Alert status='success'>
  Data uploaded to the server. Fire on!
</Alert>
```

<br />
<Alert status='success'>
  Data uploaded to the server. Fire on!
</Alert>
<br />

- **warning**

```markdown
<Alert status='warning'>
  Seems your account is about expire, upgrade now
</Alert>
```

<br />
<Alert status='warning'>
  Seems your account is about expire, upgrade now
</Alert>
<br />

- **info**

```markdown
<Alert status='info'>
  Chakra is going live on August 30th. Get ready!
</Alert>
```

<br />
<Alert status='info'>
  Chakra is going live on August 30th. Get ready!
</Alert>
<br />

### Variant

- **subtle**

```markdown
<Alert status='success' variant='subtle'>
  Data uploaded to the server. Fire on!
</Alert>
```

<br />
<Alert status='success' variant='subtle'>
  Data uploaded to the server. Fire on!
</Alert>
<br />

- **top-accent**

```markdown
<Alert status='success' variant='top-accent'>
  Data uploaded to the server. Fire on!
</Alert>
```

<br />
<Alert status='success' variant='top-accent'>
  Data uploaded to the server. Fire on!
</Alert>
<br />

- **solid**

```markdown
<Alert status='success' variant='solid'>
  Data uploaded to the server. Fire on!
</Alert>
```

<br />
<Alert status='success' variant='solid'>
  Data uploaded to the server. Fire on!
</Alert>
<br />

- **left-accent**

```markdown
<Alert status='success' variant='left-accent'>
  Data uploaded to the server. Fire on!
</Alert>
```

<br />
<Alert status='success' variant='left-accent'>
  Data uploaded to the server. Fire on!
</Alert>
<br />

### Title

```markdown
<Alert status='error' variant='left-accent' title="Your browser is outdated!">
  Your Chakra experience may be degraded.
</Alert>
```

<br />
<Alert status='error' variant='left-accent' title="Your browser is outdated!">
  Your Chakra experience may be degraded.
</Alert>
<br />

## Ad

展示广告或者邀请信息

```jsx | pure
<Ad
  image="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  submit="Buy Latte"
  link="http://buymeacoffee.com/innocces"
  title="The perfect latte"
  description="Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk."
></Ad>
```

<br />
<Ad
  image="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  submit="Buy Latte"
  link="http://buymeacoffee.com/innocces"
  title="The perfect latte"
  description="Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk." 
></Ad>
