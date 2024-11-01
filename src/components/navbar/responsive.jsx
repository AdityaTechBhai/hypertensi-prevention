import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ResponsiveMenu = ({ open, onClose }) => {
    const menuRef = useRef(null);

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <AnimatePresence mode="wait">
            {open && (
                <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute top-20 left-0 w-full h-screen z-20"
                >
                    <div ref={menuRef} className="text-xl font-manrope font-semibold uppercase bg-blue-300 text-white py-10 m-6 rounded-3xl">
                        <ul className="flex flex-col justify-center items-center gap-10 cursor-pointer">
                            <li onClick={onClose}>Home</li>
                            <li onClick={onClose}>Services</li>
                            <li onClick={onClose}>Find Doctors</li>
                            <li onClick={onClose}>About Us</li>
                            <li onClick={onClose}>Blog</li>
                            <li onClick={onClose}>Contact Us</li>
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResponsiveMenu;
