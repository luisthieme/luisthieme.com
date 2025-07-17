'use client';

import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    ExternalLink,
    Code,
    Palette,
    Database,
    Globe,
    Smartphone,
    Zap,
    TrendingUp,
    Workflow,
    Instagram,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function Portfolio() {
    const projects = [
        {
            title: 'BPMN Workflow Engine',
            description:
                'A BPMN 2.0-based workflow engine written in Golang, designed to automate, monitor, and optimize business processes.',
            tech: ['Next.js', 'Golang', 'BPMN 2.0', 'SQLite'],
            image: '',
            github: 'https://github.com/luisthieme/GoMotion',
            live: '#',
        },
        {
            title: 'URL Shortener',
            description: 'Work In Progress.',
            tech: ['Node.js', 'Next.js', 'PostgreSQl'],
            image: '/shortlink.png',
            github: 'https://github.com/luisthieme/short-link',
            live: 'https://link.luisthieme.com',
        },
        {
            title: '███████ ███',
            description: 'Work In Progress.',
            tech: ['Expo', 'React Native', 'Websockets'],
            image: '',
            github: '#',
            live: '#',
        },
    ];

    const skills = [
        { name: 'Frontend Development', icon: Code, color: 'bg-blue-500', rating: 80 },
        { name: 'Mobile Development', icon: Smartphone, color: 'bg-pink-500', rating: 60 },
        { name: 'Web Development', icon: Globe, color: 'bg-orange-500', rating: 85 },
        { name: 'Database Management', icon: Database, color: 'bg-green-500', rating: 50 },
        { name: 'UI/UX Design', icon: Palette, color: 'bg-purple-500', rating: 20 },
        { name: 'Performance Optimization', icon: Zap, color: 'bg-yellow-500', rating: 70 },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Hero Section with Glassy Effects */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
                </div>

                {/* Glassy Card */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 md:py-12 md:px-20 shadow-2xl">
                        <div className="space-y-6">
                            <div className="relative">
                                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                                        <span className="text-4xl font-bold text-white">LT</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-6xl font-bold text-white">Luis Thieme</h1>
                                <p className="text-xl md:text-2xl text-purple-200">
                                    Full Stack Developer based in Germany
                                </p>
                                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                    Passionate about coding, investing, and entrepreneurial growth.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                                <Button
                                    size="lg"
                                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                                >
                                    View My Work
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    disabled={true}
                                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                                >
                                    Download CV
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute top-20 left-10 w-16 h-16 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 animate-float flex items-center justify-center">
                    <Code className="w-8 h-8 text-purple-300" />
                </div>
                <div className="absolute top-32 right-16 w-14 h-14 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 animate-float delay-1000 flex items-center justify-center">
                    <Database className="w-7 h-7 text-blue-300" />
                </div>
                <div className="absolute bottom-32 left-16 w-16 h-16 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 animate-float delay-2000 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-green-300" />
                </div>
                <div className="absolute top-1/2 right-8 w-12 h-12 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 animate-float delay-3000 flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-pink-300" />
                </div>
                <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 animate-float delay-4000 flex items-center justify-center">
                    <Workflow className="w-8 h-8 text-yellow-300" />
                </div>
                <div className="absolute top-1/3 left-1/4 w-14 h-14 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 animate-float delay-5000 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-emerald-300" />
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                            >
                                <CardContent className="p-6 flex flex-col h-full">
                                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 overflow-hidden">
                                        {project.image && (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 mt-auto">
                                        <Link href={project.github} className="flex-1">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="border-white/30 text-white hover:bg-white/10 w-full bg-transparent"
                                            >
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                            </Button>
                                        </Link>
                                        <Link href={project.live} className="flex-1">
                                            <Button
                                                size="sm"
                                                className="bg-white/20 hover:bg-white/30 text-white w-full"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 px-6 bg-black/20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group"
                            >
                                <div
                                    className={`w-12 h-12 ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <skill.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                                <div className="w-full bg-white/10 rounded-full h-2">
                                    <div
                                        className={`${
                                            skill.color
                                        } h-2 rounded-full transition-all duration-1000 delay-${index * 100}`}
                                        style={{ width: `${skill.rating}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Get In Touch</h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            I'm always interested in new opportunities and exciting projects. The best way to reach me
                            is via email.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Link href="mailto:luisthieme@icloud.com">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    Contact Me via Email
                                </Button>
                            </Link>
                        </div>

                        <div className="flex justify-center gap-6">
                            <Link
                                href="https://github.com/luisthieme"
                                className="w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                            >
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/luis-thieme-206119287/"
                                className="w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/luis.txh"
                                className="w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                            >
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>

                        <p className="text-gray-400 mt-6">luisthieme@icloud.com</p>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
