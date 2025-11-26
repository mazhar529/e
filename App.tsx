import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Productivity from './pages/Productivity';
import { RESOURCES, TOOLS } from './constants';
import GenericTool from './components/tools/GenericTool';
import { 
    FlashCardMaker, QuizArena, YouTubeConverter, NotesGenerator, 
    MindMapGenerator, HomeworkScanner, StudyGroupChat,
    StudyPlanGenerator, TranslatorTool
} from './components/tools/SpecializedTools';
import { FileText, LogOut, ArrowRight, Eye, Lock } from 'lucide-react';

function App() {
  const [currentPath, setCurrentPath] = useState('home');

  const navigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Router Logic
  let content;

  if (currentPath === 'home') {
    content = <Home onStart={() => navigate('dashboard')} />;
  } else if (currentPath === 'dashboard') {
    content = <Dashboard onNavigate={navigate} />;
  } else if (currentPath === 'productivity') {
    content = <Productivity />;
  } else if (currentPath === 'profile') {
      content = (
          <div className="max-w-2xl mx-auto space-y-8 animate-fade-in-up">
              <div className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center border border-white/10">
                  <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-neon-blue to-neon-purple mb-4">
                      <img src="https://picsum.photos/200" className="w-full h-full rounded-full border-4 border-[#050510]" alt="User" />
                  </div>
                  <h1 className="text-3xl font-bold text-white">Student User</h1>
                  <p className="text-gray-400">Class 12 • Science Stream</p>
                  <div className="flex gap-4 mt-6">
                      <button className="px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors">Edit Profile</button>
                      <button className="px-6 py-2 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500/30 flex items-center gap-2 transition-colors"><LogOut size={16}/> Logout</button>
                  </div>
              </div>
          </div>
      );
  } else if (currentPath === 'settings') {
      content = (
          <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl font-bold mb-8 text-white">Settings</h1>
              <div className="glass-panel rounded-2xl divide-y divide-white/10 border border-white/10">
                  {['Account Settings', 'Notification Preferences', 'Privacy & Security', 'Language (English)', 'Theme (Dark Neon)'].map((item, i) => (
                      <div key={i} className="p-6 flex justify-between items-center cursor-pointer hover:bg-white/5 transition text-gray-200">
                          <span>{item}</span>
                          <span className="text-gray-500">&rarr;</span>
                      </div>
                  ))}
              </div>
          </div>
      );
  } else if (currentPath === 'resources') {
    content = (
      <div className="space-y-6 animate-in fade-in">
        <h1 className="text-3xl font-display font-bold text-amber-400">Resource Library</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((res, i) => (
            <div key={i} className="glass-panel p-6 rounded-xl hover:bg-white/5 transition flex items-center justify-between group border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-amber-500/20 text-amber-500 flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">{res.title}</h4>
                  <span className="text-xs text-gray-500">{res.type} • {res.size}</span>
                </div>
              </div>
              <button 
                onClick={() => alert(`Opening secure viewer for: ${res.title}`)}
                className="p-2 rounded-full bg-white/5 hover:bg-amber-500 hover:text-black transition-colors"
                title="View Resource (Read Only)"
              >
                <Eye size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (currentPath.startsWith('/tool/')) {
    // Tool Routing Logic
    const toolId = currentPath.split('/')[2];
    const toolDef = TOOLS.find(t => t.id === toolId);
    
    if (!toolDef) {
        content = <div className="text-center mt-20 text-gray-400">Tool not found</div>;
    } else {
        // Render specific complex tools or generic wrapper
        switch (toolId) {
            case 'notes':
                content = <NotesGenerator />;
                break;
            case 'youtube':
                content = <YouTubeConverter />;
                break;
            case 'flashcards':
                content = <FlashCardMaker />;
                break;
            case 'quiz':
                content = <QuizArena />;
                break;
            case 'mindmap':
                content = <MindMapGenerator />;
                break;
            case 'homework':
                content = <HomeworkScanner />;
                break;
            case 'chat':
                content = <StudyGroupChat />;
                break;
            case 'plan':
                content = <StudyPlanGenerator />;
                break;
            case 'translate':
                content = <TranslatorTool />;
                break;
            case 'summary':
            case 'essay':
            case 'paragraph':
                content = <GenericTool id={toolId} name={toolDef.name} description={toolDef.description} theme="paper" placeholder="Paste your topic or text here..." />;
                break;
            case 'doubt':
            case 'emotional':
            case 'career':
            case 'concept':
                content = <GenericTool id={toolId} name={toolDef.name} description={toolDef.description} theme="chat" placeholder="Type your question..." />;
                break;
            case 'code':
            case 'table':
                content = <GenericTool id={toolId} name={toolDef.name} description={toolDef.description} theme="matrix" placeholder="// Paste code or ask for snippets..." />;
                break;
            case 'formula':
            case 'grammar':
                content = <GenericTool id={toolId} name={toolDef.name} description={toolDef.description} theme="minimal" placeholder="Enter text..." />;
                break;
            default:
                content = <GenericTool id={toolId} name={toolDef.name} description={toolDef.description} theme="cyber" />;
                break;
        }
    }
  } else {
      content = <div className="text-center mt-20 text-gray-400">Page Not Found</div>;
  }

  // Determine active nav item for sidebar highlight
  const activeNav = currentPath.startsWith('/tool/') ? 'dashboard' : currentPath;

  return (
    <Layout activePage={activeNav} onNavigate={navigate}>
        {/* Top bar back button logic if inside a tool */}
        {currentPath.startsWith('/tool/') && (
            <div className="mb-6">
                <button 
                    onClick={() => navigate('dashboard')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                        <ArrowRight className="rotate-180" size={20} /> 
                    </div>
                    <span className="text-sm font-medium tracking-wide">Back to Dashboard</span>
                </button>
            </div>
        )}
      {content}
    </Layout>
  );
}

export default App;