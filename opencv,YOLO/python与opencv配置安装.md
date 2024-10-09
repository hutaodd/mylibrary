## Opencv  安装方法
### Pip 换源
Pip 官方源
```
https://pypi.python.org/simple
```
Pip 清华源
```
https://pypi.tuna.tsinghua.edu.cn/simple/
```
临时使用方法
```
pip install scrapy -i https://pypi.python.org/simple
```
换源命令
```
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/ 
```
### 安装 opencv-python
```
pip install opencv-python
```
### 安装 numpy
 ```
pip install numpy
```
### 安装 matplotlib
```
pip install matplotlib
```
# 简单的读取图片
```
import cv2

image_path = '40919163221.jpg'

img = cv2.imread(image_path)

if img is not None:

    cv2.imshow('img', img)

    cv2.waitKey(0)
```
