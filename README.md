# idux-scale-bug-demo
复现idux 浮层组件以及弹窗组件在body被设置缩放产生的问题

## 项目启动
yarn install;
yarn dev;

## 页面说明
### 未对body进行缩放的场景下的表现情况
http://localhost:5173/#/origin
![弹窗未缩放](./normal-modal.png)

![浮沉未缩放](./normal-popover.png)

### 对body进行缩放后的表现情况
http://localhost:5173/#/scale

![弹窗异常](./abnormal-modal.png)

![浮沉异常](./abnormal-popover.png)