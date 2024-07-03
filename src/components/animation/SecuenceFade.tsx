import { motion } from 'framer-motion'
import { FC } from 'react'
const SecuenceFade: FC<{ children: React.ReactNode, index: number }> = ({ children, index }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
                initial: { opacity: 0 },
                animate: {
                    opacity: 1,
                    transition: { delay: index * 0.05, duration: 0.4, ease: 'easeInOut' }
                },
                exit: { opacity: 0 }
            }}
        >
            {children}
        </motion.div>
    )
}
export default SecuenceFade;