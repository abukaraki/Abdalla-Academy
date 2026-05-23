window.SITE_CONTENT = {
  items: [
    {
      id: "php-xampp-install-windows",
      type: "lectures",
      date: "2026-05-23",
      duration: "15 min",
      level: "PHP Basics",
      course: {
        ar: "دورة PHP",
        en: "PHP Course"
      },
      title: {
        ar: "تنزيل وتثبيت XAMPP على ويندوز",
        en: "Download and Install XAMPP on Windows"
      },
      summary: {
        ar: "درس عملي يشرح من أين نحمل XAMPP، وكيف نثبت البيئة المحلية لتشغيل PHP وApache وMariaDB.",
        en: "A practical lesson showing where to download XAMPP and how to set up a local PHP, Apache, and MariaDB environment."
      },
      mediaType: "article",
      category: "software",
      tags: ["software", "xampp", "php", "windows"],
      icon: "assets/images/xampp/xampp-logo.png",
      thumbnail: "assets/images/xampp/xampp-setup-welcome.webp",
      sourceUrl: "https://www.apachefriends.org/download.html",
      downloadUrl: "https://www.apachefriends.org/download.html",
      images: [
        {
          src: "assets/images/xampp/xampp-setup-welcome.webp",
          caption: {
            ar: "الخطوة الأولى: تشغيل ملف التثبيت الرسمي وظهور نافذة Setup - XAMPP.",
            en: "Step 1: Run the official installer and open the Setup - XAMPP window."
          }
        },
        {
          src: "assets/images/xampp/xampp-components.png",
          caption: {
            ar: "الخطوة الثانية: اختيار المكونات الأساسية أثناء التثبيت.",
            en: "Step 2: Select the essential components during installation."
          }
        },
        {
          src: "assets/images/xampp/xampp-installing.jpg",
          caption: {
            ar: "الخطوة الثالثة: انتظار انتهاء نسخ الملفات وتثبيت مكونات XAMPP.",
            en: "Step 3: Wait while the installer copies files and installs XAMPP components."
          }
        },
        {
          src: "assets/images/xampp/xampp-control-panel.webp",
          caption: {
            ar: "الخطوة الرابعة: تشغيل Apache وMySQL من لوحة تحكم XAMPP.",
            en: "Step 4: Start Apache and MySQL from the XAMPP Control Panel."
          }
        }
      ],
      body: {
        ar: [
          "XAMPP هو حزمة تطوير محلية تجمع أهم الأدوات التي يحتاجها المتعلم لتشغيل PHP على جهازه. الفكرة العلمية وراءه بسيطة: نحتاج إلى خادم ويب يستقبل الطلبات، ومفسر PHP ينفذ الملفات، وقاعدة بيانات نخزن فيها البيانات. في XAMPP يقوم Apache بدور خادم الويب، وتقوم PHP بتنفيذ الكود، وتوفر MariaDB قاعدة البيانات، بينما يساعد phpMyAdmin على إدارتها من المتصفح.",
          "ابدأ دائما من الموقع الرسمي Apache Friends. تحميل البرامج من مصدرها الرسمي يقلل خطر الملفات المعدلة أو الإصدارات غير الموثوقة. افتح صفحة التحميل، ثم اختر نسخة Windows المناسبة. لا تحتاج في البداية إلى البحث عن إعدادات متقدمة؛ الهدف هنا هو تجهيز بيئة تعلم مستقرة.",
          "بعد تنزيل ملف التثبيت، شغله بالطريقة المعتادة. إذا ظهرت رسالة من Windows User Account Control فاقرأها وتأكد أن الملف من المصدر الرسمي قبل المتابعة. أثناء اختيار المكونات، يكفي للبدء تحديد Apache وPHP وMariaDB وphpMyAdmin. هذه المكونات تغطي أغلب دروس PHP الأساسية.",
          "يفضل تثبيت XAMPP في مسار بسيط مثل C:\\xampp بدلا من مسار طويل داخل Program Files، لأن بعض أنظمة ويندوز قد تفرض قيود صلاحيات على مجلدات البرامج. بعد انتهاء التثبيت افتح XAMPP Control Panel، ثم اضغط Start أمام Apache وMySQL.",
          "للتأكد من نجاح التثبيت، افتح المتصفح واكتب localhost. إذا ظهرت صفحة XAMPP فهذا يعني أن Apache يعمل. بعد ذلك يمكن تجربة phpMyAdmin عبر localhost/phpmyadmin للتأكد من عمل قاعدة البيانات. إذا لم يعمل Apache غالبا يوجد برنامج آخر يستخدم المنفذ 80 مثل IIS أو Skype أو خدمة ويب أخرى."
        ],
        en: [
          "XAMPP is a local development package that brings together the main tools needed to run PHP on your computer. The technical idea is simple: a web server receives browser requests, PHP executes server-side files, and a database stores application data. In XAMPP, Apache acts as the web server, PHP runs the code, MariaDB provides the database, and phpMyAdmin helps manage it from the browser.",
          "Always start from the official Apache Friends website. Downloading software from the official source reduces the risk of modified files or untrusted versions. Open the download page and choose the Windows version. At the beginning, you do not need advanced settings; the goal is to prepare a stable learning environment.",
          "After downloading the installer, run it normally. If Windows User Account Control appears, read it and confirm that the installer came from the official source before continuing. During component selection, the essentials for learning PHP are Apache, PHP, MariaDB, and phpMyAdmin. These components cover most beginner PHP lessons.",
          "It is usually better to install XAMPP in a simple path such as C:\\xampp rather than inside Program Files, because Windows can apply stricter permissions to program folders. After installation, open the XAMPP Control Panel and click Start next to Apache and MySQL.",
          "To verify the installation, open your browser and visit localhost. If the XAMPP page appears, Apache is running. You can then open localhost/phpmyadmin to confirm that the database tools work. If Apache does not start, another program may already be using port 80, such as IIS, Skype, or another local web service."
        ]
      }
    },
    {
      id: "intro-web-platform",
      type: "lectures",
      date: "2026-05-23",
      duration: "12 min",
      level: "Beginner",
      title: {
        ar: "مقدمة: كيف تعمل المنصات التعليمية على الويب؟",
        en: "Introduction: How Educational Web Platforms Work"
      },
      summary: {
        ar: "شرح مبسط لفكرة الصفحات التعليمية، الروابط العامة، وتنظيم المحتوى بطريقة سهلة للزوار.",
        en: "A simple explanation of educational pages, public links, and organizing content in a visitor-friendly way."
      },
      mediaType: "video",
      video: "",
      body: {
        ar: [
          "في هذه المحاضرة نتعرف على الفرق بين الموقع الثابت والتطبيق الذي يحتاج إلى خادم.",
          "الفكرة الأساسية أن المنصة التعليمية تحتاج صفحات واضحة وروابط مفهومة ومحتوى منظما.",
          "هذا الأسلوب مناسب لمنصة تعليمية مفتوحة لا تحتاج تسجيل دخول أو لوحة تحكم خاصة."
        ],
        en: [
          "In this lecture, we explain the difference between a static website and a server-backed application.",
          "An educational platform needs clear pages, understandable links, and organized content.",
          "This approach is suitable for an open educational platform that does not require login or a private dashboard."
        ]
      }
    },
    {
      id: "html-roadmap",
      type: "programming",
      date: "2026-05-23",
      duration: "20 min",
      level: "Beginner",
      title: {
        ar: "خطة تعلم HTML للمبتدئين",
        en: "HTML Learning Roadmap for Beginners"
      },
      summary: {
        ar: "مسار عملي يبدأ من بنية الصفحة، ثم العناوين، الروابط، الصور، النماذج، ومعايير الوصول.",
        en: "A practical roadmap covering page structure, headings, links, images, forms, and accessibility basics."
      },
      mediaType: "article",
      body: {
        ar: [
          "ابدأ بفهم هيكل الصفحة: doctype، عنصر html، الرأس head، وجسم الصفحة body.",
          "بعد ذلك تعلم العناوين والفقرات والقوائم والروابط لأنها تشكل أساس المحتوى المقروء.",
          "لا تؤجل الوصول accessibility؛ استخدام عناصر صحيحة يجعل الصفحة أوضح للزوار ومحركات البحث."
        ],
        en: [
          "Start by understanding the page structure: doctype, html, head, and body.",
          "Then learn headings, paragraphs, lists, and links because they form the foundation of readable content.",
          "Do not postpone accessibility; semantic elements make the page clearer for visitors and search engines."
        ]
      }
    },
    {
      id: "adsense-educational-site",
      type: "articles",
      date: "2026-05-23",
      duration: "6 min read",
      level: "Guide",
      title: {
        ar: "كيف تجعل المنصة التعليمية أكثر جودة وثقة",
        en: "How to Make an Educational Platform Clear and Trustworthy"
      },
      summary: {
        ar: "أهم العناصر: محتوى أصلي، صفحات قانونية واضحة، تنقل مفهوم، وتجربة قراءة مريحة.",
        en: "The essentials: original content, clear legal pages, understandable navigation, and a comfortable reading experience."
      },
      mediaType: "article",
      body: {
        ar: [
          "الموقع التعليمي يحتاج إلى قيمة واضحة قبل الإعلانات: دروس، مقالات، مواد، وصفحات تعريفية.",
          "تجنب الصفحات الفارغة أو المحتوى المنسوخ أو العناوين التي تعد بشيء ولا تقدمه.",
          "سياسة الخصوصية وصفحة التواصل ليست زينة؛ هي جزء من ثقة الزائر ومراجعة المنصة."
        ],
        en: [
          "An educational website needs clear value before ads: lessons, articles, materials, and identity pages.",
          "Avoid empty pages, copied content, or titles that promise something the page does not deliver.",
          "The privacy policy and contact page are not decorative; they help visitor trust and platform review."
        ]
      }
    },
    {
      id: "weekly-learning-note",
      type: "blog",
      date: "2026-05-23",
      duration: "3 min read",
      level: "Note",
      title: {
        ar: "ملاحظة أسبوعية: التعلم يحتاج إلى نظام بسيط",
        en: "Weekly Note: Learning Needs a Simple System"
      },
      summary: {
        ar: "كيف تساعدك الملاحظات الصغيرة على بناء محتوى تعليمي مستمر بدون ضغط.",
        en: "How small notes help you build continuous educational content without pressure."
      },
      mediaType: "article",
      body: {
        ar: [
          "أفضل طريقة للاستمرار هي كتابة ملاحظات قصيرة بعد كل تجربة تعلم.",
          "بعد أيام قليلة، تتحول هذه الملاحظات إلى مقال أو درس أو مادة قابلة للمشاركة.",
          "المهم أن يكون المحتوى مفيدا ومفهوما، وليس طويلا فقط."
        ],
        en: [
          "The best way to stay consistent is to write short notes after every learning experience.",
          "After a few days, these notes can become an article, lesson, or shareable resource.",
          "What matters is that the content is useful and understandable, not merely long."
        ]
      }
    },
    {
      id: "website-checklist",
      type: "materials",
      date: "2026-05-23",
      duration: "PDF",
      level: "Checklist",
      title: {
        ar: "قائمة فحص قبل نشر موقع تعليمي",
        en: "Educational Website Publishing Checklist"
      },
      summary: {
        ar: "قائمة تساعدك على التأكد من الروابط، الصفحات القانونية، المحتوى الأصلي، وتجربة الهاتف.",
        en: "A checklist for links, legal pages, original content, and mobile experience before publishing."
      },
      mediaType: "download",
      file: "",
      body: {
        ar: [
          "استخدم هذه القائمة قبل نشر أي تحديث كبير.",
          "تأكد من أن كل صفحة لها عنوان ووصف وروابط واضحة.",
          "استخدم ملفا واضح الاسم ووصفا مفيدا حتى يعرف الزائر فائدة المادة قبل فتحها."
        ],
        en: [
          "Use this checklist before publishing any major update.",
          "Make sure every page has a title, description, and clear links.",
          "Replace the demo file with the real PDF when uploading materials."
        ]
      }
    }
  ]
};
