'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ContentSection() {
  const [isExpandedIntro, setIsExpandedIntro] = useState(false);
  const [isExpandedGoals, setIsExpandedGoals] = useState(false);



  return (
    <div dir="rtl" className="container mx-auto px-4 py-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 4: Authors */}
    <Card className="flex flex-col h-full p-0">
      <CardHeader className="bg-gray-600 text-white text-center rounded-t-md p-2">
        <CardTitle className="text-base">المؤلفون</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow custom-font text-sm sm:text-base p-4">
        <div>
            <p>
            <strong> اعداد:</strong>
            <br />- فاطمة احمد محمود الجمال
            <br />
            <br /> <strong> إشراف:</strong>
<br />- أ.د/ إسماعيل محمد إسماعيل حسن
<br />- أستاذ تكنولوجيا التعليم
<br />- ورئيس قسم تكنولوجيا التعليم
<br />- كلية التربية جامعة المنصورة           
 <br />
            <br /> <strong> إشراف:</strong>
<br />- أ.د/ ريهام محمد أحمد الغول
<br />- أستاذ تكنولوجيا التعليم
<br />- ومدير مركز تكنولوجيا التعليم
<br />- كلية التربية جامعة المنصورة
            </p>

        </div>
      </CardContent>
    </Card>

    {/* Card 1: Introduction */}
    <Card className="flex flex-col h-full p-0">
      <CardHeader className="bg-gray-600 text-white text-center rounded-t-md p-2">
        <CardTitle className="text-base">مقدمة</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow custom-font text-sm sm:text-base p-4">
        <div>
          <p>
في عصر التحول الرقمي السريع، أصبحت الحاجة إلى بيئات تعليمية تكيفية أمرًا ملحًا لتلبية احتياجات المتعلمين المتنوعة. تقوم هذه البيئات على توظيف تقنيات الذكاء الاصطناعي وتحليل البيانات لتقديم محتوى يتناسب مع مستويات تجهيز المعلومات لدى الطلاب.
           
            {!isExpandedIntro && <span className="dot"> ...</span>}
            {isExpandedIntro && (
              <span className="moreText">

 فعندما يحصل الطالب على تجربة تعلم مخصصة وفق قدراته ومعارفه السابقة، يزداد مستوى التفاعل والدافعية للتعلم. وتعد التهيئة التكيفية للمحتوى عاملاً أساسياً في تعزيز مهارات التمكين الرقمي التي تمكّن الطلاب من التعامل بكفاءة مع الأدوات الرقمية وحل المشكلات التقنية. كما أن هذه البيئات تسهم في تنمية حب الاستطلاع من خلال تقديم تحديات وأسئلة تتوافق مع مستوى تقدم المتعلم وتدفعه لاكتشاف المزيد. إن الدمج بين التكيف التكنولوجي واستراتيجيات التعلم النشط يجعل العملية التعليمية أكثر فاعلية ومتعة. إضافة إلى ذلك، فإن توظيف تحليلات التعلم يمكن المعلم من متابعة تقدم الطلاب وتقديم دعم مخصص. وبهذا تتحقق بيئة تعليمية مرنة تراعي الفروق الفردية وتدعم التفكير النقدي والإبداعي. كل هذه المزايا تجعل من تطوير بيئة تكيفية وفق مستويات تجهيز المعلومات ضرورة لتحقيق تعلم مستدام وابتكاري.

              </span>
            )}
          </p>
        </div>
        <div className="mt-auto flex justify-end pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpandedIntro(!isExpandedIntro)}
          >
            {isExpandedIntro ? "إخفاء" : "المزيد"}
          </Button>
        </div>
      </CardContent>
    </Card>

    {/* Card 2: Goals */}
    <Card className="flex flex-col h-full p-0">
      <CardHeader className="bg-gray-600 text-white text-center rounded-t-md p-2">
        <CardTitle className="text-base">الأهداف</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow custom-font text-sm sm:text-base p-4">
        <div>
          <p>
            <strong>الأهداف العامة للبرنامج:</strong>
            <br />
            <strong>بعد دراسة هذا المحتوى ينبغي أن يكون الطالب قادرا على :</strong>
            <br />- أن يعرّف الطالب مفهوم التمكين الرقمي وأهميته في بيئة التعلم الإلكتروني بدقة.
            <br />- أن يعدد الطالب المكونات الأساسية للتمكين الرقمي (المهارات، الأدوات، الأمان الرقمي) بعد قراءة المحتوى التعليمي.
            <br />- أن يفسر الطالب العلاقة بين التمكين الرقمي وتحقيق التعلم الذاتي من خلال أمثلة عملية.
            <br />- أن يستخدم الطالب أحد أنظمة إدارة التعلم (LMS) بفاعلية لإنجاز نشاط تعليمي محدد.
            <br />- أن يطبق الطالب معايير الأمان الرقمي عند مشاركة المعلومات أو الملفات على الإنترنت.         
            {!isExpandedGoals && <span className="dot"> ...</span>}
            {isExpandedGoals && (
              <span className="moreText">
            <br />- أن يوظف الطالب أدوات التعاون الرقمي (مثل Google Workspace أو Microsoft Teams) لإنجاز مشروع جماعي.
            <br />- أن ينشئ الطالب محتوى رقميًا (فيديو، عرض تقديمي، إنفوجرافيك) باستخدام أدوات رقمية حديثة.
            <br />- أن يبدي الطالب رغبة في اكتساب مهارات جديدة مرتبطة بالتمكين الرقمي من خلال المشاركة في الأنشطة التفاعلية.
            <br />- أن يظهر الطالب التزامًا بالأخلاقيات الرقمية أثناء تفاعله في البيئة التعليمية.
            <br />- أن يثمن الطالب دور التمكين الرقمي في تحسين فرص التعلم والعمل من خلال تدوينة أو مناقشة صفية.        
            </span>
            )}
          </p>
        </div>
        <div className="mt-auto flex justify-end pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpandedGoals(!isExpandedGoals)}
          >
            {isExpandedGoals ? "إخفاء" : "المزيد"}
          </Button>
        </div>
      </CardContent>
    </Card>

    {/* Card 3: Content */}
    <Card className="flex flex-col h-full p-0">
      <CardHeader className="bg-gray-600 text-white text-center rounded-t-md p-2">
        <CardTitle className="text-base">المحتوى</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow custom-font text-sm sm:text-base p-4">
        <div>
          <p>
            <strong> يتضمن المحتوى الموديولات التالية : </strong>
            <br />-   استخدام مصادر الشبكة العالمية والذكاء الأصطناعي.
            <br />- التعامل مع تخزين السحابي.
            <br />- مهارات التعامل مع برامج مستندات جوجل
            <br />- مهارات التعامل مع العروض التقديمية.
            <br />- مهارات التعامل مع جداول البيانات.
            <br />- إنشاء اختبار إلكتروني.
            <br />- إعداد الدرس التكنولوجي وتنفيذه.           
          </p>
        </div>
      </CardContent>
    </Card>


  </div>
</div>

  );
}
