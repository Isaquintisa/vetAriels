import { ClientsProvider } from './context/ClientsContext'
import { Routes, Route } from 'react-router-dom'
import { DashBoard } from './Pages/DashBoard.jsx'
import { Sales } from './Pages/Sales.jsx'
import { ActiveOrders } from './Pages/ActiveOrders.jsx'
import { Invoices } from './Pages/Invoices.jsx'
import { Payments } from './Pages/Payments.jsx'
import { ClinicQueue } from './Pages/ClinicQueue.jsx'
import { Internments } from './Pages/Internments.jsx'
import { ActiveOrdersGrooming } from './Pages/ActiveOrdersGrooming.jsx'
import { GroomingHistory } from './Pages/GroomingHistory.jsx'
import { Clients } from './Pages/Clients.jsx'
import { CreateClientForm } from './Pages/CreateClientForm.jsx'
import { UserProfile } from './Pages/UserProfile.jsx'
import { PetsData } from './Pages/PetsData.jsx'
import { Products } from './Pages/Products.jsx'
import { Discharges } from './Pages/Discharges.jsx'
import { Charges } from './Pages/Charges.jsx'
import { Services } from './Pages/Services.jsx'
import { Footer } from './components/Footer.jsx'
import { Layout } from './components/Layout.jsx'

function App() {

  return (
    <>
      <ClientsProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/sales/active-orders" element={<ActiveOrders />} />
            <Route path="/sales/invoices" element={<Invoices />} />
            <Route path="/sales/payments" element={<Payments />} />
            <Route path="/clinic-queue" element={<ClinicQueue />} />
            <Route path="/internments" element={<Internments />} />
            <Route path="/grooming" element={<ActiveOrdersGrooming />} />
            <Route path="/grooming/history" element={<GroomingHistory />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/clients/create" element={<CreateClientForm />} />
            <Route path="/clients/client/:id" element={<UserProfile />} />
            <Route path="/pets" element={<PetsData />} />
            <Route path="/products" element={<Products />} />
            <Route path="/discharges" element={<Discharges />} />
            <Route path="/charges" element={<Charges />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
          </Routes>
          <Footer />
        </Layout>
      </ClientsProvider>

    </>
  )
}

export default App