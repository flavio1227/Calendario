# Calendario de Avisos Importantes

Aplicación web para visualizar fechas importantes y avisos relacionados con declaraciones anuales consolidadas e informes.

## Características

- Calendario interactivo con fechas importantes destacadas
- Sistema de avisos con información detallada
- Diseño responsivo y moderno
- Interfaz intuitiva con navegación fluida

## Tecnologías

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (iconos)
- Supabase (backend)

## Instalación

1. Clonar el repositorio:
```bash
git clone <tu-repositorio>
cd <nombre-del-proyecto>
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` en la raíz del proyecto con:
```
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

4. Ejecutar en desarrollo:
```bash
npm run dev
```

5. Construir para producción:
```bash
npm run build
```

## Estructura del Proyecto

```
src/
  ├── components/
  │   ├── Calendar.tsx       # Componente del calendario
  │   └── AvisosSection.tsx  # Sección de avisos
  ├── App.tsx                # Componente principal
  └── main.tsx               # Punto de entrada
```

## Fechas Importantes

- **Enero (todo el mes)**: Presentación de la Declaración Anual Consolidada
- **27 de Febrero**: Presentación de Informes Anual

## Licencia

MIT
