'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ContentSection() {
  const [isExpandedIntro, setIsExpandedIntro] = useState(false);
  const [isExpandedGoals, setIsExpandedGoals] = useState(false);
  const [isExpandedContent, setIsExpandedContent] = useState(false);



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
            <br />- محمد عدنان محمد
            <br />
            <br /> <strong> إشراف:</strong>
            <br />- أ.د/ أماني علي السيد رجب
            <br />-  أستاذ المناهج وطرق تدريس الدراسات الاجتماعية ورئيس القسم  
            <br />- كلية التربية -  جامعة المنصورة
            <br />
            <br /> <strong> إشراف:</strong>
            <br />-               د/ هالة السيد أحمد عبد العال
             <br />-مدرس المناهج وطرق تدريس الدراسات الاجتماعية
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
يُعد التعلم المدمج من الاتجاهات الحديثة في تطوير التعليم، لما يجمعه بين مزايا التعليم التقليدي والإلكتروني. وتُعد المعايير الدولية إطارًا مرجعيًا يضمن جودة هذا النوع من التعلم وفاعليته. في ضوء ذلك، تزداد الحاجة إلى توظيف هذه المعايير في برامج إعداد معلمي الاجتماعيات. 
            {!isExpandedIntro && <span className="dot"> ...</span>}
            {isExpandedIntro && (
              <span className="moreText">
يهدف هذا التوجه إلى تنمية مهارات التدريس لدى الطلاب المعلمين، بالإضافة إلى تعزيز دافعيتهم المهنية. ومن هنا تأتي أهمية دراسة فاعلية المعايير الدولية في التعلم المدمج لتحقيق هذه الأهداف.
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
            <br />- يهدف البرنامج إلى تنمية مهارات تدريس الاجتماعيات لدى الطلاب معلمي الاجتماعيات بالجامعات العراقية.
            <br />
            <strong>الأهداف الخاصة للبرنامج:</strong>
            <br />- تنمية مهارات التخطيط الجيد للدروس لدى الطلاب معلمي الاجتماعيات بالجامعات العراقية.
            <br />- تنمية مهارات تحليل محتوى الدرس لدى الطلاب معلمي الاجتماعيات بالجامعات العراقية.
            <br />- تنمية مهارات صياغة الأهداف التربوية لدى الطلاب معلمي الاجتماعيات بالجامعات العراقية.
            <br />- تنمية مهارات كتابة خطة الدرس اليومية والسنوية لدى الطلاب معلمي الاجتماعيات بالجامعات العراقية.
            {!isExpandedGoals && <span className="dot"> ...</span>}
            {isExpandedGoals && (
              <span className="moreText">
            <br />- تنمية مهارات التهيئة والتمهيد للدرس لدى الطلاب معلمي الاجتماعيات بالجامعات العراقية.
            <br />- تنمية مهارات تعزيز سلوكيات الطلاب لدى الطلاب معلمي الاجتماعيات بالجامعات العراقية.
            <br />- تنمية مهارات استثارة دافعية الطلاب للتعلم لدى الطلاب معلمي الاجتماعيات بالجامعات العراقية.
            <br />- تنمية مهارات التنوع في طرق التدريس لدى الطلاب معلمي الاجتماعيات بالجامعات العراقية.
            <br />- تنمية مهارات استخدام الوسائل التعليمية لدى الطلاب معلمي الاجتماعيات بالجامعات العراقية.
            <br />- تنمية مهارات طرح الأسئلة الصفية لدى الطلاب معلمي الاجتماعيات بالجامعات العراقية.
            <br />- تنمية مهارات إدارة الصف الدرس لدى الطلاب معلمي الاجتماعيات بالجامعات العراقية.
            <br />- تنمية مهارات غلق الدرس لدى الطلاب معلمي الاجتماعيات بالجامعات العراقية.
            <br />- الإلمام بطرائق التقويم التربوي المناسبة لدى الطلاب معلمي الاجتماعيات بالجامعات العراقية.
            <br />- معرفة الاتجاهات الحديثة في تقويم الاجتماعيات في القرن الحادي والعشرين في ضوء الاتجاهات العالمية.
            <br />- معرفة كيفية تطبيق التكليف المنزلي بطريقة فعالة لدى الطلاب معلمي الاجتماعيات بالجامعات العراقية.              </span>
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
            <strong>يتكون البرنامج من الوحدات التدريبية الآتية: </strong>
            <br />
            <strong>الوحدة الأولى: مهارات التخطيط للدرس: </strong>
            <br />- التخطيط. 
            <br />- تحليل محتوى الدرس.
            <br />- الأهداف التربوية.
            <br />- خطة الدرس.            
            <br />
            <strong> الوحدة التدريبية الثانية: مهارات تنفيذ الدرس: </strong>
            <br />- التهيئة والتمهيد للدرس.
            <br />- التعزيز.
            <br />- التنوع في طرق التدريس.
            <br />- استخدام الوسائل التعليمية.

            {!isExpandedContent && <span className="dot"> ...</span>}
            {isExpandedContent && (
            <span className="moreText">
            <br />- طرح الأسئلة الصفية.
            <br />- إدارة الصف.
            <br />- غلق الدرس.           
            <br />
            <strong>الوحدة التدريبية الثالثة: التقويم التربوي:  </strong>
            <br />- تعريف التقويم التربوي.
            <br />- الفرق بين التقويم والتقييم والقياس.
            <br />- أهداف التقويم التربوي.
            <br />- أهمية التقويم التربوي.
            <br />- خصائص التقويم الفعال.
            <br />- أنواع التقويم التربوي.
            <br />- اتجاهات حديثة في التقويم التربوي
            <br />- شروط الواجب المنزلي الفعال.          
            </span>
            )}
          </p>
        </div>

        <div className="mt-auto flex justify-end pt-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpandedContent(!isExpandedContent)}
          >
            {isExpandedContent ? "إخفاء" : "المزيد"}
          </Button>
        </div>
      </CardContent>
    </Card>


  </div>
</div>

  );
}
