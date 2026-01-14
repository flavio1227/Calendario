interface Aviso {
  id: number;
  texto: string;
}

const avisos: Aviso[] = [
  {
    id: 1,
    texto: 'Durante enero se desarrollarán actividades institucionales relevantes.'
  },
  {
    id: 2,
    texto: 'El 27 de febrero se llevará a cabo un evento especial.'
  }
];

export default function AvisosSection() {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();

  const isJanuary = currentMonth === 0;
  const isFeb27 = currentMonth === 1 && currentDay === 27;

  let title = 'Avisos y Noticias';
  if (isJanuary) {
    title = 'Presentación de la Declaración Anual Consolidada';
  } else if (isFeb27) {
    title = 'Presentación de Informes Anual';
  }

  return (
    <div className="w-full max-w-2xl mt-12">
      <h3 className="text-xl font-light text-black mb-6 tracking-wide">
        {title}
      </h3>

      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4 max-h-48 overflow-y-auto">
        {avisos.map(aviso => (
          <div
            key={aviso.id}
            className="text-gray-700 text-sm leading-relaxed"
          >
            {aviso.texto}
          </div>
        ))}
      </div>
    </div>
  );
}
