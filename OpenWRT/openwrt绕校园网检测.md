---
created: 2025-02-26T11:59
updated: 2025-02-28T08:25
---
## 原理
使用openwrt配合插件设置,反ua检测,反ipid检测,反ttl检测,反flashcookie检测,反时间戳检测
## 使用插件
### 反ua检测
#### UA3F
> [GitHub](https://github.com/SunBK201/UA3F)
> [UA3F 与 Clash 从零开始的部署教程](https://sunbk201public.notion.site/UA3F-Clash-16d60a7b5f0e457a9ee97a3be7cbf557?pvs=4)
### 反ipid检测
#### rkp-ipid
> [GitHub](https://github.com/CHN-beta/rkp-ipid)

### 反ttl检测
#### Kmod-iptables-ipot
### 反flashcookie检测
#### 内置防火墙组件
### 反时间戳检测
#### 内置NTP服务器

小米路由器刷bread后台
https://www.cnblogs.com/travis-ge/articles/17740005.html
https://github.com/acecilia/OpenWRTInvasion
https://breed.hackpascal.net/

UA3F 与 Clash 从零开始的部署教程
https://sunbk201public.notion.site/UA3F-Clash-16d60a7b5f0e457a9ee97a3be7cbf557#a2c72a92b297442ca7cc114e7668a310

openwrt官网
https://openwrt.org/inbox/toh/xiaomi/xiaomi_mi_router_4a_gigabit_edition

 [openwrt.ai](https://openwrt.ai/)在线编译定制专属固件

https://openwrt.ai/?target=ramips%2Fmt7621&id=xiaomi_mi-router-4a-gigabit



|                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1<br><br>2<br><br>3<br><br>4<br><br>5<br><br>6<br><br>7<br><br>8<br><br>9<br><br>10<br><br>11 | `由于本小姐并没有参与改写源代码，只是把别人的拿来用，所以不会复制一份托管到平台。`<br><br>`在这只是根据GPL协议的要求，来公开自己使用过的代码`<br><br>`这里准备的源代码包含`<br><br>`https://github.com/Zxilly/UA2F`<br><br>`https://github.com/CHN-beta/rkp-ipid`<br><br>`https://github.com/jerrykuku/luci-theme-argon`<br><br>`https://github.com/jerrykuku/luci-app-argon-config`<br><br>`https://github.com/lucikap/luci-app-ua2f`<br><br>`https://github.com/linkease/istore`<br><br>`https://github.com/openwrt/openwrt` |


 luci-app-autotimeset luci-app-ttyd luci-app-argon-config kmod-rkp-ipid iptables-mod-filter iptables-mod-ipopt iptables-mod-u32
iptables-nft kmod-ipt-ipopt ipset iptables-mod-conntrack-extra


型号:

Xiaomi Mi Router 4A Gigabit Edition

平台:

ramips/mt7621

版本:

分支: 24.10-SNAPSHOT  
内核: 6.6.73

生成日期:

2025-02-27 14:15:46

说明:

后台: 192.168.1.11  密码: root



2023-03-23 补充内容：  
小米路由器4A千兆版是利用 2.28.62 版本固件的一个 Shell 命令注入的漏洞，所以要想刷机成功就必须得降级到这个版本（2.28.62 之后的新版本应该是将这个漏洞修复了，我再次通过 OpenWRTInvasion 没获取到 ssh 登录权，所有刷的时候尽量在 [2.28.62](https://raw.githubusercontent.com/acecilia/OpenWRTInvasion/master/firmwares/stock/miwifi_r4a_firmware_72d65_2.28.62.bin) 这个固件版本下刷机）。

stok=2f25b590f79c5c4d01bc5951b688710a


小米路由器4A千兆版 开启telnet功能时 连接端口23失败的解决方法
https://www.ixigua.com/7018941989747950094?wid_try=1





breed> wget http://192.168.1.3/kwrt-02.27.2025-ramips-mt7621-xiaomi_mi-router-4a-gigabit-squashfs-sysupgrade.bin
Connecting to 192.168.1.3:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 11797067/0xb4024b (11MB) [application/octet-stream]
Saving to address 0x80001000

[========================================================================] 100%

Transmission completed in 4.5s.



flash write 0x160000 0x80001000 0xc00000





无需拆机 只需使用软件 简单易学 视频中软件及固件下载：https://wwa.lanzoui.com/ib7dUpiak5i 补充说明：本方案在小米4A千兆版官方固件版本为2.28.38、2.28.58、2.28.69均成功开启telnet功能。 Padavan固件默认管理地址：192.168.2.1 默认账户密码都是admin 默认WIFI密码1234567890 压缩包内的openwrt固件默认管理地址：192.168.31.1 密码coolxiaomi WiFi密码coolxiaomi




  
相关教程链接  
[https://www.right.com.cn/forum/f ... tra=page%3D1&page=1](https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=4007071&extra=page%3D1&page=1)  
[https://www.right.com.cn/forum/f ... ypeid%26typeid%3D55](https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=4067036&extra=page%3D1%26filter%3Dtypeid%26typeid%3D55)  
  
我买到的路由器的固件版本是:MiWiFi 稳定版 2.28.65  
  
准备工作:  
1.下载breed  
这个是开发BREED的作者的帖子  
[https://www.right.com.cn/forum/thread-161906-1-1.html](https://www.right.com.cn/forum/thread-161906-1-1.html)  
这个是BREED下载地址  
[https://breed.hackpascal.net/](https://breed.hackpascal.net/)  
小米路由器4a千兆版用的是这个  
[https://breed.hackpascal.net/breed-mt7621-pbr-m1.bin](https://breed.hackpascal.net/breed-mt7621-pbr-m1.bin)  
  
2.下载openwrt固件  
[https://downloads.openwrt.org/re ... shfs-sysupgrade.bin](https://downloads.openwrt.org/releases/21.02.1/targets/ramips/mt7621/openwrt-21.02.1-ramips-mt7621-xiaomi_mi-router-4a-gigabit-squashfs-sysupgrade.bin)  
(顺便贴一下小米4a千兆版的介绍页面[https://openwrt.org/inbox/toh/xi ... _4a_gigabit_edition](https://openwrt.org/inbox/toh/xiaomi/xiaomi_mi_router_4a_gigabit_edition))  
  
3.电脑开启telnet功能  
我的系统是WIN10,在设置-应用-程序和功能-启用或关闭windows功能 这里把telnet勾选上,需要重启电脑  
  
4.下载openwrt获取root权限的python脚本  
[https://github.com/acecilia/Open ... refs/tags/0.0.7.zip](https://github.com/acecilia/OpenWRTInvasion/archive/refs/tags/0.0.7.zip)  
下载这个,下载下来的文件名是OpenWRTInvasion-0.0.7.zip  
然后解压到c:/xiaomi/  
  
5.下载需要用到的其他工具:winscp(用来把breed固件上传到路由器,用的是ftp协议)  
(既然是ftp我估计是可以直接用windows自带的资源管理器访问的,打开我的电脑,然后在地址栏输入[ftp://192.168.31.1](ftp://192.168.31.1/)应该就可以访问了)  
  
然后开始正式的过程:  
  
第0步:必做的工作  
先把路由器正常的接好,让电脑可以正常的上网  这一步尤其重要,而且估计可能还需要能海淘购物,毕竟github有一些东西是访问不了的  
  
第一步:安装python  
从[https://www.python.org/ftp/python/3.10.1/python-3.10.1-amd64.exe](https://www.python.org/ftp/python/3.10.1/python-3.10.1-amd64.exe)下载安装包  
安装的时候勾选添加到path环境变量,这样在cmd里面就可以直接输入python命令了  
然后打开cmd 输入pip install requests  
这个命令是安装模块,第一次安装完毕有个提示,好像是说什么版本过老,建议用什么命令安装,我就用他推荐的命令重新装了一下requests  
(安装界面纯英文)  
  
安装完毕重启系统  
  
第二步:获取root权限  
打开cmd,进入到c:/xiaomi/  
输入命令python remote_command_execution_vulnerability.py  
提示输入IP 默认是192.168.31.1 可以直接回车或者如果你改了路由器的IP可以手动输入  
然后要输入stok  
用浏览器访问路由器管理界面,登录以后会在地址栏看到stok值,复制下来  
然后就会开始root  
过一会就提示成功了  
(注意:这里一定要有网络,否则永远不可能root成功)(这里必须路由器WAN口可以访问谷歌,不然绝对会root失败,我今天弄剩下的4台的时候发现的)  
  
然后再输入命令 telnet 192.168.31.1  
(这里如果提示连接失败说明上面的root没有成功,路由器需要海淘购物)  
  
  
第三步:备份  
备份的命令我忘记了,我也忘记备份了,参考论坛其他帖子的备份命令吧  
(这个备份的目的是以后好刷回小米官方系统)  
  
cat /proc/mtd  
dev:    size   erasesize  name  
mtd0: 01000000 00010000 "ALL"  
mtd1: 00030000 00010000 "Bootloader"  
mtd2: 00010000 00010000 "Config"  
mtd3: 00010000 00010000 "Bdata"  
mtd4: 00010000 00010000 "Factory"  
mtd5: 00010000 00010000 "crash"  
mtd6: 00010000 00010000 "cfg_bak"  
mtd7: 00100000 00010000 "overlay"  
mtd8: 00d00000 00010000 "OS1"  
mtd9: 00b30000 00010000 "rootfs"  
mtd10: 00180000 00010000 "disk"  
  
cd /tmp  
mkdir backupB9AD  
cd backupB9AD  
dd if=/dev/mtd0 of=/tmp/backupB9AD/mtd0-ALL.bin  
dd if=/dev/mtd1 of=/tmp/backupB9AD/mtd1-Bootloader.bin  
dd if=/dev/mtd2 of=/tmp/backupB9AD/mtd2-Config.bin  
dd if=/dev/mtd3 of=/tmp/backupB9AD/mtd3-Bdata.bin  
dd if=/dev/mtd4 of=/tmp/backupB9AD/mtd4-Factory.bin  
dd if=/dev/mtd5 of=/tmp/backupB9AD/mtd5-crash.bin  
dd if=/dev/mtd6 of=/tmp/backupB9AD/mtd6-cfg_bak.bin  
dd if=/dev/mtd7 of=/tmp/backupB9AD/mtd7-overlay.bin  
dd if=/dev/mtd8 of=/tmp/backupB9AD/mtd8-OS1.bin  
dd if=/dev/mtd9 of=/tmp/backupB9AD/mtd9-rootfs.bin  
dd if=/dev/mtd10 of=/tmp/backupB9AD/mtd10-disk.bin  
备份完毕用FTP把这几个文件复制出来保存好,以后万一要用到  
  
第四步:上传breed文件到路由器  
用winscp用FTP协议把breed上传到路由器的/tmp目录  
  
第五步:刷入breed  
输入命令mtd -r write /tmp/breed-mt7621-pbr-m1.bin Bootloader  
之后路由器会自动重启到breed界面  
(breed界面的IP是192.168.1.1,这里需要手动设置电脑的IP)  
用浏览器访问breed界面 备份固件的各种信息 记录MAC地址等 防止以后可能会用到 (这个breed不是专门为小米4a千兆版设计的,这里的全备没啥用,估计备份eeprom可能有点用)  
  
第六步:在breed界面用命令刷入openwrt(只能这样刷入)  
  
首先在本地搭建一个http服务,怎么搭建随便你  
我自己是用win10的hyper-v开了一个虚拟机,在虚拟机里面提供web服务  
然后把上面下载下来的固件放到web服务器的根目录  
  
然后打开telnet,进入到breed.命令是telnet 192.168.1.1  
然后依次输入命令  
wget [http://192.168.1.2/openwrt-21.02 ... shfs-sysupgrade.bin](http://192.168.1.2/openwrt-21.02.1-ramips-mt7621-xiaomi_mi-router-4a-gigabit-squashfs-sysupgrade.bin)  
#(192.168.1.2就是我提供WEB服务的虚拟机的IP)  
#下面提示下载的信息,包含大小和保存的地址  
#Length: 5768992/0x580270 (5MB) [application/octet-stream]  
#Saving to address 0x80001000  
  
flash erase 0x180000 0x600000  
#从0x180000开始擦除0x600000这么大的区域   一定要先擦除,为什么要写0x600000呢,是因为擦除的大于必须大于固件的大小,并且这个数字还有一些未知的要求,我猜测可能是某个数的整数倍,懒得测试了,直接0x600000简单省事  
#0x180000是小米路由器4a千兆版的openwrt的默认起始地址  
  
flash write 0x180000 0x80001000 0x580270  
#从0x180000这个地址写入保存在0x80001000的数据    写入的大小为0x580270  
  
boot flash 0x180000  
#从0x180000启动系统  
  
重启以后就进入了openwrt的系统了  
  
第七步:收尾  
这个breed不是本路由器专用的,默认的启动地址不是0x180000  
为了保证重启以后每次都能顺利启动系统,需要添加环境变量  
重启到breed界面,然后开启环境变量,再重启一次进breed就可以添加环境变量了  
在环境变量界面，增加autoboot.command字段，值设为boot flash 0x180000  
即可，这就是告诉breed启动系统时，从0x180000处启动  
  
至此就大工告成了,成功的刷入了openwrt的官方系统  
  
  
目前还有一个小bug  
5G的功率有问题最高只能选3db 1mw,1毫瓦,这根本就没有5G信号了,不知道怎么解决  
(我猜测可能和上面备份的eeprom有关,但是我不知道怎么弄)  
有同样刷了openwrt的,希望看看怎么解决  
  
问题解决了,在breed界面刷入备份的eeprom就可以了  
我是完全重新操作了一遍,在第六步的最后一个重启命令先不要输入,先在网页访问breed,恢复之前备份的eeprom  
然后重启就可以了,就有正常的5G了  
  
至此这个路由器完美的刷入了OPENWRT的官方固件  
  
最后补上openwrt的闪存分区情况  
root@OpenWrt:~# cat /proc/mtd  
dev:    size   erasesize  name  
mtd0: 00030000 00010000 "u-boot"  
mtd1: 00010000 00010000 "u-boot-env"  
mtd2: 00010000 00010000 "Bdata"  
mtd3: 00010000 00010000 "factory"  
mtd4: 00010000 00010000 "crash"  
mtd5: 00010000 00010000 "cfg_bak"  
mtd6: 00100000 00010000 "overlay"  
mtd7: 00e80000 00010000 "firmware"  
mtd8: 00241f43 00010000 "kernel"  
mtd9: 00c3e0bd 00010000 "rootfs"  
mtd10: 00920000 00010000 "rootfs_data"  
  
  
  
  
  
2022-08-09更新  
我刚刚把剩下的4台都刷了OP  
把教程补充了一下,备份的命令我加进去了  
同时也发现root的时候路由器必须能访问谷歌


http://192.168.1.2/openwrt-21.02.1-ramips-mt7621-xiaomi_mi-router-4a-gigabit-squashfs-sysupgrade.bin



breed> wget http://192.168.1.3/openwrt-21.02.1-ramips-mt7621-xiaomi_mi-router-4a-gigabit-squashfs-sysupgrade.bin
Connecting to 192.168.1.3:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 5767792/0x580270 (5MB) [application/octet-stream]
Saving to address 0x80001000

[========================================================================] 100%

Transmission completed in 2.7s.












## 定制完成的固件

型号:

Xiaomi Mi Router 4A Gigabit Edition

平台:

ramips/mt7621

版本:

分支: 24.10-SNAPSHOT  
内核: 6.6.73

生成日期:

2025-02-27 19:46:35

说明:

后台: 10.0.0.1  密码: root

历史版本:

[](https://dl.openwrt.ai/firmware/ramips-mt7621/xiaomi_mi-router-4a-gigabit/)





telnet 192.168.1.1

wget http://192.168.1.3/kwrt-02.28.2025-ramips-mt7621-xiaomi_mi-router-4a-gigabit-squashfs-sysupgrade.bin

> breed> wget http://192.168.1.3/kwrt-02.27.2025-ramips-mt7621-xiaomi_mi-router-4a-gigabit-squashfs-sysupgrade.bin
Connecting to 192.168.1.3:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 11797067/0xb4024b (11MB) [application/octet-stream]
Saving to address 0x80001000

[========================================================================] 100%

Transmission completed in 4.3s.

0x80001000
0xb4024b (11MB) 0xb0024b 
0xc00000(12mb)

flash erase 0x180000 0xc00000

flash write 0x180000 0x80001000 0xb4024b



boot flash 0x180000


luci-app-autotimeset luci-app-ttyd kmod-rkp-ipid iptables-mod-filter iptables-mod-ipopt iptables-mod-u32 iptables-nft kmod-ipt-ipopt ipset iptables-mod-conntrack-extra -ppp -ppp-mod-pppoe -uclient-fetch -luci-app-fan


flash erase 0x180000 0xd00000
flash write 0x180000 0x80001000 0xc0024b 


mkdir -p /tmp/introot
mkdir -p /tmp/extroot
mount --bind / /tmp/introot
mount /dev/mtdblock9 /tmp/extroot
tar -C /tmp/introot -cvf - . | tar -C /tmp/extroot -xf -
umount /tmp/introot
umount /tmp/extroot


mtd0: 00030000 00010000 "u-boot"
mtd1: 00010000 00010000 "u-boot-env"
mtd2: 00010000 00010000 "Bdata"
mtd3: 00010000 00010000 "factory"
mtd4: 00010000 00010000 "crash"
mtd5: 00010000 00010000 "cfg_bak"
mtd6: 00100000 00010000 "overlay"
mtd7: 00e80000 00010000 "firmware"
mtd8: 0033fe7d 00010000 "kernel"
mtd9: 00b40183 00010000 "rootfs"
mtd10: 00280000 00010000 "rootfs_data"



