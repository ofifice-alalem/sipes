# إعدادات الاستضافة لموقع سايبس ليبيا

## متطلبات الخادم

### الحد الأدنى:
- PHP 7.4+ (اختياري)
- Apache 2.4+ أو Nginx 1.18+
- MySQL 5.7+ (للميزات المستقبلية)
- SSL Certificate
- مساحة: 500 MB
- RAM: 512 MB
- عرض النطاق: 10 GB/شهر

### الموصى به:
- PHP 8.1+
- Apache 2.4+ مع mod_rewrite
- MySQL 8.0+
- SSD Storage
- مساحة: 2 GB
- RAM: 1 GB
- عرض النطاق: 50 GB/شهر

## إعدادات Apache (.htaccess)

الملف موجود بالفعل ويتضمن:
- ضغط Gzip
- تخزين مؤقت للمتصفح
- رؤوس الأمان
- إعادة توجيه HTTPS
- صفحات الأخطاء المخصصة

## إعدادات Nginx (nginx.conf)

```nginx
server {
    listen 80;
    server_name sipes.ly www.sipes.ly;
    return 301 https://sipes.ly$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.sipes.ly;
    return 301 https://sipes.ly$request_uri;
}

server {
    listen 443 ssl http2;
    server_name sipes.ly;
    
    root /var/www/sipes.ly;
    index index.html;
    
    # SSL Configuration
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    
    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss;
    
    # Cache Control
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Main location
    location / {
        try_files $uri $uri/ =404;
    }
    
    # Error pages
    error_page 404 /404.html;
    error_page 500 502 503 504 /500.html;
}
```

## قائمة مراجعة ما قبل النشر

### 1. الملفات المطلوبة ✓
- [x] index.html
- [x] style.css
- [x] script.js
- [x] animations.js
- [x] manifest.json
- [x] sitemap.xml
- [x] robots.txt
- [x] .htaccess
- [x] 404.html
- [x] performance.css
- [x] sipes-logo.png
- [x] مجلد img/ مع جميع الصور

### 2. إعدادات SEO ✓
- [x] Meta tags محسنة
- [x] Structured data (JSON-LD)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Canonical URL
- [x] Sitemap.xml
- [x] Robots.txt

### 3. الأداء والأمان ✓
- [x] ضغط Gzip
- [x] تخزين مؤقت للمتصفح
- [x] رؤوس الأمان
- [x] صفحات أخطاء مخصصة
- [x] تحسين الصور

### 4. بعد النشر
- [ ] تفعيل SSL Certificate
- [ ] إعداد Google Search Console
- [ ] إعداد Google Analytics
- [ ] اختبار سرعة الموقع
- [ ] اختبار على الأجهزة المختلفة
- [ ] إرسال sitemap إلى Google

## خطوات النشر السريع

### 1. رفع الملفات عبر FTP/SFTP
```bash
# استخدم FileZilla أو WinSCP
Host: ftp.yourdomain.com
Username: your_username
Password: your_password
Port: 21 (FTP) أو 22 (SFTP)
```

### 2. رفع الملفات عبر cPanel File Manager
1. ادخل إلى cPanel
2. افتح File Manager
3. اذهب إلى مجلد public_html
4. ارفع جميع الملفات
5. استخرج الملفات المضغوطة إن وجدت

### 3. التحقق من النشر
- تصفح الموقع: https://yourdomain.com
- اختبر جميع الروابط
- تأكد من عمل النماذج
- اختبر على الهاتف المحمول

## استضافات موصى بها للسوق الليبي

### 1. Hostinger (الأفضل للمبتدئين)
- السعر: $2.99/شهر
- مساحة: 100 GB SSD
- عرض النطاق: غير محدود
- SSL مجاني
- دعم عربي

### 2. SiteGround (الأفضل للأداء)
- السعر: $6.99/شهر
- مساحة: 10 GB SSD
- عرض النطاق: 10,000 زيارة/شهر
- SSL مجاني
- دعم ممتاز

### 3. Bluehost (الأفضل للووردبريس)
- السعر: $4.95/شهر
- مساحة: 50 GB SSD
- عرض النطاق: غير محدود
- SSL مجاني
- سهولة الاستخدام

## الدعم الفني

للحصول على المساعدة:
- البريد الإلكتروني: info.libya@sipes.net
- الهاتف: +218-92-5930003