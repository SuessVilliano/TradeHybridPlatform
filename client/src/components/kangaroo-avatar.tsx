export function KangarooAvatar({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle cx="50" cy="50" r="48" fill="url(#kangarooGradient)" stroke="#4f46e5" strokeWidth="2"/>
      
      {/* Kangaroo body */}
      <ellipse cx="50" cy="65" rx="18" ry="22" fill="#8B4513"/>
      
      {/* Kangaroo head */}
      <circle cx="50" cy="40" r="16" fill="#CD853F"/>
      
      {/* Ears */}
      <ellipse cx="42" cy="28" rx="4" ry="8" fill="#CD853F" transform="rotate(-20 42 28)"/>
      <ellipse cx="58" cy="28" rx="4" ry="8" fill="#CD853F" transform="rotate(20 58 28)"/>
      <ellipse cx="42" cy="28" rx="2" ry="5" fill="#DEB887" transform="rotate(-20 42 28)"/>
      <ellipse cx="58" cy="28" rx="2" ry="5" fill="#DEB887" transform="rotate(20 58 28)"/>
      
      {/* Eyes */}
      <circle cx="45" cy="37" r="3" fill="#000"/>
      <circle cx="55" cy="37" r="3" fill="#000"/>
      <circle cx="46" cy="36" r="1" fill="#fff"/>
      <circle cx="56" cy="36" r="1" fill="#fff"/>
      
      {/* Nose */}
      <ellipse cx="50" cy="42" rx="2" ry="1.5" fill="#000"/>
      
      {/* Mouth */}
      <path d="M48 45 Q50 47 52 45" stroke="#000" strokeWidth="1.5" fill="none"/>
      
      {/* Arms */}
      <ellipse cx="35" cy="55" rx="5" ry="12" fill="#CD853F"/>
      <ellipse cx="65" cy="55" rx="5" ry="12" fill="#CD853F"/>
      
      {/* Tail */}
      <ellipse cx="28" cy="70" rx="8" ry="4" fill="#8B4513" transform="rotate(-30 28 70)"/>
      
      {/* AI cyber elements */}
      <circle cx="70" cy="25" r="3" fill="#00ffff" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="30" cy="25" r="2" fill="#ff00ff" opacity="0.8">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="kangarooGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea"/>
          <stop offset="100%" stopColor="#764ba2"/>
        </linearGradient>
      </defs>
    </svg>
  );
}