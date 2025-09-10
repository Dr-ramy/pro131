"use client";

import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger,} from "@/components/ui/sheet";
import LessonDropdown from "../mainitems/LessonDropdown";
import CustomAccordion from "../mainitems/CustomAccordion";
import { Button } from "@/components/ui/button";
import { ButtonItem, VideoItem } from "@/types/types";
import { lessons } from "./LessonData";
import { useState } from "react";
import { FaChevronCircleLeft,FaUsers,FaGlobe, FaCog,FaClipboardCheck,FaComments } from "react-icons/fa";
import { useRouter } from 'next/navigation';


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
    "الأهداف التعليمية",
    "تخطيط الدروس",
    "الوسائل التعليمية",
    "طرق التدريس",
    "الأنشطة التعليمية",
    "عرض الدرس",
    "الأسئلة الصفية",
    "إدارة الصف",
    "التعزيز",
    "استثارة الدافعية",
    "التقويم",
    "إعداد الدروس تكنولوجيًا",
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
                icon: <FaClipboardCheck className="text-gray-500" />,
                onClick: () => window.open('https://forms.gle/gRCvBhvpghHmHqNJA', '_blank'),
              },
            ]}
          />
          <hr className="my-1 border-t-2 border-gray-300" />
        {/* مجتمع التعلم */}
          <CustomAccordion
            title="مجتمع التعلم"
            icon={<FaGlobe className="text-lg" />}
            items={[
              {
                id: 'extra2',
                text: 'غرفة المحادثة',
                icon: <FaComments className="text-gray-500" />,
                onClick: () => router.push('/chat'),
              },
                {
                id: 'extra7',
                text: 'مجتمع مهني',
                icon: <FaUsers  className="text-gray-500" />,
                onClick: () => router.push('/content'),
              },
                {
                id: 'extra8',
                text: 'مجتمع مهني',
                icon: <FaCog    className="text-gray-500" />,
                onClick: () => router.push('/content/sub2'),
              },

            ]}
          />
      

          <hr className="my-1 border-t-2 border-gray-300" />

          {/* الوحدة الأولى */}
          <div className="text-lg font-bold text-blue-700">الممارسات التدريسية</div>
          <div className="space-y-2">
            {Object.entries(lessons).slice(0, 12).map(([, items], i) => (
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
                icon: <FaClipboardCheck className="text-gray-500" />,
                onClick: () => window.open('https://forms.gle/94JmF452ZBpUzEzM8', '_blank'),
              },
            ]}
          />
        </SheetContent>
      </Sheet>
    </>
  );
}
