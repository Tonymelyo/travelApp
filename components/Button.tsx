import React from 'react'
import Image from 'next/image'

interface ButtonProps {
    type: 'button' | 'submit';
    title: string
    icon?: string
    variant?: string;
    full?: boolean;
}

function Button(props: ButtonProps) {
    const { type, title, icon, variant, full } = props
    return (
        <button
        className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
          type={type}
        >
          {icon && <Image src={icon} alt={title} width={24} height={24} />}
          <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
        </button>
      )
}

export default Button