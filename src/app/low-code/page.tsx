import { Button } from '@/components/ui/button';
import { Puzzle, Server, Workflow, Zap } from 'lucide-react';

export default function Page() {
    const features = [
        {
            name: 'Drag-and-Drop Interface',
            icon: Puzzle,
            description: 'Easily create integrations with our intuitive drag-and-drop interface.',
        },
        {
            name: 'Pre-built Connectors',
            icon: Workflow,
            description: 'Access a wide range of pre-built connectors for popular services and APIs.',
        },
        {
            name: 'Real-time Data Sync',
            icon: Zap,
            description: 'Ensure your data is always up-to-date with real-time synchronization.',
        },
        {
            name: 'Custom API Integration',
            icon: Server,
            description: 'Integrate with any API using our flexible custom integration tools.',
        },
    ];

    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold pb-2 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                Low Code Integrations
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                Empowering businesses with seamless, efficient, and customizable integration solutions.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button>View Demo</Button>
                            <Button variant="outline">Explore Features</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Project Overview</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Our Low Code Integrations platform revolutionizes the way businesses connect their
                                applications and data sources. By providing a user-friendly interface and powerful
                                backend capabilities, we enable teams to create robust integrations without extensive
                                coding knowledge.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <Zap className="mr-2 h-4 w-4 text-pink-600" />
                                    <span>Rapid integration development</span>
                                </li>
                                <li className="flex items-center">
                                    <Puzzle className="mr-2 h-4 w-4 text-pink-600" />
                                    <span>Intuitive visual interface</span>
                                </li>
                                <li className="flex items-center">
                                    <Server className="mr-2 h-4 w-4 text-pink-600" />
                                    <span>Scalable and secure</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden"></div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-8">
                        Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="p-3 bg-pink-100 dark:bg-pink-900 rounded-full">
                                        <feature.icon className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
                                    <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
