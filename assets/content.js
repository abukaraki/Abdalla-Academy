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
            ar: "اختيار لغة واجهة phpMyAdmin قبل الدخول.",
            en: "Selecting the phpMyAdmin interface language before login."
          },
          annotations: [
            {
              x: 7,
              y: 37,
              w: 52,
              h: 18,
              label: {
                ar: "قائمة اللغة: تغير لغة الواجهة فقط، ولا تغير بيانات قاعدة البيانات.",
                en: "Language list: changes only the interface language, not the database data."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-login.png",
          caption: {
            ar: "حقل اسم المستخدم في شاشة الدخول.",
            en: "The username field on the login screen."
          },
          annotations: [
            {
              x: 43,
              y: 65,
              w: 45,
              h: 8,
              label: {
                ar: "اسم المستخدم: في بيئة XAMPP المحلية غالبا يكون root أثناء التدريب.",
                en: "Username: in a local XAMPP environment, root is commonly used during training."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-login.png",
          caption: {
            ar: "حقل كلمة المرور في شاشة الدخول.",
            en: "The password field on the login screen."
          },
          annotations: [
            {
              x: 43,
              y: 76,
              w: 45,
              h: 8,
              label: {
                ar: "كلمة المرور: تحمي الوصول إلى قواعد البيانات، وقد تكون فارغة في بعض إعدادات التدريب المحلية.",
                en: "Password: protects database access and may be empty in some local training setups."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-dashboard.png",
          caption: {
            ar: "الشريط الجانبي لقواعد البيانات والجداول.",
            en: "The sidebar for databases and tables."
          },
          annotations: [
            {
              x: 1,
              y: 26,
              w: 18,
              h: 21,
              label: {
                ar: "الشريط الجانبي: منه تختار قاعدة البيانات ثم الجدول الذي تريد العمل عليه.",
                en: "Sidebar: use it to select the database, then the table you want to work with."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-dashboard.png",
          caption: {
            ar: "شريط التبويبات الرئيسي في phpMyAdmin.",
            en: "The main tabs bar in phpMyAdmin."
          },
          annotations: [
            {
              x: 21,
              y: 15,
              w: 77,
              h: 5,
              label: {
                ar: "التبويبات: Databases وSQL وExport وImport تنقلك بين أهم وظائف الإدارة.",
                en: "Tabs: Databases, SQL, Export, and Import move you between the main management tools."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-dashboard.png",
          caption: {
            ar: "قسم الإعدادات العامة في لوحة phpMyAdmin.",
            en: "The general settings panel in phpMyAdmin."
          },
          annotations: [
            {
              x: 23,
              y: 23,
              w: 42,
              h: 25,
              label: {
                ar: "الإعدادات العامة: منها تغير كلمة المرور والترميز وبعض خيارات الاتصال.",
                en: "General settings: used for password changes, collation, and connection options."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-dashboard.png",
          caption: {
            ar: "معلومات خادم قاعدة البيانات.",
            en: "Database server information."
          },
          annotations: [
            {
              x: 67,
              y: 23,
              w: 30,
              h: 35,
              label: {
                ar: "معلومات الخادم: تعرض نوع الخادم، الإصدار، المستخدم الحالي، والترميز.",
                en: "Server information: shows server type, version, current user, and charset."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-dashboard.png",
          caption: {
            ar: "منطقة Console أسفل واجهة phpMyAdmin.",
            en: "The Console area at the bottom of phpMyAdmin."
          },
          annotations: [
            {
              x: 22,
              y: 98,
              w: 6,
              h: 2,
              label: {
                ar: "Console: نافذة سريعة لكتابة أو مراجعة أوامر SQL بدون مغادرة الصفحة.",
                en: "Console: a quick area for writing or reviewing SQL commands without leaving the page."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-table-structure.jpg",
          caption: {
            ar: "شجرة قواعد البيانات داخل phpMyAdmin.",
            en: "The database tree inside phpMyAdmin."
          },
          annotations: [
            {
              x: 0,
              y: 0,
              w: 21,
              h: 48,
              label: {
                ar: "شجرة قواعد البيانات: تظهر قواعد البيانات والجداول، ومنها تختار الجدول المطلوب.",
                en: "Database tree: shows databases and tables, and lets you choose the target table."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-table-structure.jpg",
          caption: {
            ar: "تبويبات الجدول مثل Browse وStructure وSQL.",
            en: "Table tabs such as Browse, Structure, and SQL."
          },
          annotations: [
            {
              x: 23,
              y: 2,
              w: 74,
              h: 6,
              label: {
                ar: "تبويبات الجدول: Browse لعرض الصفوف، Structure للبنية، SQL لتنفيذ الأوامر.",
                en: "Table tabs: Browse for rows, Structure for design, SQL for commands."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-table-structure.jpg",
          caption: {
            ar: "صفوف بنية الجدول التي تمثل الأعمدة.",
            en: "Structure rows representing table columns."
          },
          annotations: [
            {
              x: 23,
              y: 8,
              w: 74,
              h: 18,
              label: {
                ar: "كل Row هنا يمثل عمودا داخل الجدول، مثل ID أو Name أو Population.",
                en: "Each row here represents a table column, such as ID, Name, or Population."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-table-structure.jpg",
          caption: {
            ar: "منطقة المفاتيح والفهارس في بنية الجدول.",
            en: "The keys and indexes area in the table structure."
          },
          annotations: [
            {
              x: 50,
              y: 25,
              w: 38,
              h: 5,
              label: {
                ar: "المفاتيح والفهارس: Primary وUnique وIndex تساعد على تعريف السجلات وتسريع البحث.",
                en: "Keys and indexes: Primary, Unique, and Index identify records and improve search speed."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-table-structure.jpg",
          caption: {
            ar: "عمود العمليات لتعديل الحقول.",
            en: "The actions column for editing fields."
          },
          annotations: [
            {
              x: 75,
              y: 8,
              w: 22,
              h: 18,
              label: {
                ar: "عمود العمليات: منه تعدل الحقل أو تحذفه أو تضيف له فهرسا.",
                en: "Actions column: change, drop, or add an index to a field."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-table-structure.jpg",
          caption: {
            ar: "معلومات الجدول والإحصاءات.",
            en: "Table information and statistics."
          },
          annotations: [
            {
              x: 22,
              y: 33,
              w: 38,
              h: 24,
              label: {
                ar: "معلومات الجدول: تعرض الحجم، عدد الصفوف، الترميز، وآخر تحديث.",
                en: "Table information: shows size, row count, collation, and last update."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-relation-view.png",
          caption: {
            ar: "تبويب Relation view داخل بنية الجدول.",
            en: "The Relation view tab inside table structure."
          },
          annotations: [
            {
              x: 36,
              y: 7,
              w: 14,
              h: 5,
              label: {
                ar: "Relation view: يستخدم لتعريف العلاقات بين الجداول عندما تكون المفاتيح والفهارس جاهزة.",
                en: "Relation view: used to define relationships between tables when keys and indexes are ready."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-relation-view.png",
          caption: {
            ar: "اختيار جدول من الشريط الجانبي قبل تعديل بنيته.",
            en: "Selecting a table from the sidebar before editing its structure."
          },
          annotations: [
            {
              x: 4,
              y: 89,
              w: 8,
              h: 4,
              label: {
                ar: "اسم الجدول المحدد: عند اختيار staff تظهر بنية هذا الجدول في المساحة الرئيسية.",
                en: "Selected table: choosing staff loads that table's structure in the main area."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-relations-diagram.jpg",
          caption: {
            ar: "مخطط العلاقات بين الجداول.",
            en: "A diagram of relationships between tables."
          },
          annotations: [
            {
              x: 43,
              y: 50,
              w: 18,
              h: 17,
              label: {
                ar: "جدول المنتج: يظهر كصندوق مستقل يحتوي أسماء الأعمدة وأنواعها ويرتبط بجداول أخرى.",
                en: "Product table: shown as an independent box with columns and data types, connected to other tables."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-relations-diagram.jpg",
          caption: {
            ar: "خط العلاقة بين جدولين في مخطط phpMyAdmin.",
            en: "A relationship line between two tables in phpMyAdmin."
          },
          annotations: [
            {
              x: 60,
              y: 52,
              w: 13,
              h: 11,
              label: {
                ar: "خط العلاقة: يوضح أن قيمة في جدول تشير إلى مفتاح في جدول آخر.",
                en: "Relationship line: shows that a value in one table references a key in another table."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-insert-form.jpg",
          caption: {
            ar: "نموذج Insert لإضافة صف جديد.",
            en: "The Insert form for adding a new row."
          },
          annotations: [
            {
              x: 17,
              y: 18,
              w: 50,
              h: 25,
              label: {
                ar: "صفوف الإدخال: كل Row يمثل عمودا من الجدول وتكتب قيمته في خانة Value.",
                en: "Insert rows: each row represents a table column and its value is written in the Value field."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-insert-form.jpg",
          caption: {
            ar: "حقل Value عند إدخال بيانات جديدة.",
            en: "The Value field when inserting new data."
          },
          annotations: [
            {
              x: 47,
              y: 21,
              w: 19,
              h: 26,
              label: {
                ar: "Value: هنا تكتب القيمة التي ستخزن داخل العمود المحدد مثل username أو email.",
                en: "Value: this is where you type the value stored in the selected column, such as username or email."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-create-columns.gif",
          caption: {
            ar: "نموذج إنشاء أعمدة جدول جديد.",
            en: "The form for creating columns in a new table."
          },
          annotations: [
            {
              x: 0,
              y: 3,
              w: 22,
              h: 94,
              label: {
                ar: "Name: أسماء الأعمدة التي ستصبح حقولا داخل الجدول مثل ID وFirst_Name.",
                en: "Name: column names that become fields inside the table, such as ID and First_Name."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-create-columns.gif",
          caption: {
            ar: "اختيار نوع البيانات وطول القيمة.",
            en: "Selecting the data type and value length."
          },
          annotations: [
            {
              x: 23,
              y: 3,
              w: 42,
              h: 94,
              label: {
                ar: "Type وLength: يحددان طبيعة البيانات، مثل رقم SMALLINT أو نص VARCHAR بطول 50.",
                en: "Type and Length: define the data, such as SMALLINT for numbers or VARCHAR(50) for text."
              }
            }
          ]
        },
        {
          src: "assets/images/phpmyadmin/phpmyadmin-create-columns.gif",
          caption: {
            ar: "تحديد المفتاح الأساسي والتزايد التلقائي.",
            en: "Setting the primary key and auto increment."
          },
          annotations: [
            {
              x: 72,
              y: 3,
              w: 27,
              h: 22,
              label: {
                ar: "Index وA_I: تجعل ID مفتاحا أساسيا ويتزايد تلقائيا مع كل سجل جديد.",
                en: "Index and A_I: make ID a primary key that increments automatically for each new record."
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
