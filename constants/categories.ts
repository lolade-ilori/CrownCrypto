// src/lib/constants/categories.ts
import CameraIcon from "@/assets/icons/camera-svgrepo-com.svg";
import ChatIcon from "@/assets/icons/chat-svgrepo-com.svg";
import ComputerIcon from "@/assets/icons/computer-svgrepo-com.svg";
import GameIcon from "@/assets/icons/game-svgrepo-com.svg";
import HeadphoneIcon from "@/assets/icons/headphone-svgrepo-com.svg";
import MusicIcon from "@/assets/icons/music-svgrepo-com.svg";
import ShopIcon from "@/assets/icons/shop-svgrepo-com.svg";
import type { Category } from "@/types/category";

export const CATEGORIES: Category[] = [
  { id: "chat", label: "Chat", Icon: ChatIcon },
  { id: "music", label: "Music", Icon: MusicIcon },
  { id: "games", label: "Games", Icon: GameIcon },
  { id: "camera", label: "Camera", Icon: CameraIcon },
  { id: "shopping", label: "Shop", Icon: ShopIcon },
  { id: "audio", label: "Headphones", Icon: HeadphoneIcon },
  { id: "electronics", label: "Computer", Icon: ComputerIcon },
];
