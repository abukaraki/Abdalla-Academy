# Abdalla Academy Content Guide

هذا الموقع جاهز من ناحية التصميم والصفحات العامة. بعد الآن أغلب العمل يكون بإضافة محتوى جديد داخل `assets/content.js`.

## طريقة إضافة أي محتوى

1. اختر قالبا من مجلد `content-templates`.
2. انسخ القالب وضعه داخل مصفوفة `window.SITE_CONTENT.items` في `assets/content.js`.
3. غيّر `id`, `title`, `summary`, `body`, والملفات المرتبطة.
4. شغّل فحص المحتوى:

```powershell
node tools/validate-content.mjs
```

5. حدّث sitemap:

```powershell
node tools/generate-sitemap.mjs
```

6. ارفع التعديل إلى GitHub ثم Cloudflare سيعيد النشر.

## القوالب الجاهزة

- `content-templates/course.js`: دورة كاملة مع playlist.
- `content-templates/article.js`: مقال أو صفحة تعليمية.
- `content-templates/lecture-video.js`: محاضرة فيديو.
- `content-templates/material.js`: ملف PDF أو مادة قابلة للتحميل.
- `content-templates/software-guide.js`: شرح برنامج أو أداة.

## أنواع المحتوى

- `course`: يظهر في صفحة الدورات.
- `software`: يظهر في صفحة البرامج.
- `lectures`: يظهر في صفحة المحاضرات والفيديو.
- `programming`: يظهر في صفحة البرمجة.
- `articles`: يظهر في صفحة المقالات.
- `blog`: يظهر في المدونة.
- `materials`: يظهر في المواد.

## قواعد مهمة

- `id` يجب أن يحتوي أحرف إنجليزية صغيرة وأرقام وشرطات فقط مثل `course-html-basics`.
- كل عنوان ووصف يجب أن يحتوي `ar` و `en`.
- الصور توضع غالبا داخل `assets/images/`.
- الفيديوهات توضع داخل `media/videos/`.
- الملفات توضع داخل `media/materials/`.
- لا تضف كلاما مؤقتا أو ملاحظات داخل صفحات الموقع؛ أي ملاحظة داخلية تبقى هنا في الدليل فقط.

## قبل النشر

شغّل هذين الأمرين دائما:

```powershell
node tools/validate-content.mjs
node tools/generate-sitemap.mjs
```

إذا ظهر خطأ، أصلحه قبل الرفع. إذا نجح الفحص، الموقع جاهز لاستقبال المحتوى الجديد بدون تعديل التصميم.
