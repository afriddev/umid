function AppSpinner() {
  return (
    <div className="w-screen h-screen fixed z-[9999] inset-0 bg-black flex items-center justify-center backdrop-blur-md">
      <div>
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default AppSpinner;
