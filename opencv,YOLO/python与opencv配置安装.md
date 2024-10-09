## Opencv  安装方法
### Pip 换源
Pip 官方源
```python
https://pypi.python.org/simple
```
Pip 清华源
```python
https://pypi.tuna.tsinghua.edu.cn/simple/
```
临时使用方法
```python
pip install scrapy -i https://pypi.python.org/simple
```
换源命令
```python
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/ 
```
### 安装 opencv-python
```python
pip install opencv-python
```
### 安装 numpy
 ```python
pip install numpy
```
### 安装 matplotlib
```python
pip install matplotlib
```
# 简单的读取图片
```python
import cv2

image_path = '40919163221.jpg'

img = cv2.imread(image_path)

if img is not None:

    cv2.imshow('img', img)

    cv2.waitKey(0)
```

> [!NOTE] 注意
> 图片地址尽量使用相对地址, 绝对地址可能因为权限问题无法读取

# 目标一: 车辆检测
## 创建和显示窗口
### namedWindow ()
创建窗口, 参数为: (窗口名, 窗口模式); 默认 auto 不可调大小, normal 可调大小
### imshow ()
显示窗口, 只有在创建窗口后才有效, 参数为: (窗口名, Mat内容 (填 0 为全黑))
### destoryAllWindows ()
销毁窗口, 关闭所有窗口, 释放内存
### resizeWindow 
调整窗口大小, 参数为: (窗口名, 设定宽度, 设定高度)
### waiteKey ()
窗口等待, 只有设定才会等待操作, 可传回按键监听值, 填 0 为一直等候

```python
import cv2

# 创建窗口

cv2.namedWindow('new', cv2.WINDOW_NORMAL)

# 显示窗口

cv2.imshow('new', 0)

# 调整窗口大小

cv2.resizeWindow('new', 1920, 1080)

# 等待按键

key = cv2.waitKey(0)

if(key == 'q'):

    exit()

# 销毁窗口

cv2.destroyAllWindows()
```

## 加载图片
### imread (path, flag) 
加载图片为 mat 类型数据, 参数为: (图片地址, 色彩类型 (可选彩色, 黑白 ,etc))
```python
import cv2

# 创建窗口

cv2.namedWindow('img', cv2.WINDOW_NORMAL)

# 读取图片

img = cv2.imread('40919163221.jpg')

# 显示窗口

cv2.imshow('img', img)

# 等待按键

key = cv2.waitKey(0)

if(key == 'q'):

    exit()

# 销毁窗口

cv2.destroyAllWindows()
```
## 基本图形的绘制
## 车辆识别