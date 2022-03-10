import { MouseEventHandler, ReactNode } from 'react'
import CrossMarkIcon from '../Common/Icons/CrossMark.icon'

const Modal = ({
  title,
  children,
  onClose,
}: {
  title: string
  children: ReactNode
  onClose: MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <>
      <button
        onClick={onClose}
        className="fixed top-0 left-0 z-10 h-full w-full cursor-default bg-tuna bg-opacity-30"
      />
      <div className="fixed top-[50%] left-[50%] z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-[4px] bg-white p-[40px]">
        <button className="absolute top-[24px] right-[24px]" onClick={onClose}>
          <CrossMarkIcon />
        </button>
        <div className="font-inter text-[20px] font-semibold text-tuna">{title}</div>
        {children}
      </div>
    </>
  )
}

export default Modal