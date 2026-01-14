import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface CalendarProps {
  importantDates: Set<string>;
}

const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const DAYS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

export default function Calendar({ importantDates }: CalendarProps) {
  const currentDate = new Date();
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days: (number | null)[] = [];

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const isImportantDate = (day: number | null) => {
    if (!day) return false;
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return importantDates.has(dateStr);
  };

  const isToday = (day: number | null) => {
    if (!day) return false;
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const handlePrevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth(currentMonth - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth(currentMonth + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    }
  };

  const handlePrevYear = () => {
    setCurrentYear(currentYear - 1);
  };

  const handleNextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="w-full max-w-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrevYear}
            className="hidden p-2 text-gray-500 hover:text-black transition-colors"
            aria-label="Año anterior"
          >
            <ChevronsLeft size={20} />
          </button>
          <button
            onClick={handlePrevMonth}
            className="p-2 text-gray-500 hover:text-black transition-colors"
            aria-label="Mes anterior"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        <h2 className="text-2xl font-light text-black tracking-wide">
          {MONTHS[currentMonth]} {currentYear}
        </h2>

        <div className="flex items-center gap-1">
          <button
            onClick={handleNextMonth}
            className="p-2 text-gray-500 hover:text-black transition-colors"
            aria-label="Mes siguiente"
          >
            <ChevronRight size={24} />
          </button>
          <button
            onClick={handleNextYear}
            className="hidden p-2 text-gray-500 hover:text-black transition-colors"
            aria-label="Año siguiente"
          >
            <ChevronsRight size={20} />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {DAYS.map(day => (
            <div key={day} className="text-center text-gray-500 text-sm font-medium py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day, index) => {
            const today = isToday(day);
            const important = isImportantDate(day);

            return (
              <div
                key={index}
                className={`
                  aspect-square flex items-center justify-center rounded-lg text-sm
                  ${day ? 'text-black' : 'text-transparent'}
                  ${today
                    ? 'today-date bg-black text-white font-semibold'
                    : important
                      ? 'important-date bg-gray-100 font-medium'
                      : 'hover:bg-gray-50 transition-colors'}
                `}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
