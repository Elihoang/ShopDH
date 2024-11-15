'use client'

import { Icon } from "@mui/material";
import React from "react";
import { IconType } from "react-icons/lib";

interface buttonProps{
    label:string,
    disabled:boolean,
    outline:boolean,
     small:boolean,
     custom:string,
     icon:IconType,
     onClick:(e: React.MouseEvent<HTMLButtonElement>)=> void;
}
const Button:  React.FC<buttonProps> = ({
    label,
    disabled,
    outline,
    small,
    custom,
    icon: Icon,
    onClick
}) => {
    return (  
        <button
        onClick={onClick}
            disabled={disabled}
            className={`disabled:opacity-50
            disabled:cursor-not-allowed
            rounded-md
            hover:opacity-50
            transition
            w-full
            border-slate-700
            flex
            justify-center
            gap-2
            ${outline ? "bg-white" : 'bg-slate-300'}
            ${outline ? "bg-slate-100" : 'bg-slate-200'}
            ${small ? 'text-sm font-light' : 'text-md font-semibold'}
            ${small ? 'py-5 px-5 border-[1px]' : 'py-4 px-2 border-10px'}
            ${custom ? custom : ' '}
            `}>
            {Icon && <Icon size={24}/>}
            {label}
        </button>
    );
}
 
export default Button;