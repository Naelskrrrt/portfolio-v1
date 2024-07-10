import { motion } from "framer-motion";
import Image from "next/image";

const Badge = ({ className }: { className: string }) => {
    return (
        <div
            className={`flex items-center bg-white-100/30 backdrop:blur-xl px-2 py-1 rounded-lg space-x-2 ${className}`}>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className=" w-3 h-3 bg-green-500 border-2 border-white rounded-full"
            />
            <span className="text-sm font-medium text-slate-50">Available</span>
        </div>
    );
};

export default Badge;
