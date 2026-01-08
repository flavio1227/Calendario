import { ArrowLeft } from 'lucide-react';
import Calendar from './components/Calendar';
import AvisosSection from './components/AvisosSection';

function App() {
  // Important dates: all days in January + February 27 for any year
  const generateImportantDates = () => {
    const dates = new Set<string>();
    const currentYear = new Date().getFullYear();

    // Generate for current year and next 5 years
    for (let year = currentYear; year <= currentYear + 10; year++) {
      // Add all days in January
      for (let day = 1; day <= 31; day++) {
        dates.add(`${year}-01-${String(day).padStart(2, '0')}`);
      }
      // Add February 27
      dates.add(`${year}-02-27`);
    }

    return dates;
  };

  const importantDates = generateImportantDates();

  // Determine main title based on date
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();

  const isJanuary = currentMonth === 0;
  const isFeb27 = currentMonth === 1 && currentDay === 27;

  let mainTitle = 'Avisos Importantes';
  if (isJanuary) {
    mainTitle = 'Presentación de la Declaración Anual Consolidada';
  } else if (isFeb27) {
    mainTitle = 'Presentación de Informes Anual';
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="w-full max-w-6xl mb-12">
        <h1 className="text-4xl font-light text-white tracking-wide text-center">
          {mainTitle}
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
        {/* Calendar */}
        <div className="flex justify-center lg:justify-end">
          <Calendar importantDates={importantDates} />
        </div>

        {/* Avisos Section */}
        <div className="flex justify-center lg:justify-start">
          <AvisosSection />
        </div>
      </div>

      {/* Regresar Button */}
      <a 
        href="https://flavio1227.github.io/SIGEM1.1/" 
        className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-lg border border-white/10 text-white/70 hover:text-white transition-all no-underline"
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Regresar</span>
      </a>
    </div>
  );
}

export default App;
