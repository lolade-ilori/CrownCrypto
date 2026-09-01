import type { FC } from "react";
import type { SvgProps } from "react-native-svg";

export interface Category {
  id: string;
  label: string;
  Icon: FC<SvgProps>;
}
