const TypingAnimation = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse"></div>
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse delay-75"></div>
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse delay-150"></div>
    </div>
  );
};

export default TypingAnimation;
