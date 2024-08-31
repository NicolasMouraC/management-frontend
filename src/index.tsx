import { createRoot } from 'react-dom/client'
import { ClientsProvider } from './context/clients/ClientsProvider'
import { BillingsProvider } from './context/billings/BillingsProvider'
import AppRoutes from './routes/index'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ClientsProvider>
    <BillingsProvider>
      <AppRoutes />
    </BillingsProvider>
  </ClientsProvider>
)
