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
            <br />-   محمد ثائر مالك
            <br />
            <br /> <strong> إشراف:</strong>
<br />- أ.د/ أماني على السيد رجب
<br />- أستاذ المناهج وطرق تدريس الدراسات الاجتماعية ورئيس القسم
<br />- كلية التربية جامعة المنصورة           
 <br />
            <br /> <strong> إشراف:</strong>
<br />- أ.د/ محمد السيد عبد الرازق مصطفي
<br />- أستاذ المناهج وطرق تدريس التاريخ
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
            في ظل التحولات المتسارعة في الميدان التربوي، بات من الضروري إعادة النظر في أساليب التطوير المهني التقليدية للمعلمين، والاتجاه نحو نماذج أكثر تفاعلية واستدامة. ويُعد البرنامج التدريبي الإلكتروني القائم على مجتمعات التعلم المهنية أحد هذه النماذج الحديثة التي تركز على التعلم التعاوني، والتأمل في الممارسات الصفية، وتبادل الخبرات بين المعلمين. وتجمع هذه البرامج بين مزايا التعليم الإلكتروني، من حيث المرونة والوصول السهل إلى الموارد، وبين مزايا مجتمعات التعلم المهنية التي توفر بيئة داعمة للنمو المهني المستمر. 

           
            {!isExpandedIntro && <span className="dot"> ...</span>}
            {isExpandedIntro && (
              <span className="moreText">

ومن بين النماذج التي لاقت اهتمامًا واسعًا في السنوات الأخيرة ما يُعرف بمجتمعات التعلم المهنية، والتي تمثل توجهًا حديثًا يهدف إلى تحسين أداء المعلمين من خلال التعاون، وتبادل الخبرات، والتأمل في الممارسات التدريسية، ويعتمد هذا النموذج على فكرة أن التطوير المهني الحقيقي لا يتم بمعزل عن البيئة التعليمية، بل ينبثق من داخلها من خلال تفاعل المعلمين وتشارُكهم في بناء المعرفة المهنية. وقد تبنّت العديد من النظم التعليمية هذا التوجه بوصفه إطارًا داعمًا لتحسين جودة التعليم والارتقاء بمستوى الممارسات التربوية داخل المدارس.

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
            <strong>	الهدف العام للبرنامج:</strong>
            <br />- يهدف البرنامج إلى تنمية الكفايات الرقمية والذكاء الانفعالي لدى الطلا معلمي الدراسات الاجتماعية.
             <br />
            <strong>	الأهداف الخاصة للبرنامج:</strong>
            <br />- تنمية مهارات إعداد الأهداف التعليمة في مادة التاريخ.
<br />- تنمية مهارات تخطيط الدرس في مادة التاريخ.
<br />- تنمية مهارات تحديد واختيا الوسيلة التعليمية المناسبة لتدريس التاريخ.
<br />- تنمية مهارات انتقاء طريقة التدريس المناسبة لمحتوى الدرس في مادة التاريخ.
<br />- تنمية مهارات إعداد وتصميم الأنشطة التعليمية المناسبة لمحتوى مادة التاريخ.
<br />- تنمية مهارات التهيئة والتمهيد للدرس في مادة التاريخ.
<br />- تنمية مهارات إعداد وصياغة الأسئلة الصفية في مادة التاريخ.
            {!isExpandedGoals && <span className="dot"> ...</span>}
            {isExpandedGoals && (
              <span className="moreText">
                <br />- تنمية مهارات إجارة الصف.
<br />- تنمية مهارات التعزيز في عملية التدريس.
<br />- تنمية مهارات استثارة الدافعية في عملية التدريس.
<br />- تنمية مهارات تقويم المحتوى في مادة التاريخ  
<br />- تنمية مهارات الإعداد النهائي للدرس التكنولوجي وتنفيذه.
<br />- تنمية مهارات التفكير التصميمي لدى معلمي التاريخ.

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
            <strong> الخطة الزمنية للبرنامج التدريبي : </strong>
            <br />- الموديول الأول : مهارات تخطيط الدرس
            <br />- الموديول الثانية : مهارات تنفيذ الدرس
            <br />- الموديول الثالث: التقويم
            <br />- الموديول الرابع : إعداد الدروس تكنولوجيًا
          </p>
        </div>
      </CardContent>
    </Card>


  </div>
</div>

  );
}
