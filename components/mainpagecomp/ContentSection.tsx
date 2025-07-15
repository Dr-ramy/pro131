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
            <br />- ولاء الشافعى إبراهيم الشافعى
            <br />
            <br /> <strong> إشراف:</strong>
            <br />- أ.د/ أماني علي السيد رجب
            <br />-  أستاذ المناهج وطرق تدريس الدراسات الاجتماعية ورئيس القسم  
            <br />- كلية التربية -  جامعة المنصورة
            <br />
            <br /> <strong> إشراف:</strong>
            <br />- د / لمياء مختار فتحى
             <br />- مدرس المناهج وطرق تدريس الدراسات الاجتماعية 
              <br />-كلية التربية_ جامعة المنصورة
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
يعيش العالم اليوم العصر الرقمي، حيث أصبحت الحياة الرقمية تطوق كل جوانب الحياة، وتحولت تفاصيل الحياة اليويمة لممارسات رقمية، وفي ظل التطورات السريعة والمتلاحقة للتكنولوجيا في العصر الرقمي، فرض التطور التكنولوجي والتحول الرقمي نفسه على الحياة عامة، والتربية خاصة.
           
            {!isExpandedIntro && <span className="dot"> ...</span>}
            {isExpandedIntro && (
              <span className="moreText">

وفي هذا العصر الذي يوصف بالرقمية والمعلوماتية، ويتعاظم فيه دور المكون التكنولوجي في التعليم، زادت الحاجة إلى إيجاد صيغ جديدة، قادرة على تلبية كثير من المتطلبات التكنولوجية في بيئة التعلم، حيث تحول المعلم من مصدر للمعرفة، إلى مرشد وموجه، وأصبح يتنقل ما بين ممارس للقيادة والبحث، ومجيد لفن الاتصال، والتعامل مع الأدوات التكنولوجية الحديثة وتطوراتها؛ لذلك فقد أُلقيت مسؤوليات جديدة على المعلم، ليس في مجال تخصصه وأسلوب تدريسه فحسب، بل في مدى فهمه وتنمية وعيه واستيعابه لمتطلبات توظيف هذه التكنولوجيا، كما تعاظم دور المتعلم، وزاد اعتماده على التكنولوجيا، واستخدامها في التعلم بشكل أساسي.
             
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
            <strong>الهدف العام للبرنامج:</strong>
            <br />- يهدف البرنامج إلى تنمية الكفايات الرقمية والذكاء الانفعالي لدى الطلا معلمي الدراسات الاجتماعية.
            <br />
            <strong>الأهداف الخاصة للبرنامج:</strong>
            <br />- تنمية مهارات استخدام مصادر الشبكة العالمية.
            <br />- تنمية مهارات التعامل مع الفعاليات السحابية.
            <br />- تنمية مهارات التعامل مع برنامج مستندات جوجل.
            <br />- تنمية مهارات التعامل مع العروض التقديمية.
            <br />- تنمية مهارات التعامل مع جداول البيانات.            
            {!isExpandedGoals && <span className="dot"> ...</span>}
            {isExpandedGoals && (
              <span className="moreText">
            <br />- تنمية مهارات إنشاء اختبار إلكتروني.
            <br />- تنمية مهارات الإعداد النهائي للدرس التكنولوجي وتنفيذه.
            <br />- تنمية الكفايات الرقمية لدى الطالب معلم الدراسات الاجتماعية.
            <br />- تنمية أبعاد الذكاء الوجداني لدى الطالب معلم الدراسات الاجتماعية.            
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
            <strong> تتمثل الكفايات الرقمية لمعلم الدراسات الاجتماعية في القرن الحادي والعشرين في </strong>
            <br />- استخدام مصادر الشبكة العالمية
            <br />- التعامل مع تخزين الفعاليات السحابية.
            <br />- مهارة التعامل مع برامج مستندات جوجل
            <br />- مهارات التعامل مع العروض التقديمية.
            <br />- مهارات التعامل مع جداول البيانات.
            <br />- إنشاء اختبار إلكتروني.
            <br />- الإعداد النهائي للدرس التكنولوجي وتنفيذه.  
          </p>
        </div>
      </CardContent>
    </Card>


  </div>
</div>

  );
}
