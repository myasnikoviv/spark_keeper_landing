"use client";

import { motion } from "framer-motion";
import { Users, Star, ShieldCheck, Activity } from "lucide-react";

interface TrustSignalsProps {
    content: {
        activeUsers: string;
        rating: string;
        privacy: string;
    };
}

export function TrustSignals({ content }: TrustSignalsProps) {
    return (
        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-y border-white/5 bg-[#050508]/50 backdrop-blur-sm p-8 rounded-xl relative overflow-hidden">

                {/* Scanning Line */}
                <motion.div
                    className="absolute top-0 bottom-0 w-[2px] bg-spark-orange/50 blur-[2px] z-0"
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <SignalItem icon={Users} label="Active Nodes" value={content.activeUsers} delay={0} />
                <SignalItem icon={Star} label="System Rating" value={content.rating} delay={0.2} />
                <SignalItem icon={ShieldCheck} label="Security Protocol" value={content.privacy} delay={0.4} />

            </div>
        </section>
    );
}

function SignalItem({ icon: Icon, label, value, delay }: { icon: any; label: string; value: string; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex items-center gap-4 relative z-10"
        >
            <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center bg-white/5">
                <Icon className="w-4 h-4 text-spark-orange" />
            </div>
            <div className="flex flex-col font-mono">
                <span className="text-[10px] text-white/30 uppercase tracking-widest">{label}</span>
                <span className="text-white text-lg tracking-wider">{value}</span>
            </div>
        </motion.div>
    );
}
