import { motion } from 'framer-motion'
import { FC } from 'react'
interface props { children: React.ReactNode, from: string, to: string }
const Scale: FC<props> = ({ children, from, to }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
                initial: { opacity: 0, transform: `scale(${from})` },
                animate: { opacity: 1, transition: { duration: 0.2, ease: 'easeInOut' }, transform: `scale(${to})` },
                exit: { opacity: 0 }
            }}

        >

            {children}
        </motion.div>
    )
}
export default Scale;