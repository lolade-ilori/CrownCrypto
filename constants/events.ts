// src/lib/constants/events.ts
import type { EventItem } from "@/types/event";

export const EVENTS: EventItem[] = [
  {
    id: "coachella-2026",
    title: "Coachella weekend pass",
    imageUrl:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    points: 5000,
    friendsGoing: 2,
    friendAvatars: [
      "https://i.pravatar.cc/150?img=12",
      "https://i.pravatar.cc/150?img=45",
    ],
  },
  {
    id: "primavera-2026",
    title: "Primavera Sound",
    imageUrl:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    points: 3500,
    friendsGoing: 5,
    friendAvatars: [
      "https://i.pravatar.cc/150?img=32",
      "https://i.pravatar.cc/150?img=8",
    ],
  },
  {
    id: "tomorrowland-2026",
    title: "Tomorrowland",
    imageUrl:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80",
    points: 8000,
    friendsGoing: 12,
    friendAvatars: [
      "https://i.pravatar.cc/150?img=15",
      "https://i.pravatar.cc/150?img=60",
    ],
  },
];
