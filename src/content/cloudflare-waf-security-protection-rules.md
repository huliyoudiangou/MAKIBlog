---
title: "cloudflard WAF安全防护规则"
date: "2024-10-10"
---

## 规则一：SQL 注入攻击

```
(http.request.uri.query contains "SELECT") or
(http.request.uri.query contains "union") or
(http.request.uri.query contains "concat") or
(http.request.uri.query contains "benchmark(")
```

**作用: 这段规则检测请求中的查询参数是否包含 SQL 注入攻击常见的关键字，如 `SELECT`（SQL 查询）、`union`（SQL 联合查询）、`concat`（SQL 字符串拼接）和 `benchmark(`（SQL 性能测试）。这些是典型的 SQL 注入攻击迹象。**

---

## 规则二：XSS 攻击

```
(http.request.uri.query contains "script>") or
(http.request.uri.query contains "document.cookie") or
(http.request.uri.query contains "alert(") or
(http.request.uri.query contains "onerror()")
```

**作用: 这段规则检查查询字符串是否包含与 XSS（跨站脚本攻击）相关的关键字，如 `<script>`、`document.cookie`（读取 Cookie）、`alert(`（触发浏览器警告框）和 `onerror()`（可能用于触发错误并执行恶意脚本）。这些是常见的恶意脚本注入的特征。**

---

## 规则三：目录遍历攻击

```
(http.request.uri.query contains "/etc/passwd") or
(http.request.uri.query contains "../../") or
(http.request.uri.query contains "/proc/self/environ")
```

**作用: 这段规则检查请求参数中是否包含文件路径或目录遍历攻击的标志，如 `/etc/passwd`（Linux 系统文件路径）、`../../`（路径遍历攻击）和 `/proc/self/environ`（读取进程环境变量）。这些可能是黑客试图访问系统文件或进行信息泄露攻击。**

---

## 规则四：命令执行攻击

```
(http.request.uri.query contains "curl") or
(http.request.uri.query contains "ping") or
(http.request.uri.query contains "wget") or
(http.request.uri.query contains "&&") or
(http.request.uri.query contains "||")
```

**作用: 这段规则检测请求中是否包含命令执行的标志，如 `curl`（命令行工具，用于下载数据）、`ping`（网络测试工具）、`wget`（命令行下载工具）以及 shell 中的逻辑运算符 `&&` 和 `||`，这些都是用于执行恶意命令或进行远程命令注入的常见方法。**

---

## 规则五：信息泄露攻击

```
(http.request.uri.query contains "%0d%0a") or
(http.request.uri.query contains "phpinfo()") or
(http.request.uri.query contains "whoami")
```

**作用: 这段规则检查请求中是否包含 HTTP 请求头中的回车换行符 `%0d%0a`（可能用于 HTTP 头注入攻击）、`phpinfo()`（用于泄露 PHP 环境配置信息）和 `whoami`（命令行命令，用于显示当前用户），这些都可能用于信息泄露或远程命令执行。**

---

## 综合规则

```
(http.request.uri.query contains "SELECT") or
(http.request.uri.query contains "union") or
(http.request.uri.query contains "concat") or
(http.request.uri.query contains "benchmark(") or
(http.request.uri.query contains "script>") or
(http.request.uri.query contains "document.cookie") or
(http.request.uri.query contains "alert(") or
(http.request.uri.query contains "onerror()") or
(http.request.uri.query contains "/etc/passwd") or
(http.request.uri.query contains "../../") or
(http.request.uri.query contains "/proc/self/environ") or
(http.request.uri.query contains "curl") or
(http.request.uri.query contains "ping") or
(http.request.uri.query contains "wget") or
(http.request.uri.query contains "&&") or
(http.request.uri.query contains "||") or
(http.request.uri.query contains "%0d%0a") or
(http.request.uri.query contains "phpinfo()") or
(http.request.uri.query contains "whoami")
```

**作用: 这段规则综合了上述所有规则，综合检测和阻止以下类型的恶意请求：**

- SQL 注入攻击（如使用 `SELECT`, `union`, `concat` 等关键字）。
- XSS 攻击（如包含 `<script>`, `document.cookie` 等）。
- 文件路径遍历或敏感文件访问（如 `/etc/passwd`, `../../`）。
- 命令注入攻击（如使用 `curl`, `ping`, `wget`, `&&` 和 `||`）。
- 信息泄露或远程命令执行（如 `%0d%0a`, `phpinfo()`, `whoami` 等）。
