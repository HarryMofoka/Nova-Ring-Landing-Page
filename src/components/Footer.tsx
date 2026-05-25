export default function Footer() {
  return (
    <footer className="w-full relative z-10 glass-panel py-12 px-6 mt-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-light tracking-[0.3em] text-white">NOVA</div>
        
        <div className="flex gap-12 text-xs font-mono text-silver tracking-widest uppercase">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        
        <div className="text-xs font-mono text-white/30">
          © 2026 NOVA INC. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
