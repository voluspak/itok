import { type FC, useEffect, useState } from 'react'

const MobileWarningModal: FC = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const checkViewport = (): void => {
      const isMobile = window.innerWidth < 768
      setShowModal(!isMobile)
    }

    checkViewport()
    window.addEventListener('resize', checkViewport)

    return () => {
      window.removeEventListener('resize', checkViewport)
    }
  }, [])

  if (!showModal) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-2xl max-w-2xl w-full p-8 border border-zinc-800 shadow-2xl">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-3xl font-bold text-white">📱 Vista Mobile Requerida</h2>
        </div>

        <p className="text-zinc-300 mb-6 text-lg text-center">
          Este clon de TikTok está optimizado para <span className="text-cyan-400 font-semibold">formato mobile</span>.
          <br />
          Para continuar, abre las DevTools y activa el modo responsive.
        </p>

        <div className="space-y-6">
          <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              Abre las DevTools
            </h3>
            <div className="space-y-3 ml-10">
              <div className="flex items-center gap-3">
                <kbd className="px-3 py-1 bg-zinc-700 rounded text-sm font-mono text-cyan-400 border border-zinc-600">
                  Ctrl + Shift + I
                </kbd>
                <span className="text-zinc-400">Windows/Linux</span>
              </div>
              <div className="flex items-center gap-3">
                <kbd className="px-3 py-1 bg-zinc-700 rounded text-sm font-mono text-cyan-400 border border-zinc-600">
                  Cmd + Option + I
                </kbd>
                <span className="text-zinc-400">macOS</span>
              </div>
              <div className="flex items-center gap-3">
                <kbd className="px-3 py-1 bg-zinc-700 rounded text-sm font-mono text-cyan-400 border border-zinc-600">
                  F12
                </kbd>
                <span className="text-zinc-400">Cualquier navegador</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              Activa el Modo Responsive
            </h3>
            <div className="space-y-3 ml-10">
              <div className="flex items-center gap-3">
                <kbd className="px-3 py-1 bg-zinc-700 rounded text-sm font-mono text-cyan-400 border border-zinc-600">
                  Ctrl + Shift + M
                </kbd>
                <span className="text-zinc-400">Windows/Linux</span>
              </div>
              <div className="flex items-center gap-3">
                <kbd className="px-3 py-1 bg-zinc-700 rounded text-sm font-mono text-cyan-400 border border-zinc-600">
                  Cmd + Shift + M
                </kbd>
                <span className="text-zinc-400">macOS</span>
              </div>
              <p className="text-zinc-400 text-sm mt-3">
                O haz clic en el icono 📱 en la barra de DevTools
              </p>
            </div>
          </div>

          <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
              Selecciona un dispositivo
            </h3>
            <div className="ml-10 space-y-2">
              <p className="text-zinc-300">Elige cualquiera de estos dispositivos:</p>
              <ul className="space-y-1 text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  iPhone 14 Pro Max (430 x 932)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  iPhone 12 Pro (390 x 844)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Cualquier móvil con ancho &lt; 768px
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-cyan-950 border border-cyan-800 rounded-lg p-4">
          <p className="text-cyan-300 text-sm text-center">
            ℹ️ Este modal se cerrará automáticamente cuando cambies a vista mobile (&lt; 768px)
          </p>
        </div>
      </div>
    </div>
  )
}

export default MobileWarningModal
