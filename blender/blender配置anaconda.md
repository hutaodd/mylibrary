---
created: 2024-12-21T21:28
updated: 2024-12-21T21:44
---
[提示和技巧 — Blender 2.69.0 - API 文档 --- Tips and Tricks — Blender 2.69.0 - API documentation](https://docs.blender.org/api/blender_python_api_2_69_release/info_tips_and_tricks.html#bundled-python-extensions)
## 捆绑的 Python 和扩展¶

从 Blender.org 发布的 Blender 版本包括在所有平台上的完整 Python 安装，这有一个缺点，即您在系统 Python 中安装的任何扩展都不会被 Blender 找到。

有两种方法可以解决这个问题：

- 删除 Blender python 子目录，然后 Blender 将回退到系统 Python 并使用它，而**Python 版本必须与 Blender 附带的版本相匹配**。
- 将扩展复制到 Blender 的 Python 子目录中，以便 Blender 可以访问它们，您也可以将整个 Python 安装复制到 Blenders 子目录中，替换 Blender 附带的一个。只要 python 版本匹配并且路径是在相同的相对位置创建的，这就可以工作。这样做的优点是您可以将此捆绑包重新分发给其他使用搅拌机和/或游戏玩家的人，包括您依赖的任何扩展。
1. 打开blender的脚本,确认blender的python版本
	![](assets/Pasted%20image%2020241221214126.png)
2. 到blender安装目录里把python的文件夹名更改或删除
	![](assets/Pasted%20image%2020241221213652.png)
3. 创建conda虚拟环境
```python
conda -n blender python=3.11.7
```
1. 