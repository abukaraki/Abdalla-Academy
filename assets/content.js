window.SITE_CONTENT = {
  items: [
    {
      id: "php-xampp-install-windows",
      type: "software",
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
      id: "phpmyadmin-graphical-interface",
      type: "software",
      date: "2026-05-23",
      duration: "18 min",
      level: "PHP Basics",
      course: {
        ar: "دورة PHP",
        en: "PHP Course"
      },
      title: {
        ar: "شرح واجهة phpMyAdmin الرسومية",
        en: "Understanding the phpMyAdmin Graphical Interface"
      },
      summary: {
        ar: "درس يشرح أهم أجزاء واجهة phpMyAdmin: الشريط الجانبي، قواعد البيانات، الجداول، التصفح، SQL، الاستيراد، التصدير، وإدارة المستخدمين.",
        en: "A lesson explaining the main parts of the phpMyAdmin interface: sidebar, databases, tables, Browse, SQL, Import, Export, and user management."
      },
      mediaType: "article",
      category: "software",
      tags: ["software", "phpmyadmin", "php", "mysql", "mariadb"],
      icon: "assets/images/phpmyadmin/phpmyadmin-login.png",
      thumbnail: "assets/images/phpmyadmin/phpmyadmin-dashboard.png",
      sourceUrl: "https://www.phpmyadmin.net/docs/",
      images: [
        {
          src: "assets/images/phpmyadmin/phpmyadmin-login.png",
          caption: {
            ar: "شاشة الدخول في phpMyAdmin.",
            en: "The phpMyAdmin login screen."
          },
          annotations: [
            {
              x: 7,
              y: 37,
              w: 52,
              h: 18,
              label: {
                ar: "اختيار اللغة: يستخدم لتغيير لغة الواجهة قبل تسجيل الدخول.",
                en: "Language selector: changes the interface language before login."
              }
            },
            {
              x: 43,
              y: 65,
              w: 45,
              h: 8,
              label: {
                ar: "اسم المستخدم: يكتب هنا اسم مستخدم قاعدة البيانات مثل root في بيئة التدريب المحلية.",
                en: "Username field: enter the database username, such as root in a local training environment."
              }
            },
            {
              x: 43,
              y: 76,
              w: 45,
              h: 8,
              label: {
                ar: "كلمة المرور: تستخدم لحماية الوصول إلى قواعد البيانات.",
                en: "Password field: protects access to the databases."
              }
            },
            {
              x: 81,
              y: 89,
              w: 10,
              h: 7,
              label: {
                ar: "زر الدخول: يرسل بيانات المستخدم ويفتح لوحة التحكم عند نجاح المصادقة.",
                en: "Login button: submits the credentials and opens the dashboard when authentication succeeds."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-dashboard.png",
          caption: {
            ar: "لوحة phpMyAdmin الرئيسية بعد الدخول.",
            en: "The main phpMyAdmin dashboard after login."
          },
          annotations: [
            {
              x: 1,
              y: 12,
              w: 20,
              h: 8,
              label: {
                ar: "شعار phpMyAdmin وأزرار الوصول السريع مثل الصفحة الرئيسية والإعدادات.",
                en: "phpMyAdmin logo and quick actions such as home and settings."
              }
            },
            {
              x: 1,
              y: 26,
              w: 18,
              h: 21,
              label: {
                ar: "الشريط الجانبي: يعرض قواعد البيانات والجداول للتنقل السريع.",
                en: "Sidebar: lists databases and tables for quick navigation."
              }
            },
            {
              x: 21,
              y: 15,
              w: 77,
              h: 5,
              label: {
                ar: "شريط التبويبات الرئيسي: Databases وSQL وExport وImport وغيرها.",
                en: "Main tabs bar: Databases, SQL, Export, Import, and other tools."
              }
            },
            {
              x: 23,
              y: 23,
              w: 42,
              h: 25,
              label: {
                ar: "الإعدادات العامة: تغيير كلمة المرور، الترميز، وبعض خيارات الخادم.",
                en: "General settings: password, collation, and server options."
              }
            },
            {
              x: 67,
              y: 23,
              w: 30,
              h: 35,
              label: {
                ar: "معلومات خادم قاعدة البيانات: نوع الخادم، النسخة، المستخدم، والترميز.",
                en: "Database server information: server type, version, user, and charset."
              }
            },
            {
              x: 22,
              y: 98,
              w: 6,
              h: 2,
              label: {
                ar: "Console: نافذة سريعة لكتابة أوامر SQL ومراجعة الأوامر.",
                en: "Console: a quick panel for SQL commands and command review."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-table-structure.jpg",
          caption: {
            ar: "واجهة بنية الجدول داخل phpMyAdmin.",
            en: "The table structure view inside phpMyAdmin."
          },
          annotations: [
            {
              x: 0,
              y: 0,
              w: 21,
              h: 48,
              label: {
                ar: "شجرة قواعد البيانات: تعرض قواعد البيانات والجداول مثل world وCity وCountry.",
                en: "Database tree: shows databases and tables such as world, City, and Country."
              }
            },
            {
              x: 23,
              y: 2,
              w: 74,
              h: 6,
              label: {
                ar: "تبويبات الجدول: Browse وStructure وSQL وSearch وInsert وغيرها.",
                en: "Table tabs: Browse, Structure, SQL, Search, Insert, and more."
              }
            },
            {
              x: 23,
              y: 8,
              w: 74,
              h: 18,
              label: {
                ar: "بنية الأعمدة: أسماء الحقول، نوع البيانات، Null، المفاتيح، والقيم الافتراضية.",
                en: "Column structure: fields, data types, Null, keys, and default values."
              }
            },
            {
              x: 75,
              y: 8,
              w: 22,
              h: 18,
              label: {
                ar: "عمود العمليات: تعديل الحقل أو حذفه أو إضافة فهرس عليه.",
                en: "Actions column: change, drop, or index a field."
              }
            },
            {
              x: 22,
              y: 33,
              w: 38,
              h: 24,
              label: {
                ar: "معلومات الجدول: حجم البيانات، عدد الصفوف، والترميز.",
                en: "Table information: data size, row count, and collation."
              }
            }
          ]
        }
      ],
      body: {
        ar: [
          "phpMyAdmin أداة رسومية تعمل من خلال المتصفح لإدارة قواعد بيانات MySQL أو MariaDB. بدلا من كتابة كل الأوامر يدويا داخل الطرفية، توفر الواجهة أزرارا وتبويبات تساعدك على إنشاء قواعد البيانات، إنشاء الجداول، عرض البيانات، تعديل الصفوف، تنفيذ أوامر SQL، واستيراد أو تصدير الملفات.",
          "عند فتح phpMyAdmin من خلال الرابط localhost/phpmyadmin تظهر الواجهة عادة مقسومة إلى منطقتين رئيسيتين. في الجهة الجانبية تظهر قائمة قواعد البيانات، وفي المساحة الرئيسية تظهر تفاصيل العنصر الذي تختاره. هذا التقسيم مهم لأنه يساعدك على التنقل بين قاعدة البيانات والجداول والعمليات بسرعة.",
          "الشريط الجانبي يعرض أسماء قواعد البيانات المتاحة. عند الضغط على اسم قاعدة بيانات تظهر الجداول الموجودة داخلها. إذا كنت تعمل على مشروع PHP، فغالبا ستنشئ قاعدة بيانات خاصة بالمشروع ثم تضيف داخلها جداول مثل users أو products أو orders حسب طبيعة التطبيق.",
          "تبويب Browse يستخدم لعرض الصفوف الموجودة داخل الجدول. من خلاله يمكن رؤية البيانات كما لو كانت في جدول منظم، مع أزرار للتعديل والحذف والنسخ. هذا التبويب مفيد جدا أثناء التعلم لأنه يوضح أثر الكود مباشرة بعد عمليات الإدخال أو التحديث.",
          "تبويب Structure يعرض بنية الجدول: أسماء الأعمدة، أنواع البيانات، المفاتيح، الفهارس، والقيم الافتراضية. فهم هذا التبويب مهم قبل كتابة كود PHP، لأن الخطأ في نوع العمود أو المفتاح الأساسي قد يسبب مشاكل عند حفظ البيانات أو البحث عنها.",
          "تبويب SQL يسمح بتنفيذ أوامر SQL مباشرة. يمكنك كتابة أمر مثل SELECT لقراءة البيانات أو INSERT لإضافة صف جديد أو UPDATE لتعديل بيانات. حتى مع وجود واجهة رسومية، تعلم SQL يبقى ضروريا لأن الواجهة في النهاية تنفذ أوامر قاعدة البيانات.",
          "تبويب Import يستخدم لإدخال قاعدة بيانات أو جدول من ملف خارجي مثل .sql. هذا مفيد عند نقل مشروع من جهاز إلى آخر أو عند استلام قاعدة بيانات جاهزة للتدريب. قبل الاستيراد، تأكد أن الملف من مصدر موثوق وأن قاعدة البيانات المناسبة محددة.",
          "تبويب Export يستخدم لاستخراج نسخة من قاعدة البيانات أو الجداول. في المشاريع التعليمية، التصدير يساعدك على حفظ نسخة احتياطية قبل التجربة أو قبل تعديل كبير. غالبا يكون تنسيق SQL هو الخيار المناسب لأنه يحفظ بنية الجداول والبيانات.",
          "من أفضل الممارسات داخل phpMyAdmin أن تسمي قواعد البيانات والجداول بأسماء واضحة، وأن تستخدم مفاتيح أساسية مثل id، وأن تتجنب تعديل بيانات مهمة بدون نسخة احتياطية. الواجهة الرسومية تجعل العمل أسهل، لكنها لا تعني أن العمليات بلا تأثير؛ حذف جدول أو قاعدة بيانات قد يزيل البيانات نهائيا."
        ],
        en: [
          "phpMyAdmin is a browser-based graphical tool for managing MySQL or MariaDB databases. Instead of typing every command manually in a terminal, the interface gives you buttons and tabs for creating databases, creating tables, viewing data, editing rows, running SQL commands, and importing or exporting files.",
          "When you open phpMyAdmin through localhost/phpmyadmin, the interface is usually divided into two main areas. The sidebar displays the available databases, while the main workspace shows details for the selected item. This layout helps you move quickly between databases, tables, and operations.",
          "The sidebar lists the available database names. When you select a database, the tables inside it appear. In a PHP project, you will usually create one database for the project, then add tables such as users, products, or orders depending on the application.",
          "The Browse tab is used to view the rows stored inside a table. It shows data in a structured table view, with actions for editing, deleting, and copying rows. This tab is especially useful while learning because it shows the result of insert or update operations immediately.",
          "The Structure tab displays the table design: column names, data types, keys, indexes, and default values. Understanding this tab is important before writing PHP code, because a wrong column type or primary key can cause problems when saving or searching data.",
          "The SQL tab allows you to run SQL statements directly. You can write a SELECT statement to read data, INSERT to add a new row, or UPDATE to modify existing data. Even with a graphical interface, learning SQL remains important because the interface ultimately works through database commands.",
          "The Import tab is used to load a database or table from an external file such as a .sql file. This is useful when moving a project between computers or when receiving a ready database for practice. Before importing, make sure the file comes from a trusted source and the correct database is selected.",
          "The Export tab creates a copy of a database or selected tables. In educational projects, exporting is useful for backups before experiments or major changes. The SQL format is usually the best choice because it preserves both table structure and data.",
          "Good practice in phpMyAdmin includes using clear names for databases and tables, defining primary keys such as id, and avoiding major changes without a backup. The graphical interface makes database work easier, but the operations are still real; deleting a table or database can permanently remove data."
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
