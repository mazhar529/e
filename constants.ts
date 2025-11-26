import { 
  BookOpen, FileText, PenTool, MessageCircle, Calendar, CreditCard, 
  CheckSquare, Edit3, Globe, Share2,  DivideSquare, Grid, 
  AlignLeft, Minimize2, Search, Youtube, Mic, Volume2, 
  Video, Image, Monitor, Code, Activity, TrendingUp, 
  Clock, Heart, Lightbulb, UserCheck, Layers, Users, Table, Type, HelpCircle, Compass
} from 'lucide-react';

export enum ToolCategory {
  STUDY = "AI Study Tools",
  ADVANCED = "Super Features",
  PRODUCTIVITY = "Productivity System",
  RESOURCE = "Resource Library",
  COMMUNITY = "Community & Social"
}

export interface ToolDef {
  id: string;
  name: string;
  description: string;
  icon: any;
  category: ToolCategory;
  path: string;
  color: string;
}

export const TOOLS: ToolDef[] = [
  // A. STUDY TOOLS
  { id: 'notes', name: 'AI Notes Generator', description: 'Topic to clean notes instantly.', icon: FileText, category: ToolCategory.STUDY, path: '/tool/notes', color: '#22d3ee' }, // cyan-400
  { id: 'summary', name: 'AI Summary Maker', description: 'Summarize long texts.', icon: AlignLeft, category: ToolCategory.STUDY, path: '/tool/summary', color: '#34d399' }, // emerald-400
  { id: 'essay', name: 'AI Essay Writer', description: 'Generate structured essays.', icon: PenTool, category: ToolCategory.STUDY, path: '/tool/essay', color: '#c084fc' }, // purple-400
  { id: 'doubt', name: 'AI Doubt Solver', description: 'Chat with an expert AI.', icon: MessageCircle, category: ToolCategory.STUDY, path: '/tool/doubt', color: '#3b82f6' }, // blue-500
  { id: 'plan', name: 'AI Study Plan', description: 'Personalized schedules.', icon: Calendar, category: ToolCategory.STUDY, path: '/tool/plan', color: '#fb923c' }, // orange-400
  { id: 'flashcards', name: 'AI Flashcards', description: 'Create swipeable cards.', icon: CreditCard, category: ToolCategory.STUDY, path: '/tool/flashcards', color: '#ec4899' }, // pink-500
  { id: 'quiz', name: 'AI Quiz Generator', description: 'Test your knowledge.', icon: CheckSquare, category: ToolCategory.STUDY, path: '/tool/quiz', color: '#22c55e' }, // green-500
  { id: 'grammar', name: 'AI Grammar Fix', description: 'Perfect your writing.', icon: Edit3, category: ToolCategory.STUDY, path: '/tool/grammar', color: '#facc15' }, // yellow-400
  { id: 'translate', name: 'English ↔ Hinglish', description: 'Language bridge.', icon: Globe, category: ToolCategory.STUDY, path: '/tool/translate', color: '#818cf8' }, // indigo-400
  { id: 'mindmap', name: 'AI Mindmap', description: 'Visualize concepts.', icon: Share2, category: ToolCategory.STUDY, path: '/tool/mindmap', color: '#2dd4bf' }, // teal-400
  { id: 'formula', name: 'Formula Explainer', description: 'Understand math/physics.', icon: DivideSquare, category: ToolCategory.STUDY, path: '/tool/formula', color: '#f87171' }, // red-400
  { id: 'table', name: 'Table Generator', description: 'Structured data tables.', icon: Table, category: ToolCategory.STUDY, path: '/tool/table', color: '#60a5fa' }, // blue-400
  { id: 'paragraph', name: 'Paragraph Improver', description: 'Enhance writing flow.', icon: Type, category: ToolCategory.STUDY, path: '/tool/paragraph', color: '#f9a8d4' }, // pink-300
  { id: 'concept', name: 'Concept Simplifier', description: 'Explain like I\'m 5.', icon: Lightbulb, category: ToolCategory.STUDY, path: '/tool/concept', color: '#eab308' }, // yellow-500
  
  // B. ADVANCED
  { id: 'youtube', name: 'YouTube to Notes', description: 'Video to text summary.', icon: Youtube, category: ToolCategory.ADVANCED, path: '/tool/youtube', color: '#dc2626' }, // red-600
  { id: 'homework', name: 'Homework Checker', description: 'Upload image & solve.', icon: Image, category: ToolCategory.ADVANCED, path: '/tool/homework', color: '#f97316' }, // orange-500
  { id: 'code', name: 'Code Helper', description: 'Python, C++, HTML help.', icon: Code, category: ToolCategory.ADVANCED, path: '/tool/code', color: '#4ade80' }, // green-400
  { id: 'career', name: 'Career Advisor', description: 'Find your future path.', icon: TrendingUp, category: ToolCategory.ADVANCED, path: '/tool/career', color: '#fde047' }, // yellow-300
  { id: 'emotional', name: 'Support Assistant', description: 'Motivation & stress tips.', icon: Heart, category: ToolCategory.ADVANCED, path: '/tool/emotional', color: '#fb7185' }, // rose-400

  // C. PRODUCTIVITY
  { id: 'pomodoro', name: 'Pomodoro Timer', description: 'Focus timer.', icon: Clock, category: ToolCategory.PRODUCTIVITY, path: '/productivity', color: '#ffffff' }, // white
  { id: 'tracker', name: 'Productivity Score', description: 'Track your progress.', icon: Activity, category: ToolCategory.PRODUCTIVITY, path: '/productivity', color: '#00f3ff' }, // neon-blue
  
  // D. RESOURCES
  { id: 'library', name: 'Resource Library', description: 'NCERT, Formulas, GK.', icon: BookOpen, category: ToolCategory.RESOURCE, path: '/resources', color: '#fbbf24' }, // amber-400

  // E. COMMUNITY
  { id: 'chat', name: 'Study Group Chat', description: 'Collaborate with peers.', icon: Users, category: ToolCategory.COMMUNITY, path: '/tool/chat', color: '#f472b6' }, // pink-400
];

// Mock Data for Resources (View Only)
export const RESOURCES = [
  { title: "NCERT Solutions Class 10", type: "PDF", size: "2MB" },
  { title: "Physics Formula Sheet", type: "Image", size: "1.5MB" },
  { title: "Organic Chemistry Reactions", type: "PDF", size: "3MB" },
  { title: "English Grammar Rules", type: "Doc", size: "500KB" },
  { title: "Periodic Table of Elements", type: "Image", size: "2.1MB" },
  { title: "Top 50 GK Questions 2024", type: "PDF", size: "1MB" },
  { title: "Java Basics Cheatsheet", type: "Image", size: "2.2MB" },
  { title: "Calculus Fundamentals", type: "PDF", size: "4MB" },
];