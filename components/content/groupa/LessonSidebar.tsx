"use client";

import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger,} from "@/components/ui/sheet";
import LessonDropdown from "../mainitems/LessonDropdown";
import CustomAccordion from "../mainitems/CustomAccordion";
import { Button } from "@/components/ui/button";
import { ButtonItem, VideoItem } from "@/types/types";
import { lessons } from "./LessonData";
import { useState } from "react";
import { FaChevronCircleLeft, FaPlus, FaCog } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import GeminiChatModal from "@/components/ai/GeminiChatModal"

type Props = {
  currentVideo?: VideoItem;
  visitedIds?: Set<string>;
  onSelect: (item: ButtonItem) => void;
  buttonHeight: number;
};

export default function LessonSidebar({
  currentVideo,
  visitedIds,
  onSelect,
  buttonHeight,
}: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

const lessonname = [
  "استخدام مصادر الشبكة العالمية",
  "التعامل مع تخزين الفعاليات السحابية",
  "مهارة التعامل مع برامج مستندات جوجل",
  "مهارات التعامل مع العروض التقديمية",
  "مهارات التعامل مع جداول البيانات",
  "إنشاء اختبار إلكتروني",
  "الإعداد النهائي للدرس التكنولوجي وتنفيذه"
];


  return (
    <>
      {/* زر فتح الشريط الجانبي */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            onClick={() => setOpen(true)}
            className="fixed top-[80px] right-0 flex items-center justify-center rounded-none bg-transparent p-0"
            style={{ width: "60px", height: `${buttonHeight}px` }}
          >
            <FaChevronCircleLeft
              style={{ width: "25px", height: "25px", color: "#4B5563", opacity: 0.3 }}
            />
          </Button>
        </SheetTrigger>

        {/* محتوى الشريط الجانبي */}
  <SheetContent side="right" dir="rtl" className="overflow-y-auto overflow-x-hidden p-4 w-80 text-right">
          <SheetHeader className="mb-4">
            <SheetTitle className="text-lg font-semibold">الوحدات الدراسية</SheetTitle>
            <SheetDescription className="text-lg font-semibold"> </SheetDescription>
          </SheetHeader>

          {/* إعداد التعلم */}
          <CustomAccordion
            title="قبل التعلم"
            icon={<FaCog className="text-lg" />}
            items={[
              {
                id: 'extra1',
                text: 'الاختبار القبلي',
                icon: <FaPlus className="text-gray-500" />,
                onClick: () => window.open('https://forms.gle/QNadSDXY3BKJhXdV6', '_blank'),
              },
              {
                id: 'extra2',
                text: 'غرفة المحادثة',
                icon: <FaPlus className="text-gray-500" />,
                onClick: () => router.push('/chat'),
              },
              {
                id: 'extra3',
                text: 'Canva',
                icon: <FaPlus className="text-gray-500" />,
                onClick: () => window.open('https://www.canva.com/', '_blank'),
              },
              {
                id: 'extra4',
                text: 'Microsoft Teams',
                icon: <FaPlus className="text-gray-500" />,
                onClick: () =>
                  window.open('https://www.microsoft.com/en-us/microsoft-teams/group-chat-software', '_blank'),
              },
{
  id: 'extra5',
  customComponent: (
    <GeminiChatModal
      trigger={
        <Button variant="ghost" className="w-full justify-start text-right px-4 py-2 gap-2">
          <FaPlus className="text-gray-500" />
          المساعد الآلي
        </Button>
      }
    />
  )
}

            ]}
          />

          <hr className="my-1 border-t-2 border-gray-300" />

          {/* الوحدة الأولى */}
          <div className="text-lg font-bold text-blue-700">الكفايات الرقمية</div>
          <div className="space-y-2">
            {Object.entries(lessons).slice(0, 7).map(([, items], i) => (
              <LessonDropdown
                key={i}
                title={` ${lessonname[i]}`}
                items={items}
                currentVideo={currentVideo}
                visitedIds={visitedIds}
                onSelect={onSelect}
              />
            ))}
          </div>

          <hr className="my-1 border-t-2 border-gray-300" />

          {/* تثبيت التعلم */}
          <CustomAccordion
            title="بعد التعلم"
            icon={<FaCog className="text-lg" />}
            items={[
              {
                id: 'extra6',
                text: 'الاختبار البعدي',
                icon: <FaPlus className="text-gray-500" />,
                onClick: () => window.open('https://forms.gle/FagFNao3CWKCKdw27', '_blank'),
              },
            ]}
          />
        </SheetContent>
      </Sheet>
    </>
  );
}
