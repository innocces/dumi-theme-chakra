---
nav: Guide
group:
  title: Basic
  order: 0
---

# Markdown

We have added some common components to **dumi**'s existing **markdown** built-in components

## SettingPanel

A panel component that allows global debugging of theme colors. You can use this component to preview the built-in adaptation styles for all color schemes

```markdown
<SettingPanel />
```

Rendering effects can be seen in the hover settings button on the right side of the document

## Alert

Alerts are used to communicate a state that affects a system, feature or page.

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

show ad or invite info

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
