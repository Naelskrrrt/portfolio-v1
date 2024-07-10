import { motion } from "framer-motion";
import Image from "next/image";

const Badge = ({ className }: { className: string }) => {
	return (
		<div className={`flex items-center space-x-2 ${className}`}>
			<div className="relative">
				<Image
					src="/profile.jpg" // Assurez-vous d'avoir une image de profil à cette source
					alt="Profile"
					className="w-12 h-12 rounded-full"
					width={100}
					height={100}
				/>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.3 }}
					className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"
				/>
			</div>
			<span className="text-sm font-medium text-gray-700">Available</span>
		</div>
	);
};

export default Badge;
