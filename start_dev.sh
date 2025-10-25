#!/bin/bash

echo "🌐 启动Jekyll本地开发服务器..."
echo "📍 访问地址: http://localhost:4000"
echo "🔄 文件变化会自动重新加载"
echo "⏹️  按 Ctrl+C 停止服务器"
echo ""

# 启动Jekyll服务器
bundle exec jekyll serve --host 0.0.0.0 --port 4000 --livereload --incremental