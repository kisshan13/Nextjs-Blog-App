import { ButtonHTMLAttributes } from "react";
import Button from "./button";
import { ButtonI } from "../props/props";

export default function EditButton({ className, ...props }: ButtonI) {
    return (
        <Button variant="dark/regular" className={className} {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" className=" fill-white" width="20" height="20px" viewBox="0 0 24 24" fill="#2f2f2f">
                <g id="Edit / Edit_Pencil_Line_02">
                    <path className=" fill-white" id="Vector" d="M4 20.0001H20M4 20.0001V16.0001L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L8 20.0001L4 20.0001Z" stroke="#2f2f2f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </svg>
        </Button>
    )
}