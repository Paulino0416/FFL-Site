import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Layout({ children, currentPageName }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
            <style>{`
                :root {
                    --background: 222.2 84% 4.9%;
                    --foreground: 210 40% 98%;
                    --primary: 262.1 83.3% 57.8%;
                    --primary-foreground: 210 40% 98%;
                }
                
                * {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(139, 92, 246, 0.5) rgba(15, 23, 42, 0.5);
                }
                
                *::-webkit-scrollbar {
                    width: 8px;
                }
                
                *::-webkit-scrollbar-track {
                    background: rgba(15, 23, 42, 0.5);
                }
                
                *::-webkit-scrollbar-thumb {
                    background: rgba(139, 92, 246, 0.5);
                    border-radius: 4px;
                }
                
                *::-webkit-scrollbar-thumb:hover {
                    background: rgba(139, 92, 246, 0.7);
                }
            `}</style>

            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-purple-500/20' : 'bg-transparent'
            }`}>
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
                            <div className="relative">
                                <Trophy className="w-10 h-10 text-purple-500 group-hover:text-purple-400 transition-colors" />
                                <div className="absolute inset-0 blur-xl bg-purple-500/30 group-hover:bg-purple-400/40 transition-all" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-white tracking-tight">FFL</span>
                                <span className="text-xs text-purple-400 -mt-1">Fast Fight League</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6">
                            <Link 
                                to={createPageUrl('Home')} 
                                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                            >
                                Início
                            </Link>
                            <a 
                                href="#funcionalidades" 
                                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                            >
                                Funcionalidades
                            </a>
                            <a 
                                href="#comandos" 
                                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                            >
                                Comandos
                            </a>
                            <a 
                                href="#comunidade" 
                                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                            >
                                Comunidade
                            </a>
                            <Button 
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold"
                            >
                                Adicionar Bot
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white p-2"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-purple-500/20">
                            <div className="flex flex-col gap-4">
                                <Link 
                                    to={createPageUrl('Home')} 
                                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Início
                                </Link>
                                <a 
                                    href="#funcionalidades" 
                                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Funcionalidades
                                </a>
                                <a 
                                    href="#comandos" 
                                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Comandos
                                </a>
                                <a 
                                    href="#comunidade" 
                                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Comunidade
                                </a>
                                <Button 
                                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold w-full"
                                >
                                    Adicionar Bot
                                </Button>
                            </div>
                        </div>
                    )}
                </nav>
            </header>

            {/* Main Content */}
            <main className="pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-slate-950/50 border-t border-purple-500/20 mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Trophy className="w-8 h-8 text-purple-500" />
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-white">FFL</span>
                                    <span className="text-xs text-purple-400">Fast Fight League</span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm">
                                O melhor bot de coleção de cartas de jogadores profissionais de League of Legends no Discord.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
                            <div className="flex flex-col gap-2">
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                    Adicionar Bot
                                </a>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                    Servidor de Suporte
                                </a>
                                <a href="#comandos" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                    Lista de Comandos
                                </a>
                            </div>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Legal</h3>
                            <div className="flex flex-col gap-2">
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                    Termos de Uso
                                </a>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                    Política de Privacidade
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} FFL - Fast Fight League. Todos os direitos reservados.
                        </p>
                        <p className="text-gray-600 text-xs text-center md:text-right">
                            FFL não é afiliado com Riot Games ou League of Legends.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}