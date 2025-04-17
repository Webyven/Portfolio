import {useState, ReactNode, MouseEvent} from 'react'

interface ButtonCutProps {
  onClick: (event: MouseEvent<HTMLDivElement>) => void
  icon: ReactNode
  color: string
  textColor: string
  backgroundColor: string
  alternativeColor?: string | null
  alternativeColorHover?: string | null
  children: ReactNode
}

export default function ButtonCut({
  onClick,
  icon,
  color,
  textColor,
  backgroundColor,
  alternativeColor = null,
  alternativeColorHover = null,
  children,
}: ButtonCutProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const stripeColor =
    isHovered && alternativeColorHover
      ? alternativeColorHover
      : alternativeColor
      ? alternativeColor
      : color

  return (
    <div
      className='select-none cursor-pointer relative h-10 flex flex-row items-center rounded-md overflow-hidden'
      style={{backgroundColor: backgroundColor}}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className='w-6 h-full relative -left-[3px] transition-colors duration-200'
        style={{backgroundColor: stripeColor}}
      ></div>
      <div
        style={{
          backgroundColor: backgroundColor,
          transform: isHovered ? 'scale(1.15)' : 'scale(1)',
        }}
        className='absolute left-[13px] p-[5px] rounded-full transition-transform duration-200 transform-origin-center'
      >
        {icon}
      </div>
      <div
        className='h-full flex items-center uppercase ps-[24px] pe-5 text-[12px] tracking-[1px] oswald-regular'
        style={{backgroundColor: color, color: textColor}}
      >
        {children}
      </div>
    </div>
  )
}
