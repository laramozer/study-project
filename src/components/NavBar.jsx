function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
        <a className="hover:text-gray-300 cursor-pointer">Design</a>
        <a className="hover:text-gray-300 cursor-pointer">Câmera</a>
        <a className="hover:text-gray-300 cursor-pointer">Performance</a>
        <a className="hover:text-gray-300 cursor-pointer">Cores</a>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full cursor-pointer">
          Comprar
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
