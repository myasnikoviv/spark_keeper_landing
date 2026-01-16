"use client";

import { motion } from "framer-motion";
import { VisualCTA } from "./visual-cta";
import { Copy, Mic, Link2, Calendar, CheckCircle, Smartphone, Globe, Sparkles } from "lucide-react";

interface Scenario {
    title: string;
    input: string;
    ai: string;
    spark: string;
    action: string;
}

interface DemoScenariosProps {
    content: {
        h2: string;
        scenarios: Scenario[];
        ctaSlot: any;
    };
}

export function DemoScenarios({ content }: DemoScenariosProps) {
    return (
        <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32 flex flex-col items-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-light text-white/90 mb-20 tracking-tight text-center text-shadow-glow"
            >
                {content.h2}
            </motion.h2>

            <div className="w-full flex flex-col gap-32">
                {content.scenarios.map((scenario, index) => (
                    <ScenarioBlock key={index} scenario={scenario} index={index} />
                ))}
            </div>

            <VisualCTA content={content.ctaSlot} delay={0.5} className="mt-24" />
        </section>
    );
}

function ScenarioBlock({ scenario, index }: { scenario: Scenario; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full"
        >
            <div className="relative border-l border-white/10 pl-4 md:pl-12 py-4">
                <div className="flex items-center gap-3 mb-8">
                    <span className="text-spark-orange text-xs tracking-widest uppercase font-mono">0{index + 1}</span>
                    <h3 className="text-white text-xl md:text-2xl font-light tracking-wide">
                        {scenario.title}
                    </h3>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">

                    {/* 1. Input */}
                    <div className="w-full md:w-[28%]">
                        <MockUIContainer label="INPUT">
                            <InputVisualisation title={scenario.title} text={scenario.input} />
                        </MockUIContainer>
                    </div>

                    <SparkPathWrapper />

                    {/* 2. AI */}
                    <div className="relative w-12 h-12 shrink-0 rounded-full border border-spark-purple/30 flex items-center justify-center bg-spark-purple/10 backdrop-blur-sm">
                        <Sparkles className="w-5 h-5 text-spark-purple animate-pulse" />
                        <motion.div
                            className="absolute inset-0 rounded-full border-t border-spark-purple"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    <SparkPathWrapper />

                    {/* 3. Spark */}
                    <div className="w-full md:w-[28%]">
                        <div className="relative bg-[#1F1F2E] border border-spark-orange/50 rounded-lg p-4 flex flex-col gap-1 shadow-[0_0_15px_rgba(255,107,53,0.15)] h-full justify-center">
                            <span className="text-[10px] text-spark-orange font-mono uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-spark-orange" />
                                Spark
                            </span>
                            <p className="text-white text-sm font-medium leading-tight">
                                {scenario.spark}
                            </p>
                        </div>
                    </div>

                    <SparkPathWrapper />

                    {/* 4. Action */}
                    <div className="w-full md:w-[28%]">
                        <MockUIContainer label="ACTION">
                            <ActionVisualisation text={scenario.action} />
                        </MockUIContainer>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function MockUIContainer({ label, children }: { label: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-3 group">
            <span className="text-[10px] tracking-widest uppercase text-white/30 pl-1">{label}</span>
            <div className="relative bg-[#1F1F2E] rounded-xl border border-white/5 p-4 overflow-hidden group-hover:border-white/10 transition-colors shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/5 to-transparent" />
                {children}
            </div>
        </div>
    );
}

function InputVisualisation({ title, text }: { title: string, text: string }) {
    if (title.toLowerCase().includes("link")) {
        return (
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="h-2 w-16 bg-white/20 rounded mb-2" />
                    <p className="text-white/60 text-xs truncate">{text}</p>
                </div>
            </div>
        )
    }
    if (title.toLowerCase().includes("voice")) {
        return (
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
                    <Mic className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex-1">
                    <div className="flex gap-1 items-center h-4">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="w-1 bg-white/40 rounded-full" style={{ height: Math.random() * 16 + 4 }} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
    // Screenshot
    return (
        <div className="relative h-16 bg-white/5 rounded-lg overflow-hidden border border-white/5 flex flex-col p-2 gap-2">
            <div className="h-2 w-10 bg-white/20 rounded-sm" />
            <div className="h-full w-full bg-white/5 rounded-sm" />
            <p className="absolute bottom-2 right-2 text-[10px] text-white/40 bg-black/50 px-1 rounded">IMG</p>
        </div>
    )
}

function ActionVisualisation({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-green-500/30 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-white text-sm font-medium">{text}</p>
        </div>
    )
}



function SparkPathWrapper() {
    return (
        <div className="hidden md:flex w-8 items-center justify-center">
            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-spark-orange to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                />
            </div>
        </div>
    )
}
