window.SITE_CONTENT = {
  "items": [
    {
      "id": "php-xampp-install-windows",
      "type": "software",
      "date": "2026-05-23",
      "duration": "15 min",
      "level": "PHP Basics",
      "course": {
        "ar": "دورة PHP",
        "en": "PHP Course"
      },
      "title": {
        "ar": "تنزيل وتثبيت XAMPP على ويندوز",
        "en": "Download and Install XAMPP on Windows"
      },
      "summary": {
        "ar": "درس عملي يشرح من أين نحمل XAMPP، وكيف نثبت البيئة المحلية لتشغيل PHP وApache وMariaDB.",
        "en": "A practical lesson showing where to download XAMPP and how to set up a local PHP, Apache, and MariaDB environment."
      },
      "mediaType": "article",
      "category": "software",
      "tags": [
        "software",
        "xampp",
        "php",
        "windows"
      ],
      "icon": "assets/images/xampp/xampp-logo.png",
      "thumbnail": "assets/images/xampp/xampp-setup-welcome.webp",
      "sourceUrl": "https://www.apachefriends.org/download.html",
      "downloadUrl": "https://www.apachefriends.org/download.html",
      "images": [
        {
          "src": "assets/images/xampp/xampp-setup-welcome.webp",
          "caption": {
            "ar": "الخطوة الأولى: تشغيل ملف التثبيت الرسمي وظهور نافذة Setup - XAMPP.",
            "en": "Step 1: Run the official installer and open the Setup - XAMPP window."
          }
        },
        {
          "src": "assets/images/xampp/xampp-components.png",
          "caption": {
            "ar": "الخطوة الثانية: اختيار المكونات الأساسية أثناء التثبيت.",
            "en": "Step 2: Select the essential components during installation."
          }
        },
        {
          "src": "assets/images/xampp/xampp-installing.jpg",
          "caption": {
            "ar": "الخطوة الثالثة: انتظار انتهاء نسخ الملفات وتثبيت مكونات XAMPP.",
            "en": "Step 3: Wait while the installer copies files and installs XAMPP components."
          }
        },
        {
          "src": "assets/images/xampp/xampp-control-panel.webp",
          "caption": {
            "ar": "الخطوة الرابعة: تشغيل Apache وMySQL من لوحة تحكم XAMPP.",
            "en": "Step 4: Start Apache and MySQL from the XAMPP Control Panel."
          }
        }
      ],
      "body": {
        "ar": [
          "XAMPP هو حزمة تطوير محلية تجمع أهم الأدوات التي يحتاجها المتعلم لتشغيل PHP على جهازه. الفكرة العلمية وراءه بسيطة: نحتاج إلى خادم ويب يستقبل الطلبات، ومفسر PHP ينفذ الملفات، وقاعدة بيانات نخزن فيها البيانات. في XAMPP يقوم Apache بدور خادم الويب، وتقوم PHP بتنفيذ الكود، وتوفر MariaDB قاعدة البيانات، بينما يساعد phpMyAdmin على إدارتها من المتصفح.",
          "ابدأ دائما من الموقع الرسمي Apache Friends. تحميل البرامج من مصدرها الرسمي يقلل خطر الملفات المعدلة أو الإصدارات غير الموثوقة. افتح صفحة التحميل، ثم اختر نسخة Windows المناسبة. لا تحتاج في البداية إلى البحث عن إعدادات متقدمة؛ الهدف هنا هو تجهيز بيئة تعلم مستقرة.",
          "بعد تنزيل ملف التثبيت، شغله بالطريقة المعتادة. إذا ظهرت رسالة من Windows User Account Control فاقرأها وتأكد أن الملف من المصدر الرسمي قبل المتابعة. أثناء اختيار المكونات، يكفي للبدء تحديد Apache وPHP وMariaDB وphpMyAdmin. هذه المكونات تغطي أغلب دروس PHP الأساسية.",
          "يفضل تثبيت XAMPP في مسار بسيط مثل C:\\xampp بدلا من مسار طويل داخل Program Files، لأن بعض أنظمة ويندوز قد تفرض قيود صلاحيات على مجلدات البرامج. بعد انتهاء التثبيت افتح XAMPP Control Panel، ثم اضغط Start أمام Apache وMySQL.",
          "للتأكد من نجاح التثبيت، افتح المتصفح واكتب localhost. إذا ظهرت صفحة XAMPP فهذا يعني أن Apache يعمل. بعد ذلك يمكن تجربة phpMyAdmin عبر localhost/phpmyadmin للتأكد من عمل قاعدة البيانات. إذا لم يعمل Apache غالبا يوجد برنامج آخر يستخدم المنفذ 80 مثل IIS أو Skype أو خدمة ويب أخرى."
        ],
        "en": [
          "XAMPP is a local development package that brings together the main tools needed to run PHP on your computer. The technical idea is simple: a web server receives browser requests, PHP executes server-side files, and a database stores application data. In XAMPP, Apache acts as the web server, PHP runs the code, MariaDB provides the database, and phpMyAdmin helps manage it from the browser.",
          "Always start from the official Apache Friends website. Downloading software from the official source reduces the risk of modified files or untrusted versions. Open the download page and choose the Windows version. At the beginning, you do not need advanced settings; the goal is to prepare a stable learning environment.",
          "After downloading the installer, run it normally. If Windows User Account Control appears, read it and confirm that the installer came from the official source before continuing. During component selection, the essentials for learning PHP are Apache, PHP, MariaDB, and phpMyAdmin. These components cover most beginner PHP lessons.",
          "It is usually better to install XAMPP in a simple path such as C:\\xampp rather than inside Program Files, because Windows can apply stricter permissions to program folders. After installation, open the XAMPP Control Panel and click Start next to Apache and MySQL.",
          "To verify the installation, open your browser and visit localhost. If the XAMPP page appears, Apache is running. You can then open localhost/phpmyadmin to confirm that the database tools work. If Apache does not start, another program may already be using port 80, such as IIS, Skype, or another local web service."
        ]
      }
    },
    {
      "id": "phpmyadmin-graphical-interface",
      "type": "software",
      "date": "2026-05-23",
      "duration": "28 min",
      "level": "PHP Basics",
      "course": {
        "ar": "دورة PHP",
        "en": "PHP Course"
      },
      "title": {
        "ar": "شرح واجهة phpMyAdmin الرسومية",
        "en": "Understanding the phpMyAdmin Graphical Interface"
      },
      "summary": {
        "ar": "شرح عملي مفصل لواجهة phpMyAdmin الرسومية: كيف تصل إليها من XAMPP، كيف تنشئ قاعدة بيانات وجدولا، كيف تفهم الصفوف والأعمدة والمفاتيح، وكيف تستخدم العلاقات والإدخال بطريقة صحيحة.",
        "en": "A practical, detailed guide to the phpMyAdmin graphical interface: how to open it from XAMPP, create a database and table, understand rows, columns, keys, and use relations and inserts correctly."
      },
      "mediaType": "article",
      "category": "software",
      "tags": [
        "software",
        "phpmyadmin",
        "php",
        "mysql",
        "mariadb"
      ],
      "icon": "assets/images/phpmyadmin/phpmyadmin-login.png",
      "thumbnail": "assets/images/phpmyadmin/phpmyadmin-dashboard.png",
      "sourceUrl": "https://www.phpmyadmin.net/docs/",
      "images": [
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-login.png",
          "caption": {
            "ar": "اختيار لغة واجهة phpMyAdmin قبل الدخول.",
            "en": "Selecting the phpMyAdmin interface language before login."
          },
          "annotations": [
            {
              "x": 7,
              "y": 37,
              "w": 52,
              "h": 18,
              "label": {
                "ar": "قائمة اللغة: تغير لغة الواجهة فقط، ولا تغير بيانات قاعدة البيانات.",
                "en": "Language list: changes only the interface language, not the database data."
              }
            }
          ],
          "description": {
            "ar": "تظهر هذه اللقطة عند فتح phpMyAdmin من المتصفح. قبل إدخال بيانات الدخول يمكنك اختيار لغة الواجهة، وهذا مفيد لأن الطالب يستطيع متابعة الشرح بالعربية أو الإنجليزية بدون أن تتغير أسماء الجداول أو محتوى قاعدة البيانات. تغيير اللغة يؤثر على شكل القوائم فقط، وليس على البيانات المخزنة.",
            "en": "This screen appears when phpMyAdmin opens in the browser. Before signing in, you can choose the interface language, which helps learners follow the lesson in Arabic or English without changing table names or stored database content. The language choice affects only the interface, not the data."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-login.png",
          "caption": {
            "ar": "حقل اسم المستخدم في شاشة الدخول.",
            "en": "The username field on the login screen."
          },
          "annotations": [
            {
              "x": 43,
              "y": 65,
              "w": 45,
              "h": 8,
              "label": {
                "ar": "اسم المستخدم: في بيئة XAMPP المحلية غالبا يكون root أثناء التدريب.",
                "en": "Username: in a local XAMPP environment, root is commonly used during training."
              }
            }
          ],
          "description": {
            "ar": "حقل اسم المستخدم يحدد الحساب الذي سيدخل إلى خادم قاعدة البيانات. عند العمل محليا من XAMPP يكون root شائعا للتجارب التعليمية، لكن الفكرة الأهم هي فهم أن كل حساب له صلاحيات. في المشاريع الحقيقية لا تعتمد على root للتطبيقات، بل أنشئ مستخدما محدود الصلاحيات.",
            "en": "The username field identifies the account that will access the database server. In a local XAMPP setup, root is common for training, but the important concept is that each account has permissions. In real projects, applications should not rely on root; they should use limited database users."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-login.png",
          "caption": {
            "ar": "حقل كلمة المرور في شاشة الدخول.",
            "en": "The password field on the login screen."
          },
          "annotations": [
            {
              "x": 43,
              "y": 76,
              "w": 45,
              "h": 8,
              "label": {
                "ar": "كلمة المرور: تحمي الوصول إلى قواعد البيانات، وقد تكون فارغة في بعض إعدادات التدريب المحلية.",
                "en": "Password: protects database access and may be empty in some local training setups."
              }
            }
          ],
          "description": {
            "ar": "حقل كلمة المرور يحمي الوصول إلى قواعد البيانات. قد يكون فارغا في إعدادات XAMPP التعليمية، لكن هذا لا يعني أنه مقبول في بيئة الإنتاج. إذا أردت تدريب نفسك بشكل أفضل، ضع كلمة مرور محلية وتعلم كيف تضبط ملف الاتصال في PHP بناء عليها.",
            "en": "The password field protects database access. It may be empty in a training XAMPP setup, but that is not acceptable in production. For stronger practice, configure a local password and learn how your PHP connection file changes based on that credential."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-dashboard.png",
          "caption": {
            "ar": "الشريط الجانبي لقواعد البيانات والجداول.",
            "en": "The sidebar for databases and tables."
          },
          "annotations": [
            {
              "x": 1,
              "y": 26,
              "w": 18,
              "h": 21,
              "label": {
                "ar": "الشريط الجانبي: منه تختار قاعدة البيانات ثم الجدول الذي تريد العمل عليه.",
                "en": "Sidebar: use it to select the database, then the table you want to work with."
              }
            }
          ],
          "description": {
            "ar": "الشريط الجانبي هو خريطة العمل اليومية داخل phpMyAdmin. بعد إنشاء قاعدة البيانات ستظهر هنا، وعند الضغط عليها تظهر الجداول التابعة لها. استخدمه دائما للتأكد أنك تعمل داخل القاعدة الصحيحة قبل إنشاء جدول أو حذف بيانات أو تنفيذ أمر SQL.",
            "en": "The sidebar is your daily navigation map inside phpMyAdmin. After creating a database it appears here, and selecting it reveals its tables. Always use the sidebar to confirm that you are working in the correct database before creating tables, deleting data, or running SQL."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-dashboard.png",
          "caption": {
            "ar": "شريط التبويبات الرئيسي في phpMyAdmin.",
            "en": "The main tabs bar in phpMyAdmin."
          },
          "annotations": [
            {
              "x": 21,
              "y": 15,
              "w": 77,
              "h": 5,
              "label": {
                "ar": "التبويبات: Databases وSQL وExport وImport تنقلك بين أهم وظائف الإدارة.",
                "en": "Tabs: Databases, SQL, Export, and Import move you between the main management tools."
              }
            }
          ],
          "description": {
            "ar": "شريط التبويبات ينقلك بين وظائف الإدارة الأساسية. Databases لإنشاء القواعد، SQL لتنفيذ الاستعلامات، Export للنسخ الاحتياطي، Import لاسترجاع الملفات، وUser accounts لإدارة الصلاحيات. فهم هذا الشريط يجعل الواجهة منظمة بدل أن تبدو مزدحمة.",
            "en": "The tabs bar moves you between the core administration tasks. Databases creates databases, SQL runs queries, Export creates backups, Import restores files, and User accounts manages permissions. Understanding this bar makes the interface feel structured instead of crowded."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-dashboard.png",
          "caption": {
            "ar": "قسم الإعدادات العامة في لوحة phpMyAdmin.",
            "en": "The general settings panel in phpMyAdmin."
          },
          "annotations": [
            {
              "x": 23,
              "y": 23,
              "w": 42,
              "h": 25,
              "label": {
                "ar": "الإعدادات العامة: منها تغير كلمة المرور والترميز وبعض خيارات الاتصال.",
                "en": "General settings: used for password changes, collation, and connection options."
              }
            }
          ],
          "description": {
            "ar": "قسم الإعدادات العامة يعرض خيارات مرتبطة بالجلسة والاتصال والترميز. للطلاب، أهم نقطة هنا هي الانتباه إلى الترميز Collation لأن اختيار utf8mb4 يساعدك على تخزين العربية والإنجليزية والرموز بشكل صحيح داخل الجداول.",
            "en": "The general settings panel contains session, connection, and collation options. For learners, the key point is collation: choosing utf8mb4 helps store Arabic, English, and symbols correctly inside your tables."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-dashboard.png",
          "caption": {
            "ar": "معلومات خادم قاعدة البيانات.",
            "en": "Database server information."
          },
          "annotations": [
            {
              "x": 67,
              "y": 23,
              "w": 30,
              "h": 35,
              "label": {
                "ar": "معلومات الخادم: تعرض نوع الخادم، الإصدار، المستخدم الحالي، والترميز.",
                "en": "Server information: shows server type, version, current user, and charset."
              }
            }
          ],
          "description": {
            "ar": "معلومات الخادم تساعدك على معرفة البيئة التي تعمل عليها: نوع قاعدة البيانات، رقم الإصدار، المستخدم الحالي، والترميز. عندما يظهر خطأ في مشروع PHP، هذه المعلومات تساعدك على مقارنة إصدار السيرفر المحلي مع متطلبات المشروع.",
            "en": "Server information tells you what environment you are using: database type, version, current user, and character set. When a PHP project fails, this information helps compare the local server version with the project requirements."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-dashboard.png",
          "caption": {
            "ar": "منطقة Console أسفل واجهة phpMyAdmin.",
            "en": "The Console area at the bottom of phpMyAdmin."
          },
          "annotations": [
            {
              "x": 22,
              "y": 98,
              "w": 6,
              "h": 2,
              "label": {
                "ar": "Console: نافذة سريعة لكتابة أو مراجعة أوامر SQL بدون مغادرة الصفحة.",
                "en": "Console: a quick area for writing or reviewing SQL commands without leaving the page."
              }
            }
          ],
          "description": {
            "ar": "منطقة Console مفيدة عندما تريد تجربة أمر SQL بسرعة بدون مغادرة الشاشة الحالية. يمكنك كتابة SELECT بسيط لمراجعة البيانات أو اختبار شرط معين. تعامل معها بحذر عند استخدام UPDATE أو DELETE لأنها تنفذ الأوامر مباشرة على القاعدة المحددة.",
            "en": "The Console is useful when you want to test SQL quickly without leaving the current screen. You can write a simple SELECT to inspect data or test a condition. Be careful with UPDATE and DELETE because they affect the selected database directly."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-table-structure.jpg",
          "caption": {
            "ar": "شجرة قواعد البيانات داخل phpMyAdmin.",
            "en": "The database tree inside phpMyAdmin."
          },
          "annotations": [
            {
              "x": 0,
              "y": 0,
              "w": 21,
              "h": 48,
              "label": {
                "ar": "شجرة قواعد البيانات: تظهر قواعد البيانات والجداول، ومنها تختار الجدول المطلوب.",
                "en": "Database tree: shows databases and tables, and lets you choose the target table."
              }
            }
          ],
          "description": {
            "ar": "شجرة قواعد البيانات تعرض القواعد والجداول بشكل هرمي. للوصول إلى جدول معين: افتح phpMyAdmin، اختر قاعدة البيانات من هذه الشجرة، ثم اختر الجدول. هذه الطريقة هي الطريق الأسرع للوصول إلى بنية الجدول أو صفوفه أو شاشة الإدخال.",
            "en": "The database tree displays databases and tables hierarchically. To reach a table, open phpMyAdmin, choose the database from this tree, then select the table. This is the fastest path to the table structure, rows, or insert screen."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-table-structure.jpg",
          "caption": {
            "ar": "تبويبات الجدول مثل Browse وStructure وSQL.",
            "en": "Table tabs such as Browse, Structure, and SQL."
          },
          "annotations": [
            {
              "x": 23,
              "y": 2,
              "w": 74,
              "h": 6,
              "label": {
                "ar": "تبويبات الجدول: Browse لعرض الصفوف، Structure للبنية، SQL لتنفيذ الأوامر.",
                "en": "Table tabs: Browse for rows, Structure for design, SQL for commands."
              }
            }
          ],
          "description": {
            "ar": "تبويبات الجدول تظهر بعد اختيار جدول محدد. Browse يعرض السجلات، Structure يشرح الأعمدة، SQL يشغل الأوامر، Search يبحث داخل البيانات، Insert يضيف سجلا جديدا، وExport يحفظ نسخة من الجدول. ابدأ دائما من التبويب المناسب للمهمة.",
            "en": "Table tabs appear after selecting a specific table. Browse shows records, Structure explains columns, SQL runs commands, Search looks inside data, Insert adds a new record, and Export saves a copy of the table. Start from the tab that matches your task."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-table-structure.jpg",
          "caption": {
            "ar": "صفوف بنية الجدول التي تمثل الأعمدة.",
            "en": "Structure rows representing table columns."
          },
          "annotations": [
            {
              "x": 23,
              "y": 8,
              "w": 74,
              "h": 18,
              "label": {
                "ar": "كل Row هنا يمثل عمودا داخل الجدول، مثل ID أو Name أو Population.",
                "en": "Each row here represents a table column, such as ID, Name, or Population."
              }
            }
          ],
          "description": {
            "ar": "هذه الصفوف لا تمثل بيانات العملاء أو المستخدمين؛ هي تمثل أعمدة الجدول نفسه. مثلا إذا كان لديك أعمدة id وname وemail فكل واحد منها يظهر كسطر في Structure. لذلك قبل إدخال البيانات راجع هذه المنطقة لتتأكد أن تصميم الجدول صحيح.",
            "en": "These rows do not represent customer or user data; they represent the table columns themselves. For example, id, name, and email each appear as a row in Structure. Before inserting data, review this area to confirm that the table design is correct."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-table-structure.jpg",
          "caption": {
            "ar": "منطقة المفاتيح والفهارس في بنية الجدول.",
            "en": "The keys and indexes area in the table structure."
          },
          "annotations": [
            {
              "x": 50,
              "y": 25,
              "w": 38,
              "h": 5,
              "label": {
                "ar": "المفاتيح والفهارس: Primary وUnique وIndex تساعد على تعريف السجلات وتسريع البحث.",
                "en": "Keys and indexes: Primary, Unique, and Index identify records and improve search speed."
              }
            }
          ],
          "description": {
            "ar": "منطقة المفاتيح والفهارس تخبرك كيف يتم تمييز السجلات وتسريع البحث. Primary Key يعني أن العمود يعرّف كل صف بشكل فريد، وIndex يساعد قاعدة البيانات على البحث بشكل أسرع. في جدول users يكون id غالبا هو المفتاح الأساسي.",
            "en": "The keys and indexes area shows how records are identified and how searches are optimized. Primary Key means the column uniquely identifies each row, while Index helps the database search faster. In a users table, id is usually the primary key."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-table-structure.jpg",
          "caption": {
            "ar": "عمود العمليات لتعديل الحقول.",
            "en": "The actions column for editing fields."
          },
          "annotations": [
            {
              "x": 75,
              "y": 8,
              "w": 22,
              "h": 18,
              "label": {
                "ar": "عمود العمليات: منه تعدل الحقل أو تحذفه أو تضيف له فهرسا.",
                "en": "Actions column: change, drop, or add an index to a field."
              }
            }
          ],
          "description": {
            "ar": "أزرار الإجراءات تسمح بتعديل أو حذف أو تغيير خصائص الأعمدة. استخدم Change لتعديل نوع الحقل أو طوله، وDrop لحذف عمود فقط عندما تكون متأكدا. في التدريب، خذ نسخة Export قبل حذف أي شيء حتى لا تخسر عملك.",
            "en": "Action buttons let you edit, delete, or change column properties. Use Change to modify a field type or length, and Drop only when you are certain. During practice, export a backup before deleting anything so you do not lose your work."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-table-structure.jpg",
          "caption": {
            "ar": "معلومات الجدول والإحصاءات.",
            "en": "Table information and statistics."
          },
          "annotations": [
            {
              "x": 22,
              "y": 33,
              "w": 38,
              "h": 24,
              "label": {
                "ar": "معلومات الجدول: تعرض الحجم، عدد الصفوف، الترميز، وآخر تحديث.",
                "en": "Table information: shows size, row count, collation, and last update."
              }
            }
          ],
          "description": {
            "ar": "معلومات الجدول تلخص المحرك المستخدم وعدد الصفوف والحجم وبعض الإعدادات. هذه التفاصيل تصبح مهمة عندما يكبر المشروع، لأنك تحتاج لمعرفة حجم البيانات والمحرك المستخدم مثل InnoDB لدعم العلاقات والمفاتيح الأجنبية.",
            "en": "Table information summarizes the storage engine, row count, size, and related settings. These details matter as a project grows because you need to understand data size and whether the engine, such as InnoDB, supports relationships and foreign keys."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-relation-view.png",
          "caption": {
            "ar": "تبويب Relation view داخل بنية الجدول.",
            "en": "The Relation view tab inside table structure."
          },
          "annotations": [
            {
              "x": 36,
              "y": 7,
              "w": 14,
              "h": 5,
              "label": {
                "ar": "Relation view: يستخدم لتعريف العلاقات بين الجداول عندما تكون المفاتيح والفهارس جاهزة.",
                "en": "Relation view: used to define relationships between tables when keys and indexes are ready."
              }
            }
          ],
          "description": {
            "ar": "Relation view هي الصفحة التي تضبط فيها العلاقات بين الجداول. للوصول إليها اختر الجدول، افتح Structure، ثم ابحث عن Relation view. قبل إنشاء علاقة، تأكد أن الجدولين يستخدمان InnoDB وأن العمودين المتصلين لهما نوع بيانات متوافق.",
            "en": "Relation View is where table relationships are configured. To reach it, select a table, open Structure, then find Relation view. Before creating a relationship, make sure both tables use InnoDB and that the connected columns have compatible data types."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-relation-view.png",
          "caption": {
            "ar": "اختيار جدول من الشريط الجانبي قبل تعديل بنيته.",
            "en": "Selecting a table from the sidebar before editing its structure."
          },
          "annotations": [
            {
              "x": 4,
              "y": 89,
              "w": 8,
              "h": 4,
              "label": {
                "ar": "اسم الجدول المحدد: عند اختيار staff تظهر بنية هذا الجدول في المساحة الرئيسية.",
                "en": "Selected table: choosing staff loads that table's structure in the main area."
              }
            }
          ],
          "description": {
            "ar": "اختيار الجدول داخل شاشة العلاقات يحدد أي جدول تريد ربطه بجدول آخر. مثلا orders يرتبط مع users من خلال user_id. هذا الاختيار مهم لأنه يوضح للقاعدة أن قيمة في جدول معين يجب أن تشير إلى سجل موجود في جدول آخر.",
            "en": "Selecting the table inside Relation View determines which table you want to connect to another table. For example, orders connects to users through user_id. This tells the database that a value in one table should point to an existing record in another."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-relations-diagram.jpg",
          "caption": {
            "ar": "مخطط العلاقات بين الجداول.",
            "en": "A diagram of relationships between tables."
          },
          "annotations": [
            {
              "x": 43,
              "y": 50,
              "w": 18,
              "h": 17,
              "label": {
                "ar": "جدول المنتج: يظهر كصندوق مستقل يحتوي أسماء الأعمدة وأنواعها ويرتبط بجداول أخرى.",
                "en": "Product table: shown as an independent box with columns and data types, connected to other tables."
              }
            }
          ],
          "description": {
            "ar": "في مخطط العلاقات، كل صندوق يمثل جدولا، وكل سطر داخل الصندوق يمثل عمودا. ابدأ بقراءة أسماء الجداول ثم ابحث عن الأعمدة المشتركة مثل product_id أو user_id. هذه الطريقة تساعدك على فهم بنية قاعدة البيانات قبل كتابة الاستعلامات.",
            "en": "In a relationship diagram, each box represents a table and each line inside the box represents a column. Start by reading table names, then look for shared columns such as product_id or user_id. This helps you understand the database structure before writing queries."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-relations-diagram.jpg",
          "caption": {
            "ar": "خط العلاقة بين جدولين في مخطط phpMyAdmin.",
            "en": "A relationship line between two tables in phpMyAdmin."
          },
          "annotations": [
            {
              "x": 60,
              "y": 52,
              "w": 13,
              "h": 11,
              "label": {
                "ar": "خط العلاقة: يوضح أن قيمة في جدول تشير إلى مفتاح في جدول آخر.",
                "en": "Relationship line: shows that a value in one table references a key in another table."
              }
            }
          ],
          "description": {
            "ar": "خط العلاقة يوضح أن هناك ارتباطا بين مفتاح في جدول ومفتاح في جدول آخر. وجود هذا الخط ليس شكليا فقط؛ هو يساعد على حماية سلامة البيانات. مثلا لا يجب أن يحتوي جدول الطلبات على منتج غير موجود في جدول المنتجات.",
            "en": "The relationship line shows that a key in one table is connected to a key in another table. This is not just visual; it protects data integrity. For example, an orders table should not reference a product that does not exist in the products table."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-insert-form.jpg",
          "caption": {
            "ar": "نموذج Insert لإضافة صف جديد.",
            "en": "The Insert form for adding a new row."
          },
          "annotations": [
            {
              "x": 17,
              "y": 18,
              "w": 50,
              "h": 25,
              "label": {
                "ar": "صفوف الإدخال: كل Row يمثل عمودا من الجدول وتكتب قيمته في خانة Value.",
                "en": "Insert rows: each row represents a table column and its value is written in the Value field."
              }
            }
          ],
          "description": {
            "ar": "شاشة الإدخال تستخدم لإضافة صف جديد. للوصول إليها اختر قاعدة البيانات، ثم الجدول، ثم Insert. املأ القيم المطلوبة فقط واترك id فارغا إذا كان Auto Increment. بعد الحفظ انتقل إلى Browse لتتأكد أن الصف تمت إضافته بنجاح.",
            "en": "The insert screen is used to add a new row. To reach it, select the database, then the table, then Insert. Fill only the required values and leave id empty if it is Auto Increment. After saving, go to Browse to confirm that the row was added successfully."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-insert-form.jpg",
          "caption": {
            "ar": "حقل Value عند إدخال بيانات جديدة.",
            "en": "The Value field when inserting new data."
          },
          "annotations": [
            {
              "x": 47,
              "y": 21,
              "w": 19,
              "h": 26,
              "label": {
                "ar": "Value: هنا تكتب القيمة التي ستخزن داخل العمود المحدد مثل username أو email.",
                "en": "Value: this is where you type the value stored in the selected column, such as username or email."
              }
            }
          ],
          "description": {
            "ar": "حقل Value هو المكان الذي تكتب فيه القيمة الفعلية للعمود. إذا كان العمود VARCHAR اكتب نصا، وإذا كان INT اكتب رقما، وإذا كان DATE استخدم صيغة تاريخ صحيحة. مطابقة القيمة مع نوع العمود تمنع أغلب أخطاء الإدخال.",
            "en": "The Value field is where you type the actual value for a column. If the column is VARCHAR, enter text; if it is INT, enter a number; if it is DATE, use a valid date format. Matching the value to the column type prevents most insert errors."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-create-columns.gif",
          "caption": {
            "ar": "نموذج إنشاء أعمدة جدول جديد.",
            "en": "The form for creating columns in a new table."
          },
          "annotations": [
            {
              "x": 0,
              "y": 3,
              "w": 22,
              "h": 94,
              "label": {
                "ar": "Name: أسماء الأعمدة التي ستصبح حقولا داخل الجدول مثل ID وFirst_Name.",
                "en": "Name: column names that become fields inside the table, such as ID and First_Name."
              }
            }
          ],
          "description": {
            "ar": "عند إنشاء أعمدة جديدة، ابدأ بالأسماء الواضحة والبسيطة. استخدم id للمفتاح الأساسي، وname للاسم، وemail للبريد. تجنب المسافات والرموز في أسماء الأعمدة حتى تكون الاستعلامات في PHP أو SQL أسهل وأقل عرضة للأخطاء.",
            "en": "When creating new columns, start with clear and simple names. Use id for the primary key, name for a name field, and email for an email field. Avoid spaces and symbols in column names so PHP and SQL queries stay cleaner and less error-prone."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-create-columns.gif",
          "caption": {
            "ar": "اختيار نوع البيانات وطول القيمة.",
            "en": "Selecting the data type and value length."
          },
          "annotations": [
            {
              "x": 23,
              "y": 3,
              "w": 42,
              "h": 94,
              "label": {
                "ar": "Type وLength: يحددان طبيعة البيانات، مثل رقم SMALLINT أو نص VARCHAR بطول 50.",
                "en": "Type and Length: define the data, such as SMALLINT for numbers or VARCHAR(50) for text."
              }
            }
          ],
          "description": {
            "ar": "اختيار Type وLength يحدد شكل البيانات المسموح بها. VARCHAR(255) مناسب للنصوص القصيرة، INT مناسب للأرقام الصحيحة، وTEXT مناسب للنصوص الطويلة. لا تختر نوعا عشوائيا؛ اربط النوع بطبيعة البيانات التي سيخزنها العمود.",
            "en": "Type and Length define what kind of data the column accepts. VARCHAR(255) is useful for short text, INT for whole numbers, and TEXT for long content. Do not choose types randomly; match the type to the nature of the data the column will store."
          }
        },
        {
          "src": "assets/images/phpmyadmin/phpmyadmin-create-columns.gif",
          "caption": {
            "ar": "تحديد المفتاح الأساسي والتزايد التلقائي.",
            "en": "Setting the primary key and auto increment."
          },
          "annotations": [
            {
              "x": 72,
              "y": 3,
              "w": 27,
              "h": 22,
              "label": {
                "ar": "Index وA_I: تجعل ID مفتاحا أساسيا ويتزايد تلقائيا مع كل سجل جديد.",
                "en": "Index and A_I: make ID a primary key that increments automatically for each new record."
              }
            }
          ],
          "description": {
            "ar": "خيار Index مع A_I مهم جدا عند إنشاء id. اجعل id مفتاحا أساسيا Primary، وفعل Auto Increment حتى تزيد القيمة تلقائيا مع كل صف جديد. بهذه الطريقة يصبح لكل سجل رقم ثابت يمكن استخدامه في العلاقات والاستعلامات.",
            "en": "Index and A_I are very important when creating an id column. Set id as Primary and enable Auto Increment so the value increases automatically with each new row. This gives every record a stable number that can be used in relationships and queries."
          }
        }
      ],
      "body": {
        "ar": [
          "phpMyAdmin هي واجهة رسومية لإدارة قواعد بيانات MySQL وMariaDB من المتصفح. بدلا من كتابة كل شيء من سطر الأوامر، تمنحك الواجهة طريقة منظمة لرؤية قواعد البيانات والجداول والحقول والصفوف، وتنفيذ أوامر SQL، واستيراد وتصدير البيانات، ومراجعة العلاقات بين الجداول.",
          "للوصول إلى phpMyAdmin داخل بيئة XAMPP المحلية: افتح XAMPP Control Panel، ثم اضغط Start أمام Apache وMySQL. بعد أن يتحول لونهما إلى الأخضر افتح المتصفح واكتب http://localhost/phpmyadmin. إذا ظهرت لك شاشة الدخول فهذا يعني أن الخادم يعمل وأن phpMyAdmin جاهزة للاستخدام.",
          "في بيئة التدريب المحلية يكون اسم المستخدم غالبا root، وقد تكون كلمة المرور فارغة حسب إعدادات XAMPP. هذا مناسب للتعلم على جهازك فقط، أما في الخوادم الحقيقية فيجب استخدام حساب مخصص وكلمة مرور قوية وصلاحيات محدودة، لأن قاعدة البيانات تحتوي على معلومات حساسة.",
          "أول خطوة عملية هي إنشاء قاعدة بيانات. من تبويب Databases اكتب اسما واضحا مثل php_course ثم اختر الترميز utf8mb4_general_ci لدعم العربية والإنجليزية والرموز، وبعدها اضغط Create. القاعدة الجديدة ستظهر في الشريط الجانبي، ومنها تبدأ بإنشاء الجداول.",
          "لإنشاء جدول، اختر قاعدة البيانات من الشريط الجانبي، ثم اكتب اسم الجدول مثل users وحدد عدد الأعمدة المطلوبة. جدول المستخدمين البسيط قد يحتاج id وname وemail وcreated_at. بعد الضغط على Create ستظهر شاشة تحديد خصائص كل عمود.",
          "عند تعريف الأعمدة انتبه إلى نوع البيانات. حقل id يكون عادة INT ويأخذ Primary Key مع Auto Increment حتى يحصل كل صف على رقم فريد تلقائيا. حقول الاسم والبريد تستخدم غالبا VARCHAR، أما التواريخ فتستخدم DATE أو DATETIME أو TIMESTAMP حسب الحاجة.",
          "تبويب Structure يشرح بنية الجدول: كل Row في هذه الشاشة يمثل عمودا داخل الجدول، وليس سجلا من بيانات المستخدمين. من هنا ترى اسم العمود ونوعه وطوله وهل يسمح بالقيم الفارغة وهل عليه مفتاح أو فهرس. هذا التبويب مهم قبل إدخال البيانات لأنه يحدد شكل التخزين.",
          "تبويب Insert يستخدم لإضافة صف جديد داخل الجدول. املأ القيم المناسبة ثم اضغط Go. بعدها افتح تبويب Browse للتأكد من ظهور السجل. إذا ظهر خطأ، اقرأ الرسالة بدقة؛ غالبا يكون السبب نوع بيانات غير صحيح، أو حقل مطلوب لم يتم تعبئته، أو قيمة مكررة في مفتاح فريد.",
          "تبويب SQL يسمح بكتابة أوامر مباشرة مثل SELECT وINSERT وUPDATE وDELETE. استخدمه عندما تريد فهم ما يحدث خلف الواجهة الرسومية. حتى لو بدأت بالواجهة، تعلم قراءة SQL مهم جدا لأن أي تطبيق PHP يتعامل مع قاعدة البيانات عن طريق استعلامات SQL.",
          "عند وجود أكثر من جدول، تصبح العلاقات مهمة. مثلا جدول orders يمكن أن يحتوي user_id يشير إلى id في جدول users. من Relation view أو مخطط العلاقات تستطيع رؤية هذه الروابط وتوثيقها بصريا، وهذا يساعدك على تصميم قاعدة بيانات مفهومة وقابلة للتوسع.",
          "استخدم Export لأخذ نسخة احتياطية من قاعدة البيانات بصيغة SQL، واستخدم Import لاسترجاع نسخة أو نقلها إلى جهاز آخر. قبل أي تعديل كبير على الجداول أو البيانات، خذ نسخة احتياطية حتى تستطيع الرجوع إذا حدث خطأ أثناء التدريب أو التطوير."
        ],
        "en": [
          "phpMyAdmin is a graphical interface for managing MySQL and MariaDB databases from the browser. Instead of doing everything from the command line, it gives you an organized way to view databases, tables, fields, rows, run SQL commands, import and export data, and inspect relationships between tables.",
          "To open phpMyAdmin in a local XAMPP environment, launch the XAMPP Control Panel, then click Start next to Apache and MySQL. When both services turn green, open your browser and go to http://localhost/phpmyadmin. If the login or dashboard appears, the server is running and phpMyAdmin is ready.",
          "In a local training environment, the username is commonly root, and the password may be empty depending on the XAMPP setup. This is acceptable for learning on your own machine only. On real servers, always use a dedicated account, a strong password, and limited permissions because databases often contain sensitive information.",
          "The first practical step is creating a database. Open the Databases tab, enter a clear name such as php_course, choose utf8mb4_general_ci to support Arabic, English, and symbols, then click Create. The new database will appear in the sidebar, and you can start creating tables inside it.",
          "To create a table, select the database from the sidebar, enter a table name such as users, and choose the number of columns you need. A simple users table may include id, name, email, and created_at. After clicking Create, phpMyAdmin shows the screen where each column is configured.",
          "When defining columns, pay close attention to data types. The id field is usually INT, marked as Primary Key, and set to Auto Increment so every row receives a unique number automatically. Names and emails usually use VARCHAR, while dates use DATE, DATETIME, or TIMESTAMP depending on the use case.",
          "The Structure tab explains the table design: each row on this screen represents a column in the table, not a user record. Here you can see the column name, type, length, whether it allows NULL values, and whether it has a key or index. This tab matters before inserting data because it defines how data will be stored.",
          "The Insert tab is used to add a new row to the table. Fill in the values and click Go. Then open the Browse tab to confirm that the record was saved. If an error appears, read it carefully; common causes are invalid data types, required fields left empty, or duplicate values in a unique key.",
          "The SQL tab lets you write commands directly, such as SELECT, INSERT, UPDATE, and DELETE. Use it to understand what happens behind the graphical interface. Even if you start visually, learning to read SQL is essential because every PHP application communicates with the database through SQL queries.",
          "When a database has more than one table, relationships become important. For example, an orders table can contain user_id that points to id in the users table. Relation View and relationship diagrams help you see and document these links visually, making the database easier to understand and extend.",
          "Use Export to create a SQL backup of the database, and use Import to restore a backup or move it to another machine. Before making major changes to tables or data, create a backup so you can recover safely if something goes wrong during practice or development."
        ]
      }
    },
    {
      "id": "intro-web-platform",
      "type": "lectures",
      "date": "2026-05-23",
      "duration": "12 min",
      "level": "Beginner",
      "title": {
        "ar": "مقدمة: كيف تعمل المنصات التعليمية على الويب؟",
        "en": "Introduction: How Educational Web Platforms Work"
      },
      "summary": {
        "ar": "شرح مبسط لفكرة الصفحات التعليمية، الروابط العامة، وتنظيم المحتوى بطريقة سهلة للزوار.",
        "en": "A simple explanation of educational pages, public links, and organizing content in a visitor-friendly way."
      },
      "mediaType": "video",
      "video": "",
      "body": {
        "ar": [
          "في هذه المحاضرة نتعرف على الفرق بين الموقع الثابت والتطبيق الذي يحتاج إلى خادم.",
          "الفكرة الأساسية أن المنصة التعليمية تحتاج صفحات واضحة وروابط مفهومة ومحتوى منظما.",
          "هذا الأسلوب مناسب لمنصة تعليمية مفتوحة لا تحتاج تسجيل دخول أو لوحة تحكم خاصة."
        ],
        "en": [
          "In this lecture, we explain the difference between a static website and a server-backed application.",
          "An educational platform needs clear pages, understandable links, and organized content.",
          "This approach is suitable for an open educational platform that does not require login or a private dashboard."
        ]
      }
    },
    {
      "id": "html-roadmap",
      "type": "programming",
      "date": "2026-05-23",
      "duration": "20 min",
      "level": "Beginner",
      "title": {
        "ar": "خطة تعلم HTML للمبتدئين",
        "en": "HTML Learning Roadmap for Beginners"
      },
      "summary": {
        "ar": "مسار عملي يبدأ من بنية الصفحة، ثم العناوين، الروابط، الصور، النماذج، ومعايير الوصول.",
        "en": "A practical roadmap covering page structure, headings, links, images, forms, and accessibility basics."
      },
      "mediaType": "article",
      "body": {
        "ar": [
          "ابدأ بفهم هيكل الصفحة: doctype، عنصر html، الرأس head، وجسم الصفحة body.",
          "بعد ذلك تعلم العناوين والفقرات والقوائم والروابط لأنها تشكل أساس المحتوى المقروء.",
          "لا تؤجل الوصول accessibility؛ استخدام عناصر صحيحة يجعل الصفحة أوضح للزوار ومحركات البحث."
        ],
        "en": [
          "Start by understanding the page structure: doctype, html, head, and body.",
          "Then learn headings, paragraphs, lists, and links because they form the foundation of readable content.",
          "Do not postpone accessibility; semantic elements make the page clearer for visitors and search engines."
        ]
      }
    },
    {
      "id": "adsense-educational-site",
      "type": "articles",
      "date": "2026-05-23",
      "duration": "6 min read",
      "level": "Guide",
      "title": {
        "ar": "كيف تجعل المنصة التعليمية أكثر جودة وثقة",
        "en": "How to Make an Educational Platform Clear and Trustworthy"
      },
      "summary": {
        "ar": "أهم العناصر: محتوى أصلي، صفحات قانونية واضحة، تنقل مفهوم، وتجربة قراءة مريحة.",
        "en": "The essentials: original content, clear legal pages, understandable navigation, and a comfortable reading experience."
      },
      "mediaType": "article",
      "body": {
        "ar": [
          "الموقع التعليمي يحتاج إلى قيمة واضحة قبل الإعلانات: دروس، مقالات، مواد، وصفحات تعريفية.",
          "تجنب الصفحات الفارغة أو المحتوى المنسوخ أو العناوين التي تعد بشيء ولا تقدمه.",
          "سياسة الخصوصية وصفحة التواصل ليست زينة؛ هي جزء من ثقة الزائر ومراجعة المنصة."
        ],
        "en": [
          "An educational website needs clear value before ads: lessons, articles, materials, and identity pages.",
          "Avoid empty pages, copied content, or titles that promise something the page does not deliver.",
          "The privacy policy and contact page are not decorative; they help visitor trust and platform review."
        ]
      }
    },
    {
      "id": "weekly-learning-note",
      "type": "blog",
      "date": "2026-05-23",
      "duration": "3 min read",
      "level": "Note",
      "title": {
        "ar": "ملاحظة أسبوعية: التعلم يحتاج إلى نظام بسيط",
        "en": "Weekly Note: Learning Needs a Simple System"
      },
      "summary": {
        "ar": "كيف تساعدك الملاحظات الصغيرة على بناء محتوى تعليمي مستمر بدون ضغط.",
        "en": "How small notes help you build continuous educational content without pressure."
      },
      "mediaType": "article",
      "body": {
        "ar": [
          "أفضل طريقة للاستمرار هي كتابة ملاحظات قصيرة بعد كل تجربة تعلم.",
          "بعد أيام قليلة، تتحول هذه الملاحظات إلى مقال أو درس أو مادة قابلة للمشاركة.",
          "المهم أن يكون المحتوى مفيدا ومفهوما، وليس طويلا فقط."
        ],
        "en": [
          "The best way to stay consistent is to write short notes after every learning experience.",
          "After a few days, these notes can become an article, lesson, or shareable resource.",
          "What matters is that the content is useful and understandable, not merely long."
        ]
      }
    },
    {
      "id": "website-checklist",
      "type": "materials",
      "date": "2026-05-23",
      "duration": "PDF",
      "level": "Checklist",
      "title": {
        "ar": "قائمة فحص قبل نشر موقع تعليمي",
        "en": "Educational Website Publishing Checklist"
      },
      "summary": {
        "ar": "قائمة تساعدك على التأكد من الروابط، الصفحات القانونية، المحتوى الأصلي، وتجربة الهاتف.",
        "en": "A checklist for links, legal pages, original content, and mobile experience before publishing."
      },
      "mediaType": "download",
      "file": "",
      "body": {
        "ar": [
          "استخدم هذه القائمة قبل نشر أي تحديث كبير.",
          "تأكد من أن كل صفحة لها عنوان ووصف وروابط واضحة.",
          "استخدم ملفا واضح الاسم ووصفا مفيدا حتى يعرف الزائر فائدة المادة قبل فتحها."
        ],
        "en": [
          "Use this checklist before publishing any major update.",
          "Make sure every page has a title, description, and clear links.",
          "Replace the demo file with the real PDF when uploading materials."
        ]
      }
    }
  ]
};
