---
title: "Navidrome TG Bot"
date: "2024-12-23"
---

## Navidrome TG Bot

一个基于 jfa-go 开发的 Navidrome 用户管理 Telegram 机器人，支持邀请码注册、用户管理等功能。

## ✨ 功能特性

- 📨 邀请码系统
- 👥 用户管理
- ⏰ 账户到期管理
- 🔔 Telegram 通知
- 🔐 权限控制
- 📊 使用统计

## 🚀 部署说明

### 环境要求

- Go 1.19+
- SQLite3
- Navidrome 实例

### 配置文件

创建 `config.yml` 文件:

```yaml
navidrome:
  db_path: "/path/to/navidrome.db" # Navidrome 数据库路径
  user_defaults:
    max_songs: 1000
    max_bit_rate: 320
    download_enabled: true
    allowed_folders: ["music"]
    default_expire_days: 30

telegram_bot:
  token: "YOUR_BOT_TOKEN" # Telegram Bot Token
  admin_ids: [123456789] # 管理员的 Telegram ID

invite_system:
  default_validity_hours: 24
  max_uses_per_invite: 5
```

## 编译部署

### 克隆项目
```
git clone https://github.com/your-username/navidrome-tg-bot
cd navidrome-tg-bot
```

### 编译
```
go build -o navidrome-tg-bot
```

### 运行
```
./navidrome-tg-bot -config /path/to/config.yml
```

### Docker 部署

#### 构建镜像

```
docker build -t navidrome-tg-bot 
```
#### 运行容器
```
docker run -d \
 -v /path/to/config.yml:/app/config.yml \
 -v /path/to/navidrome.db:/data/navidrome.db \
 navidrome-tg-bot
``` 

## 使用说明

### 管理员命令

```
/start - 启动机器人
/create_invite - 创建邀请码
/list_users - 查看用户列表
/delete_user - 删除用户
/set_expire - 设置用户过期时间
```

### 用户注册流程

- 获取邀请码
- 访问 Bot 并输入 /start
- 按提示输入邀请码
- 设置用户名和密码
- 完成注册

### 注意事项

1. 确保 Navidrome 数据库路径配置正确
   Bot Token 需要从 @BotFather 获取
   管理员 ID 需要是数字格式
   建议定期备份数据库

### 常见问题

Q: 如何获取 Telegram 用户 ID?
A: 可以通过 @userinfobot 获取
Q: 邀请码无法使用?
A: 检查邀请码是否过期或达到使用次数限制
Q: 用户注册失败?
A: 检查数据库权限和配置是否正确

### Telegram 群组
    
[加入群组]( https://t.me/navidrom_talk)

## 开源协议

本项目采用 MIT 协议开源。

## 鸣谢
[jfa-go]( https://github.com/hrfee/jfa-go)
[Navidrome]( https://github.com/navidrome/navidrome)
