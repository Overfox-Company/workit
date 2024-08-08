import { motion } from 'framer-motion'
import { FC } from 'react'
const SecuenceFade: FC<{
    children: React.ReactNode, index: number,
    fromX?: number,
    toX?: number,
    fromY?: number,
    toY?: number,
    duration?: number

}> = ({ children, index, fromX = 0, fromY = 0, toY = 0, toX = 0, duration = 0.4 }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
                initial: { opacity: 0, x: fromX, y: fromY },
                animate: {
                    x: toX, y: toY,
                    opacity: 1,
                    transition: { delay: index * 0.05, duration: duration, ease: 'easeInOut' }
                },
                exit: { opacity: 0 }
            }}
        >
            {children}
        </motion.div>
    )
}
export default SecuenceFade;