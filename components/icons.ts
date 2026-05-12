/**
 * 콘텐츠 config (`content/site.ts`) 에서 문자열로 참조할 수 있는 아이콘 레지스트리.
 * 새로운 아이콘을 사용하려면:
 *   1. 아래 import 에 lucide 아이콘을 추가
 *   2. iconRegistry 에 등록
 *   3. content/site.ts 의 IconName 타입에 키 추가
 */
import {
  Clock,
  Compass,
  FileText,
  Globe,
  HeartHandshake,
  LineChart,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

import type { IconName } from "@/content/site";

export const iconRegistry: Record<IconName, LucideIcon> = {
  Compass,
  Globe,
  HeartHandshake,
  LineChart,
  ShieldCheck,
  Users,
  Phone,
  MessageCircle,
  Video,
  Clock,
  FileText,
};
