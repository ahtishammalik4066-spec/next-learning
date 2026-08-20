function BackgroundBubbles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="background-bubble bubble-1" />
      <div className="background-bubble bubble-2" />
      <div className="background-bubble bubble-3" />
      <div className="background-bubble bubble-4" />
      <div className="background-bubble bubble-5" />
      <div className="background-bubble bubble-6" />
    </div>
  );
}

export default BackgroundBubbles;