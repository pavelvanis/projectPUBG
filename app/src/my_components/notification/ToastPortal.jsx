
import { useToastPortal } from "../hooks"
import { Toast } from './Toast'
import { v4 as uuid } from "uuid"
import ReactDOM from 'react-dom'
import styles from './style.module.css'
import { forwardRef, useImperativeHandle, useState } from "react"

export const ToastPortal = forwardRef(
    ({ autoClose, autoCloseTime }, ref) => {

        const [toasts, setToasts] = useState([])
        const { loaded, portalId } = useToastPortal()

        const removeToast = id => {
            setToasts(toasts.filter(t => t.id !== id))
        }

        useImperativeHandle(ref, () => ({
            addMessage(toast) {
                setToasts([...toasts, { ...toast, id: uuid() }])
            },
        }))

        return loaded ? (ReactDOM.createPortal(
            <div className={styles.container}>
                {toasts.map(t => (
                    <Toast
                        key={t.id}
                        mode={t.mode}
                        message={t.message}
                        onClose={() => removeToast(t.id)}
                    />

                ))}
            </div>,

            document.getElementById(portalId),
        )
        ) : <></>

    },
)




