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

