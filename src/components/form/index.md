---
title: Form 表单
group:
  title: 反馈
  order: 30
---

# Form  表单

表单控件，包含数据控制、校验和对应样式。



## 代码演示

<code src="./demo/basic"  ></code>



## API

### Form

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| layout  | 表单布局                 | `horizaontal` \| `vertical` | `horizaontal` |
| onFinish | 校验通过的回调     | function(formValues)          | -             |
| onFinishFailed | 校验失败的回调     | function(  Array\<errValue> ) | -             |
| onValuesChange | 表单数据变化的回调 | function(formValues) | - |



### Form.Item

| 属性     | 说明                                            | 类型                 | 默认值 |
| -------- | ----------------------------------------------- | -------------------- | ------ |
| name     | 表单项字段名称，`必填`                          | string               | `必填` |
| rules    | 表单校验规则                                    | Array\<rule>         | -      |
| label    | 标签                                            | string               | -      |
| colon    | 标签是否带有冒号，仅在`horizaontal`layout下显示 | boolean              | true   |
| onChange | item包裹的表单项发生变化的回调                  | function(name,event) | -      |

rule对象目前定义如下：

```typescript
interface RuleType {
  message: string;
  required?: boolean;
  minLen?: number;
  maxLen?: number;
}
```

