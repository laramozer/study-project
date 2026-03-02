function Highlights() {
  const cameras = [
    {
      value: "48MP",
      title: "Principal",
      description: "Sensor quad-pixel com foco automático",
      color: "text-blue-500",
    },
    {
      value: "12MP",
      title: "Ultra Wide",
      description: "Campo de visão de 120° com modo noturno",
      color: "text-orange-500",
    },
    {
      value: "12MP",
      title: "Telefoto 5x",
      description: "Zoom óptico de 5x com estabilização",
      color: "text-blue-500",
    },
  ];

  return (
    <section className="bg-black py-20 px-6" id="design">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Design Revolucionário</h2>
          <p className="text-xl text-gray-400">
            Cada detalhe foi pensado para criar a melhor experiência.
          </p>
        </div>

        <div className="grid-cols-2 grid gap-8 mb-16">
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              src="/titanium-design.jpg"
              className="w-full rounded-2xl mb-4"
            ></img>
            <h3 className=" font-bold mb-2 text-3xl">Titânio Premium</h3>
            <p className="text-gray-300">
              Estrutura em titânio de grau aeroespacial. O smartphone mais forte
              e leve.
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              src="/ios-features.jpg"
              className="w-full rounded-2xl mb-4"
            ></img>
            <h3 className=" font-bold mb-2 text-3xl">iOS 26</h3>
            <p className="text-gray-300">
              Sistema operacional mais avançado do mundo com IA integrado.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-12 mb-16" id="performance">
          <h3 className="text-4xl font-bold mb-6 text-gradient">A18</h3>
          <p className="mb-6">O chip mais poderoso em um Smartphone!</p>
          <img
            src="/chip-a18-pro.jpg"
            className="w-full rounded-2xl mb-4"
          ></img>

          <ul className="space-y-3 text-gray-300">
            <li>CPU 20% mais rápido</li>
            <li>GPU 25% mais eficiente</li>
            <li>Neural Engine com 16 núcleos</li>
            <li>Ray tracing acelerado por hardware</li>
          </ul>
        </div>

        <div className="flex gap-6 justify-center">
          {cameras.map((camera, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer text-center flex flex-col gap-2"
            >
              <p className={`text-3xl font-bold ${camera.color}`}>
                {camera.value}
              </p>
              <p className="text-white font-bold">{camera.title}</p>
              <p className="text-xs text-gray-300 mt-2">{camera.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
