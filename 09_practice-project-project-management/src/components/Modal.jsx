import {useImperativeHandle, useRef} from 'react';
import {createPortal} from 'react-dom';
import Button from './Button.jsx';

export default function Modal({children, buttonCaption, ref}) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref={dialog} className="fixed inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>,
        document.querySelector('#modal-root')
    );
}
