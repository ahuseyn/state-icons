import { SVGProps } from "react";
export interface Icon extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}
