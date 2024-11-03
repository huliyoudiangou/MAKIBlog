---
title: "十分钟搭建自托管无数据库的在线笔记应用 - flatnotes"
date: "2024-10-09"
---

# flatnotes 的介绍

flatnotes 旨在成为一款无干扰的笔记应用，它将笔记内容放在首位。这意味着：

- 干净、简单的用户界面。
- 没有文件夹、笔记本或类似的东西。只有您的所有笔记，并有强大的搜索和标记功能。
- 从应用程序中的任何位置快速访问全文搜索（键盘快捷键"/"）。

另一个关键的设计原则是不要将你的笔记作为人质。你的笔记只是 Markdown 文件。没有数据库、专有格式、复杂的文件夹结构或诸如此类的东西。你可以随时将文件移动到其他地方并使用其他应用程序。

同样，flatnotes 缓存的唯一内容是搜索索引，并且每次搜索时（以及 flatnotes 首次启动时）都会增量同步。这意味着，即使 flatnotes 正在运行，您也可以自由地在 flatnotes 之外添加、编辑和删除 markdown 文件。

# flatnotes 的特点

- 移动响应式网络界面。
- 原始/所见即所得 (WYSIWYG) Markdown 编辑器模式。
- 高级搜索功能。
- 注意"标记"功能。
- Wikilink 支持轻松链接到其他注释（[My Other Note](/note/My%20Other%20Note)）。
- 明暗主题。
- 多种身份验证选项（无、只读、用户名/密码、2FA）。
- Restful API

# 成品展示

![flatnotes界面1](https://webp.makifx.com/202409162304042.webp)
![flatnotes界面2](https://webp.makifx.com/202409162301344.webp)

# 快速安装和使用 flatnotes

## 使用 docker-compose 运行 flatnotes

### 创建运行目录和配置文件：

```
sudo -i
mkdir -p /root/data/docker_data/flatnotes
cd /root/data/docker_data/flatnotes
nano docker-compose.yml
```

### 配置文件 docker-compose.yml

```
version: "3"
services:
flatnotes:
container_name: flatnotes # 容器名称，可自行更改
image: dullage/flatnotes:latest # 使用的镜像版本，"latest"为最新版本，也可指定具体版本
environment:
PUID: 1000 # 用户ID，可以根据需要修改为宿主机的用户ID
PGID: 1000 # 用户组ID，可以根据需要修改为宿主机的用户组ID
FLATNOTES_AUTH_TYPE: "password" # 认证类型，"password"表示使用密码认证
FLATNOTES_USERNAME: "user" # 用户名，可自定义
FLATNOTES_PASSWORD: "changeMe!" # 密码，建议更改为强密码
FLATNOTES_SECRET_KEY: "aLongRandomSeriesOfCharacters" # 用于安全的密钥，建议修改为随机字符
volumes:
"./data:/data" # 数据卷映射，左侧为宿主机路径，右侧为容器内路径，可自定义宿主机路径
ports:
"8060:8080" # 映射端口，左侧为宿主机端口，右侧为容器内服务端口，可根据需要修改宿主机端口
restart: unless-stopped # 重启策略，除非手动停止，否则将始终重启容器
```

### 启动容器

```
docker-compose up -d
```

然后我们就可以输入 [http://ip:8060](http://ip:8060) 进行访问了。

## 配置域名访问

为了省事依旧采用 科技 Lion 大佬的聚合脚本进行反向代理

```
curl -sS -O https://raw.githubusercontent.com/kejilion/sh/main/kejilion.sh && chmod +x kejilion.sh && ./kejilion.sh
```

脚本介绍与界面展示：[点击直达](https://makifx.com/346.html)

此脚本目前聚合了众多实用功能，很多程序仅需一键即可部署，调取命令仅需一个 k
![脚本界面](https://webp.makifx.com/202408201029745.webp)

如果您是第一次运行此脚本，请先输入 1 安装环境（比较推荐，对于后续还想使用此脚本安装自带程序来说，很有必要），安装完成后，回到此界面再输入 23
如果您只想反向代理，请先输入 21 安装完成后，回到此界面再输入 23
如果您已经安装过此脚本，请直接进入此界面输 23
![脚本选项](https://webp.makifx.com/202408201030191.webp)
将已经解析好的域名、IP、端口信息填写完毕，直接回车
![配置反向代理](https://webp.makifx.com/202409162240878.webp)
等代码跑完，证书就会自动申请完毕，并且会自动续期，直接使用 HTTPS 访问域名即可。

# 卸载 flatnotes

```
cd /root/data/docker_data/flatnotes
docker compose down
cd ..
rm -rf /root/data/docker_data/flatnotes ## 完全删除
```
