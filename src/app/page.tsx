import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Code, Globe, Server } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioLandingPage() {
    const skills = [
        { name: 'React', rating: 5 },
        { name: 'Next.js', rating: 4 },
        { name: 'TypeScript', rating: 4 },
        { name: 'Node.js', rating: 3 },
        { name: 'Tailwind CSS', rating: 5 },
        { name: 'GraphQL', rating: 3 },
        { name: 'Python', rating: 4 },
        { name: 'Docker', rating: 3 },
    ];

    const projects = [
        { name: 'Web App', icon: Globe },
        { name: 'API Service', icon: Server },
        { name: 'Mobile App', icon: Code },
    ];

    const getSkillLevel = (rating: number) => {
        if (rating === 5) return 'Expert';
        if (rating === 4) return 'Advanced';
        if (rating === 3) return 'Intermediate';
        if (rating === 2) return 'Basic';
        return 'Beginner';
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <span className="sr-only">Luis Thieme</span>
                    <span className="font-bold text-xl">Luis Thieme</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
                        Projects
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
                        Skills
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <div className="relative w-full h-full max-w-[250px] max-h-[375px]">
                            <Image
                                src="/jumping_luis.png"
                                alt="Luis jumping enthusiastically"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    <div className="container relative px-4 md:px-6 z-10 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl xl:text-8xl/none bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent pb-2">
                                    Hey, I'm Luis
                                </h1>
                                <p className="max-w-[600px] text-gray-800 font-medium md:text-xl dark:text-gray-200 bg-white/70 dark:bg-gray-800/70 p-2 rounded-lg backdrop-blur-sm">
                                    I'm a backend-focused full-stack developer based in Germany.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="#contact">
                                    <Button>Get in Touch</Button>
                                </Link>
                                <Link href="#projects">
                                    <Button variant="outline">View Projects</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                            My Projects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project, index) => (
                                <div key={index} className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <div className="relative px-4 py-6 bg-white dark:bg-gray-800 ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-center justify-center space-y-4">
                                        <project.icon className="w-12 h-12 text-primary" />
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                                            {project.name}
                                        </h3>
                                        <Button variant="outline" size="sm">
                                            View Project
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6 mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">My Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {skills.map((skill) => (
                                <div key={skill.name} className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <div className="relative px-4 py-6 bg-white dark:bg-gray-800 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                                        <div className="space-y-2 w-full">
                                            <div className="flex justify-between items-center">
                                                <p className="text-slate-800 dark:text-white font-medium text-lg">
                                                    {skill.name}
                                                </p>
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    {getSkillLevel(skill.rating)}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mr-2">
                                                    <div
                                                        className="bg-primary h-2.5 rounded-full"
                                                        style={{ width: `${(skill.rating / 5) * 100}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                                                    {skill.rating}/5
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
                            Get in Touch
                        </h2>
                        <div className="max-w-2xl mx-auto">
                            <form className="space-y-4">
                                <Input placeholder="Your Name" />
                                <Input type="email" placeholder="Your Email" />
                                <Textarea placeholder="Your Message" />
                                <Button type="submit" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Luis Thieme. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        <span className="sr-only">GitHub</span>
                        <Github className="h-4 w-4" />
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-4 w-4" />
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        <span className="sr-only">Email</span>
                        <Mail className="h-4 w-4" />
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
